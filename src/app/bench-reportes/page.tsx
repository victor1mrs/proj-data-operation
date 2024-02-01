import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import BarChart from "@/components/BarChart"

const BenchReports = () => {
  return (
    <div className="bg-white p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Bench</h1>
        <Button className="bg-blue-600 text-white">Download</Button>
      </div>
      <div className="mb-6">
        <Select>
          <SelectTrigger id="teams">
            <SelectValue>Teams</SelectValue>
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="qa">QA</SelectItem>
            <SelectItem value="ml_data">ML & Data</SelectItem>
            <SelectItem value="devops">DevOps</SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-4 flex space-x-2">
          <Button variant="outline">Histórico</Button>
          <Button variant="outline">Todos los equipos</Button>
          <Button variant="outline">Todos los seniorities</Button>
          <Button variant="outline">Todos los stacks</Button>
        </div>
      </div>
        <div className="h-96">
          <BarChart data={data} />
        </div>
      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">TEAM</TableHead>
              <TableHead className="w-[100px]">AGO 23</TableHead>
              <TableHead className="w-[100px]">SET 23</TableHead>
              <TableHead className="w-[100px]">OCT 23</TableHead>
              <TableHead className="w-[100px]">NOV 23</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Design</TableCell>
              <TableCell>24%</TableCell>
              <TableCell>20%</TableCell>
              <TableCell>28%</TableCell>
              <TableCell>32%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Web</TableCell>
              <TableCell>20%</TableCell>
              <TableCell>18%</TableCell>
              <TableCell>15%</TableCell>
              <TableCell>20%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mobile</TableCell>
              <TableCell>11%</TableCell>
              <TableCell>15%</TableCell>
              <TableCell>20%</TableCell>
              <TableCell>23%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">QA</TableCell>
              <TableCell>25%</TableCell>
              <TableCell>25%</TableCell>
              <TableCell>25%</TableCell>
              <TableCell>25%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ML & Data</TableCell>
              <TableCell>8%</TableCell>
              <TableCell>8%</TableCell>
              <TableCell>8%</TableCell>
              <TableCell>8%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">DevOps</TableCell>
              <TableCell>24%</TableCell>
              <TableCell>24%</TableCell>
              <TableCell>24%</TableCell>
              <TableCell>24%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default BenchReports;

const data = [
  {
    "team": "Design",
    "AGO 23": 48,
    "ago23Color": "hsl(315, 70%, 50%)",
    "SET 23": 90,
    "set23Color": "hsl(293, 70%, 50%)",
    "OCT 23": 74,
    "oct23Color": "hsl(197, 70%, 50%)",
    "NOV 23": 54,
    "nov23Color": "hsl(239, 70%, 50%)"
  },
  {
    "team": "Web",
    "AGO 23": 59,
    "ago23Color": "hsl(147, 70%, 50%)",
    "SET 23": 170,
    "set23Color": "hsl(169, 70%, 50%)",
    "OCT 23": 30,
    "oct23Color": "hsl(98, 70%, 50%)",
    "NOV 23": 172,
    "nov23Color": "hsl(257, 70%, 50%)"
  },
  {
    "team": "Mobile",
    "AGO 23": 62,
    "ago23Color": "hsl(61, 70%, 50%)",
    "SET 23": 172,
    "set23Color": "hsl(173, 70%, 50%)",
    "OCT 23": 133,
    "oct23Color": "hsl(311, 70%, 50%)",
    "NOV 23": 175,
    "nov23Color": "hsl(61, 70%, 50%)"
  },
  {
    "team": "QA",
    "AGO 23": 30,
    "ago23Color": "hsl(187, 70%, 50%)",
    "SET 23": 83,
    "set23Color": "hsl(298, 70%, 50%)",
    "OCT 23": 64,
    "oct23Color": "hsl(286, 70%, 50%)",
    "NOV 23": 23,
    "nov23Color": "hsl(13, 70%, 50%)"
  },
  {
    "team": "ML & Data",
    "AGO 23": 130,
    "ago23Color": "hsl(130, 70%, 50%)",
    "SET 23": 132,
    "set23Color": "hsl(74, 70%, 50%)",
    "OCT 23": 105,
    "oct23Color": "hsl(339, 70%, 50%)",
    "NOV 23": 174,
    "nov23Color": "hsl(106, 70%, 50%)"
  },
  {
    "team": "DevOps",
    "AGO 23": 129,
    "ago23Color": "hsl(34, 70%, 50%)",
    "SET 23": 152,
    "set23Color": "hsl(347, 70%, 50%)",
    "OCT 23": 81,
    "oct23Color": "hsl(13, 70%, 50%)",
    "NOV 23": 4,
    "nov23Color": "hsl(272, 70%, 50%)"
  }
]
