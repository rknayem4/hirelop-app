"use client";

import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function CompanyForm() {
  const [logo, setLogo] = useState("");
  const [uploading, setUploading] = useState(false);
  const [industry, setIndustry] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
    const { data: session } = authClient.useSession();
    const userId = session?.user.id;
    const userEmail = session?.user.email;
    const userName = session?.user.name;

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setLogo(data.url);
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const companyData = {
      ...Object.fromEntries(formData.entries()),
      logo,
      industry,
      employeeCount,
      userId,
      userId,
      userName,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/companies`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(companyData),
      },
    );

    const data = await res.json();
    console.log(companyData, data);
    redirect("/dashboard/recruiter/company");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="overflow-hidden rounded-3xl border border-default-200 bg-content1 shadow-xl">
        {/* Header */}
        <div className="border-b border-default-200 px-8 py-6">
          <h1 className="text-3xl font-bold">Register New Company</h1>

          <p className="mt-2 text-default-500">
            Enter your business details to start hiring on HireLoop.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Company Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company Name
                </label>

                <Input
                  name="companyName"
                  placeholder="e.g. Acme Corp"
                  variant="bordered"
                  className={"w-full"}
                />
              </div>

              {/* Industry */}
              <TextField className="w-full" name="industry" isRequired>
                <Label>Industry / Category</Label>

                <Select
                  selectedKey={industry}
                  onSelectionChange={(key) => setIndustry(key)}
                  className="w-full"
                  placeholder="Select Industry"
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="technology" textValue="Technology">
                        Technology
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="design" textValue="Design">
                        Design
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="marketing" textValue="Marketing">
                        Marketing
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="finance" textValue="Finance">
                        Finance
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="healthcare" textValue="Healthcare">
                        Healthcare
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="education" textValue="Education">
                        Education
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="ecommerce" textValue="E-commerce">
                        E-commerce
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </TextField>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Website URL
                </label>

                <Input
                  name="website"
                  placeholder="https://www.company.com"
                  variant="bordered"
                  className={"w-full"}
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Location
                </label>

                <Input
                  name="location"
                  placeholder="City, Country"
                  variant="bordered"
                  className={"w-full"}
                />
              </div>

              {/* Employee Count */}
              <TextField className="w-full" name="employeeCount" isRequired>
                <Label>Employee Count Range</Label>

                <Select
                  selectedKey={employeeCount}
                  onSelectionChange={(key) => setEmployeeCount(key)}
                  className="w-full"
                  placeholder="Select employee range"
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="1-10" textValue="1-10 employees">
                        1-10 employees
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="11-50" textValue="11-50 employees">
                        11-50 employees
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="51-200" textValue="51-200 employees">
                        51-200 employees
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="201-500" textValue="201-500 employees">
                        201-500 employees
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="500-plus" textValue="500+ employees">
                        500+ employees
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </TextField>

              {/* Logo Upload */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company Logo
                </label>

                <div className="flex items-center gap-5">
                  <label className="flex h-28 w-28 cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-default-300 hover:border-primary">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />

                    {logo ? (
                      <img
                        src={logo}
                        alt="Company Logo"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-default-500">
                        Upload
                      </div>
                    )}
                  </label>

                  <div>
                    <p className="font-medium">
                      {uploading ? "Uploading..." : "Company Logo"}
                    </p>

                    <p className="text-sm text-default-500">
                      PNG, JPG, WEBP (Max 5MB)
                    </p>

                    {logo && (
                      <p className="mt-2 text-xs text-green-500">
                        ✓ Upload Complete
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-medium">
                Short Description
              </label>

              <TextArea
                name="description"
                placeholder="Tell us about your company's mission and culture..."
                className="min-h-40 w-full"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 border-t border-default-200 px-8 py-6">
            <Button variant="bordered">Cancel</Button>

            <Button color="primary" type="submit" isDisabled={uploading}>
              {uploading ? "Uploading..." : "Register Company"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
