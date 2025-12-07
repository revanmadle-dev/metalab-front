"use client"
import React from 'react'

const Toggler = ({ isOpen, onClick, className }) => {
    return (
        <button
            type="button"
            className={`toggler flex flex-col gap-y-1${className ? ` ${className}` : ""}`}
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <span className={`w-[25px] h-[2px] bg-white inline-block relative transition-all duration-300${isOpen ? " rotate-45 top-[6px]" : ""}`}></span>
            <span className={`w-[25px] h-[2px] bg-white inline-block relative transition-all duration-300${isOpen ? " opacity-0" : ""}`}></span>
            <span className={`w-[25px] h-[2px] bg-white inline-block relative transition-all duration-300${isOpen ? " -rotate-45 -top-[6px]" : ""}`}></span>
        </button>
    )
}

export default Toggler