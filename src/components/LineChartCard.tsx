import { ResponsiveLine } from "@nivo/line";
import { CardContent, Card } from "@/components/ui/card";

type LineChartCardProps = {
  title: string;
  mainInfo: string;
  data: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
};

const LineChartCard = ({ title, mainInfo, data }: LineChartCardProps) => {
  return (
    <Card className="w-full col-span-1">
      <CardContent className="w-full">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-3xl font-bold mb-4">{mainInfo}</p>
        <div className="w-full h-[200px]">
          <ResponsiveLine
            data={data}
            curve="natural"
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
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
