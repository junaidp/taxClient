import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#003049', '#0030499C'];

export default function FullDonutChart({ items,totalIncome,totalExpenses }) {
 
  const chartData = [
    { name: 'Income', value: totalIncome },
    { name: 'Expenses', value: totalExpenses },
  ];

  return (
    <div className="relative w-[300px] h-[300px] flex justify-center items-center mx-auto">
      <PieChart width={300} height={300}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          startAngle={90}
          endAngle={-270}
          paddingAngle={3}
          dataKey="value"
          isAnimationActive={true}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              cursor="pointer"
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: '#f9fafb', border: 'none',fontSize:"14px",fontFamily:"'Archivo', serif" }}
          className="archivo text-[14px]"
          formatter={(value, name) => [`£${value}`, name]}
        />
      </PieChart>
    </div>
  );
}
