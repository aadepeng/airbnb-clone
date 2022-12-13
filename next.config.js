/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env:{
    mapbox_key: 'pk.eyJ1IjoiYWFkZXBlbmciLCJhIjoiY2xibTEzNngxMDRvdTNycDg1cjdiNmpzZSJ9.5o91hjtccAMsC6N0r2qthA'
  }
}

module.exports = nextConfig
