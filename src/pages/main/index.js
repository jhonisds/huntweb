import React, { Component } from "react"
import { Link } from "react-router-dom"

import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const resp = await api.get('/brazil');
        this.setState({ products: resp.data })
    };

    render() {
        const { products } = this.state

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product.Date}>
                        <strong> Confirmed: {product.Confirmed}</strong>
                        <p>Date: {product.Date}</p>
                        <p>Deaths: {product.Deaths}</p>
                        <Link to={`/data/${product.Active}`} > Acessar </Link>

                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Preview</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>

            </div>
        );
    }
}