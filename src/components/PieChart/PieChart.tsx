import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";



const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6f61'];

const PieChartComponent = ({data}: any) => {

    const renderCustomizedLabel = ({ percent }: any) =>
        `${(percent * 100).toFixed(1)}%`;

    return (
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        // label={renderCustomizedLabel}
                    >
                        {data.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartComponent;