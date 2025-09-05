"use client";

import { useEffect, useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImageUp, Image, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export function ThumbnailPicker({
  thumbnail,
  onChange,
  onChooseExisting,
  maxSizeMB = 5,
}) {
  const [preview, setPreview] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef(null);

  // 🔥 whenever `thumbnail` changes (from props) → update preview
  useEffect(() => {
    if (thumbnail instanceof File) {
      setPreview(URL.createObjectURL(thumbnail));
    } else if (typeof thumbnail === "string") {
      setPreview(thumbnail);
    } else {
      setPreview(null);
    }
  }, [thumbnail]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file type", {
        description: "Please select an image file",
      });
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error("File too large", {
        description: `Please select an image smaller than ${maxSizeMB}MB`,
      });
      return;
    }

    setIsUploading(true);

    setTimeout(() => {
      setPreview(URL.createObjectURL(file));
      onChange(file); // ✅ return File
      setIsUploading(false);
      setOpenDialog(false);
    }, 500);
  };

  const handleUploadClick = () => {
    setOpenDialog(false);
    inputRef.current?.click();
  };

  const handleChooseExisting = () => {
    setOpenDialog(false);
    if (onChooseExisting) {
      onChooseExisting(); // ✅ parent จะเปิด ImageLibraryDialog
    } else {
      toast.error("Feature not implemented", {
        description: "Media library integration required",
      });
    }
  };

  const handleRemoveThumbnail = () => {
    setPreview(null);
    onChange(null);
    setOpenDialog(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="thumbnail-upload">
        Thumbnail <span className="text-red-500">*</span>
      </Label>

      {preview ? (
        <div className="relative group">
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="w-80 h-80 object-cover rounded-md border-2 cursor-pointer"
            onClick={() => setOpenDialog(true)}
          />
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => setOpenDialog(true)}
          className="w-80 h-80 flex flex-col items-center justify-center rounded-md border-2 border-dashed cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
        >
          <ImageUp size={80} className="text-gray-300" />
          <span className="text-gray-500">Click to choose or upload</span>
        </div>
      )}

      <input
        ref={inputRef}
        id="thumbnail-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1 cursor-pointer"
          onClick={() => setOpenDialog(true)}
        >
          {preview ? "Change Thumbnail" : "Upload Thumbnail"}
        </Button>
        {preview && (
          <Button
            variant="outline"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleRemoveThumbnail}
          >
            Remove
          </Button>
        )}
      </div>

      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Select Thumbnail</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <Button
              variant="outline"
              onClick={handleChooseExisting}
              className="flex items-start gap-2"
            >
              <div className="w-full flex gap-2">
                <Image className="h-4 w-4" /> <span>Choose from existing</span>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={handleUploadClick}
              className="flex items-start gap-2"
            >
              <div className="w-full flex gap-2">
                <ImageUp className="h-4 w-4" /> <span>Upload new</span>
              </div>
            </Button>
            {preview && (
              <Button
                variant="outline"
                className="text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-2"
                onClick={handleRemoveThumbnail}
              >
                Remove current
              </Button>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
