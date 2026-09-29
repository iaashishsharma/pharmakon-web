import { createHmac, timingSafeEqual } from "node:crypto";

const sessionCookie = "pharmakon_admin";
const sessionDuration = 8 * 60 * 60 * 1000;

function signingKey() {
    return process.env.ADMIN_SESSION_SECRET || "";
}

function sign(value) {
    return createHmac("sha256", signingKey()).update(value).digest("base64url");
}

export function createSessionToken() {
    const expiresAt = Date.now() + sessionDuration;
    const payload = String(expiresAt);
    return { token: `${payload}.${sign(payload)}`, expiresAt };
}

export function verifySessionToken(token) {
    if (!signingKey() || typeof token !== "string") return false;
    const [expiresAt, signature, ...extra] = token.split(".");
    if (!expiresAt || !signature || extra.length || Number(expiresAt) < Date.now()) return false;
    const expected = Buffer.from(sign(expiresAt));
    const supplied = Buffer.from(signature);
    return expected.length === supplied.length && timingSafeEqual(expected, supplied);
}

export function isAdminRequest(req) {
    const cookieHeader = req.headers.cookie || "";
    const token = cookieHeader.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${sessionCookie}=`))?.slice(sessionCookie.length + 1);
    return verifySessionToken(token ? decodeURIComponent(token) : "");
}

export function requireAdmin(req, res, next) {
    if (!isAdminRequest(req)) return res.status(401).json({ message: "Please sign in to manage site content." });
    next();
}

export function setSessionCookie(res, token, expiresAt) {
    const maxAge = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
    const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
    res.setHeader("Set-Cookie", `${sessionCookie}=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${maxAge}${secure}`);
}

export function clearSessionCookie(res) {
    const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
    res.setHeader("Set-Cookie", `${sessionCookie}=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0${secure}`);
}

export function safeEqual(left, right) {
    const leftBuffer = Buffer.from(String(left || ""));
    const rightBuffer = Buffer.from(String(right || ""));
    return leftBuffer.length > 0 && leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}
