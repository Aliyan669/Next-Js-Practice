/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["upload.wikimedia.org"]
    },
    output:"export",

    /// ye redirection ke kam ati hai ///
    redirects:async()=>{
        return[
            // {
            //     source:'/users',
            //     destination:'/',
            //     permanent:false
            // },
            // {
            //     source:'/users/:userid',
            //     destination:'/',
            //     permanent:false
            // },
            // {
            //     source:'/redirect',
            //     destination:'/',
            //     permanent:false
            // }
        ]
    }
}

module.exports = nextConfig

////////// Static HTML npm run build ///////////
