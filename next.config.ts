/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- YE ZAROORI HAI GITHUB PAGES KE LIYE
  images: {
    unoptimized: true, // <--- Images ko simple rakhta hai taakay error na aaye
  },
  // Agar aapki site "username.github.io/repo-name" par hogi, 
  // to basePath set karna par sakta hai, lekin custom domain (b2bleadmaster.online) 
  // ke liye iski zaroorat nahi.
};

export default nextConfig;