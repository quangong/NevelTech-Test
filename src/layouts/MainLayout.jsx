import { Link, Outlet } from 'react-router-dom';
import logoImage from '../assets/logo.png'
import searchImage from '../assets/search.png'
import { useState } from 'react';
import teleIcon from '../assets/tele.png';
import androidIcon from '../assets/android_icon.png';
import appleIcon from '../assets/apple_icon.png';
import fbIcon from '../assets/fb_icon.png';
import instIcon from '../assets/inst_icon.png';
import twitterIcon from '../assets/twitter_icon.png';

import menuMb from '../assets/menu_mb.png';
import dropdownIcon from '../assets/dropdown.png';


const Dropdown = ({label, items}) => {
    const [open, setOpen] = useState(false);
  
    return (
        <div className="relative inline-block text-left w-full">
          {/* Nút mở dropdown */}
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-between w-full px-4 py-2 bg-[#1A3157] text-white rounded-[10px] text-[1rem]"
          >
            <div>{label}</div>
            <img src={dropdownIcon} alt="" />
          </button>
    
          {/* Menu dropdown */}
          {open && (
            <div className="absolute mt-2 w-full bg-black border border-gray-200 rounded shadow-lg z-10">
              <ul className="py-1">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      console.log(`Bạn chọn: ${item}`);
                      setOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
  };


export default function MainLayout() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuGameItems = ['Game 1', 'Game 2', 'Game 3'];
    const menuAboutItems = ['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'];
    const menuInfoItems = ['General Terms & Conditions', 'Responsible Gaming Policy', 'Sports Betting Rules', 'Privacy and Cookies Policy', 'Payment Methods', 'Limits'];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Header */}
            <header className="bg-[#03193A]">
                <div className="mx-[1rem] max-w-[1100px] 2xl:max-w-[1440px] lg:mx-auto flex justify-between items-center py-[1rem]">

                    <div className="logo pr-[0.93rem] flex">
                        <div className="md:hidden">
                            <button onClick={toggleMenu}>
                                <div className="w-6 h-6">
                                    <img src={menuMb} alt="" />
                                    </div>
                            </button>
                        </div>
                        <img src={logoImage} alt="" />
                    </div>
                    <div className="header-center flex-grow ml-[3.5rem] hidden md:flex">
                        <div className="search">
                            <img src={searchImage} alt="" />
                        </div>
                        <nav className="flex items-center gap-[1.5rem] ml-[2rem]">
                            <Link to="/" className='text-[#FFF] text-sm uppercase no-underline'>Home</Link>
                            <Link to="/" className='text-[#FFF] text-sm uppercase no-underline'>Game</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>Infor</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>News</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>Promotions</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>VIP</Link>
                        </nav>
                    </div>
                    <div className="buttons">
                        <button className='bg-[#12294A] px-[0.75rem] py-[0.56rem] text-[#FFF] text-sm rounded-[0.62rem]'>LOGIN</button>
                        <button className='bg-[#01AF70] px-[0.75rem] py-[0.56rem] text-[#FFF] text-sm rounded-[0.62rem] ml-[4px] lg:ml-[0.5rem]'>REGISTRATION</button>
                    </div>
                </div>
                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-[#777] gap-6 text-xl z-40 md:hidden">
                        <div className='relative' onClick={toggleMenu}><button className='right-0 absolute top-0'>X</button></div>
                        <nav className='flex flex-col'>
                            <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a>
                            <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</a>
                            <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</a>
                            <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</a>
                        </nav>

                    </div>
                )}
            </header>

            {/* Main content */}
            <main className="">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#12294A] py-[2.5rem] lg:py-[3.7rem]">
                <div className="hidden lg:flex flex-wrap gap-[2rem] md:[gap-5rem] xl:gap-[5rem] 2xl:gap-[9.9rem] max-w-[1100px] 2xl:max-w-[1440px] mx-auto">
                    <div className="">
                        <h4 className="text-[#FFF] font-medium text-2xl mb-[0.5rem]">Help Center</h4>
                        <p className="text-[#90A2BD] font-medium text-[1rem] mb-[1rem]">If you have any questions?</p>
                        <button type="button" className="uppercase text-[0.8rem] font-normal rounded-[10px] text-[#FFF] bg-[#3555FF] px-[3.4rem] py-[0.8rem] mb-[2.5rem]">
                            get answers
                        </button>
                        <div className="flex justify-between">
                            <img src={teleIcon} alt="" />
                            <img src={fbIcon} alt="" />
                            <img src={instIcon} alt="" />
                            <img src={twitterIcon} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h4 className="mb-[1.25rem]">Games</h4>
                        <ul className="space-y-[20px]">
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Game 1</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Game 2</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Game 3</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Game 4</li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="mb-[1.25rem]">About</h4>
                        <ul className="space-y-[20px]">
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>About Us</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Promotions</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>VIP</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Help Center</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Awards & Certificates</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>App</li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="mb-[1.25rem]">Legal Information</h4>
                        <ul className="space-y-[20px]">
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>General Terms & Conditions</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Responsible Gaming Policy</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Sports Betting Rules</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Privacy and Cookies Policy</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Payment Methods</li>
                            <li className='font-normal text-[#90A2BD] text-[1rem]'>Limits</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className='inline-block'>
                        <div className='flex pl-[10px] pr-[18px] py-[6px] rounded-[8px] bg-[#1A3157] mb-[8px]'>
                            <img src={appleIcon} alt="" />
                            <p className='text-[1rem]'>Bluechip App <br></br>
                            for Mac OS</p>
                        </div>
                        <div className='flex gap-[8px]'>
                                <div className='bg-[#1A3157] rounded-[8px] flex-1 flex justify-center'>
                                    <div>
                                        <div className='flex justify-center'><img src={androidIcon} alt="" /></div>
                                        <p className='font-normal text-center text-[#90A2BD] text-[1rem]'>Android</p>
                                    </div>
                                </div>
                                <div className='bg-[#1A3157] rounded-[8px] flex-1 flex justify-center'>
                                    <div>
                                    <div className='flex justify-center'><img src={appleIcon} alt="" /></div>
                                        <p className='font-normal text-center text-[#90A2BD] text-[1rem]'>iOS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
                <div className="block lg:hidden px-[1rem] mb-[1rem]">
                    <div className="flex flex-col gap-[1rem]">
                        <Dropdown label={"Games"} items={menuGameItems}/>
                        <Dropdown label={"Abouts"} items={menuAboutItems}/>
                        <Dropdown label={"Legal Information"} items={menuInfoItems}/>
                    </div>
                    <div className="pt-[1.25rem] pb-[1.8rem] px-[2.1rem] mb-[3rem]">
                    <h3 className="font-medium text-[#FFF] text-base mb-[1.37rem] text-center">Follow Us</h3>
                    <div className="flex gap-[2.7rem] px-[1rem]">
                        <div className="flex-1"><img src={teleIcon} alt="" /></div>
                        <div className="flex-1"><img src={fbIcon} alt="" /></div>
                        <div className="flex-1"><img src={instIcon} alt="" /></div>
                        <div className="flex-1"><img src={twitterIcon} alt="" /></div>
                
                    </div>
                
                </div>
                <div className='px-[1rem]'>
                <div className='px-[2rem] py-[1rem] bg-[#1A3157] rounded-[10px] mb-[1rem]'>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className="font-medium text-[#FFF] text-base text-center">Help Center</h3>
                            <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">If you have any questions?</p>
                        </div>
                        <button type="button" className=" uppercase text-[0.8rem] font-normal rounded-[10px] text-[#FFF] bg-[#3555FF] px-[12px] py-[10px]">
                            get answers
                        </button>
                    </div>
                </div>
                </div>
                <div className="flex justify-around gap-[8px] px-[1rem]">
                    <div className='flex-1 flex justify-center items-center bg-[#1A3157] rounded-[10px] py-[8px]'>
                        <div className='flex'>
                            <img src={androidIcon} alt="" />
                            <div>
                                <h3 className="font-medium text-[#FFF] text-base text-center">Bluechip App</h3>
                                <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">for Android</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex-1 flex justify-around items-center bg-[#1A3157] rounded-[10px] py-[8px]'>
                        <div className='flex'>
                            <img src={appleIcon} alt="" />
                            <div>
                                <h3 className="font-medium text-[#FFF] text-base text-center">Bluechip App</h3>
                                <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">for iOS</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </footer>
        </div>
    );
}
