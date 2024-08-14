import {
    ArrowRight,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
    GlobeIcon,
  } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
  
  const Footer = () => {
    return (
      <div className="w-full bg-primary text-white border-t border-white/20">
        <div className="p-4 md:p-16 xl:max-w-screen-2xl xl:mx-auto">
          <div className="flex flex-col items-center text-center gap-8 md:flex-row md:justify-between lg:items-start lg:gap-8">
            <div className="flex flex-col md:flex-row md:h-24 items-center gap-5">
                <Image className="w-48 object-contain" width={1920} height={1080} src="/universal conveyors.png"  alt="logo" />
              <div className="text-center md:text-left text-sm gap-1 ">
              <div className='flex flex-col mb-2 mt-2'>
              <p className='font-bold text-xl uppercase'>Universal Conveyors</p>
              <p className ="font-medium text-xs">AN ISO 9001 : 2000 CERTIFIED COMPANY</p>
              </div>
                <p>No. 24 to 27 Rajeshwari Indl. Layout, Sipcot – I,
                Hosur – 635 126, Krishnagiri District, Tamilnadu, India.</p>

                
                <p>Mobile: 94432 68122, 95855 04103.</p>
                <p>E-mail: unicony@yahoo.co.in, sales@universalconveyors.in</p>
                <Link className="flex mt-4 items-center gap-2 justify-center md:justify-start" href={'https://maps.app.goo.gl/HvATEVvvK8voNuFd6?g_st=iw'}><GlobeIcon /> <p className="text-sm font-medium">Google Maps</p></Link>
            </div>
            </div>
            <div className="flex flex-col gap-4 text-nav md:hidden lg:inline-flex lg:flex-row lg:flex-1 lg:justify-center  lg:text-left lg:gap-8">
              <div className="lg:gap-1 lg:text-sm flex flex-col ">
                <h1 className="font-bold text-white">Contents</h1>
                <Link href={"/#hero"} className="hover:underline cursor-pointer">
                Home
                </Link>
                <Link href={"/#about"} className="hover:underline cursor-pointer">
                  About Us
                </Link>
                <Link
                  href={"/#products"}
                  className="hover:underline cursor-pointer"
                >
                  Products
                </Link>
                <Link 
                href = "mailto:msudharsan.711@gmail.com"
                className="hover:underline cursor-pointer">
                  Contact Us
                </Link>

                
        
              </div>
              <div className="lg:gap-1 lg:text-sm flex flex-col">
              <Image
                src="/gst info.png"
                width="200"
                height="100"
                
                alt="GST INFO"
                className="aspect-video object-contain rounded-md items-center ml-6"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-gray-300/20" />
        <div className="py-4 flex flex-col gap-4 md:flex-row md:justify-between xl:max-w-screen-xl xl:mx-auto">
          <div className="text-nav flex flex-col text-center md:text-left md:flex-row md:gap-4 items-center w-full justify-between">
            <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-sm">
              © Universal Conveyors
            </p>
            <span className="hidden md:block">•</span>
            
            <div className="flex flex-col md:flex-row md:gap-3 items-center">
              <p className="text-sm hover:underline cursor-pointer">
                Privacy policy
              </p>
              <span className="hidden md:block">•</span>
              <p className="text-sm hover:underline cursor-pointer">
                Terms of Service
              </p>
              </div>
            </div>

              <p className="flex item-center gap-2 text-xs md:text-sm hover:underline cursor-pointer">
                Designed and Developed by 
              
              <Link href="https://www.instagram.com/webcrafters.dev/" target="_blank"><Image alt="WC LOGO" src="/WC LOGO.png" className="w-24 md:w-32 h-fit object-contain" width={1920} height={1080}/></Link></p>
            
            
          
            
          </div>
        </div>
       

        
      </div>
    );
  };
  
  export default Footer;
  