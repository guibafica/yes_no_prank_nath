import { twMerge } from "tailwind-merge";
import { Smile, Frown } from "lucide-react";

interface IButtonProps {
  type: "YES" | "NO";
  clickFunction: () => void;
}

export function Button({ type, clickFunction }: IButtonProps) {
  return (
    <button
      onClick={clickFunction}
      className={twMerge(
        "w-40 h-10 rounded-md text-2xl font-bold flex-row items-center justify-center flex gap-2 text-slate-100 transition-all shadow-lg hover:shadow-xl max-sm:w-full",
        type === "YES"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-red-500 hover:bg-red-600"
      )}
    >
      {type === "YES" ? "YES" : "NO"}
      {type === "YES" ? <Smile /> : <Frown />}
    </button>
  );
}
