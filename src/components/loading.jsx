"use client";

import { Dialog, DialogContent } from "./ui/dialog";

export default function Loading({ loading }) {
  return (
    <Dialog open={loading} onOpenChange={() => {}}>
      <DialogContent className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
