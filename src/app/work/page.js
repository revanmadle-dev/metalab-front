import React from "react";
import WorkBanner from "../sections/WorkBanner";
import WorkList from "../sections/WorkList";
import { Metadata } from 'next'

export const metadata = {
  title: 'MetaLab - İşlərimiz',
  description: 'MetaLab-ın həyata keçirdiyi layihələr və işlərimiz. Rəqəmsal transformasiya və texnologiya həlləri nümunələri.',
  keywords: 'metalab layihələri, iş nümunələri, portfolio, case studies, texnologiya həlləri',
  openGraph: {
    title: 'MetaLab - İşlərimiz',
    description: 'MetaLab-ın həyata keçirdiyi layihələr və işlərimiz',
    url: 'https://metalab.az/work',
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
    title: 'MetaLab - İşlərimiz',
    description: 'MetaLab-ın həyata keçirdiyi layihələr və işlərimiz',
    images: ['https://metalab.az/assets/img/og.png'],
  },
}

const work = () => {
  return (
    <>
      <WorkBanner title="İşlərimiz" />
      <WorkList pathname="portfolio-homes" />
    </>
  );
};

export default work;
