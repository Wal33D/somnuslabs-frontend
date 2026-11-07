/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'magicreply.ai',
      'res.cloudinary.com',
      'storage.googleapis.com',
      'cmaforge.com',
    ],
  },
  async redirects() {
    return [
      {
        // CandyComp CMA post retired: candycomp.com now hosts the Together game.
        source: '/blog/candycomp-instant-real-estate-cma',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
