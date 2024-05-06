"use client";

import GallonView from "@/components/views/Gallon";
import { setWaterTank } from "@/store/slices/waterTank";
import { fetcher } from "@/utils/fetcher";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

const Gallonpage = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSWR("/api/waterTank", fetcher);

  if (!isLoading) dispatch(setWaterTank(data?.data));
  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <Loader className="text-white" />
    </div>
  ) : (
    <GallonView />
  );
};

export default Gallonpage;
