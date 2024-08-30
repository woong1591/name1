import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className={`${pretendard.className}`}>{children}</div>
  );
}

export default Layout;