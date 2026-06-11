"use client";

import React, { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  InputGroup,
  Label,
  Switch,
  TextArea,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useCompany } from "@/hooks/useCompany";
import Link from "next/link";

// http://localhost:3000/dashboard/recruiter/jobs/new
export default function NewJobPage() {
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [currency, setCurrency] = useState("");
  const { data: session } = authClient.useSession();
  const userId = session?.user.id;
  const userEmail = session?.user.email;

  const { companyData, loading } = useCompany(session?.user?.id);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mix native FormData with your controlled states
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      jobCategory,
      jobType,
      experienceLevel,
      currency,
      isRemote,
      userId,
      userEmail,
    };

    console.log(data);
  };

  const [isRemote, setIsRemote] = useState(false);
  console.log(companyData, loading);
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (!companyData || companyData.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="max-w-md rounded-3xl border border-default-200 bg-content1 p-8 text-center shadow-xl">
          <h2 className="mb-3 text-2xl font-bold">
            Company Registration Required
          </h2>

          <p className="mb-6 text-default-500">
            Before posting a job, you need to register your company profile.
          </p>

          <Link
            href="/dashboard/recruiter/company/addcompany"
            className="inline-flex rounded-xl border px-6 py-3 text-white"
          >
            Register Company
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="overflow-hidden rounded-3xl border border-default-200 bg-content1 shadow-xl">
        {/* Header */}
        <div className="border-b border-default-200 px-8 py-6">
          <h1 className="text-3xl font-bold">Post a New Job</h1>

          <p className="mt-2 text-default-500">
            Create a new job listing and start receiving applications from
            qualified candidates.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-10 p-8">
            {/* Job Information */}
            <section>
              <h2 className="mb-6 text-xl font-semibold">Job Information</h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Job Title */}
                <TextField name="job" isRequired>
                  <Label>Job Title</Label>
                  <Input placeholder="Senior Frontend Developer" />
                  <FieldError />
                </TextField>

                {/* Job Category */}
                <TextField name="jobCategory" isRequired>
                  <Label>Job Category</Label>

                  <Select
                    selectedKey={jobCategory}
                    onSelectionChange={(key) => setJobCategory(key)}
                    className="w-full"
                    placeholder="Select job category"
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

                        <ListBox.Item id="sales" textValue="Sales">
                          Sales
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="finance" textValue="Finance">
                          Finance
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </TextField>

                {/* Job Type */}
                <TextField className="w-full" name="jobType" isRequired>
                  <Label>Job Type</Label>

                  <Select
                    selectedKey={jobType}
                    onSelectionChange={(key) => setJobType(key)}
                    className="w-full"
                    placeholder="Select job type"
                  >
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="full-time" textValue="Full Time">
                          Full Time
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="part-time" textValue="Part Time">
                          Part Time
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="remote" textValue="Remote">
                          Remote
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="contract" textValue="Contract">
                          Contract
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="internship" textValue="Internship">
                          Internship
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </TextField>

                {/* Experience Level */}
                <TextField className="w-full" name="experienceLevel" isRequired>
                  <Label>Experience Level</Label>

                  <Select
                    selectedKey={experienceLevel}
                    onSelectionChange={(key) => setExperienceLevel(key)}
                    className="w-full"
                    placeholder="Select experience level"
                  >
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="entry" textValue="Entry Level">
                          Entry Level
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="mid" textValue="Mid Level">
                          Mid Level
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="senior" textValue="Senior Level">
                          Senior Level
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="lead" textValue="Lead">
                          Lead
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </TextField>

                {/* Salary Range */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                  {/* Salary Range */}
                  <div className="space-y-2 col-span-3">
                    <label className="block text-sm font-medium">
                      Salary Range
                    </label>

                    <div className="flex gap-2">
                      <Input
                        name="salaryMin"
                        type="number"
                        placeholder="1000"
                        variant="bordered"
                        className="w-full"
                      />
                      <Input
                        name="salaryMax"
                        type="number"
                        placeholder="5000"
                        variant="bordered"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Currency */}
                  <div className="space-y-2 col-span-2">
                    <label className="block text-sm font-medium">
                      Currency
                    </label>

                    <Select
                      selectedKey={currency}
                      onSelectionChange={(key) => setCurrency(key)}
                      className="w-full"
                      placeholder="Select currency"
                    >
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="USD">USD</ListBox.Item>
                          <ListBox.Item id="EUR">EUR</ListBox.Item>
                          <ListBox.Item id="GBP">GBP</ListBox.Item>
                          <ListBox.Item id="BDT">BDT</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>

                {/* Deadline */}
                <TextField className="w-full" name="deadline">
                  <Label>Application Deadline</Label>

                  <InputGroup>
                    <InputGroup.Input type="date" className="w-full" />
                  </InputGroup>
                </TextField>

                {/* Required Skills */}
                <TextField className="w-full" name="skills">
                  <Label>Required Skills</Label>
                  <InputGroup>
                    <InputGroup.Input
                      placeholder="React, Node.js, MongoDB"
                      variant="bordered"
                      className="w-full"
                    />
                  </InputGroup>
                </TextField>

                {/* Open Positions */}
                <TextField className="w-full" name="positions">
                  <Label>Open Positions</Label>
                  <InputGroup>
                    <InputGroup.Input
                      type="number"
                      placeholder="3"
                      variant="bordered"
                      className="w-full"
                    />
                  </InputGroup>
                </TextField>

                {/* remote */}
                <Switch isSelected={isRemote} onChange={setIsRemote}>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>

                  <Switch.Content>
                    <Label className="text-sm">Remote Position</Label>
                  </Switch.Content>
                </Switch>

                {/* LOCATION */}
                {!isRemote ? (
                  <TextField className="w-full" name="city">
                    <Label>Location</Label>

                    <InputGroup>
                      <InputGroup.Input
                        placeholder="Dhaka, Bangladesh"
                        variant="bordered"
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>
                ) : (
                  <TextField className="w-full opacity-50" name="city">
                    <Label>Location (disabled for remote jobs)</Label>

                    <InputGroup>
                      <InputGroup.Input
                        placeholder="Remote job - no location required"
                        disabled
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>
                )}
              </div>
            </section>

            {/* Job Description */}
            <section>
              <h2 className="mb-6 text-xl font-semibold">Job Description</h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Responsibilities
                  </label>

                  <TextArea
                    aria-label="Responsibilities"
                    name="responsibilities"
                    placeholder="Describe daily responsibilities..."
                    className="min-h-40 w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Requirements
                  </label>

                  <TextArea
                    aria-label="Requirements"
                    name="requirements"
                    placeholder="Required skills and qualifications..."
                    className="min-h-40 w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Benefits
                  </label>

                  <TextArea
                    aria-label="Benefits"
                    name="benefits"
                    placeholder="Health insurance, bonus, remote work..."
                    className="min-h-32 w-full"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-default-200 px-8 py-6">
            <Button variant="bordered">Cancel</Button>

            <Button variant="flat">Preview</Button>

            <Button color="primary" type="submit">
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
