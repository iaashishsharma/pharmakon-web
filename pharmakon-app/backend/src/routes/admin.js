import { Router } from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import { createSessionToken, clearSessionCookie, isAdminRequest, setSessionCookie } from "../middleware/admin-auth.js";

const router = Router();
const loginAttempts = new Map();
const attemptLimit = 8;
const attemptWindow = 15 * 60 * 1000;

router.get("/session", (req, res) => {
    res.json({ authenticated: isAdminRequest(req) });
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body || {};
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const address = req.ip || "unknown";
        const previous = loginAttempts.get(address);
        if (previous && previous.expiresAt > Date.now() && previous.count >= attemptLimit) {
            return res.status(429).json({ message: "Too many sign-in attempts. Wait 15 minutes and try again." });
        }

        const cleanUsername = String(username).toLowerCase().trim();
        const adminUser = await Admin.findOne({ username: cleanUsername });

        let isMatch = false;
        if (adminUser && adminUser.passwordHash) {
            isMatch = await bcrypt.compare(String(password), adminUser.passwordHash);
        }

        if (!isMatch) {
            const count = previous && previous.expiresAt > Date.now() ? previous.count + 1 : 1;
            loginAttempts.set(address, { count, expiresAt: Date.now() + attemptWindow });
            return res.status(401).json({ message: "Username or password is incorrect." });
        }

        loginAttempts.delete(address);
        const session = createSessionToken();
        setSessionCookie(res, session.token, session.expiresAt);
        return res.json({ authenticated: true });
    } catch (error) {
        console.error("Admin login error:", error);
        return res.status(500).json({ message: "An error occurred during authentication." });
    }
});

router.post("/logout", (_req, res) => {
    clearSessionCookie(res);
    res.json({ authenticated: false });
});

export default router;