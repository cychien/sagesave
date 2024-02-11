import { format } from "date-fns";

type TransactionCardProps = {
  title?: string;
  tags: string[];
  createdAt: Date;
  amount: number;
};

function TransactionCard({
  title = "花費",
  tags,
  createdAt,
  amount,
}: TransactionCardProps) {
  return (
    <div className="rounded-xl border border-gray-300 px-4 pb-3 pt-4 shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="mt-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-md border border-gray-300 px-2 py-0.5 text-sm font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span>記錄於 {format(createdAt, "HH:mm")}</span>
        <span className="text-lg font-medium text-error-600">-{amount}</span>
      </div>
    </div>
  );
}

export { TransactionCard };
