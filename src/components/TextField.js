/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'


function TextField({ 
    placeholder = "",
    name,
    value,
    action,
    error = false,
    errorMessage = "This field is required",
    type = 'text'
}) {

    return (
        <div
            css={{
                width: '100%',
                marginBottom: 32,
            }}
        >
            <input
                placeholder={placeholder}
                onChange={action}
                name={name}
                value={value}
                type={type}
                css={theme => ({
                    boxSizing: 'border-box',
                    width: '100%',
                    height: 50,
                    fontFamily: 'Spartan',
                    color: theme.colors.primary.gray,
                    border: 'none',
                    borderBottom: `1px solid ${error ? theme.colors.error : theme.colors.primary.gray}`,
                    padding: '0px 0px 16px 16px',
                    fontSize: 18,
                    lineHeight: 28,
                    letterSpacing: -0.225,
                    '&::placeholder': {
                        color: error ? theme.colors.error : theme.colors.primary.gray,
                    },
                    '&:placeholder-shown': {
                        opacity: 0.5,
                    }
                })}
            />
            {error &&
                <p
                    css={theme => ({
                        color: theme.colors.error,
                        fontWeight: 500,
                        fontSize: 10,
                        marginTop: 8,
                        marginLeft: 16,

                        // lineHeight: 11,
                        letterSpacing: -0.125,
                    })}
                >{errorMessage}</p>
            }
        </div>
    )
}
  
export default TextField
  