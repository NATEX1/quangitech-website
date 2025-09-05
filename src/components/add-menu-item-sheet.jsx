"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CirclePlus } from "lucide-react";
import { toast } from "sonner";

// Props: menu object with id & name, and onAdd callback
export default function AddMenuItemSheet({ menu, onAdd }) {
  const [formData, setFormData] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/menu-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          menuId: menu.id,
          name: formData.name,
          url: formData.url,
        }),
      });

      if (!res.ok) throw new Error("Failed to save menu item");

      const newItem = await res.json();
      onAdd(newItem);
      setFormData({ name: "", url: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <CirclePlus className="mr-2 h-4 w-4" />
          Add Menu Item
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Menu Item</SheetTitle>
          <SheetDescription>
            Create your menu item here. It will be added to <b>{menu.name}</b>.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-4 px-4 mt-4">
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Menu item name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* URL */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              placeholder="/example"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
        </div>

        <SheetFooter className="flex flex-row gap-2">
          <Button onClick={handleSubmit} disabled={loading} className="flex-1">
            {loading ? "Saving..." : "Save changes"}
          </Button>
          <SheetClose asChild>
            <Button variant="outline" className="flex-1">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
