import React, { useState } from 'react';
import styles, { DropdownDiv } from './Dropdown.style';
import injectStyles from '../../../utils/injectStyles';
import Tag from '../../atoms/Tag';
import Input from '../../atoms/Input';

function Dropdown(props) {
    const { list, changeHandler, tagSelect, tagRemove } = props;

    const [value, setValue] = useState();

    const onSelectHandler = (tag, index) => {
        try{
            const tagList = value || []
            if(tagList.length < 5){
                const newTag = [{ tag, index }, ...tagList];
                setValue(newTag);
                tagSelect(tag, index);
                return;
            }
        }catch(err) {
            console.log('Error in Dropdown -> onSelectHandler', err);
        }
    }

    const tagRemoveHandler = (ele, index) => {
        try{
            const tagList = value;
            tagList.splice(index, 1);
            const newTag = [...tagList];
            setValue(newTag);
            tagRemove(ele, ele.index);
        }
        catch(err) {
            console.log('Error in tagRemoveHandler', err);
        }
    }

    const lastTagRemover = () => {
        try{
            if(value && value.length > 0){
                const tagList = value;
                const ele = tagList.splice(tagList.length - 1, 1);
                const newTag = [...tagList];
                setValue(newTag);
            }
            return;
        }
        catch(err) {
            console.log('Error in lastTagRemover', err);
        }
    }

    return (
        <DropdownDiv>
            <Tag tags={value} tagRemove={tagRemoveHandler}/>
            <Input tags={value || []} lastTagRemover={lastTagRemover} selectHandler={onSelectHandler} changeHandler={changeHandler} list={list} />
        </DropdownDiv>
    )
}

export default injectStyles(Dropdown, styles)