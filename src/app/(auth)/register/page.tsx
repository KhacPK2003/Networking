"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { toast } from "sonner";
import { userApi } from "@/shared/services/userServices";
import { Card } from "@/components/ui/card";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

// const { Option } = Select;

// 🧩 Schema validation theo yêu cầu BE
const schema = z.object({
  name: z.string().min(1, "Tên không được bỏ trống"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải ít nhất 6 ký tự"),
  birth_day: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Ngày sinh phải đúng định dạng YYYY-MM-DD"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .max(15, "Số điện thoại không hợp lệ"),
  gender: z.enum(["male", "female"], {
    message: "Giới tính không hợp lệ",
  }),
});

type Gender = "male" | "female" | "";

interface FormData {
  name: string;
  email: string;
  password: string;
  birth_day: string; // stored as "YYYY-MM-DD"
  phone: string;
  gender: Gender;
}

export default function RegisterPage() {
  const router = useRouter();

  // 🧠 State cho form (có kiểu rõ ràng, không dùng any)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    birth_day: "",
    phone: "",
    gender: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "Thông tin không hợp lệ");
      return;
    }

    try {
      setLoading(true);
      const res = await userApi.createUser({
        ...parsed.data,
        role: "user",
      });
      const message = res.message;

      if (res.statusCode === 200) {
        toast.success(message || "Đăng ký thành công");
        router.replace("/login");
      } else {
        toast.error(message || "Đăng ký thất bại");
        setError(message || "Đăng ký thất bại");
      }
    } catch (err) {
      console.error(err);
      toast.error("Đăng ký thất bại");
      setError("Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="flex items-center justify-center bg-gradient-to-br from-[#0f0f11] to-[#1a1a2e] px-4 relative min-h-screen">
  <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
  <Card className="relative max-w-sm w-full p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
    
    <div className="w-full bg-[#18181b] rounded-2xl p-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Đăng ký
        </h2>
        <p className="text-sm text-gray-400">
          Tạo tài khoản mới
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label className="text-gray-300">Họ và tên</Label>
          <Input
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Nguyễn Minh Huy"
            className="bg-[#0f0f11] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-300">Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="example@gmail.com"
            className="bg-[#0f0f11] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-300">Mật khẩu</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="••••••••"
            className="bg-[#0f0f11] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-purple-500"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-300">Ngày sinh</Label>
          {/* <DatePicker
            format="DD/MM/YYYY"
            value={
              formData.birth_day
                ? dayjs(formData.birth_day, "YYYY-MM-DD")
                : null
            }
            onChange={(date: Dayjs | null) =>
              handleInputChange(
                "birth_day",
                date ? date.format("YYYY-MM-DD") : ""
              )
            }
            disabledDate={(current: Dayjs) =>
              !!(current && current > dayjs())
            }
            className="w-full !bg-[#0f0f11] !border-white/10 !text-white 
                       [&_.ant-picker-input>input]:!text-white 
                       [&_.ant-picker-suffix]:!text-gray-400 
                       focus-within:!ring-2 focus-within:!ring-purple-500"
          /> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="
                  w-full justify-start text-left text-gray-500
                  bg-[#0f0f11] border-white/10
                  hover:bg-[#1a1a2e]
                  focus:ring-2 focus:ring-purple-500
                "
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                {formData.birth_day
                  ? dayjs(formData.birth_day).format("DD/MM/YYYY")
                  : "DD/MM/YYYY"}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 bg-[#18181b] border-white/10"
              align="start"
            >
              <Calendar
                mode="single"
                selected={
                  formData.birth_day
                    ? new Date(formData.birth_day)
                    : undefined
                }
                onSelect={(date) =>
                      handleInputChange(
                        "birth_day",
                        date ? dayjs(date).format("YYYY-MM-DD") : ""
                      )
                    }
                disabled={(date) => date > new Date()} 
                className="rounded-lg border text-white 
                  [&_.rdp-dropdown]:bg-[#18181b]
                  [&_.rdp-dropdown]:text-white
                  [&_.rdp-dropdown]:border-white/10
                  [&_.rdp-dropdown_icon]:text-white"
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="text-gray-300">Số điện thoại</Label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="0123456789"
            className="bg-[#0f0f11] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-300">Giới tính</Label>
          <Select
            value={formData.gender || ""}
            onValueChange={(value: Gender) =>
              handleInputChange("gender", value)}
            >
            <SelectTrigger
              className="
                w-full 
                bg-[#0f0f11] 
                border-white/10 
                text-white 
                focus:ring-2 
                focus:ring-purple-500
              "
            >
              <SelectValue placeholder="Chọn giới tính" />
            </SelectTrigger>

            <SelectContent
              className="
                bg-[#18181b] 
                text-white 
                border-white/10
              "
            >
              <SelectItem value="male">Nam</SelectItem>
              <SelectItem value="female">Nữ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-2 rounded-md">
            {error}
          </p>
        )}

        <Button
          disabled={loading}
          type="submit"
          className="
            w-full 
            bg-gradient-to-r from-purple-500 to-blue-500 
            hover:scale-[1.02] 
            hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]
            transition-all duration-300
          "
        >
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </Button>
      </form>
      <p className="mt-6 text-sm text-center text-gray-400">
        Đã có tài khoản?{" "}
        <Link href="/login" className="text-purple-400 hover:underline">
          Đăng nhập
        </Link>
      </p>

    </div>
  </Card>
</div>
  );
}
