import React, { Component } from 'react'

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    constructor(){
        super();

        this.state = {
            collections:SHOP_DATA
        }
    }

    render() {
        return (
            <div className="shoppage">
                {
                    this.state.collections.map(({id,...props})=>(
                        <CollectionPreview key={id} {...props}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
