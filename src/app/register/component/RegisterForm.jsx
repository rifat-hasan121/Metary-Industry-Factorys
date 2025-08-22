"use client";
import { registerUser } from '@/app/actions/auth/registeruser';
import GoogleLogin from '@/components/GoogleLogin';
import Loading from '@/components/Loading';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function RegisterForm() {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const result = await registerUser({ name, email, password });
    if (result.acknowledged) {
      form.reset();
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          text: "Thank you for registering!",
          timer: 1500,
        });
        router.push("/");
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: "Please check your credentials",
          timer: 1500,
        });
        setLoading(false);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "An error occurred while registering. Please try again.",
        timer: 1500,
      });
      setLoading(false);
    }
  };

  if (loading) return <Loading/>
  return (
    <form onSubmit={handleRegister} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="••••••••"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition"
      >
        Register
      </button>

      {/* OR divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <GoogleLogin />
    </form>
  );
}
