"use client"
import Link from "next/link"
import Image from "next/image"
import {LocateIcon} from "lucide-react"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <section id="hero" className="bg-gradient-to-r from-primary to-primary py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            
            <div className="flex flex-col md:flex-row-reverse gap-4">

            {/* <Image
                src="/universaloffice.png"
                width={1920}
                height={1080}
                alt="Conveyor"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
                <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
        <CarouselItem ><Image
                src="/Carousel_4.jpeg"
                width={1920}
                height={1080}
                alt="Conveyor"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              </CarouselItem>
          

            <CarouselItem ><Image
                src="/rivercarousel.jpeg"
                width={1920}
                height={1080}
                alt="Conveyor"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </CarouselItem>
            <CarouselItem ><Image
                src="/Rollerconveyorcarousel.jpeg"
                width={1920}
                height={1080}
                alt="Conveyor"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </CarouselItem>
            <CarouselItem ><Image
                src="/rubberconveryorcaroursel.jpeg"
                width={1920}
                height={1080}
                alt="Conveyor"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </CarouselItem>

            
            
          
        </CarouselContent>
        
      </Carousel>
              <div className="flex flex-col justify-center space-y-4 w-full">
                
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl text-white-500">
                    Innovative Conveyor Solutions
                  </h1>
                  
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Universal Conveyors is a leading manufacturer of high-quality conveyor systems for a wide range of
                    industries. Our innovative solutions help businesses optimize their operations and increase
                    efficiency.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#products"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/request"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
              <LocateIcon />
              
            </div>
          </div>
        </section>
  )
}

export default Hero