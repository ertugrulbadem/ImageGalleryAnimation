"use client";
import Image from "next/image";
import Image1 from "@/public/images/1.jpg";
import Image2 from "@/public/images/2.jpg";
import Image3 from "@/public/images/3.jpg";
import Image4 from "@/public/images/4.PNG";
import Image5 from "@/public/images/5.PNG";
import Image7 from "@/public/images/7.PNG";
import Image8 from "@/public/images/8.PNG";
import Image9 from "@/public/images/9.PNG";
import Image10 from "@/public/images/10.PNG";
//Parallax için kullanıcaz
import { useTransform, useScroll, motion} from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/useDimension";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image7,
  Image8,
  Image9,
  Image10,
];

export default function Home() {

  const container = useRef();
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end','end start'],//Animasyon ne zaman başlayıp bitsin diyoruz ilk tırnak başlangıç ikinci tırnak durmasını
  })
  const y = useTransform(scrollYProgress, [0,1], [0, height * 2]);//1000 olan ne kadar hareket hızı olacağını belirliyoruz
  const y2 = useTransform(scrollYProgress, [0,1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0,1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0,1], [0, height * 3]);
  useEffect(()=>{
    
  const lenis = new Lenis();

  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  },[])
  
  return (
    <>
    <main className="main">
      <div className="spacer"></div>
    <div ref={container} className="gallery">
    <Column images={[images[0], images[1], images[2]]} y={y}/>
    <Column images={[images[3], images[4], images[5]]} y={y2}/>
    <Column images={[images[6], images[7], images[8]]} y={y3}/>
    <Column images={[images[3], images[1], images[2]]} y={y4}/>
    </div>
    <div className="spacer"></div>
    </main>
    </>
  )
}

const Column = ({images, y=0}) =>{
  return(
    <motion.div style={{y}} className="column">
      {images.map( (src, index) =>{
        return(
          <div key={index} className="imageContainer">
            <Image src={src} fill alt="image"/>
          </div>
        )
      })}
    </motion.div>
  )
}
