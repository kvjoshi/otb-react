import React from 'react'
import restro_main from "../assets/bg/restro-main.svg";
import bg_adv_1 from "../assets/bg/adv_1_bg.svg";
import paintball_batte from "../assets/img/paintball_home.svg";
import bg_pizza from  '../assets/bg/pizza_bg.svg';
import pizza_1 from '../assets/img/pizza_1.svg'
import pizza_2 from '../assets/img/pizza_2.svg'
import candle_light from '../assets/img/candle_light_og.svg'
import couple_dinner from '../assets/img/couple_dinner.svg'
import kitty_party from '../assets/img/kitty_party.svg'
import buffet from '../assets/img/buffet.svg'
import birthday_1 from '../assets/img/birthday_1.svg'
import couple from "../assets/bg/couple.svg";

function Restro() {
    return (
        <>
            <section className="relative  w-full h-screen  pt-56 lg:p-52 text-blueGray-700" style={{ backgroundImage: `url(${restro_main})`,
                backgroundColor: '#ffffff',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */
            }}>
                <div className="container flex flex-col items-center px-5 py-8 mx-auto text-white">
                    <div className="flex flex-col w-full mb-12 text-left text-center">
                        <h2 className="mb-4 text-xs font-semibold tracking-widest  uppercase title-font">Welcome To</h2>
                        <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter w-full  lg:w-1/2 sm:text-6xl title-font">Restro-Cafe</h1>



                        <div className="pb-36 pt-1 xl:pt-20  text-center sm:p-10">
                            <p className="mb-8 lg:mb-14 text-lg  font-semibold lg:text-2xl lg:text-3xl"> OTB's restro cafe has a long, mouth watering delicacies list and none of them can be ignored.
                            </p>
                            <p className='mb-10 pb-44 lg:mb-14  text-2xl lg:text-4xl lg:text-5xl font-bold '>Eat, drink, enjoy, repeat!</p>

                        </div>

                    </div>
                </div>
            </section>
            <section className="relative  w-full h-full " style={{ backgroundImage: `url()`,
                backgroundColor: '#c56d6d',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-12 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10 ">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10 text-white">Mealbox Resturant</h1>
                        <div className="grid grid-cols-4 gap-4 ">

                            <div className="flex flex-wrap content-center col-span-4  lg:col-span-2">
                                <h1 className="text-3xl text-white p-20 px-30">
                                    We ought to be about something beyond cooking! We ought to be a piece of our clients’ lives and the networks in which we serve. Our motto is to serve the best because you deserve it, "extraordinary FOOD COMES FIRST".
                                </h1>
                            </div>
                            <div className="col-span-4   lg:col-span-2 p-10">
                                <img src={pizza_2} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>
                            <div className='flex flex-wrap content-center col-span-4 sm:col-span-4 lg:col-span-4'>
                                <h1 className="text-3xl  xl:w-full xl:text-4xl font-semibold f-f-l p-10 text-white">Cuisines We Serve </h1>
                                <div className='grid grid-cols-5 w-full text-center  content-center'>
                                    <div className='col-span-1 xl:text-4xl text-center  content-center'>
                                        <img src={''}/>
                                        <p className="text-xl  xl:w-full xl:text-2xl font-semibold f-f-l p-10 text-white">Indian</p>
                                    </div>
                                    <div className='col-span-1 xl:text-4xl'>
                                        <img src={''}/>
                                        <p className="text-xl  xl:w-full xl:text-2xl font-semibold f-f-l p-10 text-white">Italian</p>
                                    </div>
                                    <div className='col-span-1 xl:text-4xl'>
                                        <img src={''}/>
                                        <p className="text-xl  xl:w-full xl:text-2xl font-semibold f-f-l p-10 text-white">Chinese</p>
                                    </div>
                                    <div className='col-span-1 xl:text-4xl'>
                                        <img src={''}/>
                                        <p  className="text-xl  xl:w-full xl:text-2xl font-semibold f-f-l p-10 text-white">Thai</p>
                                    </div>
                                    <div className='col-span-1 xl:text-4xl'>
                                        <img src={''}/>
                                        <p className="text-xl  xl:w-full xl:text-2xl font-semibold f-f-l p-10 text-white">French</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="relative  w-full h-full " style={{ backgroundImage: `url()`,
                backgroundColor: '#c56d6d',
                backgroundPosition: 'center', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-24 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20">
                    <div className="text-color justify-center text-center pb-10 ">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l p-10">White Desert Cafe</h1>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-4 lg:col-span-2">
                                <img src={pizza_1} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>
                            <div className="flex flex-wrap content-center col-span-4 lg:col-span-2">
                                <h1 className="text-3xl ">
                                    We are not simply baking pizza but involved in other fast food like sandwiches, burgers & smoothies. We make individuals happy and satisfy their hunger. We vouch for the quality of food served as it signifies & establishes a sense of trust in our customers. </h1>

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
                <div className="relative  xl:px-0 h-full  container mx-auto grid  sm:p-20">
                    <div className="text-color justify-center text-center pb-10 ">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl  f-f-l pb-20">Some Of Our Services</h1>
                        <div className="grid grid-cols-4 gap-4 text-center  w-full">
                            {/*<div className="col-span-2 lg:col-span-1">
                                <img src={pizza1} className={'w-full'} style={{}} alt={'paintball battle'}/>
                            </div>*/}



                            <div className="col-span-4 md:col-span-2 lg:col-span-2 p-4  pb-10">
                                <img src={birthday_1} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Birthday Party
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4 pb-10">
                                <img src={candle_light} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Poolside Dinner
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4 pb-10">
                                <img src={candle_light} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Candle Light Dinner
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-2 p-4 pb-10">
                                <img src={buffet} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Buffet
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4 pb-10">
                                <img src={candle_light} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Group Booking
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-1 p-4 pb-10">
                                <img src={kitty_party} className={'w-full'} style={{}} alt={'paintball battle'}/>
                                <p className="text-2xl ">
                                    Kitty Party
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
                <div className="relative px-24 xl:px-0 h-full  container mx-auto grid p-36 sm:p-20 justify-center w-full ">
                    <div className="text-color  pb-10   ">
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
                        <div className="grid grid-cols-1 gap-6 mt-8">
                            <button className='btn btn-lg btn-primary'>Confirm Booking</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Restro
