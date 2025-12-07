import Contact from "../sections/Contact";


export const metadata = {
    title: 'MetaLab - Əlaqə',
    description: 'MetaLab ilə əlaqə saxlayın. Bizimlə əlaqə yaratmaq üçün əlaqə məlumatlarımız və əlaqə forması.',
    keywords: 'metalab əlaqə, bizimlə əlaqə, əlaqə məlumatları, əlaqə forması, ünvan',
    openGraph: {
        title: 'MetaLab - Əlaqə',
        description: 'MetaLab ilə əlaqə saxlayın',
        url: 'https://metalab.az/contact',
        images: [
            {
                url: 'https://metalab.az/assets/img/og.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MetaLab - Əlaqə',
        description: 'MetaLab ilə əlaqə saxlayın',
        images: ['https://metalab.az/assets/img/og.png'],
    },
}


const Page = () => {
    return (
        <Contact />
    );
};

export default Page;
