
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

import {products} from "@/lib/products"



const Products = () => {
  return (
    <section id="products" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                Our Products
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Universal Conveyors offers a wide range of high-quality conveyor systems to meet the needs of our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {products.map((product, i) => {
                return <ProductCard key={i} {...product}  />
              })}

            </div>
          </div>
        </section>
  )
}

export default Products

interface ProductsCardProps {
    title: string
description: string
image: string
id: string
}

const ProductCard = ({title, description, image, id}: ProductsCardProps) => {
    return <Card>
        <CardContent>
      <img
        src={image}
        width="400"
        height="225"
        alt="Belt Conveyor"
        className="aspect-video object-fill rounded-md mt-5"
      />
    </CardContent>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-justify">
        {description}
      </CardDescription>
    </CardHeader>
    
    <CardFooter className="ab">
      <Link
        href={`/request?product=${id}`}
        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}
      >
        Learn More
      </Link>
    </CardFooter>
  </Card>
}