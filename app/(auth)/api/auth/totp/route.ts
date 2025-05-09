import { NextRequest, NextResponse } from "next/server";
import { authenticator } from "otplib";
import QRCode from "qrcode";
import { prisma } from "@/lib/prismadb";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  const { clerkId } = body;
  if (!clerkId) {
    return new NextResponse("Missing clerkId", { status: 400 });
  }

  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const existingUser = await prisma.user.findFirst({
      where: {
        clerkId: user.id,
      },
    });
    if (!existingUser) {
      await prisma.user.create({
        data: {
          clerkId: clerkId,
          userName: user?.username || "undefined",
          email: user?.emailAddresses[0].emailAddress,
        },
      });
    }

    const secret = authenticator.generateSecret();

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    await prisma.user.update({
      where: { clerkId: user.id },
      data: { totpSecret: secret },
    });

    const otpauth = authenticator.keyuri(
      user.emailAddresses[0].emailAddress,
      "RW Guru Fintech",
      secret
    );
    const qrCodeUrl = await QRCode.toDataURL(otpauth);

    return NextResponse.json({ qrCodeUrl });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
}
