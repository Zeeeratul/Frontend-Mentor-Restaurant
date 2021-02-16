/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'
import PizzaDesktop from '../assets/homepage/hero-bg-desktop.jpg'
import Button from '../components/Button'
import { useHistory } from "react-router-dom"
import Landing from '../views/Landing'
import MenuHighlights from '../views/MenuHighlights'
import CTAReservation from '../views/CTAReservation'
import Footer from '../views/Footer'

function Home() {
    const history = useHistory()
    const handleClick = () => history.push('/booking')

    return (
        <div
            css={{
                width: '100%'
            }}
        >
            <Landing />
            <MenuHighlights />
            <CTAReservation />
            <Footer />
        </div>
    )
}

export default Home