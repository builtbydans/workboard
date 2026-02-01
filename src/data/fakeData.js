export const participations = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    participantId: Math.floor(Math.random() * 40) + 1, // 40 unique participants
    campaignId: Math.floor(Math.random() * 12) + 1, // 12 campaigns
    identified: Math.random() > 0.3, // ~70% identified, 30% anonymous
    createdAt: new Date(
      2024,
      Math.floor(Math.random() * 12), // month
      Math.floor(Math.random() * 28) + 1, // day
    ),
    durationMinutes: Math.floor(Math.random() * 50) + 5, // 5–55 minutes
  };
});
