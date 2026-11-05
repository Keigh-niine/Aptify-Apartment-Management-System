import Button from "@/components/Button";

export default function EmptyState({
  title,
  body,
  actionLabel,
  actionHref,
}: {
  title: string;
  body: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 p-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
        <div className="h-5 w-5 rounded-md bg-primary" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="max-w-[380px] text-sm leading-[21px] text-muted">{body}</p>
      <div className="mt-2">
        <Button href={actionHref}>{actionLabel}</Button>
      </div>
    </div>
  );
}