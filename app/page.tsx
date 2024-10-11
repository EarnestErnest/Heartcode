import { FlipWords } from "@/components/ui/flip-words"
import { Meteors } from "@/components/ui/meteors"

export default function Home() {
  const words : string[] = ["Afraid?", "Alone?", "Lost?"]
  return (
    // <div className="bg-[url('/phc.png')]">
      <div className="flex flex-col justify-center h-dvh">
        <p className="font-bold text-5xl text-center">
          Are you 
          <FlipWords words={words}/>
        </p>
      < Meteors number={30} className="opacity-00"/ >
        <p className="text-xl text-center">Reach out at 6389 2000 for help</p>
      </div>
  );
}
