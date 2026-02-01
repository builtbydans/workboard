const LineChart = ({ data }) => {
  const padding = 24;
  const width = 600;
  const height = 200;

  const maxValue = Math.max(...data.map((d) => d.value));

  const points = data
    .map((d, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2);

      const y =
        height - padding - (d.value / maxValue) * (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-sm font-medium text-slate-600">Performance</h3>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        preserveAspectRatio="none"
      >
        <polyline
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    </div>
  );
};

export default LineChart;
