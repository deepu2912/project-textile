import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <>
                {/* PreLoader Start */}
                <div className="loader-content">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube" />
                                <div className="sk-cube2 sk-cube" />
                                <div className="sk-cube4 sk-cube" />
                                <div className="sk-cube3 sk-cube" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* PreLoader End */}
            </>
        )
    }
}
