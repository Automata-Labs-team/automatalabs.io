'use client';
import Image from 'next/image';
import LogoSVG from '../public/logo-bear.svg';

interface LogoProps {
    className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
    return (
        <Image src={LogoSVG} alt="Automata Labs Logo" className={className} />
    );
}