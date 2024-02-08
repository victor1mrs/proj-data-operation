"use client"

import PieChartCard from "@/components/PieChartCard";
import { ChevronDown } from "lucide-react";

const data = [
  {
    "id": "solidity",
    "label": "Solidity",
    "value": 11,
  },
  {
    "id": "react",
    "label": "React",
    "value": 29,
  },
  {
    "id": "javascript",
    "label": "JavaScript",
    "value": 27,
  },
  {
    "id": "python",
    "label": "Python",
    "value": 48,
  },
  {
    "id": "swift",
    "label": "Swift",
    "value": 14,
  },
  {
    "id": "cplusplus",
    "label": "C++",
    "value": 49,
  },
  {
    "id": "r",
    "label": "R",
    "value": 3,
  },
  {
    "id": "unrealEngine",
    "label": "Unreal Engine",
    "value": 18,
  },
  {
    "id": "unity",
    "label": "Unity",
    "value": 34,
  },
  {
    "id": "docker",
    "label": "Docker",
    "value": 6,
  }
];

export default function Chart() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <h1 className="text-3xl"><b>Stack tecnol&oacute;gico</b></h1>
            <ChevronDown className="text-gray-500" />
          </div>
        <div className="w-full">
          <PieChartCard data={data} />
        </div>
      </div>
    </div>
  )
}
