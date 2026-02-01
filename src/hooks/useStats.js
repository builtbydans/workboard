const useStats = (participations) => {
  const totalParticipations = participations.length;

  const uniqueParticipants = new Set(participations.map((p) => p.participantId))
    .size;

  const totalMinutesSpent = participations.reduce(
    (acc, p) => acc + p.durationMinutes,
    0,
  );

  const totalHoursSpent = totalMinutesSpent / 60;
  const roundedHours = Math.floor(totalHoursSpent);

  const longestSession = participations
    .map((p) => p.durationMinutes)
    .sort((a, b) => b - a)[0];

  const averageSessionLength =
    totalParticipations === 0
      ? 0
      : Math.floor(totalMinutesSpent / totalParticipations);

  const participationsByMonth = participations.reduce((acc, p) => {
    const month = p.createdAt.getMonth(); // 0–11
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const monthlyData = Array.from({ length: 12 }, (_, month) => ({
    month,
    value: participationsByMonth[month] || 0,
  }));

  return {
    totalParticipations,
    uniqueParticipants,
    totalMinutesSpent,
    totalHoursSpent,
    averageSessionLength,
    longestSession,
    roundedHours,
    monthlyData,
  };
};

export default useStats;
