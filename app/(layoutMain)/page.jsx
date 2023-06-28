import React from "react"
import TitleH1 from "@/components/layouts/h1"
import DashboardCard from "@/components/home/dashboardCard"
import InfoCard from "@/components/home/infoCard"
import Chart from "@/components/home/chart"
export default function Home() {
  return (
    <main className="flex flex-col justify-between border-2 h-full gap-20 py-4 md:py-8">
      <TitleH1>
        Dashboard
      </TitleH1>
      <DashboardCard />
      <div className="flex flex-col lg:flex-row w-full  h-full items-center justify-between">
        <Chart />
        <InfoCard />
      </div>
    </main>
  )
}
