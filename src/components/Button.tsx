"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { buttonHover, LUXURY_EASE } from "@/lib/animations";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  animateClick?: boolean;
}

const variantStyles = {
  primary: "bg-primary-800 text-white hover:bg-primary-900 border border-transparent shadow-sm shadow-primary-950/10 focus-visible:ring-primary-500",
  secondary: "bg-luxury-gold text-white hover:opacity-95 border border-transparent shadow-sm shadow-secondary-900/10 focus-visible:ring-secondary-500",
  outline: "bg-transparent text-primary-800 border border-primary-700/30 hover:bg-primary-50/50 hover:border-primary-700/60 focus-visible:ring-primary-500",
  ghost: "bg-transparent text-text-main hover:bg-accent hover:text-primary-800 focus-visible:ring-primary-500",
};

const sizeStyles = {
  sm: "px-4 py-3 sm:py-2 text-xs font-semibold rounded-md min-h-[48px] sm:min-h-[38px]",
  md: "px-6 py-3.5 sm:py-3 text-sm font-semibold rounded-lg min-h-[48px] sm:min-h-[44px]",
  lg: "px-8 py-4 text-base font-semibold rounded-xl min-h-[52px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  animateClick = true,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  const content = (
    <span className="flex items-center justify-center gap-2">
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="flex items-center">{leftIcon}</span>}
      <span className="font-sans leading-none">{children}</span>
      {!isLoading && rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </span>
  );

  const buttonClasses = `
    inline-flex items-center justify-center font-sans tracking-wide transition-all
    duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  return (
    <motion.button
      className={buttonClasses}
      disabled={isDisabled}
      whileHover={animateClick && !isDisabled ? { scale: 1.015 } : undefined}
      whileTap={animateClick && !isDisabled ? buttonHover : undefined}
      transition={{ duration: 0.2, ease: LUXURY_EASE }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
