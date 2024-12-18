import { createLazyFileRoute, Outlet } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import AppSidebar from "@/components/part/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const data = [
  {
    trigger: "What is this?",
    content: "This is a test project.",
  },
  {
    trigger: "What is the purpose?",
    content: "The purpose is to test the stack.",
  },
  {
    trigger: "How do I get started?",
    content: "You can start by reading the documentation.",
  },
  {
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
]

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full px-8 space-y-8 mb-20">
          <div className="flex items-center py-4 border-b border-gray-200 space-x-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold text-gray-800">About Test</h1>
          </div>
          {children}
          <Outlet />
          <section className="space-y-4 flex flex-col w-full">
            <Accordion type="single" collapsible>
              {data.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.trigger}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </main>
      </SidebarProvider>
    </>
  );
}
