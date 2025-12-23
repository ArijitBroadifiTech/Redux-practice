import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        "transition-all duration-500",
        "hover:scale-[1.005] hover:shadow-md",
        "relative overflow-hidden",
        className
      )}
      style={{
        background: `
          linear-gradient(to bottom right, transparent, transparent),
          radial-gradient(circle at top left, oklch(0.68 0.19 285 / 0.15), transparent 120px),
          radial-gradient(circle at bottom right, oklch(0.68 0.18 350 / 0.15), transparent 120px),
          oklch(var(--card))
        `,
        backgroundBlendMode: "normal",
      }}
      {...props}
    >
      {/* Subtle purple gradient bar at top - left to right */}
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.68 0.19 285 / 0.7) 0%, oklch(0.7 0.15 295 / 0.6) 50%, oklch(0.68 0.18 350 / 0.7) 100%)",
        }}
      />

      {/* Top right corner dot pattern */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-16 w-16 opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle, oklch(0.68 0.19 285 / 0.7) 1px, transparent 1px),
            radial-gradient(circle, oklch(0.68 0.19 285 / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px, 20px 20px",
          backgroundPosition: "0 0, 5px 5px",
        }}
      />

      {/* Bottom left zigzag - subtle */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 opacity-10"
        style={{
          background: `
            linear-gradient(45deg, oklch(0.68 0.18 350 / 0.5) 25%, transparent 25%),
            linear-gradient(-45deg, oklch(0.68 0.18 350 / 0.5) 25%, transparent 25%)
          `,
          backgroundSize: "8px 8px",
          backgroundPosition: "0 0",
        }}
      />

      {props.children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header relative z-10 grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-2xl leading-none font-semibold",
        "transition-colors duration-300",
        "relative mb-1 pb-2",
        "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12",
        "after:rounded-full after:bg-gradient-to-r after:from-[oklch(0.68_0.19_285)] after:to-[oklch(0.68_0.18_350)]",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("relative z-10 px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "relative z-10 flex items-center px-6 [.border-t]:pt-6",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
