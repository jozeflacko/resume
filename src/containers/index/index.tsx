import * as React from 'react';
import './index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props extends React.Props<any> {

}

export type HistoryContext = {

}

class Index extends React.Component<Props, {}> {
  componentDidMount() {

  }
  render() {
    const divStyle = {
      /*backgroundImage: 'url("../assets/flipPhotos/1_nie.JPG")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px'*/
    };

    return (
      <div className="index">
        <div className='box' style={divStyle}/>
        <div className="text">
          <div className='title'>JOZEF LACKO</div>
          <div className='subtitle'>jlacko27@gmail.com</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state:Props, ownProps: any = {} ) {
  return {

  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
//export default connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(Home);
