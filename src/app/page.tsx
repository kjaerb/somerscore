import { PublicFooter } from "./_layout/footer";
import { PublicHeader } from "./_layout/header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <PublicHeader />
      <main className="w-full"></main>
      <PublicFooter />
    </div>
  );
}
