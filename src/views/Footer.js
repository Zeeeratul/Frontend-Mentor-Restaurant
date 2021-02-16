/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from '../assets/logo.svg'

function Footer() {
    return (
        <footer
            css={theme => ({
                backgroundColor: '#000000',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '78px 165px',
                'p': {
                    color: 'white',
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: '28px',
                    letterSpacing: '2px',
                    margin: 0,
                    textTransform: 'uppercase'
                }
            })}
        >
            <Logo css={{
                alignSelf: 'flex-start'
            }} />
            <p>
                Marthwaite, Sedbergh<br />
                Cumbria<br />
                +00 44 123 4567<br />
            </p>
            <p>
                Open Times<br />
                Mon - Fri: 09:00 AM - 10:00 PM<br />
                Sat - Sun: 09:00 AM - 11:30 PM<br />
            </p>
        </footer>
    )
}

export default Footer