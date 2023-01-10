import React from 'react';

import { useFruits } from '@/query/fruit';
import FruitItem, { IFruitItem } from './FruitItem';
import Pagination from './Pagination';

const totalPages = 5;

export default function Fruits() {
  const [fruits, setFruits] = React.useState<IFruitItem[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemPerPage, setItemPerPage] = React.useState<number>(0);

  const { data, status, error } = useFruits<IFruitItem[]>();

  React.useEffect(() => {
    if (!data) {
      return;
    }
    const itemPerPage = Math.ceil(data.length / totalPages);
    setItemPerPage(itemPerPage);
  }, [data]);

  React.useEffect(() => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;

    const items = data?.slice(start, end);

    setFruits(items ?? []);
  }, [currentPage, itemPerPage]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return (
      <div className="text-red-500">
        Something went wrong! Please make sure you're using CORS chrome extension to bypass CORS
        errors for demo
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap max-w-[900px]">
        {fruits.map((item: IFruitItem) => (
          <FruitItem key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handleChangePage}
      />
    </>
  );
}
