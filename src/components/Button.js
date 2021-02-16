/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const Button = styled.button({
    width: '170px',
    height: '64px',
    fontFamily: 'Spartan',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '2px',
    border: '1px solid #FFFFFF',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textTransform: 'uppercase',
    '&:disabled': {
        opacity: 0.25,
        pointerEvents: 'none'
    }},
    props => props.variant === 'light' ? 
    ({
        color: props.theme.colors.primary.white,
        borderColor: props.theme.colors.primary.white,
        '&:hover': {
            color: props.theme.colors.primary.gray,
            backgroundColor: props.theme.colors.primary.white,
        }
    }) :
    ({
        color: props.theme.colors.primary.gray,
        borderColor: props.theme.colors.primary.gray,
        '&:hover': {
            color: props.theme.colors.primary.white,
            backgroundColor: props.theme.colors.primary.gray,
        }
    })
)
  
export default Button
  