
import { Box } from '@mui/material'
import NavBar from '../navbar/NavBar'
import HeroSection from '../herosection/HeroSection'
import MainCard from '../card/MainCard'

const Home = () => {
    return (
        <Box>
            <nav>
                <NavBar />
            </nav>
            <section>
                <HeroSection />
            </section>
            <section>
                <MainCard />
            </section>
        </Box>
    )
}

export default Home
