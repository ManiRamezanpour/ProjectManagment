"use client";
import { useForm } from "react-hook-form";
import Input from "@/app/components/input";
import * as yup from "yup";
import Link from "next/link";
import http from "@/app/service/axios.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    email: yup.string().required("email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // cons / ole.log(data);
    http
      .post("/auth/register", data)
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) =>
        toast.error(err.response.message, {
          theme: "colored",
        })
      );
  };
  console.log(errors);
  return (
    <div className="mx-4 mt-10 sm:mx-auto md:mx-auto sm:w-full sm:max-w-sm">
      <h1 className="mx-auto text-2xl font-bold text-centet text-zinc-950">
        Create Account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input label="username" register={register} required />
        <Input label="email" register={register} required />
        <Input label="mobile" register={register} required />
        <Input label="password" register={register} required />
        <Input label="confirmpasword" register={register} required />
        <div>
          <input
            type="submit"
            className="flex w-full hover:scale-110 scale-100 ease-in-out delay-75 duration-150 justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            value="Register"
          />
          <p className="mt-10 text-sm text-center text-gray-500">
            a member?{" "}
            <Link
              href="/auth/login"
              className="font-semibold leading-6 text-zinc-950 hover:text-zinc-900"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
