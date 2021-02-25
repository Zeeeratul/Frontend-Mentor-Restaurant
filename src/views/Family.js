/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { useEffect, useState } from 'react'
import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import {ReactComponent as PatternTopLeftCurve} from '../assets/patterns/pattern-curve-top-left.svg'
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

const Images = {
    family: {
        desktop: FamilyDesktop,
        tablet: FamilyTablet,
        mobile: FamilyMobile
    },
    social: {
        desktop: SocialDesktop,
        tablet: SocialTablet,
        mobile: SocialMobile
    },
    special: {
        desktop: SpecialDesktop,
        tablet: SpecialTablet,
        mobile: SpecialMobile
    },
}

function Family() {
    const [imageDisplayed, setImageDisplayed] = useState('family')

    const handleClickDisplayImage = (image) => {
        setImageDisplayed(image)
    }

    return (
        <section
            css={theme => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '80px 24px 124px 24px',
                textAlign: 'center',
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
                'img.desktop': {
                    display: 'block'
                },
                '@media (max-width: 768px) and (min-width: 375px)': {
                    'img.desktop': {
                        display: "none",
                    },
                    'img.tablet': {
                        display: 'block'
                    },
                    'img.mobile': {
                        display: 'none'
                    }
                },
                '@media (max-width: 375px)': {
                    'img.desktop': {
                        display: "none",
                    },
                    'img.tablet': {
                        display: 'none'
                    },
                    'img.mobile': {
                        display: 'block'
                    }
                },
            })}
        >   
            <img src={Images[imageDisplayed].desktop} className="desktop" alt="desktop" />
            <img src={Images[imageDisplayed].tablet} className="tablet" alt="tablet" />
            <img src={Images[imageDisplayed].mobile} className="mobile" alt="mobile" />
            <div className="links">
                <button 
                    onClick={() => handleClickDisplayImage('family')} 
                    className={imageDisplayed === 'family' ? 'active' : ''}
                >
                    Family Gathering
                </button>
                <button 
                    onClick={() => handleClickDisplayImage('special')}
                    className={imageDisplayed === 'special' ? 'active' : ''}
                >
                    Special Events
                </button>
                <button 
                    onClick={() => handleClickDisplayImage('social')}
                    className={imageDisplayed === 'social' ? 'active' : ''}
                >
                    Social Events
                </button>
            </div>
            <H2 variant="dark">Family Gathering</H2>
            <Body1 variant="dark">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</Body1>
            <Button variant="dark">Book a table</Button>
        </section>
    )
}

export default Family