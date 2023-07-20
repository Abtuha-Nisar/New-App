import React from 'react';
import img3 from "../assests/img3.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import img8 from "../assests/img8.jpg";


export default function Accountant() {
    return (
        <div className="relative">
            <div className="flex ">
                <div className="w-full relative">
                    <img src={img3} alt="" className="w-full h-96" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-left text-white p-8">
                        <h1 className="text-3xl font-bold mb-4 px-64" style={{ width: '353px', height: '50px', marginLeft: '20px' }}>
                            Trusted
                            ACCOUNTANTS &amp; BUSINESS ADVISORS
                        </h1>
                        <div className="mt-6 px-64 py-4">
                            <button className="bg-blue-400 text-white  px-4 py-4 mr-4" style={{ width: '143px', height: '45px', marginTop: '90px', marginLeft: '20px' }}>Consult Now</button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full lg:w-1/2 p-4 px-24 ">
                    <p class="text-lg">
                        <h1 className="text-3xl text-slate-400">What is Lorem Ipsum?</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla pellentesque lorem non efficitur feugiat. Sed id mi
                        eu dui dictum accumsan in non dolor. Donec eget dolor
                        non mauris scelerisque convallis sit amet in purus. Etiam
                        a tellus id neque pretium feugiat. Proin a auctor metus.
                    </p>
                </div>

                <div class="w-full lg:w-96 p-4">
                    <div class="bg-slate-500 text-white p-8 rounded-lg">
                        <h2 class="text-3xl font-bold mb-4">30% Off on All Services</h2>
                        <form>
                            <div class="mb-4">
                                <label for="fullname" class="block text-lg">Full Name:</label>
                                <input type="text" id="fullname" class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4">
                                <label for="phone" class="block text-lg">Phone Number:</label>
                                <input type="tel" id="phone" class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-lg">Email:</label>
                                <input type="email" id="email" class="px-4 py-2 rounded-lg w-full" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <div className='flex items-center px-24 py-2'>
                <div className="flex flex-row items-center">
                    <img src={img6} alt="" className="w-24 h-24" />
                    <h1 className="text-2xl text-black">Address</h1>
                    <p className='py-2 px-4 '>kharian cantt, kharian punjab pakistan.</p>
                </div>


                <div className="flex flex-row items-center">
                    <img src={img7} alt="" className="w-24 h-24" />
                    <h1 className="text-2xl text-black">Email Us</h1>
                    <p className='flex-row items-center py-2 px-4 '>Support.acc@gmail.com</p>
                    <p className='flex-row items-center py-2  '>major.acc@gmail.com</p>
                </div>

                <div className="flex flex-row items-center">
                    <img src={img8} alt="" className="w-24 h-24" />
                    <h1 className="text-2xl text-black">Call Us</h1>
                    <p className='flex items-center py-2 break-before-auto'>kharian cantt, kharian punjab pakistan.</p>
                </div>
            </div>

        </div >
    )
}
