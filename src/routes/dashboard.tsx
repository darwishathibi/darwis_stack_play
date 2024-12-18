import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ComponentChart } from "@/components/part/componentChart";
import AppTable from "@/components/part/app-table";
import AppCards from "@/components/part/app-cards";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/part/app-sidebar";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full px-8 space-y-8 mb-20">
        <div className="flex items-center py-4 border-b border-gray-200 space-x-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        {children}
        <Outlet />
        <AppCards />
        <ComponentChart />
        <AppTable />
      </main>
    </SidebarProvider>
  );
}
