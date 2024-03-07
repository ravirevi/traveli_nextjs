/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    
    async rewrites(){
        return[
            {
                source:"/admin/:path*",
                destination:"http://localhost:8080/admin/:path*" /* AdminController에 뒤로 나오는 path 모두 적용 되도록  */
            },
        ];
    }
};

export default nextConfig;
