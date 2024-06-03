"use client";

import { useEffect, useState } from 'react';
import {useTranslations} from 'next-intl';



const Dashboard = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const t = useTranslations('Dashboard');

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    setDateTime(new Date());

    return () => clearInterval(interval);
  }, []);

  if (!dateTime) {
    return null;
  }

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 m-auto">
      <h1 className="text-2xl font-bold">{t('title')}!</h1>
      <p className="mt-4 text-lg">
        {dateTime.toLocaleString()}
      </p>
    </div>
  );
};

export default Dashboard;