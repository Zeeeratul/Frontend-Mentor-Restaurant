/** @jsxImportSource @emotion/react */
import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import SalmonDesktop from '../assets/homepage/salmon-desktop-tablet.jpg'
import BeefDesktop from '../assets/homepage/beef-desktop-tablet.jpg'
import ChocolateDesktop from '../assets/homepage/chocolate-desktop-tablet.jpg'
import Button from '../components/Button'
// import { SubTitle} from '../components/Typos'

import { useHistory } from "react-router-dom"

function MenuHighlights() {
    const history = useHistory()

    return (
        <section
            css={{
                height: 441,
                padding: '200px 165px 120px 165px',
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
                <div
                    css={{
                        maxWidth: '445px',
                        'h3': {
                            color: '#FFFFFF',
                            fontSize: 40,
                            lineHeight: '56px',
                            fontWeight: 'bold',
                            letterSpacing: '-0.5px',
                            marginTop: 55,
                            marginBottom: 16
                        },
                        'p': {
                            fontSize: 18,
                            lineHeight: '30px',
                            letterSpacing: '-0.225px',
                        },
                        'svg': {
                            position: 'absolute'
                        }
                    }}
                >
                    <DivideLine />
                    <h3>A few highlights from our menu</h3>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
                    Our menu is revamped every season.</p>
                </div>

                <div>
                    <div
                        id="salmon"
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: 22,
                            borderBottom: '1px solid rgba(255, 255, 255, 0.15);',
                        }}
                    >
                        <div
                            css={{
                                marginRight: 62,
                                position: 'relative',
                                zIndex: 1,
                                'img': {
                                    width: 128,
                                    height: 96,
                                },
                                'svg': {
                                    position: 'absolute',
                                    top: 18,
                                    left: 89,
                                    zIndex: -1
                                }
                            }}
                        >
                            <img alt="salmon" src={SalmonDesktop} />
                            <DivideLine />
                        </div>
                        <div
                            css={{
                                maxWidth: 350,
                                'h6': {
                                    fontSize: 18,
                                    lineHeight: '30px',
                                    letterSpacing: '-0.225px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                },
                                'p': {
                                    fontSize: 15,
                                    lineHeight: '28px',
                                    letterSpacing: '-0.1875px',
                                    margin: 0,
                                },
                            }}
                        >
                            <h6>Seared Salmon Fillet</h6>
                            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                        </div>
                    </div>

                    <div
                        id="beef"
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: 22,
                            paddingTop: 24,
                            borderBottom: '1px solid rgba(255, 255, 255, 0.15);',
                        }}
                    >
                        <div
                            css={{
                                marginRight: 62,
                                position: 'relative',
                                zIndex: 1,
                                'img': {
                                    width: 128,
                                    height: 96,
                                },
                                'svg': {
                                    position: 'absolute',
                                    top: 18,
                                    left: 89,
                                    zIndex: -1
                                }
                            }}
                        >
                            <img alt="beef" src={BeefDesktop} />
                            <DivideLine />
                        </div>
                        <div
                            css={{
                                maxWidth: 350,
                                'h6': {
                                    fontSize: 18,
                                    lineHeight: '30px',
                                    letterSpacing: '-0.225px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                },
                                'p': {
                                    fontSize: 15,
                                    lineHeight: '28px',
                                    letterSpacing: '-0.1875px',
                                    margin: 0,
                                },
                            }}
                        >
                            <h6>Rosemary Filet Mignon</h6>
                            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                        </div>
                    </div>
                    <div
                        id="chocolate"
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: 22,
                            paddingTop: 24,
                        }}
                    >
                        <div
                            css={{
                                marginRight: 62,
                                position: 'relative',
                                zIndex: 1,
                                'img': {
                                    width: 128,
                                    height: 96,
                                },
                                'svg': {
                                    position: 'absolute',
                                    top: 18,
                                    left: 89,
                                    zIndex: -1
                                }
                            }}
                        >
                            <img alt="chocolate" src={ChocolateDesktop} />
                            <DivideLine />
                        </div>
                        <div
                            css={{
                                maxWidth: 350,
                                'h6': {
                                    fontSize: 18,
                                    lineHeight: '30px',
                                    letterSpacing: '-0.225px',
                                    fontWeight: 'bold',
                                    margin: 0,
                                },
                                'p': {
                                    fontSize: 15,
                                    lineHeight: '28px',
                                    letterSpacing: '-0.1875px',
                                    margin: 0,
                                },
                            }}
                        >
                            <h6>Summer Fruit Chocolate Mousse</h6>
                            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default MenuHighlights