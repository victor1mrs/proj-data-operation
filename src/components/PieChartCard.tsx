"use client"

import { PieTooltipProps as TooltipPros, ResponsivePie } from "@nivo/pie";

import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

type PieChartCardProps = {
  data: {
    id: string;
    label: string;
    value: number;
  }[];
};

type PieTooltipProps = 
  TooltipPros<{
    id: string;
    label: string;
    value: number;
  }> & {
  totalValue: number;
}

const valuePercentage = (value: number, totalValue: number) => (value / totalValue * 100).toFixed(2);

const pieChartColors = ['#D1FFD9', '#FED7AD', '#FFB8B8', '#B0DCFF', '#F6D1FF', '#FFEDAD'];

const PieTooltip = (data: PieTooltipProps) => {
  return (
  <div className="text-xs bg-[#2D3648] text-[#FFF] py-2 px-4 rounded">
    <div className="flex items-center">
      <div className="rounded-xl w-3 h-3" style={{ backgroundColor: data.datum.color }} />
      <p className="pl-2">{data.datum.label}</p>
    </div>
    <p className="opacity-60">{data.datum.value} personas</p>
    <p className="opacity-60">{valuePercentage(data.datum.value, data.totalValue)} %</p>
  </div>);
};


const PieChartCard = (
  { data }: PieChartCardProps
) => {
  let totalValue = 0;
  data.forEach((value) => totalValue += value.value);

  return (
    <div className="flex flex-col gap-3">
      {data.length > 0 ? (
        <>
        <Card className="border-0">
          <CardContent className="flex justify-center">
            <div className="h-96 w-2/3">
              <ResponsivePie
                data={data}
                margin={{ right: 80, left: 80 }}
                innerRadius={0.4}
                padAngle={0.7}
                colors={pieChartColors}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                tooltip={(point) => <PieTooltip datum={point.datum} totalValue={totalValue} />}
                legends={[
                  {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    itemsSpacing: 15,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#2D3648',
                    itemOpacity: 1,
                    symbolSize: 15,
                    symbolShape: 'circle',
                    translateX: 80
                  },
                ]}
              />
            </div>
          </CardContent>
        </Card>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>TECH STACK</TableHead>
                <TableHead className="text-right">%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.toSorted((a, b) => b.value - a.value).map((legend, index) => {
                return (
                  <TableRow key={legend.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className="rounded-xl w-3 h-3" style={{ backgroundColor: pieChartColors[index % pieChartColors.length] }} />
                        <p className="pl-2">{legend.label}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{(valuePercentage(legend.value, totalValue))}%</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
        </>
      ) : <p>NO CONTENT AVAILABLE</p>
      }
    </div>
  )
}

export default PieChartCard;
