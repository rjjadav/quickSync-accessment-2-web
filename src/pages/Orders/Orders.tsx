import { Card, CardActions, Chip } from "@mui/material";
import { useFetchOrder } from "../../hooks/useFetchOrders";
import { useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';

type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
    city: string;
    state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
];

const OrdersPage = () => {
    const { data, isLoading } = useFetchOrder();
    console.log(data);

    const columns = useMemo(() => [
        {
            accessorKey: 'title',
            header: 'Name',
            Cell: ({ renderedCellValue, row }: any) => {
                return <div className="flex flex-row gap-4 items-center">
                    <img src={row.original.thumbnail} className="w-[60px]" />
                    <div className="flex flex-col">
                        <span>{renderedCellValue}</span>
                    </div>
                </div>
            }
        },
        {
            accessorKey: 'brand',
            header: 'Brand',
            size: 100
        },
        {
            accessorKey: 'category',
            header: 'Category',
            size: 100
        },
        {
            accessorKey: 'price',
            header: 'Price',
            size: 100
        },
        {
            accessorKey: 'discountPercentage',
            header: 'Discount',
            Cell: ({ renderedCellValue }: any) => {
                return <span>{renderedCellValue}%</span>
            },
            size: 100
        },
        {
            accessorKey: 'dimensions',
            header: 'Dimensions',
            Cell: ({ renderedCellValue }: any) => {
                return <span>{renderedCellValue.width} * {renderedCellValue.height} * {renderedCellValue.depth}</span>
            }
        },
        {
            accessorKey: 'availabilityStatus',
            header: 'Status',
            Cell: ({ renderedCellValue, row }: any) => {
                return <div>
                    {renderedCellValue == 'In Stock' && <Chip label="In Stock" color="primary" size="small" />}
                    {renderedCellValue == 'Low Stock' && <Chip label="Low Stock" color="warning" size="small" />}
                    {renderedCellValue == 'Out of Stock' && <Chip label="Out of Stock" color="error" size="small" />}
                </div>

            }
        },
    ], [])


    const table = useMaterialReactTable({
        columns,
        data: data?.products || [],
        state: {
            isLoading
        }
    })

    return <div className="flex flex-col gap-4 w-full">
        <span className="text-xl font-bold">Products</span>
        <div className="pr-8">
            <MaterialReactTable table={table} />
        </div>
    </div>
}

export default OrdersPage;