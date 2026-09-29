import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

export async function ensureDefaultAdmin() {
  try {
    const count = await Admin.countDocuments();
    if (count === 0) {
      const defaultUsername = (process.env.ADMIN_USERNAME || "admin").toLowerCase().trim();
      const defaultPassword = process.env.ADMIN_PASSWORD || "pharmakon@2026";
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);

      await Admin.create({
        username: defaultUsername,
        passwordHash: hashedPassword,
        role: "admin",
      });
      console.log(`[Admin Security] Created default encrypted admin user: "${defaultUsername}" in MongoDB Atlas.`);
    }
  } catch (error) {
    console.error("[Admin Security] Failed to ensure admin user in database:", error.message);
  }
}
