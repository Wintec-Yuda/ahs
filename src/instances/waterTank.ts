import instance from "@/lib/axios/instance";

const waterTankInstance = {
  addData: (data: any, token: string) =>
    instance.post("/api/waterTank", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateData: (data: any, token: string) =>
    instance.put("/api/waterTank", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default waterTankInstance;
