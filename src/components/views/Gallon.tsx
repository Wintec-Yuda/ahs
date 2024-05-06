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

const GallonView = () => {
  const fillForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qty: "",
    },
  });
  const sellForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qty: "",
    },
  });

  const handleFill = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    fillForm.reset();
  };

  const handleSell = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    sellForm.reset();
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl text-white font-bold underline">Input Data Gallon</h1>
      <div className="flex flex-col gap-5">
        <FormInput form={fillForm} handleSubmit={handleFill} colorButton="bg-blue-500 hover:bg-blue-700" label="Isi Galon" />
        <FormInput form={sellForm} handleSubmit={handleSell} colorButton="bg-green-500 hover:bg-green-700" label="Jual Galon" />
      </div>
    </div>
  );
};

export default GallonView;

const FormInput = ({ form, handleSubmit, colorButton, label }: any) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4 items-center">
        <FormField
          control={form.control}
          name="qty"
          render={({ field }) => {
            return (
              <FormItem className="flex gap-4 items-center">
                <FormLabel className="text-white text-lg font-bold mt-2">{label}</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button className={`${colorButton} text-lg font-bold mt-2`} type="submit">
          Kirim
        </Button>
      </form>
      <hr />
    </Form>
  );
};
