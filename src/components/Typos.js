/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const H1 = styled.h1(
    {
        fontWeight: 300,
        fontSize: 64,
        lineHeight: '72px',
        letterSpacing: -0.8,
        '@media (max-width: 1439px)': {
            fontSize: 48,
            lineHeight: '64px',
            letterSpacing: -0.6
        },
        '@media (max-width: 767px)': {
            fontSize: 32,
            lineHeight: '40px',
            letterSpacing: -0.4
        },
    },
    (props) => ({
        color: props.variant === 'light' ? 'white' : props.theme.colors.secondary.clay,
    })
)

const H2 = styled.h2(
    {
        fontSize: 40,
        lineHeight: '56px',
        fontWeight: 'bold',
        letterSpacing: -0.5,
        '@media (max-width: 375px)': {
            fontSize: 32,
            lineHeight: '40px',
            letterSpacing: -0.4,
        }
    },
    (props) => ({
        color: props.variant === 'light' ? 'white' : props.theme.colors.secondary.clay,
    })
)

const H3 = styled.h3(
    {
        fontSize: 14,
        lineHeight: '28px',
        fontWeight: 600,
        letterSpacing: '2px',
    },
    (props) => ({
        color: props.variant === 'light' ? 'white' : '#4C4C4C',
    })
)

const H3bold = styled.h3(
    {
        fontSize: 18,
        lineHeight: '28px',
        fontWeight: 'bold',
        letterSpacing: '-0.225px',
    },
    (props) => ({
        color: props.variant === 'light' ? 'white' : props.theme.colors.secondary.mirage,
    })
)


const Body1 = styled.p(
    {
        fontSize: 18,
        lineHeight: '30px',
        letterSpacing: '-0.225px',  
        '@media (max-width: 375px)': {
            fontSize: 15,
            lineHeight: '25px',
            letterSpacing: -0.1875
        },
    },
    (props) => ({
        color: props.variant === 'light' ? 'white' : props.theme.colors.secondary.clay,
    })
)


const Body2 = styled.p(
    {
        fontSize: 15,
        lineHeight: '28px',
        letterSpacing: '-0.1875px',  
    },
    (props) => ({
        color: props.variant === 'light' ? 'white' : props.theme.colors.secondary.mirage,
    })
)

export {
    H1,    
    H2,
    H3,
    H3bold,
    Body1,
    Body2
}