import React, { useState } from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles, { List, Container } from './Input.style';
import { KEY_CODES } from './Input.constants';
import ClickOutSide from '../../../utils/ClickOutSide';

const Input = (props) => {

    const { list = [], changeHandler, selectHandler, lastTagRemover, tags } = props;
    const [value, setValue] = useState();
    const [listVisibility, setListVisibility] = useState(true);

    let backKeyFlag = false;

    const handleClickOutside = () => {
        try{
            setListVisibility(false);
        }
        catch(err){
            console.log('Error in Input->handleClickOutside', err);
        }
    }

    const onKeyUpHandler = (evt) => {
        const keycode = evt.which || evt.keyCode;
        switch (true){
            case keycode === KEY_CODES.BACKSPACE:
                if(!evt.target.value){
                    if(!backKeyFlag){
                        backKeyFlag = true; 
                    }else{
                        lastTagRemover();
                    }
                }
                break;
        }
    }
    
    const onChangeHandler = (e) => {
        setValue(e.target.value);
        if(e.target.value.length >= 3){
            setListVisibility(true);
            changeHandler(e.target.value);
        }else{
            changeHandler('');
        }
    }

    window.handleClickOutside = handleClickOutside;
    window.list = list;
    window.tags = tags;
    return (
        <Container>
            <input onKeyUp={onKeyUpHandler} onChange={onChangeHandler} value={value}/>
            <List>
                {
                    listVisibility && list.map((ele, index) => {
                        return tags.every((item) => { return item.tag.imdbID !== ele.imdbID }) && <span key={index} onClick={() => selectHandler(ele, index)} className={index % 2 !== 0 ? 'odd' : ''}>{ele.Title}</span>
                    })
                }
            </List>
        </Container>
    )
}

export default injectStyles(ClickOutSide(Input), styles);