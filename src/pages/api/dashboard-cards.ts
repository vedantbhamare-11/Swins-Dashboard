// src/pages/api/dashboard.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Define the structure of the response data
interface DashboardData {
  positiveReviews: number;
  negativeReviews: number;
  flaggedReviews: number;
  escalatedReviews: number;
  positiveFooter: string;
  negativeFooter: string;
  flaggedFooter: string;
  escalatedFooter: string;
  lineChartData: { name: string; Positive: number; Negative: number }[];
  recentReviews: { reviewer: string; reviewedPerson: string; comment: string; timeAgo: string; type: 'Positive' | 'Negative' }[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<DashboardData>) {
  const data: DashboardData = {
    positiveReviews: 150,
    negativeReviews: 25,
    flaggedReviews: 20,
    escalatedReviews: 5,
    positiveFooter: "+20.1% from last month",
    negativeFooter: "+201 since last month",
    flaggedFooter: "180.1% from last month",
    escalatedFooter: "+19% from last month",
    lineChartData: [
      { name: 'January', Positive: 50, Negative: 10 },
      { name: 'February', Positive: 80, Negative: 15 },
      { name: 'March', Positive: 100, Negative: 30 },
      { name: 'April', Positive: 150, Negative: 40 },
      { name: 'May', Positive: 130, Negative: 50 },
      { name: 'June', Positive: 170, Negative: 60 },
    ],
    recentReviews: [
      { reviewer: 'Sajith', reviewedPerson: 'Lokesh', comment: 'Great job on the new logo design!', timeAgo: '2 min ago', type: 'Positive' },
      { reviewer: 'Anto', reviewedPerson: 'Sridhar', comment: 'The service could be improved.', timeAgo: '5 min ago', type: 'Negative' },
      { reviewer: 'Rahul', reviewedPerson: 'Nisha', comment: 'Loved the product quality!', timeAgo: '10 min ago', type: 'Positive' },
      { reviewer: 'Kiran', reviewedPerson: 'Aditi', comment: 'Not what I expected.', timeAgo: '15 min ago', type: 'Negative' },
    ],
  };

  res.status(200).json(data);
}
