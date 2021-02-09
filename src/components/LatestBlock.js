import React from 'react';
import GenericBlockView from './GenericBlockView';

export default function LatestBlock({latestBlock}) {    
    return (
        <div className='wrapper'>
            <div className='row bigHeader'> View the latest block </div>
            <div className='row'>
                <div className="col-sm-12">
                    <GenericBlockView obj={latestBlock}/>
                </div>
            </div>
        </div>
    )
}
