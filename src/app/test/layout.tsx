
'use client';
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div>
      <div>test layout --- {pathname}</div>
      {children}
    </div>
  );
}
