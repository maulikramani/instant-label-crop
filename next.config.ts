import type { NextConfig } from "next";

async function redirects() {
  return [
    {
      source: '/home',
      destination: '/',
      permanent: true
    },
  ]
}

const nextConfig: NextConfig = {
  redirects: redirects
};


export default nextConfig;
