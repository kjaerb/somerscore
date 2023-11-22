import { PublicFooter } from "./_layout/footer";
import { PublicHeader } from "./_layout/header";

interface FrontPageLayoutProps {
  children: React.ReactNode;
}

export default function FrontPageLayout({ children }: FrontPageLayoutProps) {
  return (
    <>
      <PublicHeader />
      <main className="w-full">{children}</main>
      <PublicFooter />
    </>
  );
}
