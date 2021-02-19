/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'
import PizzaDesktop from '../assets/homepage/hero-bg-desktop.jpg'
import PizzaTablet from '../assets/homepage/hero-bg-tablet.jpg'
import PizzaMobile from '../assets/homepage/hero-bg-mobile.jpg'
import Button from '../components/Button'
import { useHistory } from "react-router-dom"
import { H1, Body1 } from '../components/Typos'


function Landing() {
    const history = useHistory()
    const handleClick = () => history.push('/booking')

    return (
        <section
            css={theme => ({
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'black',
                color: 'white',
                padding: '65px 0px 198px 165px',
                backgroundImage: `url(${PizzaDesktop})`,
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                '.title': {
                    maxWidth: 524,
                    marginTop: 154,
                    marginBottom: 12,
                    fontWeight: 300,
                    fontSize: 64,
                    lineHeight: '72px',
                    letterSpacing: -0.8
                },
                '.subtitle': {
                    maxWidth: 445,
                    marginTop: 12,
                    marginBottom: 42,
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: '30px',
                    letterSpacing: -0.225,
                },
                // Tablet and Mobile both
                '@media (max-width: 768px)': {
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                },
                // Tablet
                '@media (min-width: 376px) and (max-width: 768px)': {
                    padding: '374px 40px 216px 40px',
                    backgroundImage: `url(${PizzaTablet})`,
                    '.title': {
                        marginTop: 32,
                        marginBottom: 12,
                        fontWeight: 300,
                        fontSize: 48,
                        lineHeight: '64px',
                        letterSpacing: -0.6
                    },
                    '.subtitle': {
                        marginBottom: 24,
                    },
                },
                // Mobile
                '@media (max-width: 375px)': {
                    padding: '232px 24px 152px 24px',
                    backgroundImage: `url(${PizzaMobile})`,
                    '.logo': {
                        width: 82.4,
                    },
                    '.title': {
                        marginTop: 32,
                        marginBottom: 12,
                        fontWeight: 300,
                        fontSize: 32,
                        lineHeight: '40px',
                        letterSpacing: -0.4
                    },
                    '.subtitle': {
                        marginTop: 12,
                        marginBottom: 32,
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: '25px',
                        letterSpacing: -0.1875,
                    },
                },
            })}
        >
            <Logo className="logo" viewBox="0 0 103 40" />
            <h1 className="title" variant="light">Exquisite dining since 1989</h1>
            <p className="subtitle" variant="light">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <Button onClick={handleClick} variant="light">BOOK A TABLE</Button>
        </section>
    )
}

export default Landing