import {
  Bars,
  Bell,
  BriefcaseFill,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
  SquarePlus,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, label: "Home", link: "/dashboard/recruiter" },
    { icon: SquarePlus, label: "Add new job", link: "/dashboard/recruiter/jobs/new" },
    { icon: BriefcaseFill, label: "My Company", link: "/dashboard/recruiter/company" },
    { icon: Envelope, label: "Messages", link: "dashboard/recruiter/" },
    { icon: Person, label: "Profile", link: "dashboard/recruiter/" },
    { icon: Gear, label: "Settings", link: "dashboard/recruiter/" },
  ];
  const navLinks = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          href={item.link}
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navLinks}
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navLinks}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
