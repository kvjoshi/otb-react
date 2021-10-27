import React, { useState } from "react";


import "@egjs/react-flicking/dist/flicking.css";

import bg_start from "../assets/bg/home_start_bg.svg";
import bg_about from "../assets/bg/home_about_bg.svg";
import bg_adv from "../assets/bg/home_adv_bg.svg";
import bg_event from "../assets/bg/home_event_bg.svg";
import rock from "../assets/bg/wall.svg";

import arch from "../assets/bg/archery.svg";
import army from "../assets/bg/army.svg";
import army2 from "../assets/bg/army1.svg";
import bully from "../assets/bg/bully.svg";
import rope from "../assets/bg/rope.svg";

import resttt from "../assets/images/resttt.svg";
import pool1 from "../assets/images/pool1.png";
import pool from "../assets/images/pool1.svg";
import blob1 from "../assets/images/blob1.svg";
import pc1 from "../assets/images/g13591.webp";
import paintball from "../assets/images/paintball.webp";

import bumpcar from "../assets/images/g55847.png";
import pizza from "../assets/images/g127884.png";
import sizller from "../assets/images/g90143.png";
import paintball_batte from '../assets/img/paintball_home.svg';
import Flicking from "@egjs/react-flicking";



function Home() {
    const [menu, setMenu] = useState(false);

    const sparams = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
    }


    return (
        <>
            <section className="relative  w-full h-full text-blueGray-700" style={{ backgroundImage: `url(${bg_start})`,
                backgroundColor: '#ffffff',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */
            }}>

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
                    <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-32 lg:pt-36 ">
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l pb-20">Adventure</h1>
                            <div className='grid grid-cols-4 content-center'>
                                <div className='col-span-4 lg:col-span-3'>
                                    <img src={paintball_batte} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                </div>
                                <div className='col-span-4 lg:col-span-1 pt-20 flex  flex-wrap'>
                                    <div>
                                        <p className='text-white text-2xl pb-5 mb-3'>Your life is filled with surprises and OTB has got the right mix to enjoy it to the fullest! </p>
                                        <p className='text-black lg:text-white text-2xl pt-16'>Turn down
                                            you’re boring af weekdays to joyful one’s with crazy adventure activities like Paintball , Wall Climbing , Rope Rumble and more...</p>

                                        <a className='btn-purple px-4 py-4 justify-self-center m-10' href='#'>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-2xl xl:text-5xl w-full text-center text-red-700 font-mono p-4'>
                                    Top Attractions
                                </p>
                            </div>
                            <div className='c543'>
                                <div className='f543'>
                                    <img src={rock} className={'h-60'} style={{}} alt={'Wall Climbing'}/>
                                    <p className='text-xl p-5 font-mono  '>Wall Climbing</p>
                                </div>
                                <div className='f543'>
                                    <img src={bully} className={'h-60'} style={{}} alt={'Wall Climbing'}/>
                                    <p className='text-xl p-5 font-mono'>The Bully</p>
                                </div>
                                <div className='f543'>
                                    <img src={rope} className={'h-60'} style={{}} alt={'Wall Climbing'}/>
                                    <p className='text-xl p-5 font-mono'>Rope Rumble</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="relative  w-full h-full" style={{ backgroundImage: `url(${blob1})`,
                    backgroundColor: '#66cdb1',
                    backgroundPosition: 'bottom', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="relative px-4    container mx-auto grid   lg:pt-36 " style={{ backgroundImage: `url(${pool})`,
                        backgroundPosition: 'center', /* Center the image */
                        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                        backgroundSize: 'auto', /* Resize the background image to cover the entire container */ }}>
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl text-red-700 f-f-l  pb-56">Aqua Zone</h1>
                            <div className="flex flex-col mb-12 ">
                                <div className=" pt-16">
                                    <h1 className="mb-12 text-2xl font-semibold leading-relaxed  text-center text-red-700 lg:text-3xl "> A small headline to switch your visitors into users. </h1>
                                    {/*<h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font"> A small headline to switch your visitors into users. </h2>*/}
                                    <p className="text-3xl font-medium leading-relaxed text-center text-red-700 "> Dance
                                        your worries out with our built-in DJ system & wait, we have got rain dance parties too!</p>
                                </div>
                            </div>
                            {/*<div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20 flex-row ">
                                <div>
                                    <img src={pc1} />
                                    <h2 className="text-black f-f-r pt-10">Exclusive Pool Party</h2>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>


                <div className="relative  w-full h-full  p-10 md:p-36" style={{ backgroundImage: `url(${resttt})`,
                    backgroundPosition: 'center', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl  text-bold text-white f-f-l">Restro Cafe</h1>
                            <div className="flex flex-col text-center  w-full mb-12 text-left ">
                                <img src={pizza} className={'w-full md:w-1/2 self-center'} alt={''}/>
                                <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl title-font"> Our idea from day one has been to create, produce and serve super great, full-flavored food that has a beginning, middle, and finish to every bite. Everything at Apple Bite is ruled by taste. We strive for efficient, uncompromised, sincere, fabulous, caring and exceptional service.</h1>
                                <h2 className="mx-auto mb-4 text-xl  font-semibold leading-none tracking-tighter text-white title-font">Let the gourmet in you relish exalted cuisines by acclaimed chefs at the Apple Bite.
                                    With a splendid amalgam of select spices and modern cooking techniques, each course cooked here is a work of wonder.</h2>
                            </div>
                            {/*<div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20 flex-row ">
                                <div>
                                    <img src={pc1} />
                                    <h2 className="text-black f-f-r pt-10">Exclusive Pool Party</h2>
                                </div>
                            </div>*/}


                        </div>
                </div>

                <div className="relative  w-full h-full p-10 md:p-36" style={{ backgroundImage: `url(${bg_event})`,
                    backgroundPosition: 'center', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="text-color justify-center text-center">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  text-bold text-white  f-f-l">Events</h1>


                            <div
                                className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                                <div>
                                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
                                        Thinking Of Hosting An Event?
                                    </h2>
                                    <p className="mb-5 text-base text-center text-white sm:text-left md:text-lg">
                                        Out of The Box is a creative business dedicated to helping you design and host a stunning event for
                                        the ones you love. We believe in setting up something better for everyone, no matter the
                                        circumstance!
                                    </p>
                                    <a href="#" className="w-full btn btn-purple btn-lg sm:w-auto">Learn More</a>
                                </div>
                                <div className="w-full h-full py-48 bg-gray-200"></div>
                            </div>
                            <div
                                className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                                <div className="order-none md:order-2">
                                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
                                        Cant Decide Where To Get Married ?</h2>
                                    <p className="mb-5 text-base text-center text-white sm:text-left md:text-lg">
                                        We offer a unique Wedding style – Riverfront Wedding; specially for those who wish to marry in
                                        front of a beautiful landscape!
                                    </p>
                                    <p className="mb-5 text-base text-center text-white sm:text-left md:text-lg">
                                        You can choose from Lawn or Banquet too or simply wed at the poolside. Enjoy your wedding, hire
                                        #OTB to make it a success!
                                    </p>
                                    <a href="#" className="w-full btn btn-purple btn-lg sm:w-auto">Learn More</a>
                                </div>
                                <div className="w-full h-full py-48 bg-gray-200"></div>
                            </div>
                        

                    </div>
                </div>

            </div>




        </>
    );
}

export default Home;
