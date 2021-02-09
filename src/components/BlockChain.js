import React from 'react';
import SingleBlock from './SingleBlock';
import LatestBlock from './LatestBlock';
import { singleBlockData, latestBlockData } from '../api/blockChainDataApi';
import latestBlockJSON from '../responses/latestBlock.json';
import singleBlockJSON from '../responses/singleBlock.json';

const latestBlock = 'latestBlock';
const singleBlock = 'singleBlock';
const currentView = 'currentView';
const singleBlockView = 'singleBlockView';
const latestBlockView = 'latestBlockView';

export default class BlockChain extends React.Component{
    state = {
        singleBlock: '',
        latestBlock: '',
        currentView: '',
        searchHash: ''
    }

    //To fetch teh latest block data on component mount. 
    //uncomment then part once cors policy issue fixed.
    componentDidMount(){
        latestBlockData()
        // .then(res => {
        //     const {status, body} = res;
        //     if(status === 200){
        //         return this.updateState(body, latestBlock)
        //     }
        //     return this.updateState(
        //         {'message': 'No record found!'}, latestBlock)
        // })  
        this.updateState(latestBlockJSON, latestBlock);
    }

    updateState = (res, val) => {
        this.setState({[val]: res});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    //To fetch teh single block data. uncomment then part once cors policy issue fixed.
    fetchSingleBlockData = (val) => {
        singleBlockData(val)
        // .then(res => {
        //     const {status, body} = res;
        //     if(status === 200){
        //         return this.updateState(body, singleBlock)
        //     }
        //     return this.updateState(
        //         {'message': 'No record found!'}, singleBlock)
        // })
        this.updateState(singleBlockJSON, singleBlock);
    }

    render(){
        return (
            <React.Fragment>
                <div className="col-sm-3 col-view">
                    <div className="btn btn-info space"
                        onClick={()=>this.updateState(latestBlockView, currentView)}>
                            Latest Block View
                    </div>
                    <div className="btn btn-info space"
                        onClick={()=>this.updateState(singleBlockView, currentView)}>
                            Single Block View
                    </div>                                     
                </div>
                <div className="col-sm-9 big">
                    {this.state.currentView === singleBlockView 
                    ? <SingleBlock 
                        singleBlockData= {this.state.singleBlock}
                        searchHash= {this.state.searchHash}
                        handleChange= {this.handleChange}
                        updateState= {this.updateState}
                        searchSingleBlock= {this.fetchSingleBlockData}/> 
                    : <LatestBlock latestBlock= {this.state.latestBlock}/> 
                    }                                  
                </div>
            </React.Fragment>
        )
    }
   
}