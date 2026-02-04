interface ToolbarProps {
  onSortChange: (newSort: string) => void;
  onFilterChange: (filter: string) => void;
  totalCount?: number;
}

export default function Toolbar({
  onSortChange,
  onFilterChange,
  totalCount,
}: ToolbarProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-bold text-text-main dark:text-white">
          Active farms
        </h2>
        {totalCount !== undefined && (
          <p className="text-sm text-text-muted mt-1">
            {totalCount} farm projects available
          </p>
        )}
      </div>

      <div className="flex gap-4">{/* Your existing toolbar content */}</div>
    </div>
  );
}
