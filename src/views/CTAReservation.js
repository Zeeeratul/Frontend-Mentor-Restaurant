/** @jsxImportSource @emotion/react */
import BackgroundPizzaDesktop from '../assets/homepage/ready-bg-desktop.jpg'
import BackgroundPizzaTablet from '../assets/homepage/ready-bg-tablet.jpg'
import BackgroundPizzaMobile from '../assets/homepage/ready-bg-mobile.jpg'
import Button from '../components/Button'
import { H2 } from '../components/Typos'

function CTAReservation() {
    return (
        <section
            css={{
                padding: '80px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: `url(${BackgroundPizzaMobile})`,
                // backgroundRepeat: 'no-repeat',
                'h2': {
                    marginTop: 0,
                    marginBottom: 24,
                },
                // Tablet style
                '@media (min-width: 375px)': {
                    padding: 64,
                    backgroundImage: `url(${BackgroundPizzaTablet})`,
                },
                // Desktop style
                '@media (min-width: 768px)': {
                    backgroundImage: `url(${BackgroundPizzaDesktop})`,
                },
                '@media (min-width: 1220px)': {
                    backgroundImage: `url(${BackgroundPizzaDesktop})`,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '88px 165px',
                    'h2': {
                        margin: 0
                    }
                },
            }}
        >
            <H2 variant="light">Ready to make a reservation?</H2>
            <Button variant="light">Book a table</Button>
        </section>
    )
}

export default CTAReservation