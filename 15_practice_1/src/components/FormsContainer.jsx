import ButtonCloseOpenForm from "./ButtonCloseForm.jsx";
import handleToggleSection from "../handlers/handleToggleSection.js";
import {useMyAppContext} from "../AppContext.jsx";


export default function FormsContainer(props) {
    const {openSection, setOpenSection} = useMyAppContext()
    const { className, header, children }  = props

    return (
        <div className={className}>
            <h2>{header}</h2>
            <ButtonCloseOpenForm
                className={`close-button${openSection[props.className] ? ' open' : ''}` }
                onClick={() => handleToggleSection(props.className, setOpenSection)} />
            {openSection[props.className] && children}
        </div>
    )
}