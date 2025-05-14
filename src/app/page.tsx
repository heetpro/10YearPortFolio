'use client'

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef, useState } from "react";
import Lenis from '@studio-freight/lenis';
import Experiment from "@/components/Experiment";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Dynamic 3D effect based on mouse position
  const rotateY = -25 + (mousePosition.x * 5); // -27.5 to -22.5
  const rotateX = -10 + (mousePosition.y * 5); // -12.5 to -7.5
  const skewY = 10 + (mousePosition.x * 2);   // 9 to 11
  const skewX = 5 + (mousePosition.y * 2);    // 4 to 6

  return (
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
     <Experiment />
    </ReactLenis>
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
