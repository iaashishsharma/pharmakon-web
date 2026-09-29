/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["172.31.16.1"],
  async rewrites() {
    const backendUrl = process.env.API_SERVER_URL || "http://127.0.0.1:5000";
    return [
      { source: "/api/:path*", destination: `${backendUrl}/api/:path*` },
      { source: "/index.html", destination: "/" },
      { source: "/index-2.html", destination: "/index-2" },
      { source: "/about.html", destination: "/about" },
      { source: "/broad.html", destination: "/broad" },
      { source: "/contact.html", destination: "/contact" },
      { source: "/contractmanufacturing.html", destination: "/contractmanufacturing" },
      { source: "/dental-care.html", destination: "/dental-care" },
      { source: "/derma.html", destination: "/derma" },
      { source: "/derma-old-all-products.html", destination: "/derma-old-all-products" },
      { source: "/gynaecology.html", destination: "/gynaecology" },
      { source: "/GYNAECOLOGY.html", destination: "/gynaecology" },
      { source: "/neuro.html", destination: "/neuro" },
      { source: "/news-grid.html", destination: "/news-grid" },
      { source: "/oncology.html", destination: "/oncology" },
      { source: "/ortho.html", destination: "/ortho" },
      { source: "/paedtric.html", destination: "/paedtric" },
      { source: "/pcd-franchise.html", destination: "/pcd-franchise" },
      { source: "/pcd-franchise-old.html", destination: "/pcd-franchise-old" },
      { source: "/shop.html", destination: "/shop" },
      { source: "/shop-list.html", destination: "/shop-list" },
      { source: "/vision-mission.html", destination: "/vision-mission" }
    ];
  },
};

export default nextConfig;