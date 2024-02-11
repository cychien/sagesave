import { Tag } from "./Tag";
import { getAuth } from "@clerk/remix/ssr.server";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import * as React from "react";
import { buttonVariants } from "~/components/ui/Button";
import { getSupabase } from "~/services/supabase";
import { cn } from "~/utils/cn";

type Step = "enter-amount" | "choose-tags";

export async function action(args: ActionFunctionArgs) {
  const { userId } = await getAuth(args);
  const body = await args.request.formData();

  const supabase = getSupabase();
  const { data: user, error: userError } = await supabase
    .from("user")
    .select("id")
    .eq("clerk_user_id", userId)
    .single();

  if (!user) return {};

  const { data: transaction, error: transactionError } = await supabase
    .from("transaction")
    .insert([
      { amount: body.get("amount"), name: body.get("name"), user_id: user.id },
    ])
    .select()
    .single();

  // @ts-ignore
  for (const tag of body.get("tags")) {
    const { error: linkError } = await supabase
      .from("transaction_tag")
      // @ts-ignore
      .insert([{ transaction_id: transaction.id, tag_id: tag }]);
  }

  return redirect("/");
}

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = getSupabase();
  const { data, error } = await supabase.from("tag").select("id, name");
  return { tags: data || [] };
}

export default function Page() {
  const [step, setStep] = React.useState<Step>("enter-amount");
  const [amount, setAmount] = React.useState<string>("0");
  const [selectedTags, setSelectedTags] = React.useState<Array<number>>([]);
  const { tags } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  const makeClickHandler = (num: string) => () => {
    if (amount === "0") {
      setAmount(num);
    } else {
      setAmount((prev) => prev + num);
    }
  };

  return (
    <div className="flex h-[calc(100dvh_-_72px)] flex-col">
      <div className="container mx-auto flex flex-1 flex-col py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={cn(
              buttonVariants({ variant: "link" }),
              "h-auto items-center p-0 text-gray-600",
            )}
          >
            <ChevronLeft className="size-5" />
            <span className="ml-0.5">今日支出</span>
          </Link>
          <div className="flex space-x-2">
            <div className="h-1.5 w-12 rounded bg-gray-900" />
            <div className="h-1.5 w-12 rounded bg-gray-200" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div>
            <div className="-translate-x-1 text-right font-medium text-gray-400">
              金額
            </div>
            <div className="mt-1 font-mono text-6xl font-medium">{amount}</div>
          </div>
        </div>
      </div>

      {step === "enter-amount" && (
        <div className="grid grid-cols-3 gap-px bg-gray-300 pt-px">
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("1")}
          >
            1
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("2")}
          >
            2
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("3")}
          >
            3
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("4")}
          >
            4
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("5")}
          >
            5
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("6")}
          >
            6
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("7")}
          >
            7
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("8")}
          >
            8
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={makeClickHandler("9")}
          >
            9
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={() => {
              setAmount("0");
            }}
          >
            C
          </button>
          <button
            className="aspect-square bg-gray-50 font-mono text-[40px] font-medium"
            onClick={() => {
              if (amount !== "0") {
                setAmount((prev) => prev + "0");
              }
            }}
          >
            0
          </button>
          <button
            className="flex aspect-square items-center justify-center bg-gray-900 font-mono text-[40px] font-medium"
            onClick={() => {
              setStep("choose-tags");
            }}
          >
            <ArrowRight className="size-[52px] text-white" />
          </button>
        </div>
      )}

      {step === "choose-tags" && (
        <div className="flex h-[calc(4_/_3_*_100dvw_+_1px)] flex-col justify-between border-t border-gray-300">
          <div className="flex flex-wrap gap-3 px-4 py-6">
            {tags.map((t) => (
              <Tag
                key={t.id}
                text={t.name}
                active={selectedTags.includes(t.id)}
                onClick={() => {
                  setSelectedTags((prev) => {
                    if (prev.includes(t.id)) {
                      return prev.filter((p) => p !== t.id);
                    } else {
                      return [...prev, t.id];
                    }
                  });
                }}
              />
            ))}
          </div>
          <div className="flex h-[calc(1_/_3_*_100dvw)] justify-end border-t border-gray-300">
            <button
              className="flex aspect-square h-full items-center justify-center bg-gray-900 font-mono text-[40px] font-medium"
              onClick={() => {
                fetcher.submit(
                  { amount, tags: selectedTags },
                  {
                    method: "POST",
                  },
                );
              }}
            >
              <Check className="size-[52px] text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
