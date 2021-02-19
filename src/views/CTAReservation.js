/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import BackgroundPizzaDesktop from '../assets/homepage/ready-bg-desktop.jpg'
import BackgroundPizzaTablet from '../assets/homepage/ready-bg-tablet.jpg'
import BackgroundPizzaMobile from '../assets/homepage/ready-bg-mobile.jpg'
import Button from '../components/Button'
import { H2 } from '../components/Typos'

function CTAReservation() {
    return (
        <section
            css={{
                height: 240,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '0px 40px',
                backgroundImage: `url(${BackgroundPizzaDesktop})`,
                backgroundRepeat: 'no-repeat',
                'h2': {
                    margin: 0,
                },
                '@media (max-width: 768px)': {
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    'h2': {
                        marginBottom: 24,
                    }
                },
                '@media (min-width: 376px) and (max-width: 768px)': {
                    height: 272,
                    backgroundImage: `url(${BackgroundPizzaTablet})`,
                },
                '@media (max-width: 375px)': {
                    height: 328,
                    backgroundImage: `url(${BackgroundPizzaMobile})`,
                },
            }}
        >
            <H2 variant="light">Ready to make a reservation?</H2>
            <Button variant="light">Book a table</Button>
        </section>
    )
}

export default CTAReservation