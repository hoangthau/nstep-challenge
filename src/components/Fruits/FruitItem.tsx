import React from 'react';

export interface IFruitItem {
  id: number;
  name: string;
  family: string;
  genus: string;
  order: string;
}

type Props = {
  item: IFruitItem;
};

export default function FruitItem({ item }: Props) {
  const { name, family, genus, order } = item;
  return (
    <div className="w-1/4 p-1">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <p className="text-lg mb-2">{name}</p>
        <p className="text-sm text-gray-500">Family: {family}</p>
        <p className="text-sm text-gray-500">Genus: {genus}</p>
        <p className="text-sm text-gray-500">Order: {order}</p>
      </div>
    </div>
  );
}
