import React from "react"
import TitleH1 from "@/components/layouts/h1"
import DashboardCard from "@/components/dashboard/allDashboardCards"
import InfoCard from "@/components/dashboard/infoCard"
import Chart from "@/components/dashboard/chart"
import AllTopSales from "@/components/dashboard/topSales"


export default function Home() {

  return (
    <main className="flex flex-col justify-between h-full  gap-10 py-4">
      <TitleH1>
        Dashboard
      </TitleH1>
      <AllTopSales />
      <DashboardCard />
      <div className="flex flex-col lg:flex-row gap-6 w-full h-full lg:h-64  items-center justify-between ">
        <Chart />
        <InfoCard />
      </div>
    </main>
  )
}
