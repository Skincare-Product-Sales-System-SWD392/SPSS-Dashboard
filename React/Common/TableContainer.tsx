interface TableContainerProps {
  // ... existing props
  pageCount?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  showPagination?: boolean;
} 