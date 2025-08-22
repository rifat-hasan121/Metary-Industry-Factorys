import GoogleLogin from '@/components/GoogleLogin';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function LoginForm() {
const router = useRouter();
const handleLogin = async (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response.ok) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
      form.reset();
      // Handle successful login
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login failed. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
      // Handle login error
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="••••••••"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>
      <GoogleLogin />
    </form>
  );
}
