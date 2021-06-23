const GROW_URL = "https://web-fundfolio-one-gr8jxe1re-fundfolio.vercel.app";
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
