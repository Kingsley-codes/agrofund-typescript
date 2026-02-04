// app/components/InvestmentRow.tsx
"use client";

import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { GiGoat, GiDoubleFish, GiGrass } from "react-icons/gi";
import EditOpportunityModal from "./EditOpportunityModal"; // You'll need to create this
import ConfirmModal from "./ConfirmModal";

interface InvestmentRowProps {
  investment: {
    _id: string;
    produceName: string;
    title: string;
    description: string;
    totalUnit: number;
    minimumUnit: number;
    price: number;
    category: string;
    duration: number;
    ROI: number;
    remainingUnit: number;
    image1: { url: string };
    image2: { url: string };
    image3: { url: string };
  };
  onEditSuccess?: () => void;
  onDeleteSuccess?: () => void;
  refreshInvestments?: () => void;
}

export default function InvestmentRow({
  investment,
  onEditSuccess,
  onDeleteSuccess,
  refreshInvestments,
}: InvestmentRowProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case "crops":
        return "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-100 dark:border-green-800";
      case "livestock":
        return "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 border-orange-100 dark:border-orange-800";
      case "aquaculture":
        return "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-100 dark:border-blue-800";
      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "crops":
        return <GiGrass />;
      case "livestock":
        return <GiGoat />;
      case "aquaculture":
        return <GiDoubleFish />;
      default:
        return "category";
    }
  };

  const formatDuration = (months: number) => {
    return `${months} Month${months !== 1 ? "s" : ""}`;
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(
        `/api/admin/produce/${investment._id}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Investment deleted successfully!");
        if (onDeleteSuccess) onDeleteSuccess();
        if (refreshInvestments) refreshInvestments();
      }
    } catch (error: any) {
      console.error("Error deleting investment:", error);
      toast.error(
        error.response?.data?.message || "Failed to delete investment"
      );
    } finally {
      setIsDeleting(false);
      setIsConfirmModalOpen(false);
    }
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    if (onEditSuccess) onEditSuccess();
    if (refreshInvestments) refreshInvestments();
  };

  const handleDeleteClick = () => {
    setIsConfirmModalOpen(true);
  };

  return (
    <>
      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <td className="px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-1 sm:gap-3 min-w-0">
            <div
              className="size-6 sm:size-10 rounded-lg bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url('${investment.image1.url}')` }}
              aria-label={`Icon representing ${investment.title}`}
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base truncate">
                {investment.title}
              </p>
              <p className="text-[11px] text-slate-500 truncate">
                Produce: {investment.produceName}
              </p>
            </div>
          </div>
        </td>
        <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4">
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium ${getCategoryStyles(
              investment.category
            )}`}
          >
            <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
              {getCategoryIcon(investment.category)}
            </span>
            <span className="capitalize">{investment.category}</span>
          </span>
        </td>
        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-bold text-slate-900 dark:text-white text-sm sm:text-base">
          {investment.ROI}%
        </td>
        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-slate-600 dark:text-slate-400 text-sm">
          {formatDuration(investment.duration)}
        </td>
        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right">
          <span className="inline-flex items-center justify-end gap-1 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium">
            {investment.totalUnit.toLocaleString()}
          </span>
        </td>
        <td className="px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleEdit}
              className="p-1 sm:p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
              title="Edit"
              disabled={isDeleting}
            >
              <FaEdit className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleDeleteClick}
              className="p-1 sm:p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors disabled:opacity-50"
              title="Delete"
              disabled={isDeleting}
            >
              {isDeleting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
              ) : (
                <FaRegTrashAlt className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </td>
      </tr>

      {isEditModalOpen && (
        <EditOpportunityModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          investment={investment}
          onSuccess={handleEditSuccess}
        />
      )}

      {/* Custom Confirmation Modal */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        title="Delete Investment"
        message={`Are you sure you want to delete "${investment.title}"? This action cannot be undone and will permanently remove this investment from the system.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        onConfirm={handleDelete}
        onCancel={() => setIsConfirmModalOpen(false)}
        loading={isDeleting}
      />
    </>
  );
}
