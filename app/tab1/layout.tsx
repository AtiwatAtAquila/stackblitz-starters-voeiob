import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Link from "next/link";

const Tab1Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <Link
              href="/tab1/tab1"
              className={cn(
                "w-full h-full flex justify-center px-4 py-2 rounded bg-slate-200 hover:bg-orange-500",
                {
                  "bg-orange-500 text-white": true,
                },
              )}
            >
              Tab1
            </Link>
          </li>
          <li>
            <Link
              href="/tab1/tab2"
              className={cn(
                "w-full h-full flex justify-center px-4 py-2 rounded bg-slate-200 hover:bg-orange-500",
                {
                  "bg-orange-500": false,
                },
              )}
            >
              Tab2
            </Link>
          </li>
        </ul>
      </div>

      <div className="rounded border m-8">
        <h1 className="text-center text-4xl">Layout Tab 1</h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Tab1Layout;
