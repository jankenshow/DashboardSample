import { FC } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

type ChartProps = {
    title: string
    data: singleData[]
    dataKey: string
    grid: boolean
}

type singleData = {
    // [datatitle: string]: number
    name: string
    'Active User': number
}

const Chart: FC<ChartProps> = ({ title, data, dataKey, grid }) => {
    return (
        <div className="chart">
            <span className="chartTitle">{title}</span>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    margin={{ top: 20, left: 0, right: 0, bottom: 0 }}
                    data={data}
                >
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && (
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
