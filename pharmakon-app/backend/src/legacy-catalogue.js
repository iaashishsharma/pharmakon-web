import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const pages = [
    ["broad.html", "general"],
    ["dental-care.html", "dental"],
    ["derma.html", "dermatology"],
    ["GYNAECOLOGY.html", "gynaecology"],
    ["neuro.html", "neuro"],
    ["oncology.html", "oncology"],
    ["ortho.html", "orthopaedic"],
    ["paedtric.html", "paediatric"],
];

const websiteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../conztra");

function findArrayEnd(source, start) {
    let depth = 0;
    let quote = "";
    let escaped = false;
    for (let index = start; index < source.length; index += 1) {
        const character = source[index];
        if (quote) {
            if (escaped) escaped = false;
            else if (character === "\\") escaped = true;
            else if (character === quote) quote = "";
            continue;
        }
        if (character === "'" || character === '"' || character === "`") {
            quote = character;
            continue;
        }
        if (character === "[") depth += 1;
        if (character === "]") {
            depth -= 1;
            if (depth === 0) return index + 1;
        }
    }
    throw new Error("Could not parse product list in a legacy HTML page.");
}

function makeSlug(value) {
    return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function readPageProducts(fileName, careArea) {
    const source = await readFile(path.join(websiteRoot, fileName), "utf8");
    const declaration = /\bvar\s+products\s*=\s*\[/g;
    const match = declaration.exec(source);
    if (!match) throw new Error(`No product list found in ${fileName}.`);
    const start = source.indexOf("[", match.index);
    const end = findArrayEnd(source, start);
    const products = vm.runInNewContext(`(${source.slice(start, end)})`, Object.create(null), { timeout: 1000 });
    const imageBase = source.match(/\bvar\s+img\s*=\s*['"]([^'"]+)['"]/i)?.[1] || "";
    return products.map((product) => {
        const image = String(product.image || "");
        const imagePath = image.startsWith("assets/") || image.startsWith("/") ? image : `${imageBase}${image}`;
        return {
            name: String(product.name || "").trim(),
            slug: makeSlug(`${careArea}-${product.name || "product"}`),
            category: careArea,
            productCategory: makeSlug(String(product.category || "")),
            type: String(product.type || "Product").trim(),
            composition: String(product.composition || "").trim(),
            packing: String(product.packing || "").trim(),
            image: imagePath.replace(/\\/g, "/"),
            isActive: true,
        };
    }).filter((product) => product.name);
}

export async function readLegacyCatalogue() {
    const imported = [];
    for (const [fileName, careArea] of pages) {
        const products = await readPageProducts(fileName, careArea);
        imported.push(...products);
    }
    const slugCounts = new Map();
    return imported.map((product) => {
        const count = slugCounts.get(product.slug) || 0;
        slugCounts.set(product.slug, count + 1);
        return count ? { ...product, slug: `${product.slug}-${count + 1}` } : product;
    });
}
