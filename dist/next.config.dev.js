"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ["w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com", "xd2kcvzsdpeyx1gu.public.blob.vercel-storage.com", "www.citypng.com", "replicate.delivery"]
  },
  redirects: function redirects() {
    return regeneratorRuntime.async(function redirects$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", [{
              source: "/github",
              destination: "https://github.com/garrrikkotua/github-illusion",
              permanent: false
            }, {
              source: "/t",
              destination: "/",
              permanent: false
            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
module.exports = nextConfig;