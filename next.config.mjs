/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.innovativeitsoft.com',
          },
           {
            protocol: 'https',
            hostname: 'img.alicdn.com',
          },{
            protocol: 'https',
            hostname: 'gw.alicdn.com',
          },{
            protocol: 'https',
            hostname: 's3.ali2bd.net',
          },
        ],
      },
};

export default nextConfig;
