"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { errorAlert, successAlert } from "@/utils/sweetalert";
import waterTankInstance from "@/instances/waterTank";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const fillFormSchema = z.object({
  gallonFill: z.string(),
  id: z.string(),
});
const sellFormSchema = z.object({
  gallonSell: z.string(),
  id: z.string(),
});

const GallonView = () => {
  const [loading, setLoading] = useState(false);
  const session: any = useSession();

  const id = useSelector((state: any) => state.waterTank).data[0]?.id;
  const token = session?.data?.token;

  const fillForm = useForm({
    resolver: zodResolver(fillFormSchema),
    defaultValues: {
      gallonFill: "",
      id: id,
    },
  });
  const sellForm = useForm({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      gallonSell: "",
      id: id,
    },
  });

  const handleFill = async (data: z.infer<typeof sellFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    fillForm.reset();
  };

  const handleSell = async (data: z.infer<typeof sellFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    sellForm.reset();
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl text-white font-bold underline">Input Data Gallon</h1>
      <div className="flex flex-col gap-5">
        <FormInput form={fillForm} nameInput="gallonFill" handleSubmit={handleFill} colorButton="bg-blue-500 hover:bg-blue-700" label="Isi Galon" loading={loading} />
        <FormInput form={sellForm} nameInput="gallonSell" handleSubmit={handleSell} colorButton="bg-green-500 hover:bg-green-700" label="Jual Galon" loading={loading} />
      </div>
    </div>
  );
};

export default GallonView;

const FormInput = ({ form, handleSubmit, nameInput, colorButton, label, loading }: any) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4 items-center">
        <FormField
          control={form.control}
          name={nameInput}
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
        {loading ? (
          <Button disabled className="mt-3">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button className={`${colorButton} text-lg font-bold mt-2`} type="submit">
            Kirim
          </Button>
        )}
      </form>
      <hr />
    </Form>
  );
};
