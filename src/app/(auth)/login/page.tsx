"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { TokenPayload, useAuthStore } from "@/store/auth";
import Link from "next/link";
import { authApi } from "@/api";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const schema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("Huy10012003@");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { setUserId, setRole } = useAuthStore.getState();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      setError("Thông tin không hợp lệ");
      return;
    }

    try {
      setLoading(true);

      const res = await authApi.login({ email, password });
      const { data, message } = res;

      // 🔹 Lưu token vào localStorage
      localStorage.setItem("token", data.accessToken);

      localStorage.setItem("refreshToken", data.refreshToken);

      const decoded = jwtDecode<TokenPayload>(data.accessToken);
      setUserId(decoded.userId);
      setRole(decoded.role);

      toast.success(message);
      router.replace("/");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      const errorMessage =
        error?.response?.data?.message || "Đăng nhập thất bại";

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen grid lg:grid-cols-2">

  {/* Left-image */}
  <div className="hidden lg:flex relative items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent)] overflow-hidden ">
    <div className="absolute w-[500px] h-[500px] bg-purple-300/30 blur-[120px] rounded-full" />
    <Image
      src="/images/logo/login.png"
      alt="illustration"
      width={400}
      height={400}
      className="relative z-10 w-[80%] max-w-md object-contain drop-shadow-xl"
    />
  </div>

  {/* Right-form*/}
   <div className="flex items-center justify-center bg-gradient-to-br from-[#0f0f11] to-[#1a1a2e] px-4 relative">
    <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
    <Card className="relative max-w-sm p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
      
      <div className="w-full bg-[#18181b] rounded-2xl p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Đăng nhập
          </h2>
          <p className="text-sm text-gray-400">
            Nhập thông tin của bạn
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="text-gray-300">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0f0f11] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-purple-500 transition"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Mật khẩu</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0f0f11] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-purple-500 transition"
            />
          </div>
          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-2 rounded-md">
              {error}
            </p>
          )}
          <Button
            type="submit"
            disabled={loading}
            className="
              w-full 
              bg-gradient-to-r from-purple-500 to-blue-500 
              hover:scale-[1.02] 
              hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]
              transition-all duration-300
            "
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Đăng ký
          </Link>
        </p>

      </div>
    </Card>
  </div>
</div>
  );
}
