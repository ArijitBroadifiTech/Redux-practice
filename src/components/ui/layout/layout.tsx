import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Main } from "./main";
import { Outlet } from "@tanstack/react-router";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarTrigger />
      <Main className="w-full">{children ?? <Outlet />}</Main>
    </SidebarProvider>
  );
}
