"use client";

import InformationView from "@/components/views/Information";
import { setWaterTank } from "@/store/slices/waterTank";
import { fetcher } from "@/utils/fetcher";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

const InformationPage = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSWR("/api/waterTank", fetcher);

  if (!isLoading) dispatch(setWaterTank(data?.data));
  return isLoading ? (
    <div className="flex justify-center items-center">
      <Loader className="text-white" />
    </div>
  ) : (
    <InformationView />
  );
};

export default InformationPage;
