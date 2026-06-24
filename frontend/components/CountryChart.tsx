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

export default function CountryChart({
  data,
}: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
    >
      <BarChart data={data}>
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="#22c55e"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}