import type { NextApiRequest, NextApiResponse } from 'next';

// Define the structure for the line chart data
interface LineChartData {
  name: string;
  Positive: number;
  Negative: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<LineChartData[]>) {
  const data: LineChartData[] = [
    { name: 'January', Positive: 50, Negative: 10 },
    { name: 'February', Positive: 80, Negative: 15 },
    { name: 'March', Positive: 100, Negative: 30 },
    { name: 'April', Positive: 150, Negative: 40 },
    { name: 'May', Positive: 130, Negative: 50 },
    { name: 'June', Positive: 170, Negative: 60 },
  ];

  res.status(200).json(data);
}
