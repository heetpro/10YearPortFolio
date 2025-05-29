'use client'

import React from 'react'
import { UseRevealer } from '@/hooks/useRevealer'
import Image from 'next/image';
const page = () => {

  UseRevealer();
  return (
    <>
    <div className='revealer'>
    </div>

<div className="flex flex-col  justify-center h-full items-center">

    <div className="flex flex-col justify-center w-3/4 h-full items-center"
 style={{
  padding: 'calc(7vw + 7vh) 5vw 3vw 5vw',
  
  fontSize: 'clamp(2rem, 6vw, 100rem)',
  lineHeight: '0.85',
}}
  >
    <h1 className='druk-super relative z-10  text-right text-transparent uppercase'
       style={{
        WebkitTextStroke: 'clamp(0.005rem, 0.15vw, 1rem) #000000',
    }}
    >Projects</h1>

</div>
    <div className=" mx-auto px-4 normal-font py-8 flex justify-center" 

    >
      <div className="grid grid-cols-1 w-[90%] md:grid-cols-2 "
         style={{
            margin: '0 0 10vw',
          gap: 'clamp(1rem, 1vw, 200rem)',
          }}
      >
        {projects.map((project) => (
          <div key={project.id} className="rounded-xl h-fit overflow-hidden "
          style={{
            margin: '0 0 2vw',
          }}
          >
            <div className={`bg-gradient-to-r flex w-full h-2/3 flex-col justifly-end p-10 items-center from-black to-neutral-600`}>
                <div className='w-[95%] cursor-pointer h-[100%] aspect-video flex justify-end flex-col '>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={400}
                height={200}
                className="rounded-md aspect-video w-full h-[95%]"
              />
            </div>
            </div>
            <div className="flex flex-col justify-between h-1/3"
            style={{
                gap: 'clamp(0.5rem, 0.5vw, 200rem)',
              // padding: 'clamp(1rem, 0.75vw, 200rem)',
            fontSize: 'clamp(1rem, 2vw, 200rem)',
            }}
            >
              <h2 className=" druk-medium uppercase font-bold">{project.title}</h2>
              {/* <p className="mt-2 text-gray-700">
                {project.description}
              </p> */}
              {/* <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span key={index}
                  style={{
                    fontSize: 'clamp(0.75rem, 0.75vw, 200rem)',
                    padding: 'clamp(0.5rem, 0.5vw, 200rem)',
                  }}
                  className=" bg-gradient-to-tl from-black text-white to-gray-400 rounded-md">{tag}</span>
                ))}
              </div> */}
             
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default page

    const projects = [
      
      {
        id: 13,
        title: "Deep Patel - Portfolio",
        description: "A Portfolio Website for Deep Patel.",
        tags: ["Next.js", "PostgreSQL", "Workers", "Redis", "Golang", "RabbitMQ", "Broker's API", "Web Scraping"],
        imageAlt: "Trading Execution Engine Screenshot",
        image: "/projects/13.png"
      },
      {
        id: 14,
        title: "Amouris Studio",
        description: "A Design Studio Website.",
        tags: ["Next.js", "PostgreSQL", "Workers", "Redis", "Golang", "RabbitMQ", "Broker's API", "Web Scraping"],
        imageAlt: "Trading Execution Engine Screenshot",
        image: "/projects/14.png"
      },
      {
        id: 1,
        title: "Kafinao store",
        description: "A Design Typography Website - inspiration from New York Times & Awwwrds Site.",
        tags: ["Next.js", "PostgreSQL", "Workers", "Redis", "Golang", "RabbitMQ", "Broker's API", "Web Scraping"],
        imageAlt: "Trading Execution Engine Screenshot",
        image: "/projects/1.png"
      },
      {
        id: 2,
        title: "PayZepp ",
     
        description: "Ongoing Project - A Crypto Payment Gateway for ETH, SOL, USDT, BTC",
        tags: ["Golang", "Cobra", "Next.js", "PostgreSQL", "Javascript", "Redis", "Golang", "RabbitMQ"],
        imageAlt: "Open Source Package Manager Screenshot",
        image: "/projects/2.png"
      },
      {
        id: 3,
        title: "Vaayu Jewels",
       
        description: "A Jewelry selling Full-stack - Ecommerce Website",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/3.png"
      },
      {
        id: 4,
        title: "Repixelx Studio",
       
        description: "Ongoing - A Designer and Developer Studio Main Site.",
        tags: ["Go", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "Helm", "PostgreSQL"],
        imageAlt: "Scalable Microservices Infrastructure Screenshot",
        image: "/projects/4.png"
      },
      {
        id: 5,
        title: "Mera Halwai",
       
        description: "Food Party Order Website.",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/5.png"
      },
      {
        id: 6,
        title: "Uniswap Clone",
       
        description: "A Uniswap Clone - maded with latest ethers v6 - A Decentralized Exchange (DEX) built on the Ethereum blockchain.",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/6.png"
      },
      {
        id: 7,
        title: "Old Portfolio",
       
        description: "A Old Portfolio Website.",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/7.png"
      },
      {
        id: 8,
        title: "Dyna - Get your project summary in seconds.",
       
        description: "A Project Summary Generator using latest Gemini 2.5 - Get your project summary in seconds.",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/8.png"
      }
      ,
      {
        id: 9,
        title: "ChatApp",
       
        description: "A Normal MERN stack Chat App.",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/9.png"
      }
      ,
      {
        id: 10,
        title: "SearchLeads - Friend's Project",
       
        description: "Friends Project - just maded UI",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/10.png"
      }
      ,
      {
        id: 11,
        title: "Feedio Friend's Project",
       
        description: "Friends Project - just maded UI",
        tags: ["Next.js", "Typescript", "PostgreSQL", "Golang", "Redis", "Shadcn UI", "Magic UI", "SMTP"],
        imageAlt: "Temp Mail Service Screenshot",
        image: "/projects/11.png"
      }
      ,
    
    ];


































































