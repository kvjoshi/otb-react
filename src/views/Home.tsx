import React, { useState } from "react";

import wave1 from "../assets/images/wave1.svg";
import wave2 from "../assets/images/wave2.svg";
import wave21 from "../assets/images/wave21.svg";
import resttt from "../assets/images/resttt.svg";
import pool from "../assets/images/pool1.png";
import pool1 from "../assets/images/pool1.svg";
import blob1 from "../assets/images/blob1.svg";
import pc1 from "../assets/images/g13591.webp";
import paintball from "../assets/images/paintball.webp";
import arch from "../assets/images/arch.png";
import army from "../assets/images/army.png";
import army2 from "../assets/images/army2.png";
import bully from "../assets/images/bully.png";
import rope from "../assets/images/rope.png";
import rock from "../assets/images/g56632.png";
import bumpcar from "../assets/images/g55847.png";
import pizza from "../assets/images/g127884.png";
import sizller from "../assets/images/g90143.png";
function Home() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <section className="relative w-full h-screen text-blueGray-700" style={{ backgroundImage: `url(${wave1})`,
                backgroundColor: '#cccccc',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>

                    <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                        <div className="flex flex-col w-full mb-12 text-left text-center">
                            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">Welcome To</h2>
                            <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font"> Out Of The Box </h1>
                            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">Amazement Park</h2>

                        </div>
                    </div>

            </section>
            <div className="relative w-full h-full " style={{ backgroundImage: `url(${wave2})`,
                backgroundColor: '#d9dc41',
                backgroundPosition: 'top', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: '100%', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 ">
                    <div className="text-color justify-center text-center">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l pb-36">About Us</h1>
                        <div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20 text-center">
                            <h2>list img</h2>
                        </div>

                    </div>
                </div>
                <div className="relative w-full h-full " style={{ backgroundImage: `url(${wave21})`,
                    backgroundColor: '#d9dc41',
                    backgroundPosition: 'bottom', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 ">
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l pb-20">Adventure</h1>
                            <div className="f-f-r text-xl lg:text-3xl pb-10  pt-10 xl:pt-20 text-left pl-20 flex-row grid grid-cols-3 justify-items-stretch">

                                <div className={'p-10'}>
                                    <img src={paintball} />
                                    <h2 className="text-black pt-10">Paintball</h2>
                                </div>
                                <div className={'p-10'}>
                                    <img src={army} />
                                    <h2 className="text-black pt-10">Army</h2>
                                </div>
                                <div className={'p-10'}>
                                    <img src={arch} />
                                    <h2 className="text-black pt-10">Archery</h2>
                                </div>
                                <div className={'p-10'}>
                                    <img src={army2} />
                                    <h2 className="text-black pt-10">Army Rampage</h2>
                                </div>
                                <div className={'p-10'}>
                                    <img src={rope} />
                                    <h2 className="text-black pt-10">Rope Rumble</h2>
                                </div>
                                <div className={'p-10'}>
                                    <img src={bully} />
                                    <h2 className="text-black pt-10">Bully</h2>
                                </div>
                                <div className={'p-10 justify-self-center'}>
                                    <img src={rock} />
                                    <h2 className="text-black pt-10">Wall Climbing</h2>
                                </div>
                                <div className={'p-10'}>
                                    <img src={bumpcar} />
                                    <h2 className="text-black pt-10">Rope Rumble</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="relative w-full h-full " style={{ backgroundImage: `url(${blob1})`,
                    backgroundColor: '#d9dc41',
                    backgroundPosition: 'bottom', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 " style={{ backgroundImage: `url(${pool})`,

                        backgroundPosition: 'center', /* Center the image */
                        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                        backgroundSize: 'auto', /* Resize the background image to cover the entire container */ }}>
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l pb-20">Aqua Zone</h1>

                            <section className="text-blueGray-700 ">
                                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                                    <div className="flex flex-col w-full mb-12 text-left ">
                                        <div className="w-full mx-auto lg:w-1/2">
                                            <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> A small headline to switch your visitors into users. </h1>
                                            <h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font"> A small headline to switch your visitors into users. </h2>
                                            <p className="mx-auto text-xl text-base font-medium leading-relaxed text-grey-700 "> Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Stop it. We're gonna take a little break but we'll be back in a while so, don't nobody go no where. </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20 flex-row ">
                                <div>
                                    <img src={pc1} />
                                    <h2 className="text-black f-f-r pt-10">Exclusive Pool Party</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="relative w-full h-full " style={{ backgroundImage: `url(${resttt})`,

                    backgroundPosition: 'center', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 " style={{ backgroundImage: `url(${pizza})`,

                        backgroundPosition: 'center', /* Center the image */
                        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                        backgroundSize: 'auto', /* Resize the background image to cover the entire container */ }}>
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl text-bold text-white f-f-l pb-20">Restro Cafe</h1>

                            <section className="text-blueGray-700 ">
                                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                                    <div className="flex flex-col w-full mb-12 text-left ">
                                        <div className="w-full mx-auto lg:w-1/2">
                                            <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> A small headline to switch your visitors into users. </h1>
                                            <h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font"> A small headline to switch your visitors into users. </h2>

                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20 flex-row ">
                                <div>
                                    <img src={pc1} />
                                    <h2 className="text-black f-f-r pt-10">Exclusive Pool Party</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>



        </>
    );
}

export default Home;
