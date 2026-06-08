"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  clean?: boolean; // If true, removes padding and centering
}

export function Container({ children, className = "", clean = false }: ContainerProps) {
  if (clean) {
    return <div className={`w-full ${className}`}>{children}</div>;
  }
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "ivory" | "white" | "green" | "gold" | "none";
  py?: "none" | "sm" | "md" | "lg" | "xl";
}

const pyMap = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-20",
  lg: "py-16 md:py-24 lg:py-28",
  xl: "py-24 md:py-32 lg:py-40",
};

const bgMap = {
  ivory: "bg-accent",
  white: "bg-white",
  green: "bg-primary-800 text-white",
  gold: "bg-secondary-50",
  none: "",
};

export function Section({
  id,
  children,
  className = "",
  bg = "none",
  py = "lg",
}: SectionProps) {
  const bgClass = bgMap[bg] || "";
  const pyClass = pyMap[py] || "";

  return (
    <section id={id} className={`w-full overflow-hidden ${bgClass} ${pyClass} ${className}`}>
      {children}
    </section>
  );
}

type MotionSectionProps = Omit<HTMLMotionProps<"section">, "children"> & SectionProps;

export function MotionSection({
  id,
  children,
  className = "",
  bg = "none",
  py = "lg",
  ...props
}: MotionSectionProps) {
  const bgClass = bgMap[bg] || "";
  const pyClass = pyMap[py] || "";

  return (
    <motion.section
      id={id}
      className={`w-full overflow-hidden ${bgClass} ${pyClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp()}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 12;
}

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  12: "grid-cols-12",
};

export function Grid({ children, className = "", cols = 3 }: GridProps) {
  const colsClass = colsMap[cols] || "";
  return (
    <div className={`grid gap-6 md:gap-8 lg:gap-10 ${colsClass} ${className}`}>
      {children}
    </div>
  );
}
