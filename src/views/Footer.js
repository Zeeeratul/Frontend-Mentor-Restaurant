/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'
import { H3 } from '../components/Typos'

function Footer() {
    return (
        <footer
            css={theme => ({
                backgroundColor: theme.colors.primary.gray,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '80px 24px',
                'h3': {
                    fontWeight: 'normal',
                    margin: 0
                },
                'h3:first-of-type': {
                    marginTop: 40,
                    marginBottom: 32
                },
                // Tablet style
                '@media (min-width: 768px)': {
                    padding: '64px 40px',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    'svg': {
                        marginRight: 130
                    },
                    'div': {
                        display: 'flex',
                        flexDirection: 'row',
                        flexGrow: 1,
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                    },
                    'h3:first-of-type': {
                        marginTop: 0,
                        marginBottom: 32
                    },
                },
                // Desktop style
                '@media (min-width: 1440px)': {
                    padding: '78px 165px'
                },
            })}
        >
            <Logo />
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