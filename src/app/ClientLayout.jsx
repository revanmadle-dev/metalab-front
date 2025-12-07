"use client"
import { useEffect, useState } from 'react'
import Script from 'next/script'
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"


export const metadata = {
    title: {
        template: 'MetaLab | %s',
        default: 'MetaLab', // a default is required when creating a template
    },
    description: 'Metalab rəqəmsal reklam xidmətləri',
}


const ClientLayout = ({ children, poppins, nunito_sans }) => {
    const [logoUrl, setLogoUrl] = useState(null);


    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await fetch('https://api.metalab.az/api/logo?populate=*');
                const data = await response.json();
                if (data.data?.foto?.url) {
                    setLogoUrl(`https://api.metalab.az${data.data.foto.url}`);
                }
            } catch (error) {
                console.error('Error fetching logo:', error);
            }
        };

        fetchLogo();
    }, []);

    return (
        <>
            <html lang="en">
                <head>
                    {logoUrl && (
                        <>
                            <link rel="icon" type="image/png" href={logoUrl} />
                            <link rel="apple-touch-icon" href={logoUrl} />
                        </>
                    )}
                </head>
                <body className={`${poppins.variable} ${nunito_sans.variable}`}>
                    <Header />
                    {children}
                    <Footer />
                    <Script src="https://www.googletagmanager.com/gtag/js?id=G-VNN0WJ58GF" strategy="afterInteractive" />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VNN0WJ58GF');
            `}
                    </Script>
                    <Script id="tawkto" strategy="afterInteractive">
                        {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6803cafc02dbf4190e49cc93/1ip7d1r63';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
                    </Script>
                </body>
            </html>
        </>
    )
}

export default ClientLayout 