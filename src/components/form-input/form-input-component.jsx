import {InputStyles, FormInputLabelStyles, GroupStyles} from './form-input-component.styles'

const FormInputComponent = ({label, ...otherProps}) =>{
    return(
        <GroupStyles>
        <InputStyles {...otherProps}>
        { label && (
            <FormInputLabelStyles 
            shrink={otherProps.value.length}>
                {label}
            </FormInputLabelStyles>)}
        </InputStyles>
        </GroupStyles>
    )
}

export default FormInputComponent