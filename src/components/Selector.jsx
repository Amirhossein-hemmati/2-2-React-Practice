import Selector from './Selector.css'

const colorOptions = () => {
    return (
        <select>
            <option className={'select_firstColor'}>red</option>
            <option className={'select_secondColor'}>blue</option>
            <option className={'select_thirdColor'}>green</option>
            <option className={'select_fourthColor'}>black</option>
        </select>
    )
}

export default colorOptions;