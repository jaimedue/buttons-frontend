import './ButtonList.css'
import ButtonItem from '../ButtonItem/ButtonItem'
import { getAllButtons } from '../../Services/ButtonService'
import { useEffect, useState } from 'react'

const ButtonList = () => {
    const [buttons, setButtons] = useState([])

    useEffect(() => {
        getButtons()
    }, [])

    const getButtons = () => {
        getAllButtons()
            .then(data => setButtons(data))
    }

    const buttonItems = buttons.map((button) => {

        return (
            <ButtonItem key={button.id} id={button.id} className="button"/>   
        )
    })


    return (
        <div>
            <ul>
                { buttonItems }
            </ul>
            
        </div>
    )
}

export default ButtonList