"use client";

import { ResponsiveLine } from "@nivo/line";
import { CardContent, Card } from "@/components/ui/card";
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
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">General difference</h2>
            <p className="text-3xl font-bold text-red-600 mb-4">-8.2%</p>
            <LineChart className="w-full h-[200px]" />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Dato General 2</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">12%</p>
            <LineChart className="w-full h-[200px]" />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Dato General 3</h2>
            <p className="text-3xl font-bold text-green-600 mb-4">26%</p>
            <LineChart className="w-full h-[200px]" />
          </CardContent>
        </Card>
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

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
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
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
