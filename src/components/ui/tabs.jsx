"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex gap-2 !shadow-none border-b-0", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex flex-col max-w-[300px] !shadow-none !border-b-0 border-r min-h-full", // เส้นขอบล่างรองแท็บ
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex items-center justify-start whitespace-nowrap px-4 py-2 text-sm font-medium " +
          "border-b-2 border-transparent text-muted-foreground transition-colors " +
          "data-[state=active]:bg-[#f6f6f6] data-[state=active]:text-foreground " +
          "disabled:pointer-events-none disabled:opacity-50 shadow-none",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content "
      className={cn("flex-1 min-h-[calc(100vh-72px-56px)]  px-2 outline-none border-b-0", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
