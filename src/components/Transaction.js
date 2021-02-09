import React, { useState } from 'react';
import { values } from '../consts';
import SingleTransaction from './SingleTransaction'

export default function Transaction({val}) {

    const [modalVal, setModalVal] = useState(false);
    const [transactionVal, setTransactionVal] = useState(false);

    function handleTransaction(item, val) {
        setModalVal(val);
        setTransactionVal(item);
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-6">{values.hash}</div>
                <div className="col-sm-2">{values.size}</div>
                <div className="col-sm-2">{values.weight}</div>
                <div className="col-sm-2">{values.fee}</div>
            </div>
            {Array.isArray(val) && val.length > 0 &&
                val.slice(0,10).map(item => (
                <div className="row">
                <div className="col-sm-6 hideOvr" onClick={() => handleTransaction(item, true)}>
                    {item.hash}
                </div>
                <div className="col-sm-2">{item.size}</div>
                <div className="col-sm-2">{item.weight}</div>
                <div className="col-sm-2">{item.fee}</div>
            </div>
                ))}
            <SingleTransaction 
                closePopup={() => setModalVal(false)}
                modalVal= {modalVal}
                val= {transactionVal}/>
        </div>        
    )
}
