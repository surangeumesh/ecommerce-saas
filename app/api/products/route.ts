import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Product from "../../models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("BODY:", body); // 👈 DEBUG

    const product = await Product.create(body);

    console.log("CREATED:", product); // 👈 DEBUG

    return NextResponse.json(product);
  } catch (error) {
    console.log("POST ERROR:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}