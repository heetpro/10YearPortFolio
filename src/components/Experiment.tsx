import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Copy from './Copy';

const data = [
    {
        time1: "2025",
        name: "AMOURIS",
        name2: "CO.",
    },
    {
        time1: "2025",
        name: "REPIXELX",
        name2: "STUDIO",
    },
    {
        time1: "2025",
        name: "THE SECRET",
        name2: "COMAPNY",
    },
    {
        time1: "2025",
        name: "AGROFIX",
        name2: "",
    },


]

const Experiment = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure the 3D transform is applied
        if (containerRef.current) {
            // Force a repaint to apply 3D transformations
            containerRef.current.style.transform = 'rotateY(-45deg) translateZ(0) scale(1)';
        }
    }, []);



    return (
        <div className="home-page bg-[#FFF]">
            <div className='min-h-screen h-full overflow-x-hidden text-black parallaxPerspective overflow-y-auto perspective-origin-tt-bb stagePerspective'>
                <div className="stageContainer w-full h-full" style={{ minHeight: '150vh' }}>
                    <main className="stage"
                        style={{
                            transform: 'translate3d(0, 0, 0)',
                        }}
                    >
                        <ul className='projects'>
                            {data.map((item, index) => (
                                <li className="projectsLi " key={index}>
                                    <div
                                        ref={containerRef}
                                        className=" w-full  projectContainer"
                                        style={{
                                            transformOrigin: 'right center',
                                            transformStyle: 'preserve-3d',
                                            willChange: 'transform',
                                        }}
                                    >
                                        {/* <Copy delay={index + 0.1}> */}
                                        <Link href="/" className='flex druk-super w-full justify-end'>

                                            <div className="flex w-full flex-col items-end transition-all duration-300"
                                                style={{
                                                    fontSize: 'clamp(2rem, 10vw, 100rem)',
                                                    lineHeight: '0.85',
                                                }}>
                                                <div className='druk-super  flex justify-between tracking-wide uppercase w-full transition-all duration-300 '
                                                    style={{
                                                        WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
                                                    }}>


                                                    <div className='flex medium-font text-black druk-medium font-light '
                                                        style={{
                                                            fontSize: 'clamp(0.5rem, 2vw, 100rem)',

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
                                                    </div>

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