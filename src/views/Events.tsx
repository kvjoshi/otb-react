import React from 'react'
import bg_adv_main from "../assets/bg/adv_main_bg.svg";
import bg_adv_1 from "../assets/bg/adv_1_bg.svg";
import paintball_batte from "../assets/img/paintball_home.svg";
import adv_paintball_bg11 from "../assets/bg/adv_paintball_bg11.svg";
import couple from "../assets/bg/couple.svg";
import pool_party_all from "../assets/img/pool_party_all.svg";
import party_og from "../assets/img/party_og.svg";
import blob from "../assets/images/blob1.svg";


function Events() {
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
                        <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter  lg:w-1/2 sm:text-6xl title-font">Events</h1>
                        {/*<h2 className="mb-6 text-xs font-semibold tracking-widest text-black uppercase title-font">Amazement Park</h2>*/}

                        <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-3xl">
                                May it be in Parties , Celebrations Or Corporate Events, we have you covered for all! Just invite your guests and enjoy the experience.
                            </p>

                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: ``,
                backgroundColor: '#6ac2a7',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10 text-center text-white">Too tired with everyday's hustle & bustle?</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={pool_party_all} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl py-8 text-white">
                                    Planning to throw your next unforgettable birthday party? Is kitty party on your mind but don't know where to go?

                                </p>
                                <p className="text-2xl py-8 text-white">
                                    Our parties are uniquely customized and tailored to each of our clients needs making it a special experience for you and your guests as well as allowing the host to be a guest at their party.
                                </p>
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
                                <img src={party_og} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Birthday Party
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Weddings
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Weddings
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Weddings
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Weddings
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Weddings
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4">
                                <img src={couple} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Weddings
                                </p>
                            </div>


                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Events
