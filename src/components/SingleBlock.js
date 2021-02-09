import React from 'react';
import GenericBlockView from './GenericBlockView';

export default function SingleBlock({singleBlockData, searchSingleBlock, 
    searchHash, handleChange, updateState}) {
    const SearchView = () => {
        return (
            <div className="col-sm-9">
                <label className="">Enter Hash Value : </label>
                <input className="form-control" type="text"
                    name="searchHash"
                    value={searchHash} 
                    onChange={handleChange} 
                    placeholder="Type hash value"
                    required
                />
                <button className="btn btn-danger mt-1"
                    onClick={() => searchSingleBlock(searchHash)}>Search</button>
            </div>
        )
    }  
    return (
        <div className='wrapper'>
            <div className='row bigHeader'> View a single block </div>
            {singleBlockData && Object.keys(singleBlockData).length > 0 
            && <div className='row'>
                <div className="col-sm-12 mt-1">
                    <button className="btn btn-info"
                        onClick={() => updateState('', 'singleBlock')}>
                        New Search
                    </button>
                </div>
            </div>}
            <div className='row'>
                <div className="col-sm-12">
                    {singleBlockData && Object.keys(singleBlockData).length > 0 
                        ? <GenericBlockView obj={singleBlockData}/>
                        : <SearchView/>}
                    
                </div>
            </div>
        </div>
    )
}


