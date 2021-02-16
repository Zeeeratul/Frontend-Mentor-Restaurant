/** @jsxImportSource @emotion/react */
import ArrowDown from '../assets/icons/icon-arrow.svg'

function Dropdown({ 
    placeholder= "",
}) {

    return (
        <select
            css={theme => ({
                width: 390,
                height: 45,
                border: 'none',
                borderBottom: `1px solid ${theme.colors.primary.gray}`,
                padding: '0px 0px 16px 16px',
                fontSize: 18,
                letterSpacing: -0.225,
                fontFamily: 'Spartan',
                backgroundImage: `url(${ArrowDown})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top 9px right 28px',
                backgroundSize: '16px 8px',
                WebkitAppearance: 'none',
            })}
        >
            <option value="">{placeholder}</option>
            <option value="dog">Dog</option>
        </select>
    )
}
  
export default Dropdown
  