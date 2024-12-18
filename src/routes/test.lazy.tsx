import { createLazyFileRoute } from "@tanstack/react-router";
import AppSidebar from "@/components/part/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const Route = createLazyFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full px-8 space-y-8 mb-20">
          <div className="flex items-center py-4 border-b border-gray-200 space-x-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold text-gray-800">Calendar</h1>
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
