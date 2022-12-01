import s from './formControl.module.css'

let Input = ({input, meta,...props})=>{

    let hasError = meta.touched && meta.error

    return(
        <div className={s.formControl + " " + (hasError ? s.error : + " ")}>
            <input {...props} {...input} />
            {hasError && <span >{meta.error}</span>}
        </div>
    )
}

export default Input