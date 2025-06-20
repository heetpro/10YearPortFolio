"use client"
import React from 'react'
import Copy from './Copy'
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Bar = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (path: string) => (e: React.MouseEvent<HTMLElement>) => {
    if (path === pathname) {
      e.preventDefault();
      return;
    }
    e.preventDefault();

    setTimeout(() => {
        router.push(path, {
          onTransitionReady: triggerPageTransition,
        });
      }, 500);
  };

  return (
    <>
      <Link href="/" onClick={handleNavigation('/')} className='z-[999] navbar fixed w-fit text-black  transition-all duration-300 cursor-pointer leading-[0.95] druk-medium hover:text-[#fff] h-fit'
        
      >
     
        <Copy delay={6.3}>
          <div className=' leading-[1]' style={{
            WebkitTextStroke: 'clamp(0.005rem, 0.05vw, 1rem) #000000',
          }}>
            HEET
          </div>
        </Copy>
        <Copy delay={6.4}>
          <div className=' leading-[1]' style={{
            WebkitTextStroke: 'clamp(0.005rem, 0.05vw, 1rem) #000000',
          }}>
            PRO{"."}
          </div>
        </Copy>
      </Link>

      <div className=' hidden md:block fixed z-[999] top-0 left-0 right-0 w-full text-black transition-all duration-300 cursor-pointer'
        style={{
          padding: ' clamp(0.5rem, 3.25vw, 100rem) clamp(0.5rem, 2.75vw, 100rem) 0',
        }}
      >
        <div className="flex w-[100%] justify-start items-start "
        style={{
gap: 'clamp(0.5rem, 2vw, 100rem)',
        }}
        >
          <div className='flex w-[30%]'
            style={{
              fontSize: 'clamp(0.5rem, 0.75vw, 100rem)',
              gap: 'clamp(0.5rem, 0.5vw, 100rem)',
            }}
          >
            <div className="flex flex-col w-full"
              style={{
                gap: 'clamp(0.5rem, 0.5vw, 100rem)',
              }}
            >
              <div className="normal-font leading-[0.95] transition-all duration-300">Heet Vavadiya</div>
              <div className="normal-font leading-[0.95] transition-all duration-300">Web3 Developer</div>
            </div>

            <Link href="https://github.com/virtualheet" target='_blank' className="flex flex-col w-full"
              style={{
                gap: 'clamp(0.5rem, 0.5vw, 100rem)',
              }}
            >
              <div className="normal-font leading-[0.95] transition-all duration-300">{"@"}github</div>
              <div className="medium-font leading-[0.95] w-full transition-all duration-300 shrink-text">virtualheet{"@"}gmail{"."}com</div>
            </Link>

            <div className="flex flex-col w-full"
              style={{
                gap: 'clamp(0.5rem, 0.5vw, 100rem)',
              }}
            >
              <Link href="/about" onClick={handleNavigation('/about')} className="flex gap-5 medium-font leading-[0.95] transition-all   duration-300">
                <span className='scale-75 normal-font transition-all duration-300'>01</span> 
                <span className='shrink-text flex  flex-col justify-end w-full'>about</span>
              </Link>
              <div className="medium-font gap-5 flex leading-[0.95] transition-all duration-300">
                <span className='scale-75 normal-font transition-all duration-300'>02</span> 
                <span className='shrink-text flex flex-col justify-end w-full'>journal</span>
              </div>
              <Link href="/projects" onClick={handleNavigation('/projects')} >
              <div className="medium-font gap-5 flex leading-[0.95] transition-all duration-300">
                <span className='scale-75 normal-font transition-all duration-300'>03</span> 
                <span className='shrink-text flex flex-col justify-end w-full'>projects</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex justify-between w-[15%]"
            style={{
              fontSize: 'clamp(0.5rem, 0.75vw, 100rem)',
              gap: 'clamp(0.5rem, 0.5vw, 100rem)',
            }}
          >
            <div className="flex-col flex"
              style={{
                gap: 'clamp(0.5rem, 0.5vw, 100rem)',
              }}
            >
              <Link href="https://x.com/heetprox" target='_blank'> 
              <div className="flex gap-5 medium-font transition-all duration-300 leading-[0.95]" 
                  style={{ fontSize: 'clamp(0.5rem, 0.75vw, 100rem)' }}>
                <span className='scale-75 normal-font transition-all duration-300'>04</span>  
                <span className='shrink-text flex flex-col justify-end w-full'>twitter</span>
              </div>
              </Link>
              <Link href="https://www.instagram.com/heetprox" target='_blank'> 
              <div className="flex gap-5 medium-font transition-all duration-300 leading-[0.95]" 
                  style={{ fontSize: 'clamp(0.5rem, 0.75vw, 100rem)' }}>
                <span className='scale-75 normal-font transition-all duration-300'>05</span> 
                <span className='shrink-text flex flex-col justify-end w-full'>instagram</span>
              </div>
              </Link>
              <Link href="https://www.linkedin.com/in/heetvavadiya/" target='_blank'> 
              <div className="flex gap-5 medium-font transition-all duration-300 leading-[0.95]" 
                  style={{ fontSize: 'clamp(0.5rem, 0.75vw, 100rem)' }}>
                <span className='scale-75 normal-font transition-all duration-300'>06</span> 
                <span className='shrink-text flex flex-col justify-end w-full'>linkedin</span>
              </div>
              </Link>
            </div>

            <div className="flex-col flex justify-end items-end"
              style={{
                gap: 'clamp(0.5rem, 0.5vw, 100rem)',
              }}
            > 
              <div className="flex gap-5 normal-font transition-all duration-300 leading-[0.95] shrink-text w-full" 
                  style={{ fontSize: 'clamp(0.5rem, 0.75vw, 100rem)' }}>design</div>
              <div className="flex gap-5 medium-font transition-all duration-300 leading-[0.95] shrink-text w-full" 
                  style={{ fontSize: 'clamp(0.5rem, 0.75vw, 100rem)' }}>feint</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bar