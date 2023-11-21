const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "javidan-sanat-backend.iran.liara.run",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
