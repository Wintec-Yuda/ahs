"use client";

import SpendingView from "@/components/views/Spending";
import { setWaterTank } from "@/store/slices/waterTank";
import { fetcher } from "@/utils/fetcher";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

const Spendingpage = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSWR("/api/waterTank", fetcher);

  if (!isLoading) dispatch(setWaterTank(data?.data));
  return isLoading ? (
    <div className="flex justify-center items-center">
      <Loader className="text-white" />
    </div>
  ) : (
    <SpendingView />
  );
};

export default Spendingpage;
