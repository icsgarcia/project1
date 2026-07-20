import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <div className="relative flex items-center justify-center bg-blue-700 p-4">
                    <SidebarTrigger className="absolute text-white top-4 left-4" />

                    <img src="/logos/ua-logo.png" alt="ua-logo" width={30} />
                    <p className="ml-2 text-white font-semibold">
                        University of the Assumption
                    </p>
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}
