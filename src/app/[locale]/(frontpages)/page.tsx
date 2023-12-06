import { Text } from "@/components/ui/text";

export default function HomePage() {
  return (
    <div>
      <Text namespace="Hellos" path={"Hello"} dynamic={{ name: "dark" }} />
    </div>
  );
}
