"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

const CredentialsSignInForm = () => {
  return (
    <form action={undefined}>
      <input type="hidden" name="callbackUrl" />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={"demo@gmail.com"}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={"12345"}
          />
        </div>
        <div>
          <Button className="w-full" variant="default">
            {"Sign In"}
          </Button>
        </div>

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>{" "}
          |
          <Link href="/" target="_self" className="link">
            {" "}
            Home
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
