'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${isScrolled ? 'glass' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
        >
            <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-widest text-white">LAMBORGHINI</span>
            </div>

            <button className="px-6 py-2 border border-white/20 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-colors uppercase">
                Inquire
            </button>
        </motion.nav>
    );
}
