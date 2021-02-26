/** @jsxImportSource @emotion/react */
import { ReactComponent as MinusIcon} from '../assets/icons/icon-minus.svg'
import { ReactComponent as PlusIcon} from '../assets/icons/icon-plus.svg'

function NumberSelector({ 
    people = 1,
    action
}) {

    return (
        <div
            css={theme => ({
                boxSizing: 'border-box',
                height: 50,
                width: '100%',
                marginBottom: 32,
                paddingBottom: 16,
                paddingLeft: 19,
                paddingRight: 17,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: `1px solid rgba(17, 17, 17, 0.5)`,
                'svg': {
                    cursor: 'pointer'
                },
                'p': {
                    fontSize: 18,
                    fontWeight: 'bold',
                    lineHeight: '28px',
                    letterSpacing: '-0.225px',
                    margin: 0,
                }

            })}
        >
        <MinusIcon onClick={() => action('decrement')} />
        <p>{people} People</p>
        <PlusIcon onClick={() => action('increment')} />

        </div>
    )
}
  
export default NumberSelector
  