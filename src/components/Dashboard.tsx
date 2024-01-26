import Link from "next/link";
import { Clock, User, Wand2, CircleUser, Bell } from 'lucide-react';
import { Button } from "./ui/button";


const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="flex h-screen">
        <aside className="w-64 p-6 bg-[#E2E7F0] text-[#2D3648]">
          <div className="mb-8 flex justify-center">
            <Button>LOGO</Button>
          </div>
          <nav className="flex flex-col items-start justify-between p-6 space-y-1 ">
            <ul className="space-y-2">
              <li>
                <Link className="flex items-center gap-2" href="/menu">
                  <Clock className="h-5 w-5" />
                  <span>Asignaciones</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href="#">
                  <User className="h-5 w-5" />
                  <span>Personas</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href="settings">
                  <Wand2 className="h-5 w-5" />
                  <span>Predicción</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1">
          <header className="flex justify-end items-center h-16 px-6 text-[#1A202C]">
            <div />
            <div className="flex items-center space-x-4">
              <Bell className="text-[#1A202C]" />
              <CircleUser className="text-[#1A202C]" />
              <span>Hola, Federico B.</span>
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>

      </div>
  );
};

export default Dashboard;
