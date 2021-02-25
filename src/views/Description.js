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

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }

function Description() {
    const { width } = useWindowSize()

    useEffect(() => {
        if (width <= 375) {
            setImage1(EnjoyablePlaceMobile)
            setImage2(LocallySourceMobile)
        }
        else if (width <=  768) {
            setImage1(EnjoyablePlaceTablet)
            setImage2(LocallySourceTablet)
        }
        else {
            setImage1(EnjoyablePlaceDesktop)
            setImage2(LocallySourceDesktop)
        }
    }, [width])

    const [image1, setImage1] = useState(EnjoyablePlaceDesktop)
    const [image2, setImage2] = useState(LocallySourceDesktop)

    return (
        <section
            css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px 24px',
                textAlign: 'center',
                '.container': {
                    zIndex: 2,
                    paddingBottom: 80,
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
            }}
        >
            <div className="container">
                <img css={{ marginTop: -70 }} src={image1} alt="enjoyable-place" />
                <div className="container__text">
                    <DivideLine />
                    <H2 variant="dark" className="title">Enjoyable place for all the family</H2>
                    <Body1 variant="dark" className="body">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</Body1>
                </div>
            </div>
            <div className="container">
                <img src={image2} alt="locally-sourced" />
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