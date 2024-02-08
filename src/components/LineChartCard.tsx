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
            axisBottom={null}
            axisLeft={null}
            colors={["#34AFF7"]}
            enablePoints={false}
            enableGridX={false}
            enableGridY={false}
            role="application"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
