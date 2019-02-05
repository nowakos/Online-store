import React, {Component} from 'react';
import Title from "./Title";
import {ButtonContainer} from "./Button"

class Newsletter extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title class='col-6' title='Newsletter'/>
                        <div className="row">
                            <div className="col">
                                <form className='mx-auto'>
                                    <div className="form-row align-items-center justify-content-center">
                                        <div className="col-sm-3 my-1">
                                            <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                            <input type="text" className="form-control" id="inlineFormInputName"
                                                   placeholder="Give your name"/>
                                        </div>
                                        <div className="col-sm-3 my-1">
                                            <label className="sr-only"
                                                   htmlFor="inlineFormInputGroupUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text" className="form-control"
                                                       id="inlineFormInputGroupUsername" placeholder="Give your email"/>
                                            </div>
                                        </div>
                                        <div className="col-auto my-1">

                                        </div>
                                        <div className="col-auto my-1">
                                            <ButtonContainer type="submit" className="btn btn-primary">Send</ButtonContainer>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </React.Fragment>
    );
    }
    }

    export default Newsletter;