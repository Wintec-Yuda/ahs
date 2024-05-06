import instance from "@/lib/axios/instance";

const waterTankInstance = {
  updateData: (data: any, token: string) =>
    instance.put("/api/waterTank", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default waterTankInstance;
