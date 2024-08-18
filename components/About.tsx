import Image from "next/image"

const About = () => {
  const images = ["/Customers/Tvs.png","https://www.ashokleyland.com/pwa/img/FE/Ashok-Leyland-Brand-Logo.svg","https://media.licdn.com/dms/image/v2/C510BAQE17UCJUEaHcQ/company-logo_200_200/company-logo_200_200/0/1631413000611/snj_group_logo?e=2147483647&v=beta&t=bc0Y36cxAa3zZKbz02KYxxHXcvyhA-4tTV3gx1yAfCU","https://bannari.bitsathy.ac.in/assets/images/partners/01.png","https://trademaklogos.s3.ap-south-1.amazonaws.com/5524193.jpeg","/Customers/exide.png","/Customers/kabaras.jfif","/Customers/parrys.png","/Customers/river.png"]
  return (
    <section id="about" className="bg-background py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col md:flex-row-reverse gap-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          <h1 className="col-span-2 md:col-span-3 text-2xl font-bold text-center">Our Customers</h1>
          {images.map((image,index)=>{
            return <Image key={index} src={image} className="w-[20rem] h-48 object-contain" alt="Embedded Customers" width={1920} height={1080} />
          })}
        </div>
        {/* <img
          src="/placeholder.svg"
          width="500"
          height="310"
          alt="Team"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        /> */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2 ">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              About <br/> Universal Conveyors
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Universal Conveyors is a leading manufacturer of high-quality conveyor systems for a wide range of
              industries. Our company has been in operation for over 25 years, and we pride ourselves on our
              commitment to innovation, quality, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide our customers with the most reliable and efficient conveyor solutions on the market.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the industry leader in conveyor technology and innovation.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Quality, Integrity, Collaboration, and Continuous Improvement.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Our Expertise</h3>
              <p className="text-muted-foreground">Over 25 years of experience in the conveyor industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About