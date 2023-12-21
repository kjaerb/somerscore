import Image from "next/image";
import HTT from "public/assets/htt.png";
import Gymdanmark from "public/assets/gymdk.png";
import BaraFitness from "public/assets/bara.png";

interface TrustedByProps {}

export function TrustedBy({}: TrustedByProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h3 className="font-bold text-lg">Trusted by</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full items-center my-4">
        <Image
          src={HTT}
          alt="htt"
          width={128}
          className="dark:invert justify-self-center"
        />
        <Image
          src={Gymdanmark}
          alt="gymdanmark"
          width={128}
          className="invert dark:invert-0 justify-self-center"
        />
        <Image
          src={BaraFitness}
          alt="BaraFitness"
          width={128}
          className="invert justify-self-center"
        />
      </div>
    </div>
  );
}
