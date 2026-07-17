import React from 'react'
import DisneyNavbar from '../src/Components/DisneyNavbar'
import DisneyHeroCarousel from '../src/Components/DisneyHeroCarousel'
import DisneyProductionHousesSlider from './Components/DisneyProductionHousesSlider'
import RecommendedForYou from './Components/RecommendedForYou'
import GenresComponent from './Components/GenresComponent'
import ContinueWatchingComponent from './Components/ContinueWatchingComponent'
import TrendingNowComponent from './Components/TrendingNowComponent'
import DisneyPlusFooter from './Components/DisneyPlusFooter'

function App() {
  return (
    <>
      <DisneyNavbar />
      <DisneyHeroCarousel />
      <DisneyProductionHousesSlider />
      <ContinueWatchingComponent />
      <RecommendedForYou />
      <TrendingNowComponent />
      <GenresComponent />
      <DisneyPlusFooter />
    </>
  )
}

export default App
