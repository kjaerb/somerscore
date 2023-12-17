import { ReactNode, Suspense } from "react";
import { Sidebar } from "./_layout/sidebar";
import { Header } from "./_layout/header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-h-screen h-screen overflow-y-hidden flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main className="p-2">{children}</main>
        </Suspense>
      </div>
    </div>
  );
}
