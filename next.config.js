/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['localhost', 'res.cloudinary.com', "www.gymnastics.sport", "api.dicebear.com"],
    }
}

 
module.exports = nextConfig;


