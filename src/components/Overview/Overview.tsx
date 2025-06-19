import { AttachMoney, ShoppingBagOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import LineChartComponent from "../LineChart/LineChart";
import { OverviewChartData } from "../../constants/chartData.constant";


const Overview = () => {
    const sampleData: any = {
        monthly: {
            totalProfit: {
                amount: '83,671.21',
                change: 3.5
            },
            totalOrder: {
                amount: '5178',
                change: -5.0
            },
            overallProductsView: {
                value: '2.1M',
                change: 9.6
            }
        },
        weekly: {
            totalProfit: {
                amount: '14,900.51',
                change: 12.6
            },
            totalOrder: {
                amount: '1289',
                change: 9.2
            },
            overallProductsView: {
                value: '750K',
                change: -7.1
            }
        },
        annualy: {
            totalProfit: {
                amount: '518,497.35',
                change: 6.9
            },
            totalOrder: {
                amount: '31,769',
                change: 3.8
            },
            overallProductsView: {
                value: '22.7M',
                change: 7.1
            }
        }

    }

    const [duration, setDuration] = useState('weekly');
    const [selectedCard, setSelectedCard] = useState('totalProfit');

    const handleChange = (event: any) => {
        setDuration(event.target.value);
    }
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <span className="text-lg font-bold">Overview</span>
                        <FormControl size="small">
                            <InputLabel id="demo-select-small-label">Filter</InputLabel>
                            <Select value={duration} label="Filter" onChange={handleChange}>
                                <MenuItem value={'weekly'}>Weekly</MenuItem>
                                <MenuItem value={'monthly'}>Monthly</MenuItem>
                                <MenuItem value={'annualy'}>Annualy</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="bg-gray-100 p-4 flex flex-row justify-between rounded-lg">
                        <div className={`flex flex-col gap-4 p-4 rounded-lg text-center items-center cursor-pointer ${selectedCard === 'totalProfit' ? 'bg-white shadow-md' : ''}`} onClick={() => setSelectedCard('totalProfit')}>
                            <div className="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-sky-200">
                                <AttachMoney />
                            </div>
                            <div>
                                <div className="mb-4 text-sm font-semibold">Total profit</div>
                                <div className="mb-1 text-2xl font-bold"><span>${sampleData[duration].totalProfit.amount}</span></div>
                                <div className="inline-flex items-center flex-wrap gap-1">
                                    <span className={`flex items-center text-green-500 text-sm font-bold ${sampleData[duration].totalProfit.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        <span>{sampleData[duration].totalProfit.change}%</span>
                                    </span>
                                    <span className="text-sm">from last month</span>
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 p-4 rounded-lg text-center items-center cursor-pointer ${selectedCard === 'totalOrder' ? 'bg-white shadow-md' : ''}`} onClick={() => setSelectedCard('totalOrder')}>
                            <div className="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-purple-200">
                                <ShoppingBagOutlined />
                            </div>
                            <div>
                                <div className="mb-4 text-sm font-semibold">Total Order</div>
                                <div className="mb-1 text-2xl font-bold"><span>${sampleData[duration].totalOrder.amount}</span></div>
                                <div className="inline-flex items-center flex-wrap gap-1">
                                    <span className={`flex items-center text-green-500 text-sm font-bold ${sampleData[duration].totalOrder.change < 0 ? 'text-red-500' : 'text-gren-500'}`}>
                                        <span>{sampleData[duration].totalOrder.change}%</span>
                                    </span>
                                    <span className="text-sm">from last month</span>
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 p-4 rounded-lg text-center items-center cursor-pointer ${selectedCard === 'totalViews' ? 'bg-white shadow-md' : ''}`} onClick={() => setSelectedCard('totalViews')}>
                            <div className="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-emerald-200">
                                <VisibilityOutlined />
                            </div>
                            <div>
                                <div className="mb-4 text-sm font-semibold">Total Products View</div>
                                <div className="mb-1 text-2xl font-bold"><span>{sampleData[duration].overallProductsView.value}</span></div>
                                <div className="inline-flex items-center flex-wrap gap-1">
                                    <span className={`flex items-center text-green-500 text-sm font-bold ${sampleData[duration].overallProductsView.change < 0 ? 'text-red-500' : 'text-gren-500'}`}>
                                        <span>{sampleData[duration].overallProductsView.change}%</span>
                                    </span>
                                    <span className="text-sm">from last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <LineChartComponent data={OverviewChartData[selectedCard][duration]}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Overview;