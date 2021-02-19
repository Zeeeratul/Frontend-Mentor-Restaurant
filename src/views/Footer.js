/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {ReactComponent as Logo} from '../assets/logo.svg'
import { H3 } from '../components/Typos'

function Footer() {
    return (
        <footer
            css={theme => ({
                backgroundColor: theme.colors.primary.gray,
                padding: '78px 165px',
                display: 'flex',


                'h3': {
                    fontWeight: 400,
                    margin: 0
                },
                'h3:first-of-type': {
                    marginTop: 40,
                    marginBottom: 32
                },
                '@media (min-width: 376px) and (max-width: 768px)': {
                    padding: '64px 40px',
                },
                '@media (max-width: 375px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '80px 24px',
                },
            })}
        >
            <Logo 
                css={{
                }} 
            />
            <div>
                <H3 variant="light">
                    Marthwaite, Sedbergh<br />
                    Cumbria<br />
                    +00 44 123 4567<br />
                </H3>
                <H3 variant="light">
                    Open Times<br />
                    Mon - Fri: 09:00 AM - 10:00 PM<br />
                    Sat - Sun: 09:00 AM - 11:30 PM<br />
                </H3>
            </div>
        </footer>
    )
}

export default Footer