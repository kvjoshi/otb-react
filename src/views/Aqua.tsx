import React from 'react'
import bg_adv_main from "../assets/bg/adv_main_bg.svg";
import bg_adv_1 from "../assets/bg/adv_1_bg.svg";
import paintball_batte from "../assets/img/paintball_home.svg";
import aqua_bg_main1 from '../assets/bg/aqua_bg_main1.svg'

import pool from "../assets/images/pool1.svg";
import blob from "../assets/images/blob1.svg";
import pool_party_all from "../assets/img/pool_party_all.svg";
import pool_all from "../assets/img/pool_all.svg";
import party_og from "../assets/img/party_og.svg";
import couple from "../assets/bg/couple.svg";

function Aqua() {
    return (
        <>
            <section className="relative  w-full h-screen p-30 pt-56 md:p-52 text-blueGray-700" style={{ backgroundImage: `url(${aqua_bg_main1})`,
                backgroundColor: '#ffffff',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'contain', /* Resize the background image to cover the entire container */
            }}>
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full mb-12 text-left text-center">
                        <h2 className="mb-4 text-xs font-semibold tracking-widest  uppercase title-font">Welcome To</h2>
                        <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter  lg:w-1/2 sm:text-6xl title-font">Aqua Zone</h1>


                        <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-3xl">An aqua-zing experience for the entire family as we offer separate pools for adults & kids.
                            </p>
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-3xl">Dance
                                your worries out with our built-in DJ system & wait, we have got rain dance parties too!
                            </p>


                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full p-26" style={{ backgroundImage: `url(${blob})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4    container mx-auto grid   lg:pt-36 " style={{ backgroundImage: `url(${pool})`,
                    backgroundPosition: 'center', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'auto', /* Resize the background image to cover the entire container */ }}>
                    <div className="text-color justify-center text-center">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl text-white f-f-l  pb-56">Facilities</h1>
                        <div className=" mb-12 grid grid-cols-2">
                            <div className="p-10 col-span-2 lg:col-span-1">
                                <img src={pool_all} alt="pool" className="w-full" />

                            </div>
                            <div className="p-10 col-span-2 lg:col-span-1">
                                <h1 className="mb-12 text-2xl font-semibold leading-relaxed  text-center  lg:text-3xl "> At OTB,
                                    don’t bother about the nifty’s, we have covered you with swim costumes, lockers, shower &
                                    changing rooms.</h1>
                                <h1 className="mb-12 text-2xl font-semibold leading-relaxed  text-center  lg:text-3xl ">We also organize social gatherings, Weddings & Receptions at poolside which can
                                    accommodate the crowd of 500 at once!</h1>
                                <div className={'p-10 pb-30'}>
                                    <div className="content-left text-left justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-4 inline" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                        </svg>
                                        <h2 className="mx-auto mb-4 text-xl font-semibold inline text-left leading-none tracking-tighter text-black title-font text-left">Depth of pool for adults – 4.5 ft
                                        </h2>
                                    </div>
                                    <div className="content-left text-left justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-4 inline" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                        </svg>
                                        <h2 className="mx-auto mb-4 text-xl font-semibold inline text-left leading-none tracking-tighter text-black title-font text-left"> Depth of pool for kids – 2 ft
                                        </h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: `url(${blob})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10">Services We Provide</h1>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={pool_party_all} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Pool Party
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={pool_all} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Pool
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                   Rain Dance
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Foam Party
                                </p>
                            </div>



                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Aqua
