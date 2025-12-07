"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// style
import 'swiper/css';

const AboutOurTeam = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://api.metalab.az/api/teams?populate=*');
        const data = await response.json();
        setTeamData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)");
    if (isMobile.matches) {
      setIsMobile(true);
    }

    window.matchMedia("(max-width: 767px)").onchange = (e) => {
      if (e.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row justify-center mb-[90px]">
          <div className="col-xl-6 col-lg-8 col-md-10 text-center">
            <h2 className="mb-[30px] text-white font-semibold">Komandamız</h2>
            <p> Komandamız, brendinizi, məhsul və ya xidmətlərinizi, hədəf auditoriyanızı və fəaliyyət göstərdiyiniz sektoru dərindən analiz edir. <br /> Məqsədimiz — sizin üçün ən doğru platformaları, mesajları və performansa yönəlik strategiyanı formalaşdırmaqdır.</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          isMobile ? (
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={50}
              autoplay={{ disableOnInteraction: true, delay: 2000 }}
              breakpoints={{
                768: {
                  autoplay: false
                }
              }}
            >
              {teamData?.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="flex">
                    <Team item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="row justify-center gap-y-[30px]">
              {teamData?.map((item) => {
                return (
                  <Team key={item.id} item={item} />
                )
              })}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AboutOurTeam;

const Team = ({ item }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-12 sm:mx-auto">
      {item?.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="text-center h-full">
            <div className="relative mb-[25px] bg-darkgray w-full h-full rounded-[25px] flex items-center px-[15px] py-[15px] hover:bg-gray-800 transition-colors duration-300">
              <div className="img-wrapper mr-[15px] bg-[#383838] relative rounded-[25px] w-[100px] h-[100px] overflow-hidden">
                <Image
                  src={`https://api.metalab.az${item?.foto?.url}`}
                  alt={item?.ad}
                  fill={true}
                  sizes="(max-width: 768px) , object-fit: cover (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="text-left">
                <h3 className="text-[20px] leading-none text-white font-medium">{item?.ad}</h3>
                <p>{item?.position}</p>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className="text-center h-full">
          <div className="relative mb-[25px] bg-darkgray w-full h-full rounded-[25px] flex items-center px-[15px] py-[15px]">
            <div className="img-wrapper mr-[15px] bg-[#383838] relative rounded-[25px] w-[100px] h-[100px] overflow-hidden">
              <Image
                src={`https://api.metalab.az${item?.foto?.url}`}
                alt={item?.ad}
                fill={true}
                sizes="(max-width: 768px) , object-fit: cover (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-left">
              <h3 className="text-[20px] leading-none text-white font-medium">{item?.ad}</h3>
              <p>{item?.position}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
