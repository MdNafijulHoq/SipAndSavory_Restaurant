import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red'];

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    });

    const {data: chartData = []} = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data
        }
    })

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    //   custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    const pieChartData = chartData.map(data => {
        return {
            name: data.category,
            value: data.revenue,
        }
    })

    return (
        <div className="p-4 md:p-6 lg:p-8">
  <h2 className="text-2xl md:text-3xl text-center mb-4">
    <span>
      Hi, Welcome {user?.displayName ? user?.displayName : "Back"}
    </span>
  </h2>

  {/* Stats Section */}
  <div className="stats flex flex-col lg:flex-row gap-4 lg:gap-6 shadow mt-6">
    <div className="stat bg-gradient-to-r from-purple-400 to-purple-200 text-center">
      <div className="stat-title text-white text-sm md:text-base">
        Revenue
      </div>
      <div className="stat-value text-white text-lg md:text-2xl">
        ${data?.revenue}
      </div>
    </div>

    <div className="stat bg-gradient-to-r from-amber-400 to-amber-200 text-center">
      <div className="stat-title text-white text-sm md:text-base">
        Customers
      </div>
      <div className="stat-value text-white text-lg md:text-2xl">
        {data?.users}
      </div>
    </div>

    <div className="stat bg-gradient-to-r from-rose-400 to-rose-200 text-center">
      <div className="stat-title text-white text-sm md:text-base">
        Orders
      </div>
      <div className="stat-value text-white text-lg md:text-2xl">
        {data?.Orders}
      </div>
    </div>

    <div className="stat bg-gradient-to-r from-sky-500 to-sky-200 text-center">
      <div className="stat-title text-white text-sm md:text-base">
        Products
      </div>
      <div className="stat-value text-white text-lg md:text-2xl">
        {data?.menuItems}
      </div>
    </div>
  </div>

  {/* Charts Section */}
  <div className="flex flex-col lg:flex-row gap-6 mt-8">
    {/* Bar Chart */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <BarChart
        width={300}
        height={250}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Bar
          dataKey="quantity"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
          ))}
        </Bar>
      </BarChart>
    </div>

    {/* Pie Chart */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

    );
};

export default AdminHome;