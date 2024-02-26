import Chart from "@/components/chart";
import  ModeToggle  from "@/components/mode-toggle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-24 p-2">
      <div className="w-full flex justify-end items-center gap-3">
        <a href="https://www.linkedin.com/in/matthew-quinn-57b54511a/">
          <LinkedInLogoIcon className="h-6 w-6" />
        </a>
        <a href="https://github.com/msquinn/vega-demo">
          <GitHubLogoIcon className="h-6 w-6" />
        </a>
        <ModeToggle />
      </div>
      <div className="space-y-2 max-w-md w-full m-2 text-left">
        <div className="text-4xl font-bold text-center">Hey Anika 👋</div>
        <div className="text-2xl font-bold text-center">I heard you needed a Sankey Diagram.</div>
        <div className="font-light italic">Greg Bastis is making sales and he hasn&apos;t even started yet! Allow me to
        introduce myself. My name is Matt Quinn. I am a software engineer who spent the past several months
        working with Greg at Patch. As you can tell, we approach problem solving with a tenacity to find solutions. I can vouch
        that Greg is an amazing co-worker who is always willing to help and is a great team player. I am confident that he would
        be a fantastic asset to your team. Given the opportunity I would work with him in a heartbeat. If you&apos;re
        impressed by what you see and you&apos;re in the market for a software engineer, I would love to chat with you about Omni.
        </div>
        <div className="font-light italic">I hope you enjoy the Sankey Diagram. I look forward to hearing from you soon.</div>
        <div className="font-light italic">✌️,</div>
        <div className="font-light italic">Matt</div>
        <div className="font-light text-xs italic">This project was built using Next.JS, React, TS, React-Vega, and was inspired by <a className="underline text-pink-600" href="https://github.com/PBI-David/Deneb-Showcase/blob/main/Sankey%20Chart/Spec.json">this example.</a></div>
      </div>
      <Chart />
    </main>
  );
}
