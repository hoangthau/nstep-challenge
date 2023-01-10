import React from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({ currentPage, onChangePage, totalPages }: Props) => {
  const [pages, setPages] = React.useState<number[]>([]);

  React.useEffect(() => {
    const pageArr = [];
    for (let i = 1; i <= totalPages; i++) {
      pageArr.push(i);
    }
    setPages(pageArr);
  }, [totalPages]);

  return (
    <div className="paging mt-4">
      {pages.map((page) => (
        <div
          className={`rounded page ${currentPage === page ? 'active' : ''}`}
          onClick={() => onChangePage(page)}
          key={page}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
