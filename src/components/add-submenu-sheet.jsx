"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddSubmenuSheet({
  parentItem,
  menu,
  onAdd,
  open,
  onOpenChange,
}) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    sortOrder: (parentItem?.children?.length || 0) + 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          menuId: menu.id,
          parentId: parentItem.id,
        }),
      });

      if (!response.ok) throw new Error("Failed to create submenu item");

      const newItem = await response.json();
      onAdd(newItem);
      setFormData({
        name: "",
        url: "",
        sortOrder: (parentItem?.children?.length || 0) + 1,
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error creating submenu item:", error);
      toast.error("Failed to create submenu item");
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>Add Submenu Item to "{parentItem?.name}"</SheetTitle>
          <SheetDescription>
            Create a new submenu under {parentItem?.name}.
          </SheetDescription>
        </SheetHeader>
        <form
          onSubmit={handleSubmit}
          id="submenuForm"
          className="space-y-4 mt-4 px-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="text"
              placeholder="/submenu-page"
              value={formData.url}
              onChange={(e) =>
                setFormData({ ...formData, url: e.target.value })
              }
              required
            />
          </div>
        </form>
        <SheetFooter>
          <div className="flex gap-2">
            <Button type="submit" form="submenuForm">
              Add Submenu Item
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
