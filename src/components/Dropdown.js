/** @jsxImportSource @emotion/react */
import {ReactComponent as ArrowDown} from '../assets/icons/icon-arrow.svg'
import {ReactComponent as CheckIcon} from '../assets/icons/icon-check.svg'
import { useState } from 'react'

function Dropdown({ 
    value="AM",
    action
}) {

    const [open, setOpen] = useState(false)

    return (
        <div
            css={{
                cursor: 'pointer',
                position: 'relative',
                boxSizing: 'border-box',
                height: 50,
                width: '100%',
                marginBottom: 32,
                borderBottom: `1px solid rgba(17, 17, 17, 0.5)`,
                '.title__container': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1px 12px 16px 12px',
                    'p': {
                        fontSize: 18,
                        fontWeight: 400,
                        lineHeight: '28px',
                        letterSpacing: '-0.225px',
                        margin: 0,
                    },
                    '.open': {
                        transform: 'rotate(180deg)'
                    },
                },
                '.menu__container': {
                    boxShadow: '0px 15px 25px rgba(56, 66, 85, 0.24623)',
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '120%',
                    background: 'white',
                    textAlign: 'right',
                    top: 53,
                    left: 0,
                    '.item': {
                        padding: '16px 20px 16px 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        'svg': {
                            opacity: 0
                        },
                        '&:hover': {
                            backgroundColor: 'gainsboro'
                        },
                    },
                    '.item.active': {
                        'svg': {
                            opacity: 1
                        }
                    },
                }
            }}
        >
            <div className="title__container" onClick={() => setOpen(!open)}>
                <p>{value}</p>
                <ArrowDown className={open ? 'open' : ''} />
            </div>
            {open &&
            <div className="menu__container">
                <div className={`item ${value === 'AM' ? 'active' : ''}`} onClick={() => action('AM')}>
                    <CheckIcon />
                    <p>AM</p>
                </div>
                <div className={`item ${value === 'PM' ? 'active' : ''}`} onClick={() => action('PM')}>
                    <CheckIcon />
                    <p>PM</p>
                </div>
            </div>
            }
        </div>
    )
}
  
export default Dropdown
  