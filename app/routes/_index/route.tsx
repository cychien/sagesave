import { TransactionCard } from "./TransactionCard";
import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import {
  LinksFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { Button, buttonVariants } from "~/components/ui/Button";
import { getSupabase } from "~/services/supabase";
import { cn } from "~/utils/cn";

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in");
  }

  const supabase = getSupabase();
  const { data: user, error } = await supabase
    .from("user")
    .select("id")
    .eq("clerk_user_id", userId)
    .single();

  if (!user) {
    const { error } = await supabase
      .from("user")
      .insert({ clerk_user_id: userId });

    return { transactions: [] };
  }

  const todayStart = new Date().setHours(0, 0, 0, 0);
  const todayEnd = new Date().setHours(23, 59, 59, 999);

  const { data: transactions, error: transactionsError } = await supabase
    .from("transaction")
    .select(
      `
      id,
      created_at,
      amount,
      name,
      tag (name)
    `,
    )
    .eq("user_id", user.id)
    .gte("created_at", new Date(todayStart).toISOString())
    .lte("created_at", new Date(todayEnd).toISOString());

  return { transactions };
}

export const meta: MetaFunction = () => {
  return [
    { title: "SageSave" },
    {
      name: "description",
      content: "",
    },
    { property: "og:title", content: "" },
    {
      property: "og:description",
      content: "",
    },
    { property: "og:image:alt", content: "" },
    { property: "twitter:title", content: "" },
    {
      property: "twitter:description",
      content: "",
    },
  ];
};

export default function Index() {
  const today = new Date();
  const { transactions } = useLoaderData<typeof loader>();

  return (
    <main className="relative">
      <div className="container mx-auto pt-6">
        <h1 className="text-2xl font-bold subpixel-antialiased">今日支出</h1>
        <p className="mt-1 font-medium text-gray-400">
          {format(today, "yyyy. MM. dd")}
        </p>
        <div className="mt-6 space-y-2">
          {transactions?.map((t) => (
            <TransactionCard
              key={t.id}
              title={t.name || undefined}
              tags={t.tag.map((t) => t.name)}
              createdAt={new Date(t.created_at)}
              amount={t.amount}
            />
          ))}
        </div>
      </div>
      <Link
        to="/add-transaction"
        className={cn(
          buttonVariants({ iconButton: true }),
          "fixed bottom-8 right-7 min-h-[72px] min-w-[72px] rounded-full",
        )}
      >
        <Plus className="size-10" />
      </Link>
    </main>
  );
}
