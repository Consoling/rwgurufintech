"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { Modal } from "../ui/modal";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "@/components/ui/button";
import generateTotpSetup from "@/lib/totp-setup";
import { useUser } from "@clerk/nextjs";

const formSchema = z.object({
  token: z
    .string()
    .length(6, "Token must be 6 digits")
    .regex(/^\d{6}$/, "Token must be a 6-digit number"),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  });

  const { user } = useUser();
  useEffect(() => {
    if (user?.id) {
      generateQrCodeUrl();
    }
  }, [user]);

  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  console.log("User from Clerk:", user?.id);

  const generateQrCodeUrl = async () => {
    try {
      const formdata = {
        clerkId: user?.id,
      };
      const response = await fetch("/api/auth/totp", {
        method: "POST",
        body: JSON.stringify(formdata),
      });
      console.log("Response from server:", response);
      const data = await response.json();
      setQrCodeUrl(data.qrCodeUrl);
    } catch (err) {
      console.error("Failed to generate QR code:", err);
    }
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Your dashboard is getting prepared...", {
      duration: Infinity,
    });

    try {
      setLoading(true);
      const response = await axios.post("/api/auth/verify-totp", values);
      for (let progress = 0; progress <= 100; progress += 10) {
        await delay(300); // Update progress every 600ms
        toast.loading(`Preparing your dashboard... ${progress}%`, {
          id: toastId,
        });
      }


      await delay(3000 - 300 * 10);

      

      if (response.status == 200) {
        toast.success("Dashboard generated successfully!", { id: toastId });
        window.location.assign(`/dashboard`);
      } else {
        toast.error("Failed to enable 2FA", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Enable Two-Factor Authentication"
      description="Scan the QR code with your Authenticator app to set up TOTP-based 2FA."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div className="space-y-6 py-4">
        {/* QR Code */}
        <div className="flex justify-center">
          {qrCodeUrl ? (
            <img
              src={qrCodeUrl}
              alt="TOTP QR Code"
              className="w-40 h-40 border rounded shadow-md"
            />
          ) : (
            <div className="flex w-full justify-center">
              <PuffLoader color="#6d28d9" size={40} />
            </div>
          )}
        </div>

        {/* Instructions */}
        <p className="text-sm text-center text-accnt-foreground">
          After scanning, enter the 6-digit code from your Authenticator app.
        </p>

        {/* Input for 6-digit code */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Authenticator Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      maxLength={6}
                      pattern="\d{6}"
                      placeholder="123456"
                      className="text-center font-mono tracking-widest text-lg ring-2 ring-indigo-500/60"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-6 flex items-center justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={storeModal.onClose}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                Verify & Enable
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
