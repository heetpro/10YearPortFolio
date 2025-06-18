'use client'

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Experiment from "@/components/Experiment";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { UseRevealer } from "@/hooks/useRevealer";
import { LanyardResponse } from "react-use-lanyard";
import ActivityCard from "@/components/ActivityCard";

let isInitialLoad = true;

export default function Home({ activity }: { activity: LanyardResponse | undefined }) {
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
      <div className="relative h-full z-10">
        <Experiment />
        <div className="flex fixed bottom-0 left-0 ">
          <ActivityCard userId={"1118212847613247558"} initialData={activity} />
        </div>
      </div>
    </ReactLenis>
    </>
  );
}
