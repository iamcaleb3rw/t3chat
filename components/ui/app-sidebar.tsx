"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
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
import Logo from "@/public/logo.svg";
import Image from "next/image";
import panelSvg from "@/public/rightpanel.svg";

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
      <AnimatePresence>
        {state !== "collapsed" && (
          <motion.div
            key="panel-image"
            initial={{ opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed right-0 top-4"
          >
            <Image src={panelSvg} alt="Panel Image" width={112} />
          </motion.div>
        )}
      </AnimatePresence>
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
      <SidebarHeader className="text-[#CA0277] mt-1 flex items-center justify-center">
        <Image src={Logo} alt="Logo Image" width={70} className="" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button>New Chat</Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
