import React, { Component } from 'react'
import Moment from 'react-moment'
 
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class Queries extends Component {

    state = {
        query: []
    }

    

    deleteQuery = index => {
        if (window.confirm("Delete the item?")) {
            fetch('https://node-deep.herokuapp.com/queries/' + index, {
                method: 'DELETE',
            })
                .then(res => res.text())
                .then(res => {
                    this.updateList()
                })
        }

    }

    updateList = () => {

        fetch('https://node-deep.herokuapp.com/queries').then(res => res.json()).then(
            res => {
                console.log(res);
                this.setState({
                    query: res
                })
            }
        ).catch(err => {
            alert('There is some error in fetching Api. please try again after sometime or contact support')
        })
    }
    componentDidMount() {
        this.updateList()
    }

    render() {
        return (
            <div>
                <div className="info-area pt-100 pb-70">
                    <div className="container" style={{ textAlign: 'right', padding: '9px' }}>
                    {/* <button className="btn btn-info" style={{ margin: '10px' }} table="tabledata"  filename="ReportExcel" 
                    sheet="Sheet" >Back to Admin</button> */}
                    <ReactHTMLTableToExcel className="btn btn-info"  table="tabledata"  filename="ReportExcel" 
                    sheet="Sheet"    buttonText="Export excel" />  
                    </div>
                    <div className="container">
                        <div className="row">
                            <table className="table" id="tabledata" style={{   overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email Id</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.query.map((query, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{query.name}</td>
                                                <td>{query.cphone}</td>
                                                <td>{query.cemail}</td>
                                                <td>{query.csubject}</td>
                                                <td>{query.cmessage}</td>
                                                <td><Moment format="D MMM YYYY hh:mm A" date={query.Date} /></td>
                                                <td><img src="assets/images/client/delete.png" style={{ "width": "30px", "cursor": "pointer" }} onClick={() => this.deleteQuery(index)} alt="Delete"></img></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div></div></div>
            </div>
        )
    }
}
