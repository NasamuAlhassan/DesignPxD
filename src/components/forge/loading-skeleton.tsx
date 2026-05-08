export function LoadingSkeleton() {
  return (
    <div className="space-y-2">
      <div className="h-4 w-40 animate-pulse rounded bg-white/10" />
      <div className="h-20 animate-pulse rounded-xl bg-white/10" />
    </div>
  );
}
