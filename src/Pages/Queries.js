import React, { Component } from 'react'
import Moment from 'react-moment';
 

export default class Queries extends Component {

    state = {
        query: []
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                <div className="info-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email Id</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.query.map((query, index) => {
                                            return <tr key={index}>
                                                 <td>{++index}</td>
                                                <td>{query.name}</td>
                                                <td>{query.cphone}</td>
                                                <td>{query.cemail}</td>
                                                <td>{query.csubject}</td>
                                                <td>{query.cmessage}</td>
                                                <td><Moment date={query.Date} /></td>
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
