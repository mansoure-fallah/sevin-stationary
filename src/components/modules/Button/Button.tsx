import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "warning";
  outlined?: boolean;
  disabled?: boolean;
}

const buttonVariants = cva("flex gap-2 justify-center items-center rounded-xl transition-colors data-[focus]:ring-2 focus:ring-offset-2",{
  variants: {
    color: {
      primary: "bg-primary text-white focus:ring-primary",
      secondary: "bg-secondary-500 text-white focus:ring-secondary",
      warning: "bg-yellow text-white focus:ring-warning",
    },
    size: {
      sm: "px-1.5 py-2 text-xs",
      md: "px-4 py-3 text-sm",
      lg: "px-5 py-4 text-base",
    },
    outlined: {
      true: "bg-white hover:bg-neutral-50 text-primary border border-primary focus:ring-primary",
      false: "",
    },
    disabled: {
      true: "bg-neutral-400 text-white",
      false: "",
    },
  },
 
  defaultVariants: {
    outlined: false,
    disabled: false,
    color: "primary",
    size: "md",
  },
});

export default function Button({
  children,
  className,
  color = "primary",
  size = "md",
  outlined = false,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    // if want classname works, must be before ...props
    // twMerge : same attributes in classneme override on attributes in base
    <button
      className={cn(
        buttonVariants({ color, size, outlined, disabled }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
