"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import DashboardCard from '@/components/DashboardCard';
import DynamicLineChart from '@/components/DynamicLineChart';
import RecentReviews from '@/components/RecentReviews';
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from '@/components/ui/DatePickerWithRange';

interface DashboardCardsData {
  positiveReviews: number;
  negativeReviews: number;
  flaggedReviews: number;
  escalatedReviews: number;
  positiveFooter: string;
  negativeFooter: string;
  flaggedFooter: string;
  escalatedFooter: string;
}

interface LineChartData {
  name: string;
  Positive: number;
  Negative: number;
}

interface RecentReview {
  reviewer: string;
  reviewedPerson: string;
  comment: string;
  timeAgo: string;
  type: 'Positive' | 'Negative';
}

const Dashboard: React.FC = () => {
  const [cardsData, setCardsData] = useState<DashboardCardsData | null>(null);
  const [lineChartData, setLineChartData] = useState<LineChartData[]>([]);
  const [recentReviews, setRecentReviews] = useState<RecentReview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all the data from different APIs
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [cardsRes, chartRes, reviewsRes] = await Promise.all([
          fetch('/api/dashboard-cards'),
          fetch('/api/line-chart'),
          fetch('/api/recent-reviews'),
        ]);

        if (!cardsRes.ok || !chartRes.ok || !reviewsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const cardsData: DashboardCardsData = await cardsRes.json();
        const lineChartData: LineChartData[] = await chartRes.json();
        const recentReviews: RecentReview[] = await reviewsRes.json();

        setCardsData(cardsData);
        setLineChartData(lineChartData);
        setRecentReviews(recentReviews);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      {/* Dashboard Heading and Date Range Picker */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 mx-4 md:mx-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center mt-2 md:mt-0">
          <DatePickerWithRange className="ml-auto" />
          <Button className="ml-4">Download</Button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 mx-4 md:mx-10">
        <DashboardCard 
          title="Positive Review" 
          description={cardsData?.positiveReviews || 0} 
          footerText={cardsData?.positiveFooter || ''} 
        />
        <DashboardCard 
          title="Negative Review" 
          description={cardsData?.negativeReviews || 0} 
          footerText={cardsData?.negativeFooter || ''} 
        />
        <DashboardCard 
          title="Flagged Review" 
          description={cardsData?.flaggedReviews || 0} 
          footerText={cardsData?.flaggedFooter || ''} 
        />
        <DashboardCard 
          title="Escalated Review" 
          description={cardsData?.escalatedReviews || 0} 
          footerText={cardsData?.escalatedFooter || ''} 
        />
      </div>

      {/* Grid for Chart and Recent Reviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mx-4 md:mx-10 h-auto">
        <div className="h-auto">
          <DynamicLineChart data={lineChartData} />
        </div>
        <div>
          <RecentReviews reviews={recentReviews} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
