import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About SEO Title',
 description: 'About SEO Description',
};  

export default function AboutPage(){
    return(
        <>
        <span className="text-7xl">About Page</span>
        </>
    )
}
