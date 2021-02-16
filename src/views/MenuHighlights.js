/** @jsxImportSource @emotion/react */
import {ReactComponent as DivideLine} from '../assets/patterns/pattern-divide.svg'
import SalmonDesktop from '../assets/homepage/salmon-desktop-tablet.jpg'
import Button from '../components/Button'
import { useHistory } from "react-router-dom"

function MenuHighlights() {
    const history = useHistory()
    const handleClick = () => history.push('/booking')

    return (
        <section
            css={{
                height: 441,
                padding: '200px 165px 120px 165px',
                backgroundColor: 'black',
                color: 'white',
                // display: 'flex',
                // flexDirection: 'column',
            }}
        >
            <div
                css={{
                    // backgroundColor: 'red',
                    width: '100%',
                    height: '100%',
                    display: 'flex'
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

                <div css={{
                    maxWidth: '540px'
                }}>
                    <div
                        css={{
                            display: 'flex',
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
                            'img': {
                                width: 128,
                                height: 96
                            }
                        }}
                    >
                        <img alt="salmon" src={SalmonDesktop} />
                        <h6>Seared Salmon Fillet</h6>
                        <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                    </div>
                    {/* <SalmonDesktop/> */}
                </div>
            </div>

        </section>
    )
}

export default MenuHighlights