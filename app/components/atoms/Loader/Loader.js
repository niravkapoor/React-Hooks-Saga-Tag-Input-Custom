import React, { Fragment} from 'react';
import injectStyles from '../../../utils/injectStyles';
import styles, { LoaderDiv, OverlayDiv } from './Loader.style';

const Loader = (props) => {
    return(
        <Fragment>
            <OverlayDiv />
            <LoaderDiv />
        </Fragment>
    )
}

export default injectStyles(Loader, styles);