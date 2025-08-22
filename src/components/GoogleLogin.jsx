import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

export default function GoogleLogin() {
    const session = useSession();
    const router = useRouter();
    const handleGoogleLogin = async (providerName) => {
      // Implement Google login logic here
      await signIn(providerName, { redirect: false });
    };

    useEffect(() => {
      if (session?.status === "authenticated") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      }
    }, [session, router]);
  return (
    <div>
      <button
        type="button"
        onClick={()=>handleGoogleLogin("google")} // if using NextAuth
        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>
    </div>
  );
}
