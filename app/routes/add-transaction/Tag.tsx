import { cn } from "~/utils/cn";

interface TagProps extends React.ComponentPropsWithoutRef<"div"> {
  text: string;
  active: boolean;
}

function Tag({ text, active, ...props }: TagProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-gray-300 px-8 py-4 font-medium text-gray-700",
        { "bg-gray-900 text-white": active },
      )}
      {...props}
    >
      {text}
    </div>
  );
}

export { Tag };
