"use client"
import MagneticButton from '../components/MagneticButton'
import Link from 'next/link'
import GsapAnimation from '../components/Gsap'
import { Power3 } from 'gsap'

const HomeContact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-center mx-0">
            <GsapAnimation animation={{ opacity: 1, duration: 1, ease: Power3.easeInOut }} className="text-center rounded-[60px] bg-[#ffd600] py-[50px] px-[15px] opacity-0">
              <p className="mb-[15px] text-darkgray font-medium">İdeanız var?</p>
              <h2 className="heading-3 font-poppins text-darkgray font-semibold mb-[35px]">Gəlin biznesinizi böyüdək!</h2>
              <MagneticButton buttonClass="bg-black py-[20px] px-[55px] rounded-[35px]">
                <Link href="/contact" className="text text-[18px] font-poppins">Elə indi əlaqə saxlayın!</Link>
              </MagneticButton>
            </GsapAnimation>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContact
