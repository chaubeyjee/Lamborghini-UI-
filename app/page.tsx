'use client';

import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ZondaScrollCanvas from '@/components/ZondaScrollCanvas';
import ZondaExperience from '@/components/ZondaExperience';


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-pagani-black min-h-screen">
      <Navbar />

      {/* SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ZondaScrollCanvas scrollYProgress={scrollYProgress} />
          <ZondaExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* REST OF SITE */}
      <div className="relative z-20 bg-pagani-black border-t border-white/10">
        <section className="min-h-screen flex items-center justify-center p-24">
          <div className="max-w-4xl text-center">
            <h2 className="font-display text-4xl mb-8 text-white">TECHNICAL SPECIFICATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "POWER", val: "750 CV" },
                { title: "MAX SPEED", val: "350 km/h" },
                { title: "0-100 KM/H", val: "2.8 s" },
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/10 hover:border-pagani-gold transition-colors group">
                  <h3 className="text-sm tracking-widest text-gray-400 mb-2">{item.title}</h3>
                  <p className="text-3xl font-display text-white group-hover:text-pagani-gold">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE SHOWCASE */}
        <section className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center py-24">
          <h2 className="text-white font-display text-5xl mb-16 tracking-wider">ENGINEERING MASTERPIECE</h2>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/features/cockpit.png",
                title: "AERONAUTIC COCKPIT",
                desc: "An immersive interface inspired by modern jet fighters."
              },
              {
                img: "/images/features/engine.png",
                title: "V12 NATURALLY ASPIRATED",
                desc: "The beating heart of the Aventador, delivering pure emotion."
              },
              {
                img: "/images/features/brakes.png",
                title: "CARBON CERAMIC BRAKES",
                desc: "Unmatched stopping power and thermal resistance."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative h-[600px] w-full overflow-hidden border border-white/10">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-pagani-gold font-display text-2xl mb-2">{feature.title}</h3>
                  <p className="text-gray-300 font-sans text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black py-20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <h2 className="font-display text-3xl text-white mb-6">LAMBORGHINI</h2>
                <p className="text-gray-500 max-w-sm font-light">
                  Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 tracking-widest text-sm">MODELS</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Revuelto</li>
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Huracán</li>
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Urus</li>
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Pre-Owned</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 tracking-widest text-sm">WORLD</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">News</li>
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Motorsport</li>
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Museum</li>
                  <li className="hover:text-pagani-gold cursor-pointer transition-colors">Store</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 text-xs tracking-widest">
              <p>&copy; 2026 AUTOMOBILI LAMBORGHINI S.P.A.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="hover:text-white cursor-pointer transition-colors">PRIVACY POLICY</span>
                <span className="hover:text-white cursor-pointer transition-colors">TERMS OF USE</span>
                <span className="hover:text-white cursor-pointer transition-colors">SITEMAP</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
