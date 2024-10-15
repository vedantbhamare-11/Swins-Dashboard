import type { NextApiRequest, NextApiResponse } from 'next';

// Define the structure for the recent reviews data
interface RecentReview {
  reviewer: string;
  reviewedPerson: string;
  comment: string;
  timeAgo: string;
  type: 'Positive' | 'Negative';
}

export default function handler(req: NextApiRequest, res: NextApiResponse<RecentReview[]>) {
  const data: RecentReview[] = [
    { reviewer: 'Sajith', reviewedPerson: 'Lokesh', comment: 'Great job on the new logo design!', timeAgo: '2 min ago', type: 'Positive' },
    { reviewer: 'Anto', reviewedPerson: 'Sridhar', comment: 'The service could be improved.', timeAgo: '5 min ago', type: 'Negative' },
    { reviewer: 'Rahul', reviewedPerson: 'Nisha', comment: 'Loved the product quality!', timeAgo: '10 min ago', type: 'Positive' },
    { reviewer: 'Kiran', reviewedPerson: 'Aditi', comment: 'Not what I expected.', timeAgo: '15 min ago', type: 'Negative' },
  ];

  res.status(200).json(data);
}
