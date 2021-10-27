import React from 'react'
import bg_adv_main from "../assets/bg/adv_main_bg.svg";
import bg_adv_1 from "../assets/bg/adv_1_bg.svg";
import paintball_batte from "../assets/img/paintball_home.svg";


function Restro() {
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
                        <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter  lg:w-1/2 sm:text-6xl title-font">Restro-Cafe</h1>
                        <h1 className="mx-auto mb-6 text-lg font-semibold leading-none tracking-tighter  lg:w-1/2 title-font">FROM</h1>
                        <h2 className="mb-6 text-xs font-semibold tracking-widest text-black uppercase title-font">Out Of The Box</h2>

                        <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-3xl">Rajkot’s largest “Out of The Box – Amazement Park” offers an unforgettable experience & one
                                which you will love to visit over & over again!
                            </p>
                            <p className='mb-10 pb-36 md:mb-14  text-2xl md:text-4xl lg:text-5xl font-bold '>You name it, we have it.</p>

                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: `url(${bg_adv_1})`,
                backgroundColor: '#543216',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10">Paintball Battle</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <img src={paintball_batte} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-2 md:col-span-1">
                                <p className="text-2xl ">
                                    This has to be one of the best stress relieving shooting games ever made; divided
                                    in two teams, hit as many as you can & be the WINNER! Seems too easy, isn’t it? We bet it
                                    not!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Restro
