//styles
import './css/main.scss'

//js

import {handle} from './js/formHandler'
import {validate} from './js/validateURL'

document.getElementById('analyze').addEventListener('click', handle);


export {
    handle,
    validate
}