"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ImageLibraryDialog({
  open,
  onClose,
  onSelect,
}) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setLoading(true);
      fetch("/api/images")
        .then((res) => res.json())
        .then((data) => {
          setImages(data.map((item) => item.url));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-screen-xl w-full">
        <DialogHeader>
          <DialogTitle>Select from Media Library</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-3 max-h-[500px] overflow-y-auto py-2">
          {loading ? (
            <p>Loading...</p>
          ) : images.length === 0 ? (
            <p className="col-span-4 text-center text-gray-500">
              No images found
            </p>
          ) : (
            images.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`Image ${i}`}
                className="w-full object-cover rounded-md border cursor-pointer hover:ring-2 hover:ring-primary"
                onClick={() => {
                  onSelect(url);
                  onClose();
                }}
              />
            ))
          )}
        </div>
        <div className="flex justify-end pt-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
