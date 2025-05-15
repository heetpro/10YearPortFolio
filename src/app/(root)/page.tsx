'use client'

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Experiment from "@/components/Experiment";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { UseRevealer } from "@/hooks/useRevealer";

let isInitialLoad = true;


export default function Home() {
  UseRevealer();
  

  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(
    () => {
      if (showPreloader) {
        const tl = gsap.timeline({
          onComplete: () => setShowPreloader(false),
        });

        tl.to(progressBarRef.current, {
          scaleX: 1,
          duration: 4,
          ease: "power1.inOut",
        });

        tl.set(progressBarRef.current, { transformOrigin: "right" }).to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
          }
        );

        tl.to(preloaderRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "hop-main",
        });
      }
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  

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

{showPreloader && (
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      )}
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
