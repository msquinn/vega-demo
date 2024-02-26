import Chart from "@/components/chart";
import  ModeToggle  from "@/components/mode-toggle";
import { CalendarIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-24 p-2">
      <div className="w-full flex justify-end items-center gap-3">
        <a href="https://www.cal.com/matt-quinn">
          <CalendarIcon className="h-6 w-6" />
        </a>
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
        <div className="font-light italic">Allow me to
        introduce myself. My name is Matt Quinn. Greg Bastis and I worked together at Patch, 
        where I was the team&apos;s frontend software engineer. Greg told me that you have a customer who needed a Sankey Diagram,
         and I figured that I might be able to help.
        </div>
        <div className="font-light italic">Although I was unfamiliar with Vega and Vega Lite, I&apos;ve never let that stop me before. I found a reddit post linking to an example of a Sankey Diagram that I could use as a starting point. After that, it was off to the races.
        </div>
        <div className="font-light italic">Greg says amazing things about Omni, and it sounds like you all might be in the market for some help on the frontend before long. 
        </div>
        <div className="font-light italic">I&apos;d love <a className="underline text-pink-500" href="https://cal.com/matt-quinn">connect</a> and see if there&apos;s a fit - and in the meantime, hope this Sankey makes a helpful contribution to satisfying your customer requirements.</div>
        <div className="font-light italic">✌️,</div>
        <div className="font-light italic">Matt</div>
      </div>
      <Chart />
        <div className="font-light text-xs italic">This project was built using Next.JS, React, TS, React-Vega, and was inspired by <a className="underline text-pink-600" href="https://github.com/PBI-David/Deneb-Showcase/blob/main/Sankey%20Chart/Spec.json">this example.</a></div>
    </main>
  );
}
