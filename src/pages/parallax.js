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

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ParallaxDiv from "@/components/ParallaxDiv";

const ParallaxPage = () => {
    return (
        <div
            style={{
                height: "1000vw",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.2}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "517vw",
                    }}
                >
                    <Image
                        src="/sky.png"
                        alt="sky"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </ParallaxDiv>

            <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.24}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "517vw",
                    }}
                >
                    <Image
                        src="/volcano.png"
                        alt="sky"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </ParallaxDiv>

            <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.3}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "517vw",
                    }}
                >
                    <Image
                        src="/hills.png"
                        alt="sky"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </ParallaxDiv>

            <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.36}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "517vw",
                    }}
                >
                    <Image
                        src="/hills 2.png"
                        alt="sky"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </ParallaxDiv>

            <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.5}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "517vw",
                    }}
                >
                    <Image
                        src="/forrest.png"
                        alt="sky"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </ParallaxDiv>
        </div>
    );
};

export default ParallaxPage;
