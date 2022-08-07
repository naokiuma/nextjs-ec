/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{
    //stylecomonentsの有効化け
    styledComponents:true,
  },
  swcMinify: true,
}

module.exports = nextConfig
