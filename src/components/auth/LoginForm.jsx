"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: newUser.email,
      password: newUser.password,
      rememberMe: true,
    });
    if (data?.user) {
      toast.success(`Login Successfull`);
      router.push(redirect || "/");
      router.refresh();
    } else if (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
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
        <Label
          className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
        >
          Email
        </Label>
        <Input
          placeholder="Enter Your Email"
          className=" w-full
                bg-gray-100
                     rounded-md
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-600 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
        />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        className="relative"
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
        <Label
          className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
        >
          Password
        </Label>
        <Link
          href={"#"}
          className="text-violet-600 font-medium text-[0.9rem] absolute right-0"
        >
          Forget Password ?
        </Link>
        <Input
          placeholder="Enter your password"
          className="w-full
                bg-gray-100
                     rounded-md
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-600 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
        />
        <Description className="text-gray-800 dark:text-gray-100">
          Must be at least 6 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <Checkbox>
        <Checkbox.Control
          className="bg-gray-300
                     
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70"
        >
          <Checkbox.Indicator className="" />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Remember Me</Label>
        </Checkbox.Content>
      </Checkbox>

      <div className="flex gap-2">
        <Button
          type="submit"
          size="l"
          className="
            w-full
            mt-4
                 px-8
                rounded-md
                border-0
                bg-gradient-to-r
                from-[#6D5EF5]
                to-[#8B5CF6]
                text-white
                font-semibold
                shadow-lg shadow-[#6D5EF5]/30
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-xl hover:shadow-[#6D5EF5]/40
                active:scale-[0.98]
              "
        >
          Login
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Form>
  );
}
