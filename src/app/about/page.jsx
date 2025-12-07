import AboutBanner from "../sections/AboutBanner"
import AboutHowWeWork from "../sections/AboutHowWeWork"
import AboutOurTeam from "../sections/AboutOurTeam"

export const metadata = {
    title: 'MetaLab - Haqqımızda',
    description: 'MetaLab haqqında ətraflı məlumat. Bizim missiyamız və dəyərlərimiz. İnnovasiya və texnologiya sahəsində təcrübəmiz.',
    keywords: 'metalab haqqında, şirkət haqqında, missiya, dəyərlər, komanda',
    openGraph: {
        title: 'MetaLab - Haqqımızda',
        description: 'MetaLab haqqında ətraflı məlumat',
        url: 'https://metalab.az/about',
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
        title: 'MetaLab - Haqqımızda',
        description: 'MetaLab haqqında ətraflı məlumat',
        images: ['https://metalab.az/assets/img/og.png'],
    },
}

const Page = () => {
    return (
        <>
            <AboutBanner />
            <AboutHowWeWork />
            <AboutOurTeam />
        </>
    )
}

export default Page