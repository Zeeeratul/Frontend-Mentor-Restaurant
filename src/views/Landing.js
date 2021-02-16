/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'
import PizzaDesktop from '../assets/homepage/hero-bg-desktop.jpg'
import Button from '../components/Button'
import { useHistory } from "react-router-dom"

function Landing() {
    const history = useHistory()
    const handleClick = () => history.push('/booking')

    return (
        <section
            css={{
                height: 820,
                paddingLeft: 165,
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: `url(${PizzaDesktop})`
            }}
        >
            <Logo
                css={{
                    marginTop: 65,
                    marginBottom: 153,
                }}
            />
            <div
                css={{
                    height: 364,
                    width: 523,
                    'h1': {
                        fontWeight: 300,
                        fontSize: 64,
                        lineHeight: '72px',
                        letterSpacing: '-0.8px',
                        margin: "0px 0px 24px 0px"
                    },
                    'p': {
                        fontWeight: 400,
                        width: 445,
                        fontSize: 18,
                        lineHeight: '30px',
                        letterSpacing: '-0.225px',
                        margin: "0px 0px 42px 0px"
                    }
                }}
            >
                <h1>Exquisite dining since 1989</h1>
                <p>
                    Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
                    the comfort of our farmhouse.
                </p>
                <Button onClick={handleClick} variant="light">BOOK A TABLE</Button>
            </div>
        </section>
    )
}

export default Landing