'use client';

import React from 'react';
import Image from 'next/image';
import Pill from '@/components/Pill';

interface CardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
}

const Card: React.FC<CardProps> = ({ title, description, price, rating }) => {
  return (
    <div className="rounded-2xl border shadow-sm p-4 w-full max-w-md mx-auto">
      {/* House Image */}
      <Image
        src="/assets/images/house.png"
        alt="House"
        width={500}
        height={300}
        className="rounded-xl mb-4"
      />

      {/* Pills */}
      <div className="flex gap-2 mb-4">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>

      {/* Details */}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>

      {/* Rating and Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/images/star.png"
            alt="Star"
            width={24}
            height={24}
            className="mr-1"
          />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <p className="text-sm font-semibold">${price} / night</p>
      </div>
    </div>
  );
};

export default Card;
