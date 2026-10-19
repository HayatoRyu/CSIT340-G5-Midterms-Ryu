

export default function StatCard(props) {
  return (
    <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
      <p className="mt-1 text-lg text-[#000000]">{props.stars} Stars</p>
      <p className="text-4xl font-bold">{props.value} Downloads</p>
      <p className="mt-1 text-lg text-[#000000]">{props.label} Issues</p>
    </div>
  );
}