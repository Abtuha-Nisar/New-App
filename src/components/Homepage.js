import React, { Component } from 'react';
import bgImg from "../assests/image.jpeg";
import img3 from "../assests/img3.png";
import img2 from "../assests/img2.jpg";
import img5 from "../assests/img5.jpeg";
import img8 from "../assests/img8.jpg";

const Card = ({ title, description }) => {


    return (
        <div className="bg-white rounded-lg p-4">
            <img className="w-16 h-16  py-2 " src={img5} alt="Logo" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

            <button
                className="bg-slate-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"

            >
                Make A Enquiry
            </button>
        </div>
    );
};
const Card1 = ({ title, description }) => {


    return (
        <div className="bg-slate-400 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

        </div>
    );
};
export class Homepage extends Component {
    render() {
        return (
            <div className="bg-white">
                <nav className="flex justify-between py-3 px-4">

                    <div className="flex items-center">
                        <img className="w-16 h-16 " src={bgImg} alt="Logo" />
                        <div className="ml-1">
                            <h1>A & Co</h1>
                            <h1>ACCOUNTANTS LTD</h1>
                        </div>
                    </div>

                    <ul className="flex items-center text-black text-lg">
                        <li className="mr-8 ">About</li>
                        <li className="mr-8">Services</li>
                        <li className="mr-8">Sector</li>
                        <li className="mr-8">Structures</li>
                        <li className="mr-8">Insights</li>
                        <img className="w-8 h-8 " src={img8} alt="Logo" />
                        <li className="mr-8">+92316-7168682</li>
                        <button className="bg-blue-400 rounded-full px-2">Contact us</button>
                    </ul>
                </nav>

                <div className="relative">
                    <img src={img3} alt="" className="w-full h-96" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-left text-white p-8">
                        <h1 className="text-4xl font-bold mb-4" style={{ width: '353px', height: '50px', marginLeft: '10px' }}>
                            Accountancy, Bookkeeping & Tax Solutions
                        </h1>
                        <p className="text-lg text-gray-200 text-left" style={{ width: '498px', height: '19px', marginTop: '65px', marginLeft: '10px' }}>
                            Our friendly and experienced team provides accountancy, bookkeeping, and tax solutions for individuals and businesses throughout Hampshire, Surrey, and Middlesex. Contact us today!
                        </p>
                        <div className="mt-6">
                            <button className="bg-white text-blue-500 rounded-full px-4 py-2 mr-4" style={{ width: '143px', height: '45px', marginTop: '90px', marginLeft: '10px' }}>Get in Touch</button>
                            <button className="bg-transparent border border-white text-white rounded-full px-4 py-2" style={{ width: '143px', height: '45px' }}>Services</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-16 ">
                    <div className="mx-4 border border-gray-300 py-2 flex flex-row gap-4 px-12 ">
                        <Card
                            title="Advisory"
                            description="There's is no price for good advice-disscuss ideas,development and startegies with our team of our industry experts."

                        />

                        <Card
                            title="Admin"
                            description="There's is no price for good advice-disscuss ideas,development and startegies with our team of our industry experts."
                        />
                        <Card
                            title="Accounts"
                            description="There's is no price for good advice-disscuss ideas,development and startegies with our team of our industry experts."
                        />
                        <Card
                            title="Tax"
                            description="There's is no price for good advice-disscuss ideas,development and startegies with our team of our industry experts."
                        />
                    </div>
                </div>
                <div
                    className=" bg-green-400   w-84  h-96  flex flex-col items-center justify-center mx-auto"
                    style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '4 20px' }}
                >
                    <div className="text-overlay ">
                        <p className="text-lg text-black text-left" style={{ width: '498px', height: '19px', marginTop: '65px', marginLeft: '10px' }}>
                            Our friendly and experienced team provides accountancy, bookkeeping, and tax solutions for individuals and businesses throughout Hampshire, Surrey, and Middlesex. Contact us today!
                        </p>
                    </div>
                </div>
                <div className="text-center text-3xl text-black py-6 px-12">
                    <h1>Bussiness Accounting Services</h1>
                    <h1 className="text-lg text-justify py-4 ">Warr & Co offer a full range of business accounting services to companies across the UK from our offices in Stockport, Manchester and London. We offer complete solutions as well as select business accounting services, allowing you to pick and choose the best accounting services suited to your requirements.

                        .</h1>
                </div>
                <div className="flex items-center justify-center py-16  ">
                    <div className="mx-4 border border-gray-300 py-2  flex flex-row gap-4 px-12 ">
                        <Card1

                            title="Payroll & auto Enrollment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />
                        <Card1
                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />
                        <Card1
                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />
                        <Card1
                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />

                    </div>

                </div>
                <div className="flex items-center justify-center py-16  ">
                    <div className="mx-4 border border-gray-300 py-2  flex flex-row gap-4 px-12 ">
                        <Card1

                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />
                        <Card1
                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />
                        <Card1
                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />
                        <Card1
                            title="Payroll & auto Enrolment"
                            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on timeand that your complaint with auto enrolment."
                        />

                    </div>

                </div>
                <div className="text-center text-3xl text-black py-4 px-12 ">
                    <h1>Warr & Co – Accounting Services For Businesses</h1>
                    <h1 className="text-lg text-justify py-4">As experienced small business accountants, Warr & Co have the expert knowledge which can help your small to medium business grow. Most people who start up in business do so because they have a good business proposition, not because they are experts in the legal, financial, and fiscal aspects of running a business. That’s where we step in.</h1>
                    <p className="py-4 text-left">Business Accountancy Services</p>
                    <p className="text-lg text-justify py-4 ">
                        We’re passionate about business finance, legislation and regulations so that you don’t have to be! Think of Warr & Co as an extension of your business, rather than an accounting service for your business. We specialise in accounting for a wide variety of business types, particularly SMEs, start-ups and growing small businesses. We often work with clients through the difficult early stages of growing a company from the ground up. Our team of business accountants have centuries of experience between them, having worked with thousands of UK businesses.
                    </p>
                    <p className="text-lg py-4 text-justify">
                        We understand that the business landscape in the UK can be exciting, but also daunting for those looking to live the dream and start their own business. The business financial landscape is always in flux, so much so that many new or smaller businesses struggle to keep up.
                    </p>
                    <p className="text-lg py-4 text-justify">
                        These factors can often seem overwhelming to an entrepreneur and this is where we can help, by evaluating your ideas in a constructive manner, helping you to develop them into a feasible business, and supporting your ongoing business development.
                    </p>
                    <p className="text-lg py-4 text-justify">
                        We can also help you:
                    </p>
                    <div>
                        <p className="text-lg text-justify">&#8226; Decide on the most suitable structure for your business – sole trader, partnership, limited liability partnership, or limited company.</p>
                        <p className="text-lg text-justify">&#8226; Prepare a business plan, cashflow projections, budgets, and trading forecasts to prove the financial viability of your business and demonstrate this to potential investors / bank.</p>
                        <p className="text-lg text-justify">&#8226; Assess your finance requirements and advise on the best sources of finance.</p>
                        <p className="text-lg text-justify">&#8226; Help you establish relationships with banks, solicitors, etc. via our well-established network of contacts.</p>
                        <p className="text-lg text-justify">&#8226; Complete any registration procedures with Companies House and HM Revenue and Customs.</p>
                        <p className="text-lg text-justify">&#8226; Deal with company secretarial issues.</p>
                        <p className="text-lg text-justify">&#8226; Set up an internal accounting system for complying with statutory requirements.</p>
                        <p className="text-lg text-justify">&#8226; Whether your business is already up and running or you’re just starting out, you need a partner who understands small business accounting. Our experienced accountants can not only handle your tax, financials, and VAT but can also advise on many aspects of business accounting.</p>
                    </div>

                </div>
                <div className="text-center text-4xl text-black py-4 px-12">
                    <h1>Revolut Business and FAQs</h1>
                    <div className="text-center underline text-lg  py-4">
                        <p>"How should I structure my small business?"</p>
                        <p>Do I need a separate business bank account?</p>
                        <p>How do I finance my business and account?"</p>
                        <p>What is accounting terms or  I familiar with?"</p>
                    </div>
                </div>

                <footer className="bg-slate-500">
                    <div className=" flex items-center px-24 py-3">
                        <img className="  inset-y-0 left-0 w-16 h-16" src={bgImg} alt="Logo" />
                        <div className="ml-4">
                            <div className="flex items-center">
                                <h1>A & Co</h1>
                                <h1 className="ml-2">ACCOUNTANTS LTD</h1>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center  text-white text-lg text-center">
                        <ul className="mr-8 text-justify">
                            <li className='text-2xl'>Support</li>
                            <li>FAQs</li>
                            <li>News Article</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>

                        </ul>
                        <ul className="mr-8 text-justify ">
                            <li className='text-2xl'>Site</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Services</li>
                            <li>Blogs</li>
                        </ul>
                        <ul className='text-justify'>
                            <li className='text-2xl'>Contact</li>
                            <li>(+62)816524689</li>
                            <li>SUPPORTMAIL@DEARLY.COM</li>
                            <li>Address</li>
                            <li>23 VALLEY LANE AUSTIN</li>
                            <li>07:00 AM - 19:00 PM</li>
                        </ul>
                    </div>
                    <div className='py-12 text-white'>____________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div>
                    <div className="flex justify-between items-center text-white">
                        <div className="px-12 py-4">
                            copyright &copy; 2022 Designed by aethonint.digital
                        </div>
                        <div className="flex justify-end px-24">
                            <p className="mr-4">Term</p>
                            <p className="mr-4">Privacy</p>
                            <p>Support</p>
                        </div>
                    </div>


                </footer>



            </div >
        );
    }
}

export default Homepage;
