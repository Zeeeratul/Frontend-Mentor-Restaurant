/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'
import PizzaDesktop from '../assets/homepage/hero-bg-desktop.jpg'
import Button from '../components/Button'
import { useHistory } from "react-router-dom"
import Landing from '../views/Landing'
import Description from '../views/Description'
import MenuHighlights from '../views/MenuHighlights'
import Family from '../views/Family'
import CTAReservation from '../views/CTAReservation'
import Footer from '../views/Footer'

function Home() {
    const history = useHistory()
    const handleClick = () => history.push('/booking')

    return (
        <div
            css={{
                width: '100%',
            }}
        >
            <Landing />
            {/* <Description />
            <MenuHighlights />
            <Family />
            <CTAReservation />
            <Footer /> */}
        </div>
    )
}

export default Home