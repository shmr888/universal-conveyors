import React from 'react'
import Link from "next/link"
import {LogInIcon, MenuIcon} from "lucide-react"
import {Button} from "./ui/button"
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  {
    name: "Home",
    link: "/#"
  },{
    name: "About",
    link: "/#about"
  },{
    name: "Products",
    link: "/#products"
  },
  {
    name: "Contact Us",
    link: "mailto:msudharsan.711@gmail.com"
  }
]

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 z-50 text-primary-foreground shadow-md border-b border-white/20 px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link href="/#" className="flex items-center gap-2 md:gap-4" prefetch={false}>
         <Image className='w-20 h-20 md:w-24 md:h-24 object-contain' src="/universal conveyors.png" width={1920} height={1080} alt="" />
         <div className='flex flex-col gap-0 '>

         <p className='font-bold  md:text-xl uppercase leading-5'>Universal Conveyors</p>
         <p className ="font-medium text-xs">AN ISO 9001 : 2000 CERTIFIED COMPANY</p>
         
         </div>
        </Link>
        <nav className="hidden lg:flex gap-4 mr-2 ">
          {navLinks.map((link, index) => {
            return <Link key={index} href={link.link} className="hover:underline" prefetch={false}>
            {link.name}
          </Link>
          })}
          
        </nav>

        <Sheet>
  <SheetTrigger asChild className="lg:hidden">
    <Button variant={'secondary'}>

          <MenuIcon className="h-6 w-6 text-black" />
          <span className="sr-only">Toggle navigation</span>
    </Button>
</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Contents</SheetTitle>
      <SheetDescription className='text-left flex flex-col gap-2'>
      {navLinks.map((link, index) => {
            return <Link key={index} href={link.link} className="hover:underline text-xl font-medium" prefetch={false}>
            {link.name}
          </Link>
          })}
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        
      </header>
  )
}

export default Header