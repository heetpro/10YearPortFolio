'use client'

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import Experiment from "@/components/Experiment";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { UseRevealer } from "@/hooks/useRevealer";
export default function Home() {
  UseRevealer();
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );

      if (index < counts.length) {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1 + 1
        );
      }
    });

    tl.to(".spinner", {
      opacity: 0,
      duration: 0.3,
    });

    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 1,
      },
      "<"
    );

    tl.to(".divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () => {
        gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 });
      },
    });

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 1,
      delay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-100%",
        duration: 1,
      },
      "<"
    );

    tl.to(
      ".block",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
        onStart: () => {
          gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
        },
      },
      "<"
    );

    tl.to(
      [".nav", ".line h1", ".line p"],
      {
        y: "0%",
        duration: 1.5,
        stagger: 0.2,
      },
      "<"
    );

    tl.to(
      [".cta", ".cta-icon"],
      {
        scale: 1,
        duration: 1.5,
        stagger: 0.75,
        delay: 0.75,
      },
      "<"
    );

    tl.to(
      ".cta-label p",
      {
        y: "0%",
        duration: 1.5,
        delay: 0.5,
      },
      "<"
    );
  });
  

  return (
    <>
    <div className="revealer"></div>
    <ReactLenis 
      root 
      options={{ 
        duration: 1.5,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        syncTouch: true,
        infinite: false
      }} 
      className="scrollbar-none"
    >


<div className="loader">
        <div className="overlay">
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="intro-logo">
          <div className="word " id="word-1">
            <h1>
              <span className="druk-medium">HEET</span>
            </h1>
          </div>
          <div className="word druk-medium" id="word-2">
            <h1>PRO{"."}</h1>
          </div>
        </div>



        <div className="counter druk-medium">
          
          
          {/* <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>9</h1>
            </div>
          </div> */}
        </div>
      </div>
             <div className="relative z-10">
         <Experiment />
       </div>
    </ReactLenis>
    </>
  );
}



// <div className="perspective-container" style={{ 
//   perspective: 'clamp(400rem, 10vw, 1000rem)',
//   perspectiveOrigin: 'center center',
//   width: '100%',
//   height: '100%'
// }}>
//   <div className="bg-main w-full min-h-screen flex justify-center transform-3d" style={{
//   }}>
//     <div className="flex w-full overflow-y-visible flex-col"
//     style={{
//       marginTop: 'clamp(0.5rem, 15vw, 100rem) ',
//       marginRight: 'clamp(0.5rem, 5vw, 100rem) ',
//       marginBottom: 'clamp(0.5rem, 20vw, 100rem) ',
//     }}
//     >
      
//       <div className="w-full h-fit" style={{ zIndex: 1000 }}>
//         <Company name="Repixelx" name2="Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={1} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 980 }}>
//         <Company name="Agrofix" name2="" time1="" time2="2024" link="https://www.sheet.com" index={2} />
//       </div>

//       <div className="w-full h-fit" style={{ zIndex: 40 }}>
//         <Company name="GOOGLE" name2="" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 30 }}>
//         <Company name="APPLE" name2="MUSIC" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 20 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       {/* Additional Company components */}
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//       <div className="w-full h-fit" style={{ zIndex: 10 }}>
//         <Company name="Repixel" name2="X Studio" time1="2024" time2="PRESENT" link="https://www.sheet.com" index={2} />
//       </div>
//     </div>
//   </div>
// </div>
