import { NextResponse } from "next/server";
import { getData } from "@/lib/firebase/service";

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
