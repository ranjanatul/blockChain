import React from 'react';
import RowView from './RowView';

export default function GenericBlockView({obj}) {
    const arr = (obj && Object.keys(obj)) || [];
    return arr.map((item, i) => <RowView key= {i} item={item} val={obj[item]}/>);
}
