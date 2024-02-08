"use client"

import { ChevronDown } from "lucide-react";

import PieChartCard from "@/components/PieChartCard";


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

const PeopleStatistics = () => {
  console.log('das');
  return (
    <div className="p-6">
      <div className="flex flex-col">
        <div className="flex">
          <b>NIVO</b>
          <ChevronDown className="text-gray-500" />
        </div>
        <div className="grid grid-cols-3 gap-6 fill mb-6 w-full">
          <PieChartCard data={data} />
        </div>
      </div>
    </div>
  )
}

export default PeopleStatistics;
