import React from 'react';
import Card from '@/components/Card';

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card
        title="Modern Villa"
        description="Spacious and luxurious."
        price={320}
        rating={4.9}
      />
    </div>
  );
};

export default Landing;
