import React from 'react';
import { values } from '../consts';
import Transaction from './Transaction'

export default function RowView({item, val}) {
    return (
        <div className="row">
            <div className="col-sm-3">
                {values[item] ? `${values[item]} :` : ""}
            </div>
            <div className="col-sm-9">
                {Array.isArray(val) && val.length > 0
                ? <Transaction val={val}/>
                : val}
            </div>
        </div>
    )
}
