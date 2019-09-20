import React from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles, { TagDiv } from './Tag.style';

function Tag(props) {
    const { tags = [], tagRemove } = props;

    return (
        <TagDiv>
            {
                tags.map((ele, index) => {
                    return <span key={index}>{ele.tag.Title} <span onClick={() => tagRemove(ele, index)} /></span>
                })
            }
        </TagDiv>
    )
}

export default injectStyles(Tag, styles);