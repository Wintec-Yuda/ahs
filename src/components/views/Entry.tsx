"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  qty: z.string(),
});

const EntryView = () => {
  const fillForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qty: "",
    },
  });
  const sellForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qty: "",
    },
  });

  const handleFill = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const handleSell = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="h-screen p-4">
      <div className="flex flex-col gap-10">
        <FormInput form={fillForm} handleSubmit={handleFill} colorButton="bg-blue-500 hover:bg-blue-700" textButton="Isi Galon" />
        <FormInput form={sellForm} handleSubmit={handleSell} colorButton="bg-green-500 hover:bg-green-700" textButton="Jual Galon" />
      </div>
    </div>
  );
};

const FormInput = ({ form, handleSubmit, colorButton, textButton }: any) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4 items-center">
        <FormField
          control={form.control}
          name="qty"
          render={({ field }) => {
            return (
              <FormItem className="flex gap-4 items-center">
                <FormLabel className="text-white text-xl font-bold mt-2">Jumlah</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button className={`${colorButton} text-lg font-bold mt-2`} type="submit">
          {textButton}
        </Button>
      </form>
    </Form>
  );
};

export default EntryView;
