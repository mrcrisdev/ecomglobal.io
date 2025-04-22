import "./styles/bootstrap.min.css";
import "./styles/fontawesome.min.css";
import "./styles/remixicon.css";
import "./styles/animate.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-18-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global CSS
import "./styles/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import AosAnimation from "@/components/Layouts/AosAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecom Global - Together for Success",
  description: "Ecom Global là #1 giải pháp Website toàn diện, an toàn, tối ưu chi phí. Chúng tôi tạo ra giá trị mà bạn sẽ không tìm được ở bất kỳ đâu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
