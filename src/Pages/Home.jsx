import { Header } from '../components/Header'
import { ExploreMenu } from '../components/ExploreMenu'
import { useState } from 'react'
import { FoodDisplay } from '../components/FoodDisplay'
import { AppDownload } from '../components/AppDownload'
export const Home = () => {
    const [category, setCategory] = useState("ALL")
  return (
    <div>
        <Header />
        <ExploreMenu category= {category} setCategory={setCategory} />
        <FoodDisplay category= {category} />
        <AppDownload />
    </div>
  )
}
