export default function SidebarFooter() {
  const links = [
    "Quyền riêng tư",
    "Điều khoản",
    "Quảng cáo",
    "Lựa chọn quảng cáo",
    "Cookie",
    "Xem thêm",
  ];

  return (
    <div className="text-xs text-zinc-400 px-4 pb-4 leading-5">
      {links.map((item, index) => (
        <span key={index} className="cursor-pointer hover:underline">
          {item}
          {index !== links.length - 1 && " · "}
        </span>
      ))}
    </div>
  );
}