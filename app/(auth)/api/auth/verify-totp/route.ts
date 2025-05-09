import { NextRequest, NextResponse } from "next/server";
import { authenticator } from "otplib";
import { prisma } from "@/lib/prismadb";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const body = await req.json();
    const { token } = body;
    console.log("Token from request body:", token);

    if (!user || !token) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    const isValid = authenticator.check(token, dbUser?.totpSecret || "");

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { clerkId: user.id },
      data: { isTotpEnabled: true },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error validating TOTP:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
