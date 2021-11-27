import React from 'react'
import restro_main from "../assets/bg/restro-main.svg";
import bg_adv_1 from "../assets/bg/adv_1_bg.svg";
import paintball_batte from "../assets/img/paintball_home.svg";
import bg_pizza from  '../assets/bg/pizza_bg.svg';
import pizza1 from '../assets/bg/pizza_whole.svg'

function Restro() {
    return (
        <>
            <section className="relative  w-full h-screen p-56 pt-56 md:p-52 text-blueGray-700" style={{ backgroundImage: `url(${restro_main})`,
                backgroundColor: '#ffffff',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */
            }}>
                <div className="container flex flex-col items-center px-5 py-8 mx-auto text-white">
                    <div className="flex flex-col w-full mb-12 text-left text-center">
                        <h2 className="mb-4 text-xs font-semibold tracking-widest  uppercase title-font">Welcome To</h2>
                        <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter  lg:w-1/2 sm:text-6xl title-font">Restro-Cafe</h1>



                        <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                            <p className="mb-8 md:mb-14 text-lg  font-semibold md:text-2xl lg:text-3xl"> OTB's restro cafe has a long, mouth watering delicacies list and none of them can be ignored.
                            </p>
                            <p className='mb-10 pb-44 md:mb-14  text-2xl md:text-4xl lg:text-5xl font-bold '>Eat, drink, enjoy, repeat!</p>

                        </div>

                    </div>
                </div>
            </section>
            <section className="relative  w-full h-full " style={{ backgroundImage: `url(${bg_pizza})`,
                backgroundColor: '#c56d6d',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-24 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10 ">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10">Pizza</h1>
                        <div className="grid grid-cols-2 gap-4">
                            {/*<div className="col-span-2 md:col-span-1">
                                <img src={pizza1} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>*/}
                            <div className="flex flex-wrap content-center col-span-4 md:col-span-4">
                                <p className="text-2xl ">
                                    No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled mushroom, golden corn, black olives, fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: `url()`,
                backgroundColor: '#c56d6d',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-24 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10 ">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10">Some Of Our Services</h1>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            {/*<div className="col-span-2 md:col-span-1">
                                <img src={pizza1} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>*/}
                            <div className="flex flex-wrap content-center col-span-1 md:col-span-1">
                                <p className="text-2xl p-4 ">
                                    Poolside Dinner
                                </p>
                            </div>
                            <div className="flex flex-wrap content-center col-span-1 md:col-span-1">
                                <p className="text-2xl p-4 ">
                                    Candle Light Dinner
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="  w-full h-full " style={{ backgroundImage: `url()`,
                backgroundColor: '#c56d6d',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-24 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center  pb-10 ">
                        <h1 className="text-2xl  xl:w-full xl:text-4xl  text-center f-f-l p-10">Book A Table Now</h1>


                                <div className="grid grid-cols-2 gap-6">
                                    <label className="block">
                                        <span className="text-gray-700">Full name</span>
                                        <input
                                            type="text"
                                            className="
                    mt-1
                    block
                    w-full
                    form-input
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                            placeholder=""
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700">Phone Number</span>
                                        <input
                                            type="email"
                                            className="
                    mt-1
                    block
                    w-full
                     form-input
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                            placeholder="john@example.com"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700">When is your event?</span>
                                        <input
                                            type="date"
                                            className="
                    mt-1
                    block
                     form-input
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700">What type of event is it?</span>
                                        <select
                                            className="
                    block
                    w-full
                    mt-1
                     form-input
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                        >
                                            <option>Corporate event</option>
                                            <option>Wedding</option>
                                            <option>Birthday</option>
                                            <option>Other</option>
                                        </select>
                                    </label>
                                </div>



                    </div>
                </div>
            </section>
        </>
    );
}

export default Restro
