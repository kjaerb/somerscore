import { CancelBanner } from "./_components/cancel-banner";
import { PublicFooter } from "./_layout/footer";
import { PublicHeader } from "./_layout/header";

interface FrontPageLayoutProps {
  children: React.ReactNode;
}

export default function FrontPageLayout({ children }: FrontPageLayoutProps) {
  return (
    <div className="">
      <PublicHeader />
      <CancelBanner />
      <span className="absolute w-full h-40 top-0 bg-gradient-to-b from-blue-500 to-transparent -z-50" />
      <main className="w-full">{children}</main>
      <PublicFooter />
    </div>
  );
}
