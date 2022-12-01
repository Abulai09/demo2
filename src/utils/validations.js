export let required = (value) => {
    if(value){
        return undefined
    }
    else{
        return "Field is required"
    }
}

export let maxLength = (len) => {
    return (value) => {
        if(value && value.length>len){
            return `Max length is ${len}`
        } 
        else{
            return undefined
        }
    } 
}


export let email = (value) => {
    if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
        return 'Invalid email address ([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)'
    }else{
        return undefined
    }
}

export let phoneNumber = (value) => {
    if(value && !/^(0|[1-9][0-9]{9})$/i.test(value)){
        return 'Invalid phone number, must be 10 digits ((0|[1-9][0-9]{9}))'
    }else{
        return undefined
    }
}