/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import {ReactComponent as PatternLines} from '../assets/patterns/pattern-lines.svg'
import {ReactComponent as PatternTopRightCurve} from '../assets/patterns/pattern-curve-top-right.svg'
import FamilyDesktop from '../assets/homepage/family-gathering-desktop.jpg'
import FamilyTablet from '../assets/homepage/family-gathering-tablet.jpg'
import FamilyMobile from '../assets/homepage/family-gathering-mobile.jpg'
import SocialDesktop from '../assets/homepage/social-events-desktop.jpg'
import SocialTablet from '../assets/homepage/social-events-tablet.jpg'
import SocialMobile from '../assets/homepage/social-events-mobile.jpg'
import SpecialDesktop from '../assets/homepage/special-events-desktop.jpg'
import SpecialTablet from '../assets/homepage/special-events-tablet.jpg'
import SpecialMobile from '../assets/homepage/special-events-mobile.jpg'
import { H2, Body1 } from '../components/Typos'
import Button from '../components/Button'

const Datas = {
    family: {
        desktop: FamilyDesktop,
        tablet: FamilyTablet,
        mobile: FamilyMobile,
        title: 'Family Gathering',
        text: `We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.`
    },
    social: {
        desktop: SocialDesktop,
        tablet: SocialTablet,
        mobile: SocialMobile,
        title: 'Social Events',
        text: `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
        parties. We’ll work with you to make your event a hit with everyone.`
    },
    special: {
        desktop: SpecialDesktop,
        tablet: SpecialTablet,
        mobile: SpecialMobile,
        title: 'Special Events',
        text: `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
        We’ll be sure to mark your special date with an unforgettable meal.`
    },
}

function Family() {
    const [themeDisplayed, setThemeDisplayed] = useState('family')

    const handleClickDisplayImage = (image) => {
        setThemeDisplayed(image)
    }

    return (
        <section
            css={theme => ({
                padding: '80px 24px 124px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                'svg': {
                    display: 'none'
                },

                '.links': {
                    marginTop: 48,
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    'button': {
                        letterSpacing: '2px',
                        lineHeight: '28px',
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: 'Spartan, sans-serif',
                        textAlign: 'center',
                        background: 'transparent',
                        border: 'none',
                        opacity: 0.5,
                        marginBottom: 16,
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        '&.active': {
                            opacity: 1,
                            '&::after': {
                                content: '""',
                                borderBottom: `1px solid ${theme.colors.primary.gold}`,
                                width: 48,
                                position: 'absolute',
                                bottom: 0
                            }
                        },
                    }
                },
                'h2': {
                    marginTop: 0,
                    marginBottom: 16,
                },
                'p': {
                    marginBottom: 32,
                },
                'img': {
                    display: "none",
                },
                'img.mobile': {
                    display: 'block'
                },
                '@media (min-width: 768px) and (max-width: 1439px)': {
                    padding: '120px 40px',
                    'img.tablet': {
                        display: 'block'
                    },
                    'img.mobile': {
                        display: 'none'
                    },
                    '.pattern-top-right': {
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: -500,
                        zIndex: -1,
                    },
                    '.pattern-lines': {
                        display: 'block',
                        position: 'absolute',
                        top: 82,
                        left: 72
                    },
                    '.links': {
                        flexDirection: 'row',
                        marginBottom: 40,
                        width: '100%',
                        justifyContent: 'space-between'
                    }
                },
                '@media (min-width: 1440px)': {
                    padding: '160px 165px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    columnGap: '150px',
                    'img.desktop': {
                        display: "block",
                        gridRow: '1 / 3'
                    },
                    'img.mobile': {
                        display: 'none'
                    },
                    '.pattern-top-right': {
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: -360,
                        zIndex: -1,
                    },
                    '.pattern-lines': {
                        display: 'block',
                        position: 'absolute',
                        top: 122,
                        left: 125
                    },
                    '.links': {
                        gridColumn: '2 / 3',
                        gridRow: '2 / 3',
                        alignItems: 'flex-start',
                        'button': {
                            marginBottom: 12,
                            '&.active': {
                                opacity: 1,
                                '&::after': {
                                    content: '""',
                                    height: 1,
                                    width: 95,
                                    background: theme.colors.primary.gold,
                                    borderBottom: 'none',
                                    position: 'absolute',
                                    bottom: 15,
                                    left: -125,
                                    zIndex: -1
                                }
                            },
                        }
                    },
                    '.description': {
                        textAlign: 'left'
                    }
                }
            })}
        >   
            <PatternTopRightCurve className="pattern-top-right" />
            <PatternLines className="pattern-lines" />
            <img src={Datas[themeDisplayed].desktop} className="desktop" alt="desktop" />
            <img src={Datas[themeDisplayed].tablet} className="tablet" alt="tablet" />
            <img src={Datas[themeDisplayed].mobile} className="mobile" alt="mobile" />
            <div className="links">
                <button 
                    onClick={() => handleClickDisplayImage('family')} 
                    className={themeDisplayed === 'family' ? 'active' : ''}
                >
                    Family Gathering
                </button>
                <button 
                    onClick={() => handleClickDisplayImage('special')}
                    className={themeDisplayed === 'special' ? 'active' : ''}
                >
                    Special Events
                </button>
                <button 
                    onClick={() => handleClickDisplayImage('social')}
                    className={themeDisplayed === 'social' ? 'active' : ''}
                >
                    Social Events
                </button>
            </div>
            <div className="description">
                <H2 variant="dark">{Datas[themeDisplayed].title}</H2>
                <Body1 variant="dark">{Datas[themeDisplayed].text}</Body1>
                <Button variant="dark">Book a table</Button>
            </div>
        </section>

    )
}

export default Family
