import '../../css/home.scss'
import React from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import WidgetSmall from '../components/WidgetSmall'
import WidgetLarge from '../components/WidgetLarge'
import { userData } from '../data/dummyData'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart
                title="User Analytics"
                data={userData}
                dataKey="Active User"
                grid={true}
            />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
