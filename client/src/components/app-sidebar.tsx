import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1>UActTrack</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="space-y-4 text-center">
                    <SidebarMenuItem>
                        <a href="/home">Dashboard</a>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <a href="/activity-proposals">Activity Proposals</a>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <a href="/forms">Relevant Forms</a>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <a href="/external-links">External Links</a>
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
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
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
