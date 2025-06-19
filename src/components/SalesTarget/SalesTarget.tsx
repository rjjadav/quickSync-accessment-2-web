import { Card, CardContent, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import PieChartComponent from "../PieChart/PieChart";
import { ChannelRevenueChartData } from "../../constants/chartData.constant";
import { useState } from "react";

const SalesTarget = () => {
    const [duration, setDuration] = useState('weekly');

    const handleChange = (event: any) => {
        setDuration(event.target.value);
    }

    const salesTarget = 75;
    return (
        <div className="flex flex-col gap-4">
            <Card variant="outlined">
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <span className="text-xl font-bold">Sales Target</span>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col">
                                <div>
                                    <span className="text-3xl font-bold">1.5K</span>
                                    <span className="font-bold text-gray-500">/2.0K Units</span>
                                </div>
                                <div className="text-gray-500">Made this month</div>
                            </div>
                            <div style={{ width: 75 }}>
                                <CircularProgressbarWithChildren value={salesTarget} styles={buildStyles({
                                    pathColor: "#2563eb",
                                    trailColor: "#f5f5f5"
                                })}>
                                    <div className="text-lg font-bold">
                                        75%
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Channel Revenue</span>
                            <FormControl size="small">
                                <InputLabel id="demo-select-small-label">Filter</InputLabel>
                                <Select value={duration} label="Filter" onChange={handleChange}>
                                    <MenuItem value={'weekly'}>Weekly</MenuItem>
                                    <MenuItem value={'monthly'}>Monthly</MenuItem>
                                    <MenuItem value={'annualy'}>Annualy</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <PieChartComponent data={ChannelRevenueChartData[duration]} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SalesTarget;