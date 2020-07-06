import React, { Component } from 'react'
import api from '../../services/api'

export default class Data extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const resp = await api.get(`/brazil`)
        this.setState({ product: resp.data })
    }

    render() {
        const { product } = this.state

        return (
            <div className="product-info">

                <h1>{product.Confirmed}</h1>
                <p>{product.Date}</p>

                <p>
                    URL: <a href={product.Country}> {product.Country}</a>
                </p>

            </div>
        )
    }
}