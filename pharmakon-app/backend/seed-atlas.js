import "dotenv/config";
import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import { readLegacyCatalogue } from "./src/legacy-catalogue.js";

async function main() {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully!");

    const legacyProducts = await readLegacyCatalogue();
    console.log(`Found ${legacyProducts.length} products to insert/update.`);

    const ops = legacyProducts.map(({ _id, ...product }) => ({
        updateOne: {
            filter: { slug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
            update: { $set: product },
            upsert: true,
        },
    }));

    const result = await Product.bulkWrite(ops, { ordered: false });
    console.log("BulkWrite summary:", {
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount,
        upsertedCount: result.upsertedCount,
    });

    const totalCount = await Product.countDocuments();
    console.log(`Total Products now stored in MongoDB Atlas database: ${totalCount}`);

    await mongoose.disconnect();
    console.log("Database connection closed.");
}

main().catch(err => {
    console.error("Error seeding database:", err);
    process.exit(1);
});
