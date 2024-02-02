import Link from "next/link";
import { Clock, User, Wand2, CircleUser, Bell, ClipboardList } from "lucide-react";
import { Button } from "./ui/button";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-56 py-6 px-4 bg-primary/5 text-[#2D3648]">
        <div className="mb-8 flex">
          <Link href="/">
            <Button size="lg">LOGO</Button>
          </Link>
        </div>
        <nav className="flex flex-col items-start justify-between space-y-1 ">
          <ul className="w-full">
            <li className="py-3 px-6">
              <Link className="flex gap-2" href="/menu">
                <Clock className="h-5 w-5" />
                <span>Asignaciones</span>
              </Link>
            </li>
            <li className="py-3 px-6">
              <Link className="flex items-center gap-2" href="#">
                <User className="h-5 w-5" />
                <span>Personas</span>
              </Link>
            </li>
            <li className="py-3 px-6">
              <Link className="flex items-center gap-2" href="settings">
                <Wand2 className="h-5 w-5" />
                <span>Predicción</span>
              </Link>
            </li>
            <li className="py-3 px-6 bg-slate-300">
              <Link className="flex items-center gap-2" href="bench-reportes">
                <ClipboardList className="h-5 w-5" />
                <span>Test - Bench Reports</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 overflow-y-scroll">
        <header className="flex justify-end items-center h-16 px-6 text-[#1A202C]">
          <div />
          <div className="flex items-center space-x-4">
            <Bell className="text-[#1A202C]" />
            <CircleUser className="text-[#1A202C]" />
            <span>Hola, Federico B.</span>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
