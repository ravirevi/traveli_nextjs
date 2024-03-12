'use client'
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: '질문 게시판' },
  { id: 1, value: 15, label: '양도 게시판' },
  { id: 2, value: 20, label: '후기 게시판' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 20, additionalRadius: -20, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}