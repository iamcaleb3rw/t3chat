"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Plus, Search, SearchIcon, Settings2Icon, SunIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import TopRightPanel from "../Theme-switch";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-sidebar pt-3">
      <div className="p-1 fixed left-2 top-3 rounded-md bg-sidebar flex items-center">
        <SidebarTrigger className="hover:bg-pink-500/30" />
        <AnimatePresence>
          {state === "collapsed" && (
            <>
              <motion.div
                key="search"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 transition hover:bg-pink-500/30"
                >
                  <SearchIcon />
                </Button>
              </motion.div>

              <motion.div
                key="plus"
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.1, delay: 0.05 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 transition hover:bg-pink-500/30"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {/* <Button
          variant={"ghost"}
          size={"icon"}
          className={cn(
            "size-8 hidden transition hover:bg-pink-500/30",
            state === "collapsed" && "flex"
          )}
        >
          <SearchIcon />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn(
            "size-8 hidden transition hover:bg-pink-500/30",
            state === "collapsed" && "flex"
          )}
        >
          <Plus className="h-4 w-4" />
        </Button> */}
      </div>
      <div className="p-1 fixed right-2 top-3 rounded-md bg-sidebar flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="size-8 transition hover:bg-pink-500/30"
        >
          <Settings2Icon />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="size-8 transition hover:bg-pink-500/30"
        >
          <SunIcon className="h-4 w-4" />
        </Button>
      </div>
      <SidebarHeader>
        <SidebarMenu></SidebarMenu>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
