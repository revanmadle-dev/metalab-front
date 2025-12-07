"use client"
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import ImageGrid from "../components/ImageGrid";
import { gridImageData, gridImageBackendData, gridImageCMSData, gridImageDatabaseData } from "../data/gridImage";

const TabsNav = ({ color = "#6371f0", activeColor = "#6371f094", trackColor = "#232323", track = true, className }) => {
    const [activeTab, setActiveTab] = useState({ index: 0, mounted: false });
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    const tabData = [
        {
            label: "Təhsil",
            category: "Təhsil",
            content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageData} />,
        },
        {
            label: "Rəqəmsal",
            category: "Rəqəmsal",
            content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageBackendData} />
        },
        {
            label: "Turizm",
            category: "Turizm",
            content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageCMSData} />
        },
        {
            label: "Digər",
            category: "Digər",
            content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageDatabaseData} />
        }
    ];

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('https://api.metalab.az/api/partners?populate=*');
                const data = await response.json();
                setPartners(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching partners:', error);
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    const getPartnersByCategory = (category) => {
        const categoryPartners = partners.filter(partner => partner.kateqoriya === category);
        return categoryPartners.map(partner => ({
            path: `https://api.metalab.az${partner.foto.url}`,
            label: partner.ad,
            link: partner.link
        }));
    };

    return (
        <div className={className ? ` ${className}` : ""}>
            <div className="tab-nav">
                <ul className="mb-[30px] pl-0 border-b border-solid relative flex flex-wrap justify-between list-none gap-x-5 lg:gap-x-2" style={{ borderBottomColor: trackColor, border: track ? "" : "none" }}>
                    {tabData.map((item, index) => (
                        <li key={index} className="nav-item sm:w-full sm:text-center sm:border-b-[1px] sm:border-solid sm:border-[#828282]">
                            <button
                                style={{ color: activeTab.index === index ? activeColor : color }}
                                type="button"
                                onClick={() => setActiveTab({ ...activeTab, index })}
                                className={`nav-link font-semibold relative font-poppins py-[10px] px-[12px] transition-all after:content-normal after:left-0 after:absolute after:bottom-[-2px] after:rounded-full after:border-b-4 after:border-solid after:border-[#6371F0] after:transition-all sm:w-full focus:bg-transparent${activeTab.index === index ? " after:w-full" : " after:w-0"}`}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {tabData.map((item, index) => {
                    const categoryPartners = getPartnersByCategory(item.category);
                    return (
                        <div key={index} className={`${index === activeTab.index ? 'block' : 'hidden'}`}>
                            {loading ? (
                                <div className="text-center">Loading...</div>
                            ) : categoryPartners.length > 0 ? (
                                <ImageGrid
                                    bgColor="#232323"
                                    border="#232323"
                                    data={categoryPartners}
                                />
                            ) : (
                                item.content
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

TabsNav.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    trackColor: PropTypes.string,
    track: PropTypes.bool
}

export default TabsNav;


