/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { useEffect, useState } from 'react'
import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import {ReactComponent as PatternTopLeftCurve} from '../assets/patterns/pattern-curve-top-left.svg'
import {ReactComponent as PatternTopRightCurve} from '../assets/patterns/pattern-curve-top-right.svg'
import EnjoyablePlaceDesktop from '../assets/homepage/enjoyable-place-desktop.jpg'
import EnjoyablePlaceTablet from '../assets/homepage/enjoyable-place-tablet.jpg'
import EnjoyablePlaceMobile from '../assets/homepage/enjoyable-place-mobile.jpg'
import LocallySourceDesktop from '../assets/homepage/locally-sourced-desktop.jpg'
import LocallySourceTablet from '../assets/homepage/locally-sourced-tablet.jpg'
import LocallySourceMobile from '../assets/homepage/locally-sourced-mobile.jpg'
import { H2, Body1 } from '../components/Typos'

function Description() {

    return (
        <section
            css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px 24px',
                textAlign: 'center',
                'img': {
                    display: 'none',
                },
                '.mobile': {
                    display: 'block',
                    maxWidth: 327
                },
                '.mobile.enjoyable-place': {
                    marginTop: -70
                },
                '.container': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 2,
                    paddingBottom: 80,
                },
                '.container__text': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                'svg': {
                    marginTop: 48,
                },
                'h2': {
                    marginTop: 32,
                    marginBottom: 16,
                },
                'p': {
                    margin: 0
                },
                // Tablet Style
                '@media (min-width: 768px) and (max-width: 1439px)': {
                    padding: '0px 98px 0px 98px',
                    '.mobile': {
                        display: 'none',
                    },
                    '.tablet': {
                        display: 'block',
                    },
                    'svg': {
                        marginTop: 56,
                    },
                    'h2, p': {
                        maxWidth: 457
                    },
                    '.container': {
                        paddingBottom: 120
                    },
                    '.tablet.enjoyable-place': {
                        marginTop: -96
                    },
                },
                // Desktop style
                '@media (min-width: 1440px)': {
                    padding: '0px 165px',
                    '.mobile': {
                        display: 'none',
                    },
                    '.desktop': {
                        display: 'block',
                        marginBottom: -70
                    },
                    '.desktop.enjoyable-place': {
                        marginTop: -70,
                        marginBottom: 0
                    },
                    '.container': {
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: 120,
                    },
                    '.container:last-of-type': {
                        flexDirection: 'row-reverse',
                        paddingBottom: 0,
                    },
                    '.container__text': {
                        maxWidth: 445,
                        textAlign: 'left',
                        alignItems: 'flex-start',
                    },
                    'h2': {
                        marginTop: 48,
                        marginBottom: 16
                    }
                },
                
            }}
        >
            <div className="container">
                <img className="desktop enjoyable-place" src={EnjoyablePlaceDesktop} alt="enjoyable-place-dekstop" />
                <img className="tablet enjoyable-place" src={EnjoyablePlaceTablet} alt="enjoyable-place-tablet" />
                <img className="mobile enjoyable-place" src={EnjoyablePlaceMobile} alt="enjoyable-place-mobile" />
                <div className="container__text">
                    <DivideLine />
                    <H2 variant="dark" className="title">Enjoyable place for all the family</H2>
                    <Body1 variant="dark" className="body">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</Body1>
                </div>
            </div>

            <div className="container">
                <img className="desktop" src={LocallySourceDesktop} alt="locally-sourced-dekstop" />
                <img className="tablet" src={LocallySourceTablet} alt="locally-sourced-tablet" />
                <img className="mobile" src={LocallySourceMobile} alt="locally-sourced-mobile" />
                <div className="container__text">
                    <DivideLine />
                    <H2 variant="dark" className="title">The most locally sourced food</H2>
                    <Body1 variant="dark" className="body">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</Body1>
                </div>
            </div>
        </section>
    )
}

export default Description