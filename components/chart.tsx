"use client";

import { VegaLite } from "react-vega";
import spec from "@/lib/spec.json";

export default function Chart({ className }: { className?: string }) {
  return (
    <div className="w-full overflow-x-auto bg-slate-800 rounded-md p-2 px-4 mx-10">
      <VegaLite className={className} spec={spec as any} />
    </div>
  );
}
