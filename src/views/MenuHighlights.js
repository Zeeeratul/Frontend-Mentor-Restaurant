/** @jsxImportSource @emotion/react */
import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import SalmonDesktopTablet from '../assets/homepage/salmon-desktop-tablet.jpg'
import SalmonMobile from '../assets/homepage/salmon-mobile.jpg'
import BeefDesktopTablet from '../assets/homepage/beef-desktop-tablet.jpg'
import BeefMobile from '../assets/homepage/beef-mobile.jpg'
import ChocolateDesktopTablet from '../assets/homepage/chocolate-desktop-tablet.jpg'
import ChocolateMobile from '../assets/homepage/chocolate-mobile.jpg'
import { H3bold, H2, Body1, Body2 } from '../components/Typos'

function MenuHighlights() {

    return (
        <section
            css={{
                padding: '72px 24px',
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                'img': {
                    display: 'none'
                },
                '.mobile': {
                    display: 'block'
                },
                '.title__container': {
                    textAlign: 'center',
                    marginBottom: 64,
                    'h2': {
                        marginTop: 32,
                        marginBottom: 16
                    }
                },
                '.recipes__container': {
                    '.recipe': {
                        display: 'flex',
                        flexDirection: 'column',
                        borderBottom: '1px solid rgba(255, 255, 255, .15)',
                        marginBottom: 24,
                        'div': {
                            textAlign: 'center',
                            'h3': {
                                marginTop: 32,
                                marginBottom: 4
                            },
                            'p': {
                                marginTop: 0,
                                marginBottom: 24
                            }
                        },
                    },
                    '.recipe:last-of-type': {
                        marginBottom: 0,
                        borderBottom: 'none'
                    }
                },
                '@media (min-width: 768px)': {
                    '.mobile': {
                        display: 'none'
                    },
                    '.tablet-desktop': {
                        display: 'block'
                    },
                },
                // Tablet Style
                '@media (min-width: 768px) and (max-width: 1439px)': {
                    padding: '96px 98px 96px 98px',
                    alignItems: 'center',
                    '.title__container': {
                        marginBottom: 56,
                    },
                    '.recipes__container': {
                        width: 573,
                        '.recipe': {
                            position: 'relative',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: 24,
                            'svg': {
                                position: 'absolute',
                                top: 10,
                                left: 87,
                                zIndex: 0
                            },
                            'img': {
                                zIndex: 1,
                            },
                            'div': {
                                maxWidth: 400,
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                'h3': {
                                    marginTop: 0,
                                    marginBottom: 4
                                },
                                'p': {
                                    margin: 0,
                                }
                            },
                        },
                        '.recipe:last-of-type': {
                            marginBottom: 0,
                            borderBottom: 'none'
                        }
                    },
                },
                // Desktop style
                '@media (min-width: 1440px)': {
                    padding: '200px 165px 120px 165px',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    '.title__container': {
                        maxWidth: 445,
                        textAlign: 'left',
                        'h2': {
                            marginTop: 48,
                        }
                    },
                    '.recipes__container': {
                        marginTop: 48,
                        '.recipe': {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: 24,
                            position: 'relative',
                            'svg': {
                                position: 'absolute',
                                top: 10,
                                left: 87,
                                zIndex: 0
                            },
                            'img': {
                                zIndex: 1,
                            },
                            'div': {
                                marginLeft: 68,
                                maxWidth: 400,
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                'h3': {
                                    marginTop: 0,
                                    marginBottom: 4
                                },
                                'p': {
                                    margin: 0,
                                }
                            },
                        },
                        '.recipe:last-of-type': {
                            marginBottom: 0,
                            borderBottom: 'none'
                        }
                    },
                },
            }}
        >
                <div className="title__container">
                    <DivideLine />
                    <H2 variant="light">A few highlights from our menu</H2>
                    <Body1 variant="light">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</Body1>
                </div>

                <div className="recipes__container">
                    <div
                        className="recipe"
                        id="salmon"
                    >
                        <img className="mobile" alt="salmon" src={SalmonMobile} />
                        <img className="tablet-desktop" alt="salmon" src={SalmonDesktopTablet} />
                        <DivideLine />
                        <div>
                            <H3bold variant="light">Seared Salmon Fillet</H3bold>
                            <Body2 variant="light">Our locally sourced salmon served with a refreshing buckwheat summer salad.</Body2>
                        </div>
                    </div>
                    <div
                        id="beef"
                        className="recipe"
                    >
                        <img className="mobile" alt="beef" src={BeefMobile} />
                        <img className="tablet-desktop" alt="beef" src={BeefDesktopTablet} />
                        <DivideLine />
                        <div>
                            <H3bold variant="light">Rosemary Filet Mignon</H3bold>
                            <Body2 variant="light">Our prime beef served to your taste with a delicious choice of seasonal sides.</Body2>
                        </div>
                    </div>
                    <div
                        id="chocolate"
                        className="recipe"
                    >
                        <img className="mobile" alt="chocolate" src={ChocolateMobile} />
                        <img className="tablet-desktop" alt="chocolate" src={ChocolateDesktopTablet} />
                        <DivideLine />
                        <div>
                            <H3bold variant="light">Summer Fruit Chocolate Mousse</H3bold>
                            <Body2 variant="light">Creamy mousse combined with summer fruits and dark chocolate shavings.</Body2>
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default MenuHighlights