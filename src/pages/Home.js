/** @jsxImportSource @emotion/react */
import Landing from '../views/Landing'
import Description from '../views/Description'
import MenuHighlights from '../views/MenuHighlights'
import Family from '../views/Family'
import CTAReservation from '../views/CTAReservation'
import Footer from '../views/Footer'

function Home() {

    return (
        <div
            css={{
                width: '100%',
            }}
        >
            <Landing />
            <Description />
            <MenuHighlights />
            <Family />
            <CTAReservation />
            <Footer />
        </div>
    )
}

export default Home