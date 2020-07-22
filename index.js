import { Select } from './select/select';
import './select/style.scss';

const select = new Select('#select', {
    placeholder: 'Выберите пункт ',
    selectedId: '7',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Vue'},
        {id: '3', value: 'Node'},
        {id: '4', value: 'Java'},
        {id: '5', value: 'Swift'},
        {id: '6', value: 'PHP'},
        {id: '7', value: 'React Native'}
    ],
    onSelect(item) {
        console.log('Selected Item: ', item);
    }
});


window.s = select;