"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: any[];
}

export default function AnalyticsChart({
  data,
}: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
    >
      <BarChart data={data}>
        <XAxis dataKey="industry" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="funding"
          fill="#3b82f6"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}