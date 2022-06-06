import { useState, useEffect } from 'react'
import { getByButton } from '../../Services/StyleService'
import {css, cx} from '@emotion/css'
import './ButtonItem.css'

const ButtonItem = ({ id }) => {
    const [styles, setStyles] = useState([])
    const [btnClassName, setBtnClassName] = useState(`button${id}`)

    let cssStr = ''
    let hover = ''
    let active = ''
    let focus = ''

    let copyCssStr = ''
    let copyHover = ''
    let copyActive = ''
    let copyFocus = ''
    
    useEffect(() =>{
        getButtonStyle(id)
    }, [id])

    const getButtonStyle = (id) => {
        getByButton(id)
            .then(data => setStyles(data))
    }

    const styleItems = styles.map((style) => {
        if (style.state === null) {
            if (cssStr === '')
                cssStr = `\n${style.property}: ${style.value};`  
            else
                cssStr = cssStr + `\n${style.property}: ${style.value};`
        } else if (style.state === 'hover') {
            if (hover === '')
                hover = `\n${style.property}: ${style.value};`
            else
                hover = hover + `\n${style.property}: ${style.value};`
        } else if (style.state === 'active') {
            if (active === '')
                active = `\n${style.property}: ${style.value};`
            else
                active = active + `\n${style.property}: ${style.value};`
        } else if (style.state === 'focus') {
            if (focus === '')
                focus = `\n${style.property}: ${style.value};`
            else
                focus = focus + `\n${style.property}: ${style.value};`
        }
    })

    const buildCopyCSS = () => {
        copyCssStr =   `\n.${btnClassName} {${cssStr}\n}`
        if (hover !== '') {
            copyHover = `\n.${btnClassName}:hover {${hover}\n}`
        }
        if (active !== '') {
            copyActive = `\n.${btnClassName}:active {${active}\n}`
        }
        if (focus !== '') {
            copyFocus = `\n.${btnClassName}:focus {${focus}\n}`
        }
    }
    
    const copyCSS = () => {
        buildCopyCSS()
        navigator.clipboard.writeText(
            `${copyCssStr}
            ${copyHover}
            ${copyActive}
            ${copyFocus}`
        )
    }

    return (
        <li className="btnItem">
            <button onClick={ copyCSS } className="copyBtn">
                <span class="material-icons md-18">
                    content_copy
                </span>
            </button>
            <button className={ css`${cssStr} &:hover {${hover}} &:active {${active}} &:focus {${focus}}` }>Button</button>
            
        </li>
    )
}

export default ButtonItem