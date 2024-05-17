"use client";

import DashboardView from "@/components/views/Dashboard";
import { setWaterTanks } from "@/store/slices/waterTanks";
import { fetcher } from "@/utils/fetcher";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSWR("/api/waterTanks", fetcher);

  if (!isLoading) dispatch(setWaterTanks(data?.data));
  return isLoading ? (
    <div className="flex justify-center items-center">
      <Loader className="text-white" />
    </div>
  ) : (
    <DashboardView />
  );
};

export default DashboardPage;
