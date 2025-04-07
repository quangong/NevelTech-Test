import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoImage from '../assets/home/slide.png';
import icon1 from '../assets/home/icon1.png';
import icon2 from '../assets/home/icon2.png';
import icon3 from '../assets/home/icon3.png';
import icon4 from '../assets/home/icon4.png';
import icon5 from '../assets/home/icon5.png';
import icon6 from '../assets/home/icon6.png';
import icon7 from '../assets/home/icon7.png';
import game1 from '../assets/home/game1.png';
import game2 from '../assets/home/game2.png';
import game3 from '../assets/home/game3.png';
import provider1 from '../assets/home/provider1.png';
import provider2 from '../assets/home/provider2.png';
import provider3 from '../assets/home/provider3.png';
import provider4 from '../assets/home/provider4.png';
import provider5 from '../assets/home/provider5.png';
import provider6 from '../assets/home/provider6.png';
import provider7 from '../assets/home/provider7.png';
import provider8 from '../assets/home/provider8.png';
import seeAll from '../assets/home/see_all.png';
import searchImage from '../assets/search.png';

const images = [
    logoImage,
    logoImage,
    logoImage,
    logoImage,
    logoImage,
];

const games = [
    game1,
    game2,
    game3,
    game1,
    game2,
    game3,
    game1,
    game2,
    game3,
];

const CenterModeSlider = () => {
    const settings = {
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        speed: 500,
        infinite: true,
        dots: false,
        arrows: false, // Disable next/previous buttons
        responsive: [
            {
                breakpoint: 1536, // For small screens
                centerMode: true,
                settings: {
                    slidesToShow: 1, // Show only 1 slide
                    centerPadding: "150px", // Remove padding
                },
            },
            {
                breakpoint: 1280, // For small screens
                centerMode: true,
                settings: {
                    slidesToShow: 1, // Show only 1 slide
                    centerPadding: "50px", // Remove padding
                },
            },
            {
                breakpoint: 375, // For small screens
                settings: {
                    centerMode: false,
                    slidesToShow: 1, // Show only 1 slide
                    centerPadding: "0px", // Remove padding
                },
            },
        ],
    };

    return (
        <div className="w-full bg-[#03193A] pt-[3rem] md:pt-[1.43rem] main-slide  pb-[3rem]">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div className="slide-container relative mx-auto bg-[#147261] !flex justify-between rounded-[30px] text-center 
                    bg-[linear-gradient(to_bottom,_#147261,_#082C25)]
                    md:bg-[linear-gradient(to_right,_#147261,_#082C25)] h-[423px]">
                        <div className="px-[2.1rem] md:px-[5.3rem] pt-[6rem] md:pt-[2.43rem] flex-1 w-full" >
                            <p className="hidden lg:block text-[1.3rem] mb-[0.93rem] py-[1rem] px-[0.4rem] bg-[#FFFFFF1A] rounded-[79px]">Exclusive Tournament</p>
                            <p className="block lg:hidden mt-[2.5rem] mb-[0.75rem]">
                                <span className="text-[12px]  px-[2.6rem] bg-[#FFFFFF1A] rounded-[4.9rem]">CashBack</span>
                            </p>
                            <h2 className="text-[1.5rem] md:text-[2.62rem] font-extrabold mb-[0.9rem]">Piggy Christmas Tap:
                                €35,000 For Your<br />
                                Wins</h2>
                            <button className="hidden lg:block px-[5.5rem] py-[1rem] bg-[#FF0960] rounded-[0.75rem] text-[1.3rem] text-[#FFF]">JOIN AND WIN</button>
                            <div className="lg:hidden flex justify-center">
                                <button className=" px-[3.5rem] py-[1rem] bg-[#FF0960] rounded-[0.75rem] text-[1rem] text-[#FFF]">Discover More</button>
                            </div>
                        </div>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="absolute transform left-1/2 md:left-0 md:-translate-x-0 -translate-x-1/2 md:static top-[-4rem] h-[168px] md:h-full"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const MultipleItems = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: false, // Disable next/previous buttons
    };
    return (
        <div className="slider-container game-slide">
            <Slider {...settings}>
                {games.map((img, index) => (
                    <img className="!w-[150px]" height={210} alt="" src={img}/>
                ))}
            </Slider>
        </div>
    );
}

const MultipleProviders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1
    };

    const providers = [provider1, provider2, provider3, provider4, provider5, provider6, provider7, provider8];
    return (
        <div className="slider-container game-slide">
            <Slider {...settings}>
                {providers.map((img, index) => (
                    <div className="flex-1">
                        <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={img} alt="" className="object-cover" /></div>
                        <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                            <div>
                                <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default function Home() {
    return (
        <div className="">
            <CenterModeSlider />
            <div className="bg-[#03193A]">
                <div className="max-w-[1100px] 2xl:max-w-[1440px] mx-auto pb-[2.5rem]">
                    <div className="hidden lg:flex flex-wrap gap-[0.6rem] pb-[1.9rem] mb-[2rem] border-b-[#FFFFFF1A] border-b-[0.8px]">
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] bg-[#03193A] flex-1 py-[1rem] px-[3.1rem] 2xl:px-[0] text-sm rounded-[0.6rem] boder border-solid border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon1} alt="" />
                            </div>
                            <div className="flex items-center"><p>Diamond mine</p></div>
                        </button>
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] bg-[#03193A] flex-1 py-[1rem] px-[3.1rem] 2xl:px-[0] text-sm rounded-[0.6rem] border border-solid border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon2} alt="" />
                            </div>
                            <div className="flex items-center"><p>VIP</p></div>
                            
                        </button>
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] bg-[#03193A] flex-1 py-[1rem] px-[3.1rem] 2xl:px-[0] text-sm rounded-[0.6rem] border border-solid border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon3} alt="" />
                            </div>
                            <div className="flex items-center"><p>Promotion</p></div>
                            
                        </button>
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] bg-[#03193A] flex-1 py-[1rem] px-[3.1rem] 2xl:px-[0] text-sm rounded-[0.6rem] border border-solid border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon4} alt="" />
                            </div>
                            <div className="flex items-center"><p>Hot Match</p></div>
                            
                        </button>
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] border-solid bg-[#03193A] flex-1 py-[1rem] 2xl:px-[0] px-[3.1rem] text-sm rounded-[0.6rem] border border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon5} alt="" />
                            </div>
                            <div className="flex items-center"><p>P2P Transaction</p></div>
                            
                        </button>
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] bg-[#12294A] flex-1 py-[1rem] border-solid px-[3.1rem] 2xl:px-[0] text-sm rounded-[0.6rem] border border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon6} alt="" />
                            </div>
                            <div className="flex items-center"><p>Games</p></div>
                            
                        </button>
                        <button className="flex flex-col 2xl:flex-row 2xl:justify-center text-[#FFF] bg-[#12294A] flex-1 py-[1rem] border-solid px-[3.1rem] 2xl:px-[0] text-sm rounded-[0.6rem] border border-[#FFFFFF1A]">
                            <div className="flex justify-center 1xl:justify-normal">
                                <img className="mr-0 1xl:mr-[0.8rem] 2xl:mr-[0.8rem]" src={icon7} alt="" />
                            </div>
                            <div className="flex items-center"><p>Providers</p></div>
                            
                        </button>
                    </div>

                    {/* Mobile fillter */}
                    <div className="flex justify-between lg:hidden gap-[6px] px-[10px] mb-[1.5rem]">
                        <button className="text-[#FFF] py-[13px] border-solid bg-[#12294A] flex-1 text-sm rounded-[0.6rem] border border-[#FFFFFF1A]">
                            <div className="flex justify-center items-center">
                                <img className="mr-[7px]" width={23} src={searchImage} alt="" />
                                <p className="flex items-center">Search</p>
                            </div>
                        </button>
                        <button className="text-[#FFF] py-[13px] border-solid bg-[#12294A] flex-1 text-sm rounded-[0.6rem] border border-[#FFFFFF1A]">
                            <div className="flex justify-center items-center">
                                <img className="mr-[7px]" width={23} src={icon6} alt="" />
                                <p className="flex items-center">Games</p>
                            </div>
                        </button>
                        <button className="text-[#FFF] py-[13px] border-solid bg-[#12294A] flex-1 text-sm rounded-[0.6rem] border border-[#FFFFFF1A]">
                            <div className="flex justify-center items-center">
                                <img className="mr-[7px]" width={23} src={icon7} alt="" />
                                <p className="flex items-center">Provides</p>
                            </div>
                        </button>
                    </div>


                    <h3 className="px-[1rem] text-[14px] lg:text-[2rem] font-medium text-[#FFF] mb-[12px] lg:mb-[2rem]">Exclusive Games</h3>
                    <div className="px-[10px] lg:px-[0] mb-[1.5rem] lg:mb-[2.5rem] ">
                        <MultipleItems />
                    </div>
                    <div className="flex justify-between mb-[12px] lg:mb-[2rem] px-[1rem] lg:px-[0]">
                        <h3 className="text-[14px] lg:text-[2rem] font-medium text-[#FFF] ">All providers</h3>
                        <div className="flex items-center">
                            <p className="hidden lg:block text-base font-normal text-[#FFF] mr-[10.4px]">SEE ALL</p>
                            <img src={seeAll} alt="" />
                        </div>

                    </div>

                    <div className="hidden mx-[0] 1xl:mx-[3.4rem] lg:flex gap-[0.75rem] flex-wrap">
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider1} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider2} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider3} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider4} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider5} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider6} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider7} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-[#12294A] rounded-t-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]"><img src={provider8} alt="" className="object-cover" /></div>
                            <div className="flex items-center justify-center  bg-[#F5F9FF0D] rounded-b-[8px] px-[2rem] pt-[1rem] pb-[1.4rem]">
                                <div>
                                    <p className="text-[#FFFFFF] text-[0.8rem] font-normal underline">Evolution</p>
                                    <p className="text-[#90A2BD] text-[0.7rem] font-normal underline">312 games</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile providers */}
                    <div className="flex px-[10px] lg:hidden mb-[1.5rem] lg:mb-[2.5rem] ">
                        <MultipleProviders />
                    </div>
                </div>
            </div>

        </div>
    );
}
