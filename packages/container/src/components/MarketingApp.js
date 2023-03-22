import React from 'react'
import { mount } from 'marketing/MarketingApp'

export default class MarketingApp extends React.Component {
    constructor(props) {
        super(props)
        this.marketingRef = React.createRef();
    }


    componentDidMount() {
        mount(this.marketingRef.current)
    }

    render() {
        return <div ref={this.marketingRef} />
    }
}