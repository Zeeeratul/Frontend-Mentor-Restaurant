/** @jsxImportSource @emotion/react */
import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import SalmonDesktopTablet from '../assets/homepage/salmon-desktop-tablet.jpg'
import SalmonMobile from '../assets/homepage/salmon-mobile.jpg'
import BeefDesktopTablet from '../assets/homepage/beef-desktop-tablet.jpg'
import BeefMobile from '../assets/homepage/beef-mobile.jpg'
import ChocolateDesktopTablet from '../assets/homepage/chocolate-desktop-tablet.jpg'
import ChocolateMobile from '../assets/homepage/chocolate-mobile.jpg'
import Button from '../components/Button'
import { H3bold, H2, Body1, Body2 } from '../components/Typos'

import { useHistory } from "react-router-dom"



function MenuHighlights() {

    return (
        <section
            css={{
                padding: '72px 24px',
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
                <div
                    css={{
                        textAlign: 'center',
                        marginBottom: 64,
                        'h2': {
                            marginTop: 32,
                            marginBottom: 16
                        }
                    }}
                >
                    <DivideLine />
                    <H2 variant="light">A few highlights from our menu</H2>
                    <Body1 variant="light">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</Body1>
                </div>

                <div>
                    <div
                        id="salmon"
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderBottom: '1px solid rgba(255, 255, 255, .15)',
                            marginBottom: 24
                        }}
                    >
                        <img alt="salmon" src={SalmonMobile} />
                        <div
                            css={{
                                textAlign: 'center',
                                'h3': {
                                    marginTop: 32,
                                    marginBottom: 4
                                },
                                'p': {
                                    marginTop: 0,
                                    marginBottom: 24
                                }
                            }}
                        >
                            <H3bold variant="light">Seared Salmon Fillet</H3bold>
                            <Body2 variant="light">Our locally sourced salmon served with a refreshing buckwheat summer salad.</Body2>
                        </div>
                    </div>
                    <div
                        id="beef"
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderBottom: '1px solid rgba(255, 255, 255, .15)',
                            marginBottom: 24
                        }}
                    >
                        <img alt="beef" src={BeefMobile} />
                        <div
                            css={{
                                textAlign: 'center',
                                'h3': {
                                    marginTop: 32,
                                    marginBottom: 4
                                },
                                'p': {
                                    marginTop: 0,
                                    marginBottom: 24
                                }
                            }}
                        >
                            <H3bold variant="light">Rosemary Filet Mignon</H3bold>
                            <Body2 variant="light">Our prime beef served to your taste with a delicious choice of seasonal sides.</Body2>
                        </div>
                    </div>
                    <div
                        id="chocolate"
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img alt="chocolate" src={ChocolateMobile} />
                        <div
                            css={{
                                textAlign: 'center',
                                'h3': {
                                    marginTop: 32,
                                    marginBottom: 4
                                },
                                'p': {
                                    marginTop: 0,
                                    marginBottom: 0
                                }
                            }}
                        >
                            <H3bold variant="light">Summer Fruit Chocolate Mousse</H3bold>
                            <Body2 variant="light">Creamy mousse combined with summer fruits and dark chocolate shavings.</Body2>
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default MenuHighlights