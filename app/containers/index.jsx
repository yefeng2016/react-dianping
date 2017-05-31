import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore.js'
import {CITYNAME} from '../config/localStoreKey.js'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null) {
            cityName = '广州'
        }
        setTimeout(()=>{
            this.setState({
                initDone: true,
            })
        },2100)
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                    }
            </div>
        )
    }
}

export default App
