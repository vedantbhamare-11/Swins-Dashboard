// ./src/components/DynamicLineChart.tsx
"use client";

import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Ensure the import path is correct

interface DynamicLineChartProps {
  data: { name: string; Positive: number; Negative: number }[];
}

const DynamicLineChart: React.FC<DynamicLineChartProps> = ({ data }) => (
  <Card className="w-full h-auto p-5 rounded-lg">
    <CardHeader>
      <CardTitle className="text-lg">Overview of Reviews</CardTitle>
      <CardDescription className="text-sm text-gray-500">
        Based on reviews given
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      {" "}
      {/* Remove padding for the content area */}
      <div className="h-60 relative">
        {" "}
        {/* Set a fixed height for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <Line type="monotone" dataKey="Positive" stroke="#09090B" dot />
            <Line type="monotone" dataKey="Negative" stroke="#8884d8" dot />
          </LineChart>
        </ResponsiveContainer>
        {/* Radio Buttons Section */}
        <div className="absolute bottom-[14rem]  flex gap-1">
          <input
            type="radio"
            name="reviewType"
            value="positive"
            defaultChecked
          />

          <label className="mr-2">Positive</label>
          <input type="radio" name="reviewType" value="negative" />
          <label className="mr-2">Negative</label>
          <input type="radio" name="reviewType" value="Flagged" />
          <label className="mr-2">Flagged</label>
          <input type="radio" name="reviewType" value="Escalated" />
          <label className="mr-2">Escalated</label>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default DynamicLineChart;
