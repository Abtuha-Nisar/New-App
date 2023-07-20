import React from 'react';
import img3 from "../assests/img3.png";
import img9 from "../assests/img 9.jpg";
export default function Accountantfess() {
    return (
        <div>
            <div className="flex">
                <div className="w-full relative">
                    <img src={img3} alt="" className="w-full h-96" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-8">
                        <h1 className="text-3xl font-bold" style={{ width: '353px', height: '50px' }}>
                            Get $250 off your Accountant Fees
                        </h1>
                        <div className="flex justify-center mt-4 py-4">
                            <div className="relative">
                                <input type="text" placeholder="Enter your email" className="rounded-lg border-2 border-gray-300 py-2 px-4" />
                                <button className="absolute right-0 top-0 bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg">Invite</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-4 py-8">
                <div className="relative">
                    <input type="text w-32" placeholder="www.accountant.co.uk" className="rounded-lg border-2 border-gray-300 py-2 px-4" />
                    <button className="absolute right-0 top-0 bg-slate-200 text-black font-semibold px-4 py-2 rounded-lg">copy Link</button>
                </div>
            </div>
            <div className='text-4xl text-black text-center'>
                ITS IS EASY TO EARN CREDIT IN FEW SIMPLE STEPS
            </div>


            <div className='flex items-center px-24 py-2'>
                <div className="flex flex-row items-center">
                    <img src={img9} alt="" className="w-24 h-24" />
                    <h1 className="text-2xl text-blue-500 ">Refer As Friend </h1>
                    <p className='py-2 px-4 '>share Refaral link to every friend</p>
                </div>


                <div className="flex flex-row items-center">
                    <img src={img9} alt="" className="w-24 h-24" />
                    <h1 className="text-2xl text-blue">Make Sign Up</h1>
                    <p className='flex-row items-center py-2 px-4 '>When your friend sign up to your refral link,you will eran 250 credit</p>
                </div>

                <div className="flex flex-row items-center">
                    <img src={img9} alt="" className="w-24 h-24" />
                    <h1 className="text-2xl text-black">Do Enroll</h1>
                    <p className='flex items-center py-2 px-4'>When your friend Enroll A course you will again earn 250 credit.</p>
                </div>

            </div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-1/2 p-4 px-24 py-8 ">
                    <img src={img3} alt="" className="w-full h-96" />
                </div>

                <div >
                    <div class="bg-white text-black p-8 rounded-lg py-6">
                        <h2 class="text-3xl font-bold mb-4">$250  OFF ACCOUNT FEES</h2>
                        <h2 class="text-xl font-bold mb-4">Sign up and claim your voucher</h2>
                        <form>
                            <div class="mb-4  border-2 border-gray-300">
                                <input type="text" id="fullname" placeholder='name' class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4  border-2 border-gray-300 ">
                                <input type="tel" id="phone" placeholder='phone' class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4  border-2 border-gray-300">
                                <input type="email" id="email" placeholder='email' class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4  border-2 border-gray-300">
                                <input type="email" id="email" placeholder='password' class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <button className='bg-yellow-500 text-white rounded-md px-64 py-2'>Sign up</button>
                            </div>
                            By click the sign up you accountant the term and conditionsand privacy policy

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}
