"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "@gravity-ui/icons";
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
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (error) {
        alert(error.message || "Signup failed");
        return;
      }

      console.log("Signup Success:", data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-default-200 bg-content1 p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Create Account 🚀</h1>

          <p className="mt-2 text-default-500">
            Join HireLoop and start your journey today.
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
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
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Minimum 8 characters, 1 uppercase letter and 1 number.
            </Description>

            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={loading}
          >
            <Check />
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-default-200" />
            <span className="text-xs text-default-500">OR</span>
            <div className="h-px flex-1 bg-default-200" />
          </div>

          {/* Google Signup */}
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onPress={handleGoogleSignup}
          >
            <FcGoogle className="text-lg" />
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-default-500">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
