"use client";

import { SelectValue, SelectTrigger, Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import LineChartCard  from "@/components/LineChartCard";
import { Search } from "lucide-react";

const mockedData1 = [
  {
    id: "Desktop",
    data: [
      { x: "Jan", y: 43 },
      { x: "Feb", y: 137 },
      { x: "Mar", y: 61 },
      { x: "Apr", y: 145 },
      { x: "May", y: 26 },
      { x: "Jun", y: 154 },
    ],
  },
  {
    id: "Mobile",
    data: [
      { x: "Jan", y: 60 },
      { x: "Feb", y: 48 },
      { x: "Mar", y: 177 },
      { x: "Apr", y: 78 },
      { x: "May", y: 96 },
      { x: "Jun", y: 204 },
    ],
  },
]

export default function Home() {
  return (
    <div className="flex flex-col py-8 px-16">
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-6 mb-6">
        <LineChartCard title="General difference" mainInfo="-8.2%" data={mockedData1} />
        <LineChartCard title="Dato General 2" mainInfo="12%" data={mockedData1} />
        <LineChartCard title="Dato General 3" mainInfo="26%" data={mockedData1} />
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger id="members">
                <SelectValue placeholder="Todos los miembros" />
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger id="time">
                <SelectValue placeholder="Últimos 30 días" />
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger id="skills">
                <SelectValue placeholder="Skills" />
              </SelectTrigger>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Buscar" type="search" />
            <Search className="text-gray-500" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PERSONA</TableHead>
              <TableHead>PROYECTO</TableHead>
              <TableHead>WORKED</TableHead>
              <TableHead>ESTIMATED</TableHead>
              <TableHead>DIFFERENCE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Adriana Gonzalez</TableCell>
              <TableCell>Upparent</TableCell>
              <TableCell>228.16</TableCell>
              <TableCell>264</TableCell>
              <TableCell className="text-green-500">-13.6%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
