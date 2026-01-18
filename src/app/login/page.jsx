"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      toast.success("Login successful!");
      router.push(callbackUrl);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-200 to-base-300 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-primary-content p-6 text-center">
          <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
          <p className="text-sm opacity-90 mt-1">
            Login to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {error && (
            <div className="alert alert-error text-sm py-2">{error}</div>
          )}

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <FiMail className="absolute z-20 left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="demo@gmail.com"
                required
                className="input input-bordered w-full pl-10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <FiLock className="absolute z-20 left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type="password"
                placeholder="••••••"
                required
                className="input input-bordered w-full pl-10"
              />
            </div>
          </div>

          {/* Button */}
          <button disabled={loading} className="btn btn-primary w-full mt-2">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
