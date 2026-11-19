/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['cmaforge.com'],
  },
  async redirects() {
    return [
      {
        // The post was rewritten for the live PlantVision product (plantvisionapp.com).
        source: '/blog/plantvision-ai-plant-identification-companion',
        destination: '/blog/plantvision-identify-plants-from-a-photo',
        permanent: true,
      },
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
