const StatCard = ({ label, value, suffix }) => {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-semibold">
        {value} {suffix}
      </p>
    </div>
  );
};

export default StatCard;
