/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import {ReactComponent as PatternTopLeftCurve} from '../assets/patterns/pattern-curve-top-left.svg'
import {ReactComponent as PatternTopRightCurve} from '../assets/patterns/pattern-curve-top-right.svg'
import EnjoyablePlace from '../assets/homepage/enjoyable-place-desktop.jpg'
import LocallySource from '../assets/homepage/locally-sourced-desktop.jpg'
import { H2, Body1 } from '../components/Typos'


function Description() {

    return (
        <section
            css={{
                height: 1441,
                backgroundColor: 'white',
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '& .container': {
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    // salignItems: 'center'
                    
                }
            }}
        >
            <PatternTopRightCurve css={{
                    position: 'absolute',
                    top: 250
                }} 
            />
            <div className="container">
                <img 
                    css={{ marginTop: -90 }} 
                    src={EnjoyablePlace} 
                    alt="enjoyable-place"
                />
                <div
                    css={{
                        maxWidth: 445,
                        marginTop: 177
                    }}
                >
                    <DivideLine />
                    <H2 css={css({
                        marginTop: 48,
                        marginBottom: 16,
                    })}>Enjoyable place for all the family</H2>
                    <Body1 css={css({
                        marginTop: 0
                    })}
                    >Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</Body1>
                </div>
            </div>


            <div className="container">
                {/* <div
                    css={{
                        maxWidth: 445,
                    }}
                >
                    <DivideLine />
                    <H2 css={css({
                        marginTop: 48,
                        marginBottom: 16,
                    })}>The most locally sourced food</H2>
                    <Body1 css={css({
                        marginTop: 0
                    })}
                    >All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</Body1>
                </div>
                <img 
                    css={{ marginBottom: -90 }} 
                    src={LocallySource} 
                    alt="locally-sourced"
                /> */}
            </div>
        </section>
    )
}

export default Description