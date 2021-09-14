import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './preview.style.scss'

const Preview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((items, idx) => idx < 4).map(({...item}, id) => {
                        console.log(item)
                        return (
                            <CollectionItem key={id} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Preview