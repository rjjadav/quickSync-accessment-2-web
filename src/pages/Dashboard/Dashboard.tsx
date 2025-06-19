import { Card, CardContent } from "@mui/material";
import LineChartComponent from "../../components/LineChart/LineChart";
import MapComponent from "../../components/MapChart/MapChart/MapChart";
import Overview from "../../components/Overview/Overview";
import SalesTarget from "../../components/SalesTarget/SalesTarget";

const DashboardPage = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <div className="w-2/3">
                    <Overview />
                </div>
                <div className="w-1/3">
                    <SalesTarget />
                </div>
            </div>

            <Card variant="outlined">
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <span className="text-xl font-bold">State wise Orders</span>
                        <MapComponent />
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}

export default DashboardPage;