import React from "react";
import { participations } from "../../data/fakeData";
import useStats from "../../hooks/useStats";
import StatCard from "./StatCard";
import LineChart from "./LineChart";

const Dashboard = () => {
  const stats = useStats(participations);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard
          label="Total Participations"
          value={stats.totalParticipations}
        />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard
          label="Unique Participants"
          value={stats.uniqueParticipants}
        />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard
          label="Total Time Spent"
          value={stats.roundedHours}
          suffix="hours"
        />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard
          label="Longest Session"
          value={stats.longestSession}
          suffix="min"
        />
      </div>

      <div className="col-span-12">
        <LineChart data={stats.monthlyData} />
      </div>
      <p className="col-span-12">To Do: fix page, add charts, styling</p>
    </div>
  );
};

export default Dashboard;
