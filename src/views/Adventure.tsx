import React, { useState } from "react";


import "@egjs/react-flicking/dist/flicking.css";

import bg_start from "../assets/bg/home_start_bg.svg";
import rock from "../assets/bg/wall.svg";
import adv_wall_bg from "../assets/bg/adv_wall_bg.svg"
import adv_rope_bg from "../assets/bg/adv_rope_bg.svg"
import wall_big from '../assets/bg/adv_wall.svg'
import camo_hunter from "../assets/bg/camo-hunter-orange.svg"
import Woodland_Camouflage from "../assets/bg/Woodland_Camouflage.svg"
import paintball_battle from '../assets/bg/paintball_battle.svg'
import adv_paintball_bg from "../assets/bg/adv_paintball_bg.svg";
import adv_paintball_bg11 from "../assets/bg/adv_paintball_bg11.svg";
import paintball_match from '../assets/bg/paintball_match.svg';
import bg_adv_main from "../assets/bg/adv_main_bg.svg";
import tramp from '../assets/bg/tramp.svg'
import kids from '../assets/bg/kids.svg'
import bg_adv_1 from "../assets/bg/adv_1_bg.svg";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import resttt from "../assets/images/resttt.svg";
import pool from "../assets/images/pool1.png";
import pool1 from "../assets/images/pool1.svg";
import blob1 from "../assets/images/blob1.svg";
import pc1 from "../assets/images/g13591.webp";
import arch from "../assets/bg/archery.svg";
import army from "../assets/bg/army.svg";
import army2 from "../assets/bg/army1.svg";
import bully from "../assets/bg/bully.svg";
import rope from "../assets/bg/rope.svg";
import bumpcar from "../assets/bg/bumper.svg";
import bouncy from '../assets/bg/bouncy.svg'
import pizza from "../assets/images/g127884.png";
import sizller from "../assets/images/g90143.png";
import paintball from '../assets/img/paintball_home.svg';
import Flicking from "@egjs/react-flicking";
import Slider from "react-slick";


function Home() {
    const [menu, setMenu] = useState(false);
    const [sliderRef] = useKeenSlider({ loop: true })

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <section className="relative  w-full h-screen p-30 pt-56 md:p-52 text-blueGray-700" style={{ backgroundImage: `url(${bg_adv_main})`,
                backgroundColor: '#ffffff',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */
            }}>
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full mb-12 text-left text-center">
                        <h2 className="mb-4 text-xs font-semibold tracking-widest  uppercase title-font">Welcome To</h2>
                        <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter  lg:w-1/2 sm:text-6xl title-font">Adventure Zone</h1>
                        {/*<h2 className="mb-6 text-xs font-semibold tracking-widest text-black uppercase title-font">Amazement Park</h2>*/}

                        <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-3xl">Rajkot’s largest “Out of The Box – Amazement Park” offers an unforgettable experience & one
                                which you will love to visit over & over again!
                            </p>
                            <p className='mb-10 pb-36 md:mb-14  text-2xl md:text-4xl lg:text-5xl font-bold '>You name it, we have it.</p>

                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: `url(${adv_paintball_bg})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Paintball Battle</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={paintball_battle} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    This has to be one of the best stress relieving shooting games ever made; divided
                                    in two teams, hit as many as you can & be the WINNER! Seems too easy, isn’t it? We bet it
                                    not!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: `url(${adv_paintball_bg11})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Paintball Battle</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={paintball_match} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    This has to be one of the best stress relieving shooting games ever made; divided
                                    in two teams, hit as many as you can & be the WINNER! Seems too easy, isn’t it? We bet it
                                    not!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${adv_wall_bg})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Wall-Climbing</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl  text-white">
                                    Climb as high as 25 ft and enjoy a mesmerizing view of the venue & the
                                    neighborhood. (You should be at least 15 to participate)
                                </p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <img src={rock} className={'w-full'} style={{}} alt={'Wall-Climbing'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${adv_wall_bg})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Wall-Climbing</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl  text-white">
                                    Climb as high as 25 ft and enjoy a mesmerizing view of the venue & the
                                    neighborhood. (You should be at least 15 to participate)
                                </p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <img src={wall_big} className={'w-full'} style={{}} alt={'Wall-Climbing'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${adv_rope_bg})`,
                backgroundColor: '#9f683e',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10">Rope Rumble</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={rope} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl ">
                                    This notorious rope course has 20+ activities to test one’s agility,
                                    spontaneity, balance & wit. (Minimum height would be 4 ft)
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${Woodland_Camouflage})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Army Rampage</h1>
                        <div className="grid grid-cols-2 gap-4">

                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    This notorious rope course has 20+ activities to test one’s agility,
                                    spontaneity, balance & wit. (Minimum height would be 4 ft)
                                </p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className="col-span-2 md:col-span-1">
                                        <img src={army} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <img src={army2} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${''})`,
                backgroundColor: '#bb9579',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Bull Ride</h1>
                        <div className="grid grid-cols-2 gap-4">

                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    Have the guts & strength to withstand our mighty “BULLY”? Ride on our
                                    mechanical bull & challenge yourself to come out as a victor! (Minimum eligible age – 12
                                    years)
                                </p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                        <img src={bully} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${''})`,
                backgroundColor: '#e5afaf',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Archery</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={arch} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    Challenge your friends at the world’s oldest form of combat to test your focus,
                                    precision & aiming skills. Hit that Bull’s Eye! (Minimum eligible age – 12 years)
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${''})`,
                backgroundColor: '#e5afaf',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-7xl  xl:w-full xl:text-9xl text-white f-f-l p-30">Kids Zone </h1>
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Bumper to Bumper</h1>
                        <div className="grid grid-cols-2 gap-4">

                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    Get on a bumpy ride – bump, bump & bump! Let your kid dash the car
                                    or escape from getting bumped. Ride – Bump – Dodge is all you have to do. (Age limit – 7-18
                                    years, weight under 50 kg
                                </p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <img src={bumpcar} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${''})`,
                backgroundColor: '#e5afaf',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">

                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Bouncy</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={bouncy} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    Bounce as high as you can & never fear of falling; with Bouncy, see how well your
                                    kids can shut up & bounce! (Maximum age – 14 years)

                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${''})`,
                backgroundColor: '#e5afaf',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">

                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Trampoline</h1>
                        <div className="grid grid-cols-2 gap-4">

                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    Hop – Fall – Jump; let your toddlers experience the power of gravity!
                                    (Maximum age – 12 years)
                                </p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <img src={tramp} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full " style={{ backgroundImage: `url(${''})`,
                backgroundColor: '#e5afaf',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l p-10">Kinder Garden</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={kids} className={'w-full'} style={{}} alt={'Rope Rumble'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl font-semibold md:text-3xl text-white">
                                    Kids need to explore & horne their skills at young age & Kinder Garden is
                                    just the place to be! Allow them the freedom and see them coming out with flying colors.
                                    (Maximum age – 12 years)
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>







        </>
    );
}

export default Home;
