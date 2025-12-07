'use client'

import React, { useEffect, useState } from 'react'
import '../../app/scss/sections/WorkList.scss'
import Image from 'next/image'

const WorkList = ({ pathname }) => {
    const [portfolioData, setPortfolioData] = useState([])

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await fetch(`https://api.metalab.az/api/${pathname}?populate=*`)
                const data = await response.json()
                setPortfolioData(data.data)
            } catch (error) {
                console.error('Error fetching portfolio data:', error)
            }
        }

        fetchPortfolioData()
    }, [])

    return (
        <section className='portfolio-list pt-0 pb-[250px] md:pb-[75px] sm:pb-[50px]'>
            <div className="container px-[15px] relative">
                <div className="row gap-y-20">
                    {
                        portfolioData.map((data) => {
                            return (
                                <div key={data.id} className="col-lg-6">
                                    <a href={data.link} target='_blank' rel="noopener noreferrer">
                                        <div className="portfolio-card cursor-pointer">
                                            <Image
                                                className="mb-[30px] rounded-3xl overflow-hidden md:w-full md:mb-[15px]"
                                                src={`https://api.metalab.az${data.foto.url}`}
                                                alt={data.title}
                                                width={500}
                                                height={500}
                                            />
                                            <h2 className="worklist-title text-[25px] leading-[30px] text-white before:content-[''] before:w-[85px] before:h-[2px] before:bg-[#fff3] before:inline-block before:align-middle before:mr-[15px] md:text-[20px] md:before:w-[50px]">
                                                {data.title}
                                            </h2>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkList
