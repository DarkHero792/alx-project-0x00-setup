import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Landing Page</h1>

      {/* Existing Card */}
      <Card
        title="Modern Villa"
        description="Spacious and luxurious."
        price={320}
        rating={4.9}
      />

      {/* Button Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">Buttons</h2>

        {/* Small Buttons */}
        <div className="space-x-4">
          <Button title="Small - sm" styles="text-sm px-4 py-2 rounded-sm bg-blue-500 text-white" />
          <Button title="Small - md" styles="text-sm px-4 py-2 rounded-md bg-blue-500 text-white" />
          <Button title="Small - full" styles="text-sm px-4 py-2 rounded-full bg-blue-500 text-white" />
        </div>

        {/* Medium Buttons */}
        <div className="space-x-4">
          <Button title="Medium - sm" styles="text-base px-5 py-2 rounded-sm bg-green-500 text-white" />
          <Button title="Medium - md" styles="text-base px-5 py-2 rounded-md bg-green-500 text-white" />
          <Button title="Medium - full" styles="text-base px-5 py-2 rounded-full bg-green-500 text-white" />
        </div>

        {/* Large Buttons */}
        <div className="space-x-4">
          <Button title="Large - sm" styles="text-lg px-6 py-3 rounded-sm bg-red-500 text-white" />
          <Button title="Large - md" styles="text-lg px-6 py-3 rounded-md bg-red-500 text-white" />
          <Button title="Large - full" styles="text-lg px-6 py-3 rounded-full bg-red-500 text-white" />
        </div>

        {/* Rounded-lg Buttons */}
        <div className="space-x-4">
          <Button title="Small - lg" styles="text-sm px-4 py-2 rounded-lg bg-purple-500 text-white" />
          <Button title="Medium - lg" styles="text-base px-5 py-2 rounded-lg bg-purple-500 text-white" />
          <Button title="Large - lg" styles="text-lg px-6 py-3 rounded-lg bg-purple-500 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
