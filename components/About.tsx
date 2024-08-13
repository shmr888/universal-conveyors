
const About = () => {
  return (
    <section id="about" className="bg-background py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src="/placeholder.svg"
          width="500"
          height="310"
          alt="Team"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
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