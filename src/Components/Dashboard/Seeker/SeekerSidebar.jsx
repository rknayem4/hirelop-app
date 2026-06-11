"use client";

import Link from "next/link";
import {
  Bars,
  Bookmark,
  Briefcase,
  FileText,
  Gear,
  House,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

const navItems = [
  {
    icon: House,
    label: "Dashboard",
    link: "/dashboard/seeker",
  },
  {
    icon: Briefcase,
    label: "Jobs",
    link: "/jobs",
  },
  {
    icon: Bookmark,
    label: "Saved Jobs",
    link: "/dashboard/seeker/saved-jobs",
  },
  {
    icon: FileText,
    label: "Applications",
    link: "/dashboard/seeker/applications",
  },
  {
    icon: Gear,
    label: "Settings",
    link: "/dashboard/seeker/settings",
  },
];

export default function SeekerSidebar() {
  const navLinks = (
    <nav className="flex flex-col gap-2">
      {navItems.map((item, index) => (
        <Link
          key={item.label}
          href={item.link}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all
            ${
              index === 0
                ? "bg-default text-foreground font-medium"
                : "text-default-600 hover:bg-default hover:text-foreground"
            }`}
        >
          <item.icon className="size-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-64 shrink-0 border-r border-default-200 bg-content1 p-4 lg:block">
        {navLinks}
      </aside>

      {/* Mobile Sidebar */}
      <Drawer>
        <Button className="lg:hidden" variant="flat">
          <Bars />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Header>
                <Drawer.Heading>
                  Seeker Dashboard
                </Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body>{navLinks}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}