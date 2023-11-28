import { GetServerSideProps } from "next";

export default function Sitemap (){
    return null; 
}

export const serverSiteProps : GetServerSideProps<{}> = async(ctx)=>{
    ctx.res.setHeader('Content-Type', 'text/xml');
    const xml = await generateSiteMap 
    ctx.res.write(xml)
    ctx.res.end();

    return {
        props:{}
    }

}

async function generateSiteMap(): Promise<string> {

    
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://www.example.com/foo.html</loc>
    <lastmod>2022-06-04</lastmod>
    </url>
    </urlset>`
}