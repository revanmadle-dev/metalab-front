"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from 'react'

const Logo = ({ ...props }) => {
    const [logoData, setLogoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await fetch('https://api.metalab.az/api/logo?populate=*');
                const data = await response.json();
                setLogoData(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching logo:', error);
                setLoading(false);
            }
        };

        fetchLogo();
    }, []);

    return (
        <Link href="/">
            {loading ? (
                <div className="w-[45px] h-[45px] bg-gray-200 animate-pulse rounded"></div>
            ) : logoData?.foto?.url ? (
                <Image
                    {...props}
                    src={`https://api.metalab.az${logoData.foto.url}`}
                    alt="MetaLab"
                />
            ) : (
                <Image {...props} src="/assets/img/garuda.svg" alt="MetaLab" />
            )}
        </Link>
    )
}

export default Logo