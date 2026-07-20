import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-4">
                <img src="/logos/uacttrack-logo-1.png" alt="uacttrack-logo" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="space-y-4 text-center my-4">
                    <SidebarMenuItem>
                        <a
                            href="/home"
                            className="text-blue-700 hover:text-blue-500 font-semibold"
                        >
                            Dashboard
                        </a>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <a
                            href="/activity-proposals"
                            className="text-blue-700 hover:text-blue-500 font-semibold"
                        >
                            Activity Proposals
                        </a>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <a
                            href="/forms"
                            className="text-blue-700 hover:text-blue-500 font-semibold"
                        >
                            Relevant Forms
                        </a>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <a
                            href="/external-links"
                            className="text-blue-700 hover:text-blue-500 font-semibold"
                        >
                            External Links
                        </a>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    Username
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
