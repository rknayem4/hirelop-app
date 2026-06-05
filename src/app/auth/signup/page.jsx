"use client";

import Link from "next/link";
import { Check } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-default-200 bg-content1 p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-default-500">
            Join HireLoop and start your journey.
          </p>
        </div>

        <Form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>

            <Input placeholder="John Doe" />

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value
                )
              ) {
                return "Please enter a valid email";
              }

              return null;
            }}
          >
            <Label>Email Address</Label>

            <Input placeholder="john@example.com" />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Must contain one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Must contain one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter password" />

            <Description>
              Minimum 8 characters, 1 uppercase,
              1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Confirm Password */}
          {/* <TextField
            isRequired
            name="confirmPassword"
            type="password"
          >
            <Label>Confirm Password</Label>

            <Input placeholder="Confirm password" />

            <FieldError />
          </TextField> */}

          <Button
            type="submit"
            color="primary"
            className="w-full"
          >
            <Check />
            Create Account
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-default-200" />

            <span className="text-xs text-default-500">
              OR
            </span>

            <div className="h-px flex-1 bg-default-200" />
          </div>

          <Button
            variant="secondary"
            className="w-full"
          >
           <FcGoogle /> Continue with Google
          </Button>

          <p className="text-center text-sm text-default-500">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-primary"
            >
              Sign In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}