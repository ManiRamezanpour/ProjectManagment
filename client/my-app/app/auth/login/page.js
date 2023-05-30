"use client";
import Input from "@/app/components/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Suspense } from "react";
import React from "react";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => console.log(data);

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-zinc-900">
          <p>Loading feed...</p>
        </div>
      }
    >
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input label="Email" register={register} required />
          <Input label="Password" register={register} required />
          <div>
            <button
              type="submit"
              className="flex w-full hover:scale-110 scale-100 ease-in-out delay-75 duration-150 justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sing in
            </button>
          </div>
          <p className="mt-10 text-sm text-center text-gray-500">
            Not a member?{" "}
            <Link
              href="/auth/register"
              className="font-semibold leading-6 text-zinc-900 hover:text-zinc-800"
            >
              create an account
            </Link>
          </p>
        </form>
      </div>
    </Suspense>
  );
};

export default Login;
