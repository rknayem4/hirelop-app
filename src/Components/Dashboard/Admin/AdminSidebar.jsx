"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars,
  Gear,
  Person,
  Briefcase,
  CreditCard,
  LayoutCells,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

const navItems = [
  {
    icon: LayoutCells,
    label: "Dashboard",
    link: "/dashboard/admin",
  },
  {
    icon: Person,
    label: "Users",
    link: "/dashboard/admin/users",
  },
  {
    icon: Briefcase,
    label: "Companies",
    link: "/dashboard/admin/companies",
  },
  {
    icon: Briefcase,
    label: "Jobs",
    link: "/dashboard/admin/jobs",
  },
  {
    icon: CreditCard,
    label: "Payments",
    link: "/dashboard/admin/payments",
  },
  {
    icon: Gear,
    label: "Settings",
    link: "/dashboard/admin/settings",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const navLinks = (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive =
          pathname === item.link ||
          (item.link !== "/dashboard/admin" && pathname.startsWith(item.link));

        return (
          <Link
            key={item.label}
            href={item.link}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
              isActive
                ? "bg-default font-medium text-foreground"
                : "text-default-600 hover:bg-default hover:text-foreground"
            }`}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden h-screen w-64 shrink-0 border-r border-default-200 bg-content1 p-4 lg:block">
        {navLinks}
      </aside>

      {/* Mobile */}
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
                <Drawer.Heading>Admin Dashboard</Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body>{navLinks}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
