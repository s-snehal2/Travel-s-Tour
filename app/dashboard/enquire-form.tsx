import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import TripInfo from "./trip-info";

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string(),
  phone: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast("Successfully Submitted.");
  }

  return (
    <div className="p-0">
      <div className="p-1">
        <TripInfo />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8  mx-auto py-2 px-2 "
        >
          <div className="font-bold text-xl">For Enquire</div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="-mt-4">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="FirstName" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="-mt-4">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="LastName" type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="-mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="-mt-4">
                <FormLabel>Mobile No.</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mobile_no"
                    type="number"
                    min={10}
                    max={10}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center gap-4">
            <Button type="submit">Submit</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
