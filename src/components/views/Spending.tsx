"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  money: z.string(),
});

const SpendingView = () => {
  const gallonLidsForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: "",
    },
  });
  const wipesForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: "",
    },
  });
  const operationalForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: "",
    },
  });
  const tankWaterForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: "",
    },
  });
  const filterForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: "",
    },
  });
  const salaryForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: "",
    },
  });

  const handleGallonLids = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    gallonLidsForm.reset();
  };

  const handleWipes = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    wipesForm.reset();
  };

  const handleOperational = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    operationalForm.reset();
  };

  const handleTankWater = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    tankWaterForm.reset();
  };

  const handleFilter = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    filterForm.reset();
  };

  const handleSalary = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    salaryForm.reset();
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl text-white font-bold underline">Input Data Pengeluaran</h1>
      <div className="flex flex-col gap-5">
        <FormInput form={gallonLidsForm} handleSubmit={handleGallonLids} colorButton="bg-blue-500 hover:bg-blue-700" label="Tutup Galon" />
        <FormInput form={wipesForm} handleSubmit={handleWipes} colorButton="bg-green-500 hover:bg-green-700" label="Tisu" />
        <FormInput form={operationalForm} handleSubmit={handleOperational} colorButton="bg-red-500 hover:bg-red-700" label="Operasional" />
        <FormInput form={tankWaterForm} handleSubmit={handleTankWater} colorButton="bg-purple-600 hover:bg-purple-800" label="Air Tangki" />
        <FormInput form={filterForm} handleSubmit={handleFilter} colorButton="bg-yellow-700 hover:bg-yellow-900" label="Filter" />
        <FormInput form={salaryForm} handleSubmit={handleSalary} colorButton="bg-lime-700 hover:bg-lime-900" label="Gaji" />
      </div>
    </div>
  );
};

export default SpendingView;

const FormInput = ({ form, handleSubmit, colorButton, label }: any) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4 items-center">
        <FormField
          control={form.control}
          name="money"
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
