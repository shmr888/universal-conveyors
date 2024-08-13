import RequestForm from "@/components/RequestForm"
import { Suspense } from "react"

const RequestPage = () => {
  
  return (
    <main className="flex-1">
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="">
              <div className="flex flex-col justify-center space-y-4">
                <div className="">
                  <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">Request a Quote</h1>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Fill out the form below to request a quote for our high-quality conveyor systems.
                  </p>
                </div>
                
                <Suspense fallback={<div>Loading...</div>}> <RequestForm /> </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default RequestPage