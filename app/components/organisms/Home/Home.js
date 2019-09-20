import React, { Fragment } from 'react';
import enhancer from '../../../dynamicStore/enhancer';
import injectStyle from '../../../utils/injectStyles';
import styles, { AutoComplete, H1 } from './Home.style';
import reducer from './Home.reducer';
import saga from './Home.saga';
import { getMovieName, saveMovieList } from './Home.actions';
import endpoint from '../../../api/endpoint';
import Dropdown from '../../molecule/Dropdown/Dropdown';
import Loader from '../../atoms/Loader';

class Home extends React.PureComponent {

    componentDidCatch(error, errorInfo) {
        console.log('Error', error, errorInfo);
        alert('Dont Get panic...!!!, Contact the Developer @niravkapoor27@gmail.com. Kindly refresh the page');
    }

    changeHandler = (value) => {
        try{
            const { getMovieName, saveMovieList } = this.props;

            if(!value){
                saveMovieList({ Search : [] });
                return;
            }
            getMovieName({
                queryStringHash: {
                    apikey: endpoint.production.API_KEY,
                    s: value,
                }
            })
        }
        catch(err) {
            console.log('Error in Home changeHandler', err)
        }
    }

    tagSelect = (ele, index) => {
        try{
            const { movieList, saveMovieList } = this.props;
            const data = movieList;
            data.Search.splice(index, 1);
            saveMovieList(data);
        }
        catch(err) {
            console.log('Error in tagSelect', err);
        }
    }

    tagRemove = (ele, index) => {
        try{
            const { movieList, saveMovieList } = this.props;
            const data = movieList;
            data.Search.splice(index, 0, ele.tag);
            saveMovieList(data);
        }
        catch(err) {
            console.log('Error in tagRemove', err);
        }
    }

    render() {
        const { movieList, loader } = this.props;
        return(
            <Fragment>
                <AutoComplete>
                    <H1>Type Ahead Auto Complete</H1>
                    <Dropdown tagRemove={this.tagRemove} tagSelect={this.tagSelect} list={ movieList.Search || [] } changeHandler={this.changeHandler}/>
                </AutoComplete>
            { loader && <Loader /> }
            </Fragment>
        )
    }
}

const mapStateToProps = store => ({
    movieList: store.home ? store.home.movieList || { Search : [] } : { Search : []},
    loader: store.global ? store.global.loader || false : false,
})

const mapDispatchToProps = dispatch => ({
    getMovieName: payload => dispatch(getMovieName(payload)),
    saveMovieList: payload => dispatch(saveMovieList(payload))
})

export default enhancer(injectStyle(Home, styles), {
    key: 'home',
    mapStateToProps,
    mapDispatchToProps,
    reducer,
    saga
})