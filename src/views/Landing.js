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
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '232px 24px 152px 24px',
                backgroundColor: 'black',
                '&::before': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    content: '""',
                    width: '100%',
                    height: '224px',
                    backgroundPosition: 'top',
                    backgroundColor: '#111111',
                    backgroundImage: `url(${PizzaMobile})`,
                    backgroundRepeat: 'no-repeat',
                },
                '.logo': {
                    width: 82.4,
                },
                '.title': {
                    marginTop: 32,
                    marginBottom: 12,
                },
                '.subtitle': {
                    marginTop: 12,
                    marginBottom: 32,
                },

                '@media (min-width: 768px) and (max-width: 1439px)': {
                    padding: '374px 40px 216px 40px',
                    '.logo': {
                        width: 103
                    },
                    '.title': {
                        width: 400
                    },
                    '.subtitle': {
                        width: 573,
                        marginBottom: 24,
                    },
                    '&::before': {
                        height: '372px',
                        backgroundImage: `url(${PizzaTablet})`,
                    },
                },
                // Desktop style
                '@media (min-width: 1440px)': {
                    alignItems: 'flex-start',
                    padding: '65px 752px 198px 165px',
                    textAlign: 'left',
                    '> *': {
                        zIndex: 1,
                    },
                    '.logo': {
                        width: 103
                    },
                    '.title': {
                        maxWidth: 524,
                        marginTop: 153,
                        marginBottom: 12,
                    },
                    '.subtitle': {
                        maxWidth: 445,
                        marginTop: 12,
                        marginBottom: 42,
                    },
                    '&::before': {
                        zIndex: 0,
                        position: 'absolute',
                        content: '""',
                        height: '100%',
                        backgroundPosition: 'right',
                        backgroundColor: '#111111',
                        backgroundImage: `url(${PizzaDesktop})`,
                        backgroundRepeat: 'no-repeat',
                    },
                },
            })}
        >
            <Logo className="logo" viewBox="0 0 103 40" />
            <H1 className="title" variant="light">Exquisite dining since 1989</H1>
            <Body1 className="subtitle" variant="light">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</Body1>
            <Button onClick={handleClick} variant="light">BOOK A TABLE</Button>
        </section>
    )
}

export default Landing