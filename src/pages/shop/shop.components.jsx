import React from 'react';
import Preview from '../../components/preview-collection/preview.component';
import shopsData from './shop.data';

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: shopsData
        }
    }
    render() {
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return (
                            <Preview key={id} {...otherCollectionProps}/>
                        )
                    })
                }
            </div>
        )
    }
}