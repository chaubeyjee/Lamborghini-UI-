'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';
import { carData } from '@/data/carData';

interface ZondaExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
    const fadeInOut = (entry: number, exit: number) => useTransform(
        scrollYProgress,
        [entry - 0.1, entry, exit - 0.1, exit],
        [0, 1, 1, 0]
    );

    const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const opacityDesign = fadeInOut(0.33, 0.66);
    const opacityEngine = useTransform(scrollYProgress, [0.66, 0.8], [0, 1]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
            {/* Phase 1: HERO */}
            <motion.div style={{ opacity: opacityHero }} className="absolute inset-x-0 bottom-20 px-8 flex justify-between items-end">
                <div>
                    <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        {carData.hero.title}
                    </h1>
                    <p className="font-sans text-pagani-gold text-2xl mt-2 tracking-[0.2em]">
                        {carData.hero.price}
                    </p>
                </div>
                <div className="hidden md:block">
                    <p className="text-white/50 text-xs tracking-widest border-l border-pagani-gold pl-4">
                        SCROLL TO EXPLORE
                    </p>
                </div>
            </motion.div>

            {/* Phase 2: DESIGN */}
            <motion.div style={{ opacity: opacityDesign }} className="absolute inset-0 flex flex-col items-start justify-center px:12 md:px-24 max-w-2xl">
                <div className="border-l-2 border-pagani-gold pl-8">
                    <h2 className="font-display text-5xl font-bold mb-6 text-white">{carData.design.title}</h2>
                    <p className="font-sans text-lg text-gray-300 leading-relaxed mb-8">
                        {carData.design.description}
                    </p>
                    <ul className="space-y-2">
                        {carData.design.details.map((detail, i) => (
                            <li key={i} className="flex items-center text-pagani-gold text-sm tracking-widest uppercase">
                                <span className="w-2 h-2 bg-pagani-gold rounded-full mr-3" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Phase 3: ENGINE */}
            <motion.div style={{ opacity: opacityEngine }} className="absolute inset-0 flex flex-col items-end justify-center px-12 md:px-24">
                <div className="text-right border-r-2 border-pagani-gold pr-8 max-w-xl">
                    <h2 className="font-display text-5xl font-bold mb-6 text-white">{carData.engine.title}</h2>
                    <p className="font-sans text-lg text-gray-300 leading-relaxed mb-8">
                        {carData.engine.description}
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        {carData.engine.specs.map((spec, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-white/50 text-xs uppercase tracking-wider">{spec.label}</span>
                                <span className="text-3xl font-display text-pagani-gold">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
