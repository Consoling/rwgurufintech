"use client";

import { userProModal } from "@/hooks/use-pro-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
    AlertTriangle,
  ArrowRight,
  BarChart,
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Percent,
  Video,
  VideoIcon,
  Wallet,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const tools = [
    {
      label: "Financial Chat",
      icon: MessageSquare, 
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      label: "Budget Planner",
      icon: Wallet, 
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Investment Insights",
      icon: BarChart, 
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      label: "Risk Assessment",
      icon: AlertTriangle, 
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      label: "Tax Estimator",
      icon: Percent, 
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ];
  

export const ProModal = () => {
  const proModal = userProModal();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong') //STRIPE CLIENT ERROR
  } finally {
    setLoading(false);
  }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to RW Guru Fintech
              <Badge variant="premium" className="uppercase text-sm py-1">
                Pro
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>
          <div className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fot rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6 ", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </div>
        <DialogFooter>
          <Button size="lg" variant="premium" className="w-full" onClick={onSubscribe} disabled={loading}>
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};