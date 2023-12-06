/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com', "www.gymnastics.sport", "api.dicebear.com"],
    }
}

const withNextIntl = require('next-intl/plugin')("./src/lib/i18n.ts");
 
module.exports = withNextIntl(nextConfig);


