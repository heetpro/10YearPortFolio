import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const data = [
    // {
    //     time1: "2025",
    //     name: "AMOURIS",
    //     name2: "CO.",
    // },
    {
        time1: "2025",
        name: "REPIXELX",
        name2: "STUDIO",
        link: "/work/repixelx",
    },
    // {
    //     time1: "2025",
    //     name: "THE SECRET",
    //     name2: "COMAPNY",
    // },
    {
        time1: "2025",
        name: "AGROFIX",
        name2: "",
        link: "/work/agrofix",
    },
]

const Experiment = () => {
    const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
    const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
    
    useEffect(() => {
        // Ensure the 3D transform is applied to all containers
        containerRefs.current.forEach((ref) => {
            if (ref) {
                // Force a repaint to apply 3D transformations
                ref.style.transform = 'rotateY(-45deg) translateZ(0) scale(1)';
            }
        });
    }, []);

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
  
    const handleNavigation = (path: string, index: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      
      // Focus the link and apply the rotation
      const linkElement = linkRefs.current[index];
      if (linkElement) {
        linkElement.focus();
      }
      
      
      // Navigate after a delay to allow the transition to be visible
      setTimeout(() => {
        router.push(path, {
          onTransitionReady: triggerPageTransition,
        });
      }, 500);
    };
  



    return (
        <div className="home-page  bg-[#FFF]">
            <div className={` h-full overflow-x-hidden text-black parallaxPerspective transition-all select-none duration-300 overflow-y-auto  stagePerspective fixed-perspective-origin`}>
                <div className="stageContainer w-full h-full" 
                    style={{ 
                        height: 'auto', 
                        position: 'relative',
                        paddingBottom: '50px' // Add some padding at the bottom
                    }}>
                    <main className="stage h-full w-full"
                        style={{
                            transform: 'translate3d(0, 0, 0)',
                        }}
                    >
                        <ul className='projects h-full w-full'>
                            {data.map((item, index) => (
                                <li className="projectsLi w-full h-fit " key={index}>
                                    <div
                                        ref={(el) => { containerRefs.current[index] = el; }}
                                        className=" w-full  h-full projectContainer"
                                        style={{
                                            transformOrigin: 'right center',
                                            transformStyle: 'preserve-3d',
                                            willChange: 'transform',
                                        }}
                                    >
                                        {/* <Copy delay={index + 0.1}> */}
                                        <Link 
                                            href={item.link} 
                                            onClick={handleNavigation(item.link, index)} 
                                            className='flex druk-super w-full justify-end focus:outline-none'
                                            tabIndex={0}
                                            ref={(el) => { linkRefs.current[index] = el; }}
                                        >

                                            <div className="flex w-full flex-col  hover:text-white has-focus-within:text-white focus-within:text-white items-end text-black transition-all duration-300"
                                                style={{
                                                    fontSize: 'clamp(3.4rem, 10vw, 100rem)',
                                                    lineHeight: '0.85',
                                                }}>
                                                <div className='druk-super text-right  tracking-wide uppercase w-[130%] transition-all duration-300 '
                                                    style={{
                                                        WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
                                                    }}>


                                                    {/* <div className='flex druk-so  text-black  font-light '
                                                        style={{
                                                            fontSize: 'clamp(0.5rem, 1vw, 100rem)',

                                                        }}>
                                                        {item.time1}

                                                        <span className='text-[#fff]'
                                                            style={{
                                                                fontSize: 'clamp(1rem, 10vw, 100rem)',
                                                                lineHeight: '0.8',
                                                                WebkitTextStroke: '0px #000000',
                                                                textShadow: '-4px 0px 0px #000000',
                                                            }}
                                                        >
                                                            {"/"}

                                                        </span>
                                                    </div> */}

                                                    {item.name}</div>
                                                <div className='druk-super tracking-wide uppercase transition-all duration-300 '
                                                    style={{
                                                        WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
                                                    }}>{item.name2}</div>
                                            </div>
                                        </Link>
                                        {/* </Copy> */}
                                    </div>

                                </li>
                            ))}





                        </ul>



                    </main>

                </div>
            </div>
        
        </div>

    )
}

export default Experiment