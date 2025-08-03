import { Footer, Header, Main } from "@/components/home/home-components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
