import { NextRequest, NextResponse } from "next/server";
import { getData, updateDataById, updateDataSpendingById } from "@/lib/firebase/service";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const data = await getData("waterTank");

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token: any = request.headers.get("authorization")?.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.NEXTAUTH_SECRET || "");
    const data = await request.json();

    if (decoded) {
      if (data.spending) {
        await updateDataSpendingById("waterTank", data);
      } else {
        const revenue = parseInt(data.gallonSell) * 3000;
        
        await updateDataById("waterTank", data, revenue);
      }

      return NextResponse.json(
        {
          success: true,
          message: "Update data successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
