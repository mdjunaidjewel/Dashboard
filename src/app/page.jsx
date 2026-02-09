import Filters from "@/components/dashboard/Filters";
import KPICard from "@/components/dashboard/KPICard";
import OrdersChart from "@/components/dashboard/OrdersChart";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserPieChart from "@/components/dashboard/UserPieChart";
import DashboardLayout from "@/components/layout/DashboardLayout";



export default function Home() {
  return (
    <DashboardLayout>
      <Filters />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard title="Total Revenue" value="$54,230" change="+12%" positive />
        <KPICard title="Total Users" value="1,245" change="+8%" positive />
        <KPICard title="Orders" value="342" change="-3%" />
        <KPICard title="Conversion Rate" value="4.3%" change="+1.2%" positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <OrdersChart />
        <UserPieChart />
      </div>
    </DashboardLayout>
  );
}
