import React, { PureComponent } from 'react';

const ClickOutside = (WrappedComponent) => {
    return class ClickOutside extends PureComponent {
      
      wrappedComponent = React.createRef();
      wrapper = React.createRef();

      handleClickOutside = (event) => {
        const element = this.wrapper;
        if ((element && !element.current.contains(event.target)) || event.keyCode === 27) {
          if(window.handleClickOutside) {
            window.handleClickOutside();
          }
        }
      }
  
      componentDidMount() {
          window.addEventListener('keydown', this.handleClickOutside, true);
          window.addEventListener('click', this.handleClickOutside, true);
      }
  
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleClickOutside, true);
        window.removeEventListener('click', this.handleClickOutside, true);
      }
  
  
      render() {
        return (
          <div style={{width : '100%'}} ref={this.wrapper}>
            <WrappedComponent ref={this.wrappedComponent} {...this.props} />
          </div>
        );
      }
    };
  }
  
  export default ClickOutside;