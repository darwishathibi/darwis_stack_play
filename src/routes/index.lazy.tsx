import { createLazyFileRoute } from "@tanstack/react-router";
import { ComponentChart } from "@/components/part/componentChart";
import AppTable from "@/components/part/app-table";
import AppCards from "@/components/part/app-cards";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="h-full w-full mt-4 p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Welcome back, Darwis! Here's what's happening with your projects today.
        </p>
      </div>
      <AppCards />
      <ComponentChart />
      <AppTable />
    </main>
  );
}


