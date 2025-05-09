import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const data =[
    {
        time1: "2024",
        time2: "2025",
        name: "RepiexlX",
        name2: "Studio",
    },
    {
        time1: "2024",
        time2: "2025",
        name: "THE",
        name2: "BRIGADE",
    },
        {
            time1: "2024",
            time2: "2025",
            name: "PUSH",
            name2: "",
        },
        {
            time1: "2024",
            time2: "2025",
            name: "ONX MAPS",
            name2: "Studio",
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
        <div className="home-page">
            <div className='h-[100vh] overflow-x-hidden text-black parallaxPerspective overflow-y-auto perspective-origin-tt-bb stagePerspective'>
                <div className="stageContainer h-[100vh]">
                    <main className="stage"
                        style={{
                            transform: 'translate3d(0, 0, 0)',
                        }}
                    >
                        <ul className='projects'>
                            {data.map((item, index) => (
                            <li className="projectsLi" key={index}>
                                <div 
                                    ref={containerRef}
                                    className="projectContainer"
                                    style={{
                                        transform: 'rotateY(-45deg) translateZ(0) scale(1)',
                                        transformOrigin: 'right center',
                                        transformStyle: 'preserve-3d',
                                        willChange: 'transform',
                                    }}
                                >
                                    <Link href="/" className='flex druk-super w-full justify-end'>
                                        <div className='flex text-black'
                                            style={{
                                                fontSize: 'clamp(0.5rem, 0.75vw, 100rem)',
                                                marginTop: 'clamp(0.05rem, 0.85vw, 100rem)',
                                                
                                            }}>
                                            {item.time1} {"—"} {item.time2}
                                        </div>
                                        <div className="flex flex-col items-end hover:text-transparent"
                                            style={{
                                                fontSize: 'clamp(1rem, 10vw, 100rem)',
                                                lineHeight: '0.85',
                                                perspective: '500px',
                                            }}>
                                            <div className='druk-super tracking-wide uppercase transition-all duration-300'
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

                                                {item.name}</div>
                                            <div className='druk-super tracking-wide uppercase transition-all duration-300'
                                                style={{
                                                    WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
                                                }}>{item.name2}</div>
                                        </div>
                                    </Link>
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
