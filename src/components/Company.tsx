'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CompanyProps {
  name: string;
  name2: string;
  time1: string;
  time2: string;
  link: string;
  perspectiveClass?: string;
  index?: number;
}

const Company = ({name, name2, time1, time2, link, index = 0}:CompanyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   // Different degrees based on the perspective class or index
  //   let rotateY = -25;
  //   let skewY = -7;
    
    
  //   // Apply initial transform
  //   gsap.set(containerRef.current, {
  //     transformPerspective: 800,
  //     rotateY: rotateY,
  //     skewY: skewY,
  //     transformOrigin: 'right center',
  //     transformStyle: 'preserve-3d',
  //   });

  //   // Add hover effect
  //   containerRef.current.addEventListener('mouseenter', () => {
  //     gsap.to(containerRef.current, {
  //       rotateY: rotateY / 2.5,
  //       skewY: skewY / 2.5,
  //       duration: 0.5,
  //       ease: 'power2.out'
  //     });
  //   });

  //   containerRef.current.addEventListener('mouseleave', () => {
  //     gsap.to(containerRef.current, {
  //       rotateY: rotateY,
  //       skewY: skewY,
  //       duration: 0.5,
  //       ease: 'power2.out'
  //     });
  //   });

  //   return () => {
  //     if (containerRef.current) {
  //       containerRef.current.removeEventListener('mouseenter', () => {});
  //       containerRef.current.removeEventListener('mouseleave', () => {});
  //     }
  //   };
  // }, [perspectiveClass, index]);

  return (
    <div className='relative w-full flex justify-end'>
    <div className="flex druk-wide w-full   hover:text-transparent hover:w-full  text-black  right-0 mr-8">
        <Link href={link} className='flex druk-wide perspective-hover  w-full justify-end'>
            <div className='flex text-black'
            style={{
                fontSize: 'clamp(0.5rem, 0.75vw, 100rem)',
                marginTop: 'clamp(0.05rem, 0.85vw, 100rem)',
            
            }}>
            {time1} {"—"} {time2}
            </div>
            <div className="flex flex-col  items-end hover:text-transparent"
            style={{
                fontSize: 'clamp(1rem, 8.5vw, 100rem)',
                lineHeight: '0.85',
                perspective: '500px',
            }}>
             <div className='druk-wide perspective-hover tracking-wide uppercase transition-all duration-300' 
             style={{ 
              WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
             }}>
              <span className='text-blue'
              style={{
                WebkitTextStroke: '0px #000000',
                textShadow: '-2px 0px 0px #000000',
              }}
              >
              {"/"}

              </span>
              
              {name}</div>
             <div className='druk-wide perspective-hover tracking-wide uppercase transition-all duration-300' 
             style={{ 
                WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
             }}>{name2}</div>
            </div>
        </Link>
    </div>
    </div>
  );
};

export default Company;
