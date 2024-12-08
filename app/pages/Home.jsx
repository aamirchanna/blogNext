import React from 'react'
import Blogs from "@/components/Blogs";
import { InstagramFollow } from "@/components/InstagramFollow";
import ProductCards from "@/components/ProductCards";
import TopPicks from "@/components/TopPicks";
import HeroSection from "@/components/HeroSection";
import SideTable from "@/components/SideTable";
const Home = () => {
  return (
    <div>

<HeroSection/>
      <SideTable/>
      <TopPicks/>
      <ProductCards/>
      <Blogs/>
      <InstagramFollow/>
    </div>
  )
}

export default Home