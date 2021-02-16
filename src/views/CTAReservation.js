/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'
import BackgroundPizza from '../assets/homepage/ready-bg-desktop.jpg'
import Button from '../components/Button'

function CTAReservation() {
    return (
        <div
            css={{
                height: 240,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0px 165px',
                backgroundImage: `url(${BackgroundPizza})`,
                'h3': {
                    color: '#FFFFFF',
                    fontSize: 40,
                    lineHeight: '56px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.5px'
                }
            }}
        >
            <h3>Ready to make a reservation?</h3>
            <Button variant="light">Book a table</Button>
        </div>
    )
}

export default CTAReservation