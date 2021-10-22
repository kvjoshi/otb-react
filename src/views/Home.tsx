import React, { useState } from "react";

import bg_start from "../assets/bg/home_start_bg.svg";
import bg_about from "../assets/bg/home_about_bg.svg";
import bg_adv from "../assets/bg/home_adv_bg.svg";
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
import paintball_batte from '../assets/img/paintball_home.svg';

function Home() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <section className="relative  w-full h-full text-blueGray-700" style={{ backgroundImage: `url(${bg_start})`,
                backgroundColor: '#ffffff',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>

                    <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                        <div className="flex flex-col w-full mb-12 text-left text-center">
                            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">Welcome To</h2>
                            <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font"> Out Of The Box </h1>
                            <h2 className="mb-6 text-xs font-semibold tracking-widest text-black uppercase title-font">Amazement Park</h2>

                            <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                                <p className="mb-8 md:mb-14 text-lg font-semibold md:text-2xl lg:text-3xl">Rajkot’s largest “Out of The Box – Amazement Park” offers an unforgettable experience & one
                                    which you will love to visit over & over again!
                                </p>
                                <p className='mb-10 pb-36 md:mb-14 text-2xl md:text-4xl lg:text-5xl font-bold '>You name it, we have it.</p>

                            </div>

                        </div>
                    </div>

            </section>
            <div className="  w-full h-full" style={{ backgroundImage: `url(${bg_about})`,
                backgroundColor: '#543216',
                backgroundPosition: 'top', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'contain', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-30 sm:pt-20 lg:pt-20 ">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l pt-30 pb-20 sm:pb-44">About Us</h1>
                        <div className="f-f-r text-xl lg:text-3xl p-2 md:p-30 pb-10  pt-10 md:pt-44 text-center text-white">
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-2xl">
                                From adventurous & thrilling
                                activities to delicious delicacies to riverfront wedding to aqua zone, the fun never ends here.
                            </p>
                            <p className="mb-8 md:mb-14 text-2xl font-semibold md:text-2xl lg:text-3xl">
                                We are known to be Rajkot’s only venue to offer Paintball court & Riverfront Wedding.
                            </p>
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-2xl">
                                Get your daily dose of enjoyment with your loved one’s only at OTB – with over 10+ adventure
                                activities, Kids zone, Aqua zone, Foam party, Riverfront Weddings, Restro café.
                            </p>
                            <p  className="text-xl  font-semibold md:text-3xl lg:text-3xl">
                                There's something interesting here for every family - a new experience at every step, and a
                                thousand ways to have fun!
                            </p>

                        </div>
                    </div>
                </div>
                <div className="relative  w-full h-full  " style={{ backgroundImage: `url(${bg_adv})`,
                    backgroundColor: '#543216',
                    backgroundPosition: 'bottom', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 ">
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l pb-20">Adventure</h1>
                            <div className='grid grid-cols-4 content-center'>
                                <div className='col-span-4 lg:col-span-3'>
                                   <img src={paintball_batte} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                </div>
                                <div className='col-span-4 lg:col-span-1 justify-items-center content-center flex content-center flex-wrap'>
<div>
                                    <p className='text-white text-4xl pb-5 mb-3'>Your life is filled with surprises and OTB has got the right mix to enjoy it to the fullest! </p>
                                    <p className='text-white lg:text-white text-4xl'>Turn down
                                        you’re boring af weekdays to joyful one’s with crazy adventure activities like Paintball , Wall Climbing , Rope Rumble and more...</p>

                                    <a className='btn-purple px-4 py-4 justify-self-center m-10' href='#'>
                                        Learn More
                                    </a>
</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="relative  w-full h-full  " style={{ backgroundImage: `url(${blob1})`,
                    backgroundColor: '#66cdb1',
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
                                            <h1 className="mx-auto mb-12 text-2xl font-semibold leading-relaxed  text-black lg:text-3xl "> A small headline to switch your visitors into users. </h1>
                                            {/*<h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font"> A small headline to switch your visitors into users. </h2>*/}
                                            <p className="mx-auto text-3xl font-medium leading-relaxed text-black "> Dance
                                                your worries out with our built-in DJ system & wait, we have got rain dance parties too!</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*<div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20 flex-row ">
                                <div>
                                    <img src={pc1} />
                                    <h2 className="text-black f-f-r pt-10">Exclusive Pool Party</h2>
                                </div>
                            </div>*/}

                        </div>
                    </div>

                </div>
                <div className="relative  w-full h-full " style={{ backgroundImage: `url(${resttt})`,
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
