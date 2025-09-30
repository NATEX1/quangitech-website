"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit } from "lucide-react";

export default function SiteSettingsPage() {
  const [formData, setFormData] = useState({
    siteName: "",
    siteUrl: "",
    logoUrl: "",
    description: "",
    seoKeywords: "",
    themeColor: "#000000",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving settings:", formData);
    // TODO: call API บันทึกค่า
  };

  return (
    <div>
      <Tabs defaultValue="account">
        <TabsList className="border-b w-full">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="site">Site</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="account" className="px-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Profile</h2>

            <div className="p-4 flex items-center gap-4 justify-between rounded-md border">
              <div className="flex items-center gap-4">
                <Avatar className={`w-[72px] h-[72px] object-cover`}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>Admin Super</p>
                  <small className="text-slate-600">Admin</small>
                </div>
              </div>
              <Button variant={"outline"} className={`cursor-pointer`}>
                <Edit />
                <span>edit</span>
              </Button>
            </div>

            <div className="p-4 rounded-md border flex flex-col gap-2">
              <div className="flex  justify-between">
                <h3 className="font-semibold">Personal Infomation</h3>
                <Button variant={"outline"} className={`cursor-pointer`}>
                  <Edit />
                  <span>edit</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <small className="text-slate-600">First Name</small>
                  <p>Admin</p>
                </div>
                <div>
                  <small className="text-slate-600">Last Name</small>
                  <p>Super</p>
                </div>
                <div>
                  <small className="text-slate-600">E-mail</small>
                  <p>admin@gmail.com</p>
                </div>
                <div>
                  <small className="text-slate-600">Phone</small>
                  <p>+66 12 345 6789</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-md border flex flex-col gap-2">
              <div className="flex  justify-between">
                <h3 className="font-semibold">Address</h3>
                <Button variant={"outline"} className={`cursor-pointer`}>
                  <Edit />
                  <span>edit</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <small className="text-slate-600">Country</small>
                  <p>Thailand</p>
                </div>
                <div>
                  <small className="text-slate-600">City/State</small>
                  <p>Pakchong</p>
                </div>
                <div>
                  <small className="text-slate-600">Postal Code</small>
                  <p>30130</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="site" className="pt-6">
          
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="pt-6">
          <form>
            <div className="space-y-2">
              <Label htmlFor="themeColor">Theme Color</Label>
              <Input
                id="themeColor"
                name="themeColor"
                type="color"
                value={formData.themeColor}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
