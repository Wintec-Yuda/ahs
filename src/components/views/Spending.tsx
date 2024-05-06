"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useSession } from "next-auth/react";
import waterTankInstance from "@/instances/waterTank";
import { errorAlert, successAlert } from "@/utils/sweetalert";

const gallonLidsFormSchema = z.object({
  gallonLids: z.string(),
  id: z.string(),
  spending: z.boolean(),
});
const wipesFormSchema = z.object({
  wipes: z.string(),
  id: z.string(),
  spending: z.boolean(),
});
const operationalFormSchema = z.object({
  operational: z.string(),
  id: z.string(),
  spending: z.boolean(),
});
const tankWaterFormSchema = z.object({
  tankWater: z.string(),
  id: z.string(),
  spending: z.boolean(),
});
const filterFormSchema = z.object({
  filter: z.string(),
  id: z.string(),
  spending: z.boolean(),
});
const salaryFormSchema = z.object({
  salary: z.string(),
  id: z.string(),
  spending: z.boolean(),
});

const SpendingView = () => {
  const [loading, setLoading] = useState(false);
  const session: any = useSession();

  const id = useSelector((state: any) => state.waterTank).data[0]?.id;
  const token = session?.data?.token;

  const gallonLidsForm = useForm({
    resolver: zodResolver(gallonLidsFormSchema),
    defaultValues: {
      gallonLids: "",
      id: id,
      spending: true,
    },
  });
  const wipesForm = useForm({
    resolver: zodResolver(wipesFormSchema),
    defaultValues: {
      wipes: "",
      id: id,
      spending: true,
    },
  });
  const operationalForm = useForm({
    resolver: zodResolver(operationalFormSchema),
    defaultValues: {
      operational: "",
      id: id,
      spending: true,
    },
  });
  const tankWaterForm = useForm({
    resolver: zodResolver(tankWaterFormSchema),
    defaultValues: {
      tankWater: "",
      id: id,
      spending: true,
    },
  });
  const filterForm = useForm({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      filter: "",
      id: id,
      spending: true,
    },
  });
  const salaryForm = useForm({
    resolver: zodResolver(salaryFormSchema),
    defaultValues: {
      salary: "",
      id: id,
      spending: true,
    },
  });

  const handleGallonLids = async (data: z.infer<typeof gallonLidsFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    gallonLidsForm.reset();
  };

  const handleWipes = async (data: z.infer<typeof wipesFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    wipesForm.reset();
  };

  const handleOperational = async (data: z.infer<typeof operationalFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    operationalForm.reset();
  };

  const handleTankWater = async (data: z.infer<typeof tankWaterFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    tankWaterForm.reset();
  };

  const handleFilter = async (data: z.infer<typeof filterFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    filterForm.reset();
  };

  const handleSalary = async (data: z.infer<typeof salaryFormSchema>) => {
    setLoading(true);
    try {
      const response = await waterTankInstance.updateData(data, token);
      successAlert(response.data.message);
    } catch (error) {
      errorAlert("Internal Server Error");
    } finally {
      setLoading(false);
    }
    salaryForm.reset();
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl text-white font-bold underline">Input Data Pengeluaran</h1>
      <div className="flex flex-col gap-5">
        <FormInput form={gallonLidsForm} handleSubmit={handleGallonLids} nameInput="gallonLids" colorButton="bg-blue-500 hover:bg-blue-700" label="Tutup Galon" />
        <FormInput form={wipesForm} handleSubmit={handleWipes} nameInput="wipes" colorButton="bg-green-500 hover:bg-green-700" label="Tisu" />
        <FormInput form={operationalForm} handleSubmit={handleOperational} nameInput="operational" colorButton="bg-red-500 hover:bg-red-700" label="Operasional" />
        <FormInput form={tankWaterForm} handleSubmit={handleTankWater} nameInput="tankWater" colorButton="bg-purple-600 hover:bg-purple-800" label="Air Tangki" />
        <FormInput form={filterForm} handleSubmit={handleFilter} nameInput="filter" colorButton="bg-yellow-700 hover:bg-yellow-900" label="Filter" />
        <FormInput form={salaryForm} handleSubmit={handleSalary} nameInput="salary" colorButton="bg-lime-700 hover:bg-lime-900" label="Gaji" />
      </div>
    </div>
  );
};

export default SpendingView;

const FormInput = ({ form, handleSubmit, nameInput, colorButton, label }: any) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-1 md:gap-4 items-center">
        <FormField
          control={form.control}
          name={nameInput}
          render={({ field }) => {
            return (
              <FormItem className="flex gap-4 items-center">
                <FormLabel className="text-white text-sm sm:text-base font-bold mt-2">{label}</FormLabel>
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
