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
      <main className="w-full">{children}</main>
      <PublicFooter />
    </div>
  );
}
