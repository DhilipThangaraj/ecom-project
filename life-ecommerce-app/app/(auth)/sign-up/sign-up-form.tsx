"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <form action={undefined}>
      <input type="hidden" name="callbackUrl" value={""} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={"demo"}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
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
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
            defaultValue={"12345"}
          />
        </div>
        <div>
          <Button className="w-full" variant="default">
            {"Sign Up"}
          </Button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" target="_self" className="link">
            Sign In
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

export default SignUpForm;
