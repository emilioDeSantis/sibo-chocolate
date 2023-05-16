// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// const ParallaxPage = () => {
//     const parallaxRef = useRef([]);

//     const onScroll = () => {
//         parallaxRef.current.forEach((ref, index) => {
//             if (ref) {
//                 let translateY = 0;
//                 switch (index) {
//                     case 0:
//                         translateY = (window.pageYOffset * 75) / 100;
//                         break;
//                     case 1:
//                         translateY = (window.pageYOffset * 72) / 100;
//                         break;
//                     case 2:
//                         translateY = (window.pageYOffset * 66) / 100;
//                         break;
//                     case 3:
//                         translateY = (window.pageYOffset * 60) / 100;
//                         break;
//                     case 4:
//                         translateY = (window.pageYOffset * 50) / 100;
//                         break;
//                     case 5:
//                         translateY = (window.pageYOffset * -25) / 100;
//                         if (
//                             window.pageYOffset < 100
//                         ) {
//                             ref.style.opacity = "100%";
//                         } else {
//                             ref.style.opacity = "0%";
//                         }
//                         break;
//                     case 6:
//                         translateY = (window.pageYOffset * 75) / 100;
//                         if (
//                             window.pageYOffset > 500 &&
//                             window.pageYOffset < 1400
//                         ) {
//                             ref.style.opacity = "100%";
//                         } else {
//                             ref.style.opacity = "0%";
//                         }
//                         break;
//                     default:
//                         break;
//                 }
//                 ref.style.transform = `translateY(${translateY}px)`;
//             }
//         });
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     return (
//         <div
//             style={{
//                 height: "1000vw",
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             <div
//                 ref={(ref) => (parallaxRef.current[0] = ref)}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     width: "100vw",
//                     height: "517vw",
//                     willChange: 'transform',
//                 }}
//             >
//                 <Image
//                     src="/sky.png"
//                     alt="sky"
//                     fill
//                     sizes="100vw"
//                     priority
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>
//             <div
//                 ref={(ref) => (parallaxRef.current[1] = ref)}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     width: "100vw",
//                     height: "517vw",
//                     willChange: 'transform',
//                 }}
//             >
//                 <Image
//                     src="/volcano.png"
//                     alt="sky"
//                     fill
//                     sizes="100vw"
//                     priority
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>
//             <div
//                 ref={(ref) => (parallaxRef.current[2] = ref)}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     width: "100vw",
//                     height: "517vw",
//                 }}
//             >
//                 <Image
//                     src="/hills.png"
//                     alt="sky"
//                     fill
//                     sizes="100vw"
//                     priority
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>
//             <div
//                 ref={(ref) => (parallaxRef.current[3] = ref)}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     width: "100vw",
//                     height: "517vw",
//                 }}
//             >
//                 <Image
//                     src="/hills 2.png"
//                     alt="sky"
//                     fill
//                     sizes="100vw"
//                     priority
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>
//             <div
//                 ref={(ref) => (parallaxRef.current[4] = ref)}
//                 style={{
//                     position: "absolute",
//                     top: "60vw",
//                     width: "100vw",
//                     height: "517vw",
//                 }}
//             >
//                 <Image
//                     src="/forrest.png"
//                     alt="sky"
//                     fill
//                     sizes="100vw"
//                     priority
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>

//             <div
//                 ref={(ref) => (parallaxRef.current[5] = ref)}
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     width: "100%",
//                     height: "200%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     paddingInline: "4vw",
//                     transition: "opacity 0.3s ease-in-out",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "40vw",
//                         width: "100%",
//                         textAlign: "center",
//                         fontSize: "20vw",
//                         fontWeight: "900",
//                         color: "#441812",
//                         lineHeight: "100%",
//                     }}
//                 >
//                     FRESH FROM THE SOURCE
//                 </div>
//                 <div
//                     style={{
//                         marginTop: "4vw",
//                         width: "100%",
//                         textAlign: "center",
//                         fontSize: "5vw",
//                         fontWeight: "700",
//                         color: "#441812",
//                     }}
//                 >
//                     Costa Rican Origin Chocolate
//                 </div>
//                 {/* <div
//                     style={{
//                         marginTop: "160vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         // paddingInline: "4vw",
//                         paddingBlock: "6vw",
//                         width: "100%",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "4vw",
//                             fontWeight: "400",
//                             color: "black",
//                             lineHeight: "100%",
//                             textTransform: "uppercase",
//                         }}
//                     >
//                         Rich Soil
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "5vw",
//                             fontWeight: "600",
//                             color: "black",
//                             lineHeight: "140%",
//                             marginTop: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Enriched by the volcanic ash, teems with rare nutrients
//                         that nourish and sustain.
//                     </div>
//                 </div>
//                 <div
//                     style={{
//                         marginTop: "160vw",
//                         width: "100%",
//                         textAlign: "center",
//                         fontSize: "8vw",
//                         fontWeight: "900",
//                         color: "white",
//                         lineHeight: "100%",
//                         textTransform: "uppercase",
//                     }}
//                 >
//                     Forests made of chocolate
//                 </div> */}
//             </div>

//             <div
//                 ref={(ref) => (parallaxRef.current[6] = ref)}
//                 style={{
//                     position: "absolute",
//                     // top: "200vw",
//                     top: "50vw",
//                     width: "100vw",
//                     height: "100vh",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     transition: "opacity 0.3s ease-in-out",
//                 }}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingInline: "4vw",
//                         paddingBlock: "6vw",
//                         width: "100%",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "10vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "12vw",
//                             letterSpacing: "0.01em",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         The soil, enriched by the volcanic ash, teems with rare
//                         nutrients that nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "10vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "10vw",
//                             letterSpacing: "0.01em",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Learn More
//                     </div>
//                 </div>
//             </div>
//             <div
//                 ref={(ref) => (parallaxRef.current[6] = ref)}
//                 style={{
//                     position: "absolute",
//                     // top: "200vw",
//                     top: "50vw",
//                     width: "100vw",
//                     height: "100vh",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     transition: "opacity 0.3s ease-in-out",
//                     willChange: 'transform',
//                 }}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingInline: "4vw",
//                         paddingBlock: "6vw",
//                         width: "100%",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "10vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "12vw",
//                             letterSpacing: "0.01em",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         The soil, enriched by the volcanic ash, teems with rare
//                         nutrients that nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "10vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "10vw",
//                             letterSpacing: "0.01em",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Learn More
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ParallaxPage;

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import ParallaxDiv from "./ParallaxDiv";
// import Line from "@/components/Line";

// const ParallaxPage = () => {
//     return (
//         <div
//             style={{
//                 height: "4000vw",
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.4}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "600vw",
//                     }}
//                 >
//                     <Image
//                         src="/sky.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv marginTop={"30vw"} scrollSpeed={0.5}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "517vw",
//                     }}
//                 >
//                     <Image
//                         src="/volcano.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"330vw"} scrollSpeed={0.5}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/forest back.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"30vw"} scrollSpeed={0.6}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "517vw",
//                     }}
//                 >
//                     <Image
//                         src="/hills.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv
//                 marginTop={"60vw"}
//                 scrollSpeed={1}
//                 fadeInThreshold={-100}
//                 fadeOutThreshold={20}
//             >
//                 <div
//                     style={{
//                         width: "100vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "flex-start",
//                         paddingInline: "4vw",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             textAlign: "center",
//                             fontSize: "14vw",
//                             fontWeight: "900",
//                             color: "#441812",
//                             lineHeight: "100%",
//                         }}
//                     >
//                         FRESH FROM THE SOURCE
//                     </div>
//                     <div
//                         style={{
//                             marginTop: "4vw",
//                             width: "100%",
//                             textAlign: "center",
//                             fontSize: "5vw",
//                             fontWeight: "700",
//                             color: "#441812",
//                         }}
//                     >
//                         Costa Rican Origin Chocolate
//                     </div>
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv
//                 marginTop={"120vw"}
//                 scrollSpeed={0.5}
//                 fadeInThreshold={100}
//                 fadeOutThreshold={260}
//             >
//                 <div
//                     style={{
//                         width: "100vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "flex-start",
//                         paddingInline: "4vw",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             textAlign: "center",
//                             fontSize: "12vw",
//                             fontWeight: "900",
//                             lineHeight: "100%",
//                             textTransform: 'uppercase',
//                         }}
//                     >
//                         Born from Costa Rica's Volcanic Womb
//                     </div>
//                 </div>
//             </ParallaxDiv>

//             {/* <ParallaxDiv
//                 marginTop={"100vw"}
//                 scrollSpeed={0.24}
//                 fadeInThreshold={130}
//                 fadeOutThreshold={700}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv
//                 marginTop={"100vw"}
//                 scrollSpeed={0.24}
//                 fadeInThreshold={135}
//                 fadeOutThreshold={700}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             color: "#0000",
//                             // background: '#aed'
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "9vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             // marginBottom: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Rich Volcanic Soil
//                     </div>
//                     <div
//                         style={{
//                             MaxWidth: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "8vw",
//                             letterSpacing: "0.01em",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth The soil, enriched
//                         by the volcanic ash, teems with rare nutrients that
//                         nourish and sustain. Teems with rare nutrients that
//                         nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             marginInline: "4vw",
//                             fontSize: "7vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "6vw",
//                             letterSpacing: "0.01em",
//                             textAlign: "end",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         {"Learn More --->"}
//                     </div>
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv
//                 marginTop={"100vw"}
//                 scrollSpeed={0.24}
//                 fadeInThreshold={140}
//                 fadeOutThreshold={700}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "9vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // marginBottom: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Rich Volcanic Soil
//                     </div>
//                     <div
//                         style={{
//                             MaxWidth: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "8vw",
//                             letterSpacing: "0.01em",
//                             marginInline: "4vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth The soil, enriched
//                         by the volcanic ash, teems with rare nutrients that
//                         nourish and sustain. Teems with rare nutrients that
//                         nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             marginInline: "4vw",
//                             fontSize: "7vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "6vw",
//                             letterSpacing: "0.01em",
//                             textAlign: "end",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         {"Learn More --->"}
//                     </div>
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv
//                 marginTop={"100vw"}
//                 scrollSpeed={0.24}
//                 fadeInThreshold={140}
//                 fadeOutThreshold={700}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "#343443",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "9vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // marginBottom: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Rich Volcanic Soil
//                     </div>
//                     <div
//                         style={{
//                             MaxWidth: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "8vw",
//                             letterSpacing: "0.01em",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth The soil, enriched
//                         by the volcanic ash, teems with rare nutrients that
//                         nourish and sustain. Teems with rare nutrients that
//                         nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             marginInline: "4vw",
//                             fontSize: "7vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "6vw",
//                             letterSpacing: "0.01em",
//                             textAlign: "end",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         {"Learn More --->"}
//                     </div>
//                 </div>
//             </ParallaxDiv> */}

//             <ParallaxDiv marginTop={"275vw"} scrollSpeed={0.7}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "100vw",
//                     }}
//                 >
//                     <Image
//                         src="/hills 2b.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             {/* <ParallaxDiv marginTop={"200vw"} scrollSpeed={0.2}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "170vw",
//                     }}
//                 >
//                     <Image
//                         src="/farm3.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv> */}
//             {/* <ParallaxDiv marginTop={"350vw"} scrollSpeed={0.5}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "150vw",
//                     }}
//                 >
//                     <Image
//                         src="/trees2.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv> */}
//             <ParallaxDiv marginTop={"280vw"} scrollSpeed={0.83}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/foliage10.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"340vw"} scrollSpeed={0.20}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/background2.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             {/* <ParallaxDiv marginTop={"420vw"} scrollSpeed={0.8}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/tree bottoms.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv> */}

//             <ParallaxDiv marginTop={"440vw"} scrollSpeed={0.30}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "300vw",
//                     }}
//                 >
//                     <Image
//                         src="/trees4.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"500vw"} scrollSpeed={0.36}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/treetop2.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"400vw"} scrollSpeed={0.6}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/trunks1.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"440vw"} scrollSpeed={0.8}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "100vw",
//                     }}
//                 >
//                     <Image
//                         src="/foliage bottom 3.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv marginTop={"520vw"} scrollSpeed={0.5}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/foliage3.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv marginTop={"660vw"} scrollSpeed={0.6}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/foliage2.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"390vw"} scrollSpeed={1}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "200vw",
//                     }}
//                 >
//                     <Image
//                         src="/foliage11.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv
//                 marginTop={"780vw"}
//                 scrollSpeed={0.7}
//                 fadeInThreshold={930}
//                 fadeOutThreshold={1300}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "white",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         02
//                     </div>
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv
//                 marginTop={"780vw"}
//                 scrollSpeed={0.7}
//                 fadeInThreshold={935}
//                 fadeOutThreshold={1300}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "white",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "9vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             // marginBottom: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Lush Rain Forests
//                     </div>
//                     {/* <div
//                         style={{
//                             height: "4vw",
//                         }}
//                     >
//                         <Line color="#343443"></Line>
//                     </div> */}
//                     <div
//                         style={{
//                             MaxWidth: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "8vw",
//                             letterSpacing: "0.01em",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth The soil, enriched
//                         by the volcanic ash, teems with rare nutrients that
//                         nourish and sustain. Teems with rare nutrients that
//                         nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             marginInline: "4vw",
//                             fontSize: "7vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "6vw",
//                             letterSpacing: "0.01em",
//                             textAlign: "end",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         {"Learn More --->"}
//                     </div>
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv
//                 marginTop={"780vw"}
//                 scrollSpeed={0.7}
//                 fadeInThreshold={940}
//                 fadeOutThreshold={1300}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "white",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "9vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // marginBottom: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Rich Volcanic Soil
//                     </div>
//                     {/* <div
//                         style={{
//                             height: "4vw",
//                         }}
//                     >
//                         <Line color="#343443"></Line>
//                     </div> */}
//                     <div
//                         style={{
//                             MaxWidth: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "8vw",
//                             letterSpacing: "0.01em",
//                             marginInline: "4vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth The soil, enriched
//                         by the volcanic ash, teems with rare nutrients that
//                         nourish and sustain. Teems with rare nutrients that
//                         nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             marginInline: "4vw",
//                             fontSize: "7vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "6vw",
//                             letterSpacing: "0.01em",
//                             textAlign: "end",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         {"Learn More --->"}
//                     </div>
//                 </div>
//             </ParallaxDiv>
//             <ParallaxDiv
//                 marginTop={"780vw"}
//                 scrollSpeed={0.7}
//                 fadeInThreshold={940}
//                 fadeOutThreshold={1300}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "5vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         // background: "#ffffff",
//                         // borderRadius: '4vw',
//                         paddingBlock: "6vw",
//                         width: "100vw",
//                         color: "white",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "18vw",
//                             fontWeight: "200",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             marginBottom: "4vw",
//                             letterSpacing: "0.24em",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         01
//                     </div>
//                     <div
//                         style={{
//                             width: "100%",
//                             fontSize: "9vw",
//                             fontWeight: "900",
//                             lineHeight: "108%",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // marginBottom: "2vw",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Rich Volcanic Soil
//                     </div>
//                     {/* <div
//                         style={{
//                             height: "4vw",
//                         }}
//                     >
//                         <Line color="#343443"></Line>
//                     </div> */}
//                     <div
//                         style={{
//                             MaxWidth: "100%",
//                             fontSize: "4.5vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "8vw",
//                             letterSpacing: "0.01em",
//                             marginInline: "4vw",
//                             color: "#0000",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         Nurtured from the Depths of the Earth The soil, enriched
//                         by the volcanic ash, teems with rare nutrients that
//                         nourish and sustain. Teems with rare nutrients that
//                         nourish and sustain.
//                     </div>
//                     <div
//                         style={{
//                             marginInline: "4vw",
//                             fontSize: "7vw",
//                             fontWeight: "400",
//                             lineHeight: "124%",
//                             marginTop: "6vw",
//                             letterSpacing: "0.01em",
//                             textAlign: "end",
//                             // textTransform: "uppercase",
//                         }}
//                     >
//                         {"Learn More --->"}
//                     </div>
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"860vw"} scrollSpeed={0.7}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "400vw",
//                     }}
//                 >
//                     <Image
//                         src="/bean.png"
//                         alt="sky"
//                         fill
//                         sizes="100vw"
//                         priority
//                         style={{
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             </ParallaxDiv>

//             <ParallaxDiv marginTop={"1800vw"} scrollSpeed={1}>
//                 <div
//                     style={{
//                         position: "relative",
//                         width: "100vw",
//                         height: "400vw",
//                         background: '#add',
//                     }}
//                 >
//                 </div>
//             </ParallaxDiv>

//         </div>
//     );
// };

// export default ParallaxPage;

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ParallaxDiv from "./ParallaxDiv";
import Line from "@/components/Line";

const ParallaxPage = () => {
    return (
        <div
            style={{
                height: "4000vw",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <ParallaxImage
                marginTop={"0vw"}
                scrollSpeed={0.4}
                src="/sky x2.png"
                height="260vw"
            />
            <ParallaxImage
                marginTop={"190vw"}
                scrollSpeed={0.5}
                src="/volcano x2.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"270vw"}
                scrollSpeed={0.6}
                src="/hills x4.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"330vw"}
                scrollSpeed={0.7}
                src="/hills 2 x3.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"370vw"}
                scrollSpeed={0.8}
                src="/foliage x7.png"
                height="300vw"
            />

            <ParallaxImage
                marginTop={"410vw"}
                scrollSpeed={0.9}
                src="/foliage 2 x2.png"
                height="300vw"
            />

            <ParallaxDiv
                marginTop={"300vw"}
                scrollSpeed={1}
                // fadeInThreshold={-100}
                // fadeOutThreshold={20}
            >
                <div
                    style={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingInline: "4vw",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            fontSize: "14vw",
                            fontWeight: "900",
                            color: "#441812",
                            lineHeight: "100%",
                        }}
                    >
                        FRESH FROM THE SOURCE
                    </div>
                    <div
                        style={{
                            marginTop: "4vw",
                            width: "100%",
                            textAlign: "center",
                            fontSize: "5vw",
                            fontWeight: "700",
                            color: "#441812",
                        }}
                    >
                        Costa Rican Origin Chocolate
                    </div>
                </div>
            </ParallaxDiv>


            <ParallaxDiv
                marginTop={"460vw"}
                scrollSpeed={1}
                // fadeInThreshold={70}
                // fadeOutThreshold={250}
            >
                <div
                    style={{
                        // width: "100%",
                        fontSize: "11vw",
                        fontWeight: "900",
                        lineHeight: "120%",
                        marginInline: "8vw",
                        letterSpacing: "0.05em",
                        // textAlign: 'center',
                        color: "#fdb",
                        // textTransform: "uppercase",
                    }}
                >
                    {"Born from Costa Rica's Volcanic Womb"}
                </div>
            </ParallaxDiv>



            <ParallaxDiv
                marginTop={"610vw"}
                scrollSpeed={1}
                // fadeInThreshold={70}
                // fadeOutThreshold={250}
            >
                <div
                    style={{
                        // width: "100%",
                        fontSize: "11vw",
                        fontWeight: "900",
                        lineHeight: "120%",
                        marginInline: "8vw",
                        letterSpacing: "0.05em",
                        // textAlign: 'center',
                        color: "#bef",
                        // textTransform: "uppercase",
                    }}
                >
                    {"Amidst the Rainforest's Heartbeat"}
                </div>
            </ParallaxDiv>
            {/* <div style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                paddingInline: '3vw',

            }}>
                <div
                    style={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingInline: "4vw",
                        marginTop: '300vw',
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            fontSize: "14vw",
                            fontWeight: "900",
                            color: "#441812",
                            lineHeight: "100%",
                        }}
                    >
                        FRESH FROM THE SOURCE
                    </div>
                    <div
                        style={{
                            marginTop: "4vw",
                            width: "100%",
                            textAlign: "center",
                            fontSize: "5vw",
                            fontWeight: "700",
                            color: "#441812",
                        }}
                    >
                        Costa Rican Origin Chocolate
                    </div>
                </div>
            </div> */}
        </div>
    );
};

const ParallaxImage = ({ marginTop, scrollSpeed, src, height }) => {
    return (
        <ParallaxDiv marginTop={marginTop} scrollSpeed={scrollSpeed}>
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: height,
                }}
            >
                <Image
                    src={src}
                    alt="sky"
                    fill
                    sizes="40vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
        </ParallaxDiv>
    );
};

export default ParallaxPage;
