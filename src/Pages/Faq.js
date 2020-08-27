import React, { Component } from 'react'
import TitleArea from '../Components/TitleArea'
import Navbar from '../Components/Navbar'

export default class Faq extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <TitleArea pageName="FAQ"  ></TitleArea>
                <section className="choose-area ptb-100">
                    <div className="container">
                      
                        <div className="row align-items-center">
                       
                            <div className="col-lg-12">
                                <div className="choose-content">
                                    <div className="faq-accordion">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-friends" />
                                                </div>
                                                <a className="accordion-title active" href={() => false}>
                                                    <i className="bx bx-plus" /> Where is Quality Digitizing Services located?</a>
                                                <p className="accordion-content show"
                                                    style={{ display: 'block' }}>
                                                    Quality Digitizing Services are located in
                                                    Delhi, India. We are having more than 10 years of experience. Moreover, the clients of ours
                                                    are U.K and U.S.A based.
                                               </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-chip" />
                                                </div>
                                                <a className="accordion-title" href={() => false}>
                                                    <i className="bx bx-plus" />What is the software that we use for embroidery digitizing?
                                               </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    We use Wilcom Embroidery
                                                    Software Elements 3 for digitizing purposes.
                                                </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-like" />
                                                </div>
                                                <a className="accordion-title" href={() => false}>
                                                    <i className="bx bx-plus" />Are the estimates for embroidery digitizing and vector services free of cost?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    Yes, the
                                                    estimates are free cost. You just have to give the details about your work and we will get
                                                    back to you with the estimates in around 1-2 hours.
                      </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-friends" />
                                                </div>
                                                <a className="accordion-title" href={() => false} >
                                                    <i className="bx bx-plus" />What software is used for vector conversion?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    We use CorelDraw Graphics Suite X6 for
                                                    vector conversion.
                      </p>
                                            </li>

                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-like" />
                                                </div>
                                                <a className="accordion-title" href={() => false} >
                                                    <i className="bx bx-plus" />How will I get to know if the file is digitized or not?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    As soon as we finish with the work,
                                                    we will send proofs to you by taking a screenshot and as soon as the payment gets processed
                                                    from your side all the desired files will be emailed to you. So, don’t worry about the work we
                                                    value your money.
                      </p>
                                            </li>

                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-chip" />
                                                </div>
                                                <a className="accordion-title" href={() => false} >
                                                    <i className="bx bx-plus" />Do you keep backups for clients data for both digitizing and vectors?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    Yes, we have
                                                    backups for both the digitizing files and vector files. But we keep them only for 30 days, after
                                                    that the files are destroyed by the company.
                      </p>
                                            </li>

                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-friends" />
                                                </div>
                                                <a className="accordion-title" href={() => false} >
                                                    <i className="bx bx-plus" />Does Quality Digitizing Services corresponds with the customers personally?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    Yes, the
                                                    company of ours correspond with the clients personally. There is no need for any sign up or
                                                    log ins for downloading the files. We personally email the files to you at the given email
                                                    address of yours.
                      </p>
                                            </li>

                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-like" />
                                                </div>
                                                <a className="accordion-title" href={() => false} >
                                                    <i className="bx bx-plus" />What is the payment procedure?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    The payment procedure of our company is PayPal. After
                                                    completing your designs or vector files we will send you a PayPal payment link and through
                                                    that you can easily make the payment. After getting the link its totally up to you whether to
                                                    make payment directly through PayPal or credit cards.
                      </p>
                                            </li>


                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-award" />
                                                </div>
                                                <a className="accordion-title " href={() => false} >
                                                    <i className="bx bx-plus" />What type of file and quality I need to submit for embroidery digitizing?
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    You can
                                                    submit jpg, gif, bmp, tif, pdf etc. format files. We care about the quality, better the image
                                                    artwork, better the final results. So, it is recommended to provide good image with proper
                                                    color separation.
                      </p>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
