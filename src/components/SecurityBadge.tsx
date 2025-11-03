import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SecurityBadgeProps {
  fraudScore: number;
  verified: boolean;
  size?: "sm" | "default" | "lg";
}

export const SecurityBadge = ({ fraudScore, verified, size = "default" }: SecurityBadgeProps) => {
  const getSecurityStatus = () => {
    if (!verified) {
      return { 
        variant: "caution" as const, 
        icon: ShieldAlert, 
        text: "Unverified Seller",
        color: "text-caution"
      };
    }
    
    if (fraudScore > 50) {
      return { 
        variant: "alert" as const, 
        icon: ShieldAlert, 
        text: "High Risk",
        color: "text-alert"
      };
    }
    
    if (fraudScore > 20) {
      return { 
        variant: "caution" as const, 
        icon: Shield, 
        text: "Moderate Risk",
        color: "text-caution"
      };
    }
    
    return { 
      variant: "verified" as const, 
      icon: ShieldCheck, 
      text: "Verified Secure",
      color: "text-verified"
    };
  };

  const status = getSecurityStatus();
  const Icon = status.icon;
  const iconSize = size === "sm" ? 12 : size === "lg" ? 20 : 14;

  return (
    <Badge variant={status.variant} className="flex items-center gap-1">
      <Icon className={status.color} size={iconSize} />
      <span className="text-xs font-medium">{status.text}</span>
    </Badge>
  );
};
