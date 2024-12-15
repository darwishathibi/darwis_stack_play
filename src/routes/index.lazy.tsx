import { createLazyFileRoute } from "@tanstack/react-router";
import { ComponentChart } from "@/components/part/componentChart";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="border border-gray-200 rounded-lg p-4 h-full w-full">
      <ComponentChart />
    </main>
  );
}
