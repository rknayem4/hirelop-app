"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import {
Button,
Description,
FieldError,
Form,
Input,
Label,
TextField,
} from "@heroui/react";

export default function SignInPage() {
const onSubmit = (e) => {
e.preventDefault();


const formData = new FormData(e.currentTarget);

const data = {};

formData.forEach((value, key) => {
  data[key] = value.toString();
});

console.log(data);


};

return ( <div className="flex min-h-screen items-center justify-center px-4 py-10"> <div className="w-full max-w-md rounded-3xl border border-default-200 bg-content1 p-8 shadow-xl">
{/* Header */} <div className="mb-8 text-center"> <h1 className="text-3xl font-bold">
Welcome Back 👋 </h1>
      <p className="mt-2 text-default-500">
        Access thousands of opportunities and continue building your
        career with HireLoop.
      </p>
    </div>

    {/* Form */}
    <Form
      className="flex flex-col gap-5"
      onSubmit={onSubmit}
    >
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
            return "Please enter a valid email address";
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
      >
        <Label>Password</Label>

        <Input placeholder="Enter your password" />

        <Description>
          Enter the password associated with your account.
        </Description>

        <FieldError />
      </TextField>

      {/* Forgot Password */}
      <div className="flex justify-end w-full">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        color="primary"
        className="w-full"
      >
        Sign In
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-default-200" />

        <span className="text-xs text-default-500">
          OR
        </span>

        <div className="h-px flex-1 bg-default-200" />
      </div>

      {/* Google */}
      <Button
        variant="secondary"
        className="w-full"
      >
        <FcGoogle className="text-lg" />
        Continue with Google
      </Button>

      {/* Footer */}
      <p className="text-center text-sm text-default-500">
        Don't have an account?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-primary hover:underline"
        >
          Create Account
        </Link>
      </p>
    </Form>
  </div>
</div>


);
}
