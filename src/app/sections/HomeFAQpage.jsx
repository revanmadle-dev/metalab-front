"use client"
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import GsapAnimation from '../components/Gsap';
import { Power3 } from 'gsap';

const accordionData = [
  {
    title: " Meta reklamlarına hansı büdcə ilə başlaya bilərəm?",
    description: "Başlanğıc üçün kiçik büdcə ilə reklam vermək mümkündür. Effektiv nəticə əldə etmək üçün aylıq minimum 300-400 USD-lik büdcə tövsiyə olunur."
  },
  {
    title: "Facebook və Instagram reklamları kimlərə göstərilir?",
    description: "Reklamlar yaş, cins, məkan, maraq sahələri və davranışlara əsasən hədəflənə bilir. Sizin məhsul və xidmətinizə uyğun auditoriya dəqiq şəkildə seçilir."
  },
  {
    title: "Google reklamları sadəcə axtarışda göstərilir?",
    description: "Xeyr. Google Ads həm də YouTube, Display Network (saytlar, mobil tətbiqlər), Shopping və digər platformalarda reklam yerləşdirməyə imkan verir."
  },
  {
    title: "Google reklamlarında nəticə nə qədər müddətə görünür?",
    description: "Axtarış reklamlarında nəticələr çox vaxt dərhal görünməyə başlayır. Lakin maksimum effektivlik üçün reklamın optimallaşdırılması və izlənməsi 1-2 həftə tələb edə bilər."
  }
  ,
  {
    title: "TikTok reklamlarının effektivliyini necə ölçmək olar?",
    description: "Reklamların baxış sayı, klikləmə dərəcəsi (CTR), dönüşüm və interaksiya göstəriciləri ilə analiz edilərək effektivliyi ölçülür."
  }
  ,
  {
    title: "TikTok reklamları hansı bizneslər üçün uyğundur?",
    description: "TikTok reklamları xüsusilə vizual və kreativ təqdimata malik məhsul və xidmətlər üçün uyğundur. Moda, kosmetika, texnologiya, təhsil və xidmət sahələri üçün ideal platformadır."
  }
]

const HomeFAQpage = () => (
  <section className="relative bg-white">
    <GsapAnimation
      as='div'
      animation={{ clipPath: "inset(0 100% 0 0)", duration: 1, ease: Power3.easeInOut }}
      className="bg-[--body-bg] absolute top-0 left-0 w-full h-full [clip-path:inset(0_0_0_0)]"
    >
    </GsapAnimation>
    <div className="container">
      <div className="row justify-center">
        <GsapAnimation className="col-xl-6 col-lg-7 opacity-0" animation={{ opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }}>
          <h2 className="text-darkgray text-center font-semibold leading-[1.5] mb-[70px]">Tez-tez verilən suallar</h2>
        </GsapAnimation>
        <GsapAnimation className="col-lg-7 opacity-0" animation={{ opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }}>
          <Accordion.Root
            className="w-full"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            {
              accordionData?.map((item, i) => {
                return (
                  <Accordion.Item className="mt-px overflow-hidden first:mt-0 mb-[35px] last:mb-0" key={i} value={i + 1}>
                    <Accordion.Trigger className="text-left text-darkgray text-[20px] leading-[30px] font-poppins font-semibold pb-[15px] border-b border-solid border-[#828282] w-full md:text-[18px]">{item.title}</Accordion.Trigger>
                    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      <div className="pt-[15px]">{item.description}</div></Accordion.Content>
                  </Accordion.Item>
                )
              })
            }
          </Accordion.Root>
        </GsapAnimation>
      </div>
    </div>
  </section>
);

export default HomeFAQpage;