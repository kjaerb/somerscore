import { Button } from "@/components/ui/button";
import { TrustedBy } from "./_components/trusted-by";

export default function HomePage() {
  return (
    <div>
      <span className="absolute w-2/5 h-screen right-0 top-0 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 -z-50" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 h-screen max-w-7xl mx-auto">
        <div className="space-y-4 mt-8 px-8">
          <h1 className="font-bold text-7xl">Livescoring made easy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            dolore nam accusamus impedit. Eaque est, rem, iusto culpa error ea
            optio tenetur, doloribus deleniti officia voluptates ab temporibus
            qui ex!
          </p>
          <div className="space-x-2">
            <Button>See pricing</Button>
            <Button variant={"blue"}>See competitions</Button>
          </div>
        </div>
        <div className="relative mt-16 md:ml-8 border shadow-md rounded-lg h-96 max-w-screen w-96 mx-auto md:w-full bg-gray-300 p-1 dark:bg-slate-800">
          <div className="absolute top-0 right-0 animate-ping w-4 h-4 bg-red-500 rounded-full"></div>

          <div className="h-full w-full bg-gray-100 dark:bg-slate-700 rounded-md border shadow-m p-4">
            <h5 className="font-medium">Live competitions:</h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <TrustedBy />
      </div>
    </div>
  );
}
