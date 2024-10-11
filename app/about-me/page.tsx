import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import phc from "@/app/assets/phc.png";
export default function AboutMe() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello! I am Ernest
                </CardTitle>
                <CardDescription>
                    Nice to meet you
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={phc} alt ='1' width='400' height='400'/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Ernest
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to take photos</div>
            </CardContent>
        </Card>
    </div>
  );
}