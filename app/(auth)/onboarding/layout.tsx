import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prisma.user.findFirst({
    where: {
      clerkId: userId,
      
    },
  });

  if (store?.isTotpEnabled === true ) {
    redirect(`/dashboard`);
  }

  return <>{children}</>;
}
