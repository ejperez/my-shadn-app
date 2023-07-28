"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Email should be valid"),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "You must accept terms and conditions.",
    }),
  }),
});

export default function MyNotificationForm({
  onSuccess,
}: {
  onSuccess: (isOpen: boolean) => void;
}) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit() {
    toast({
      title: "Thank you!",
      description: "Check your email everyday.",
    });

    onSuccess(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="ej@mystore.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor={field.name}>
                  I accept the{" "}
                  <a className="underline" href="#">
                    terms and condition
                  </a>
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <div className="pt-4 text-center">
          <Button type="submit" className="btn-sm">
            SUBMIT
          </Button>
        </div>
      </form>
    </Form>
  )
}
