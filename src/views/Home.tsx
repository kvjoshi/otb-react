import React, { useState } from "react";
import wave1 from "../assets/images/wave1.svg"
import wave2 from "../assets/images/wave2.svg"
import wave21 from "../assets/images/wave21.svg"
import blob1 from "../assets/images/blob1.svg"
function Home() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="relative w-full h-full " style={{ backgroundImage: `url(${wave1})`,
                backgroundColor: '#cccccc',
                backgroundPosition: 'bottom', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 ">
                    <div className="text-color justify-center text-center">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl font-black f-f-l pb-36">Welcome To
                            <br/>
                            Out Of The Box</h1>
                        <div className="f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
                            <h2>The next big thing starts here.</h2>
                        </div>

                    </div>
                </div>


            </div>
            <div className="relative w-full h-full " style={{ backgroundImage: `url(${wave2})`,
                backgroundColor: '#d9dc41',
                backgroundPosition: 'top', /* Center the image */
                backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                backgroundSize: '100%', /* Resize the background image to cover the entire container */ }}>
                <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 ">
                    <div className="text-color justify-center text-center">
                        <h1 className="text-5xl  xl:w-full xl:text-7xl font-black f-f-l pb-36">About Us</h1>
                        <div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20">
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
                            <h1 className="text-5xl  xl:w-full xl:text-7xl font-black f-f-l pb-36">Adventure</h1>
                            <div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20">
                                <h2>list img</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="relative w-full h-full " style={{ backgroundImage: `url(${blob1})`,
                    backgroundColor: '#d9dc41',
                    backgroundPosition: 'bottom', /* Center the image */
                    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                    backgroundSize: 'cover', /* Resize the background image to cover the entire container */ }}>
                    <div className="relative px-4 xl:px-0 h-full  container mx-auto grid  p-40 lg:pt-36 ">
                        <div className="text-color justify-center text-center">
                            <h1 className="text-5xl  xl:w-full xl:text-7xl font-black f-f-l pb-36">Adventure</h1>
                            <div className="f-f-r text-xl lg:text-3xl pb-36  pt-10 xl:pt-20 text-left pl-20">
                                <h2>list img</h2>
                            </div>

                        </div>
                    </div>

                </div>
            </div>



        </>
    );
}

export default Home;
