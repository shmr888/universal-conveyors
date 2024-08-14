'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from 'next/navigation'
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { products } from "@/lib/products"

 
const formSchema = z.object({
  name: z.string().min(2),
  companyName: z.string().min(2),
  email: z.string().email(),
    mobile: z.string().min(2),
  address: z.string().min(2),
  product: z.string().min(2),
  comments: z.string().min(2),
})



const RequestForm = () => {

  const searchParams = useSearchParams()
 
  const productID = searchParams.get('product')

  const product = products.find(p => p.id === productID)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            companyName: "",
            email: "",
            mobile: "",
            address: "",
            product: product ? product.id : "",
            comments: "",
        },
      })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        let response = await fetch("https://universal-conveyors.vercel.app/api/sendMail", {
            method: "POST",
            body: JSON.stringify({
                ...values,
                product: products.find(product => product.id === values.product)?.title
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
      
          if (response.status === 200) {
            alert("Message sent successfully");
            form.reset();
          } else {
            alert("Error sending message: " + response.status);
          }

    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Products" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {products.map((product, index) => {
                        return <SelectItem key={index} value={product.id}>{product.title}</SelectItem>
                    })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Additional Comments</FormLabel>
              <FormControl>
                <Textarea  placeholder="Enter Additonal Comments" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     
        <Button type="submit" className="col-span-2 mx-auto w-full md:w-64">Submit</Button>
      </form>
    </Form>
  )
}

export default RequestForm