"use client"
import React from 'react'
import Logo from "../components/Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Footer = () => {
    const pathname = usePathname()

    return (
        <footer className="pb-[120px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
            <div className="container mb-[80px]">
                <div className="row items-center">
                    <div className="col w-full h-[1px] bg-[rgba(255,255,255,0.2)]"></div>
                    <div className="col text-center">
                        <h2 className="text-white font-semibold mb-[30px] md:mb-[15px] sm:mb-[5px]">{`Əlaqə`}</h2>
                        <a href={`mailto:"info@metalab.az"}`} className="heading-6 font-poppins">{"info@metalab.az"}</a>
                    </div >
                    <div className="col w-full h-[1px] bg-[rgba(255,255,255,0.2)]"></div>
                </div >
            </div >
            <div className="container">
                <div className="row justify-between gap-y-10">
                    <div className="col-lg-3 col-md-6">
                        <Logo className="mb-[40px] inline-block sm:mb-[20px]" width={70} height={70} />
                        <p>© {new Date().getFullYear()} Metalab. Bütün hüquqlar qorunub.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 offset-xl-2">
                        <h3 className="heading-6 text-white font-semibold mb-[30px] sm:mb-[15px]">Sürətli keçidlər</h3>
                        <ul>
                            <li><Link href="/" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/" ? " active text-white" : ""}`}>Ana səhifə</Link></li>
                            <li><Link href="/about" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/about" ? " active text-white" : ""}`}>Haqqımızda</Link></li>
                            <li><Link href="/contact" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/contact" ? " active text-white" : ""}`}>Əlaqə</Link></li>
                            <li><Link href="/work" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/work" ? " active text-white" : ""}`}>İşlərimiz</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="heading-6 text-white font-semibold mb-[30px] sm:mb-[15px]">Əlaqə</h3>
                        <ul>
                            <li className="flex gap-x-[15px] mb-[10px]">
                                <Image width={17} height={25} src="/assets/icons/phone.svg" alt="phone icon" />
                                <a className="hover:text-white transition-all" href="tel:+994708713641">+994 (70) 871 36 41</a>
                            </li>
                            <li className="flex gap-x-[15px]">
                                <Image width={17} height={25} src="/assets/icons/mail.svg" alt="mail icon" />
                                <a className="hover:text-white transition-all" href={`mailto:${"info@metalab.az"}`}>{"info@metalab.az"}</a>
                            </li >
                        </ul >
                    </div >
                    <div className="col-lg-auto col-md-6">
                        <h3 className="heading-6 text-white font-semibold mb-[30px] sm:mb-[15px]">Bizimlə əlaqə :</h3>
                        <ul className="flex items-center gap-x-[25px]">
                            <li><Link href="https://www.facebook.com/rEvanzzilla" target="_blank" className="hover:opacity-50 transition-all"><Image width={15} height={15} src="/assets/icons/facebook.svg" alt="facebook icon" /></Link></li>
                            <li><Link href={"https://wa.me/994708713641 "} target="_blank" className="hover:opacity-50 color transition-all"><Image width={24} height={24} src="/assets/icons/whatsapp.svg" alt="whatsapp icon" /></Link></li>
                            <li><Link href={"https://www.instagram.com/ravenidedalli/"} target="_blank" className="hover:opacity-50 transition-all"><Image width={24} height={24} src="/assets/icons/instagram.svg" alt="instagram icon" /></Link></li>
                        </ul>
                    </div>
                </div >
            </div >
            <div className="container mt-[100px]">
                <div className="row">
                    <div className="col text-center">
                        <p className="text-white/50 text-sm">
                            Designed by <a href="https://www.saytpro.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold text-[#e704aa] transition-all">Sayt Pro</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer