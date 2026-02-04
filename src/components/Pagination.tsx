"use client";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, i) => i + 1
  );

  return (
    <div className="flex justify-center py-8">
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex size-10 items-center justify-center rounded-xl border border-border-color bg-surface-light text-text-main hover:border-primary hover:text-primary disabled:opacity-50 dark:bg-surface-dark dark:border-green-900 dark:text-white"
        >
          <FaChevronLeft />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex size-10 items-center justify-center rounded-xl text-sm font-bold ${
              currentPage === page
                ? "bg-primary text-black"
                : "border border-border-color bg-surface-light text-text-main hover:border-primary hover:text-primary dark:bg-surface-dark dark:border-green-900 dark:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex size-10 items-center justify-center rounded-xl border border-border-color bg-surface-light text-text-main hover:border-primary hover:text-primary disabled:opacity-50 dark:bg-surface-dark dark:border-green-900 dark:text-white"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
