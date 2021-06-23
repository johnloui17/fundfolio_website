const GROW_URL = "https://web-fundfolio-one-4bbprmtx2-fundfolio.vercel.app";
module.exports = {
  distDir: "../.next",
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/grow",
        destination: `${GROW_URL}/grow`,
      },
      {
        source: "/grow/:path*",
        destination: `${GROW_URL}/grow/:path*`,
      },
    ];
  },
};
