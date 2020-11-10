import React from 'react';
import './UpgradePremium.css'
import { Link } from "react-router-dom";

class UpgradePremium extends React.Component {
    state = {
        service1: false,
        service2: false,
        service3: false,
    }

    service1ClickedToggleHandler = () => {
        this.setState((prevState) => {
            return { service1: !prevState.service1 }
        });
    }
    service2ClickedToggleHandler = () => {
        this.setState((prevState) => {
            return { service2: !prevState.service2 }
        });
    }
    service3ClickedToggleHandler = () => {
        this.setState((prevState) => {
            return { service3: !prevState.service3 }
        });
    }

    render() {

        return (
            <>
                <nav class="navbar navbar-dark mr-auto bg-dark mb-5">
                    <button class="btn btn-danger ml-5" href="#">Logo</button>
                    <button className="btn mr-5 btn-danger" href="#">Keluar</button>
                </nav>
                <div className='container'>
                    <div className='title text-center'>
                        <h2>Upgrade Premium</h2>
                        <p>Choose the service according to your wishes</p>
                    </div>
                    <div className='category-services text-center row'
                    >
                        <div className='service col-3'>
                            <p
                                style={{ opacity: this.state.service1 ? '0.8' : null }}
                                onClick={this.service1ClickedToggleHandler.bind(this)}
                            >Basic</p>
                        </div>
                        <div className='service col-3'>
                            <p
                                style={{ opacity: this.state.service2 ? '0.8' : null }}
                                onClick={this.service2ClickedToggleHandler.bind(this)}
                            >Standard</p>
                        </div>
                        <div className='service col-3'>
                            <p
                                style={{ opacity: this.state.service3 ? '0.8' : null }}
                                onClick={this.service3ClickedToggleHandler.bind(this)}
                            >Premium</p>
                        </div>
                    </div>
                    <div class="service-content-container text-center">
                        <div class="row price service-quality">
                            <div class="col-3">
                                Price/Month
                        </div>
                            <div class="col-3">
                                Rp. 50.000
                        </div>
                            <div class="col-3">
                                Rp. 100.000
                        </div>
                            <div class="col-3">
                                Rp. 150.000
                        </div>
                        </div>
                        <div class="row service-quality">
                            <div class="col-3">HD Available</div>
                            <div class="col-3 cheklist">✓</div>
                            <div class="col-3 cheklist">✓</div>
                            <div class="col-3 cheklist">✓</div>

                        </div>
                        <div class=" row service-quality">
                            <div class="col-3">Ultra HD Available</div>
                            <div class="col-3">x</div>
                            <div class="col-3">x</div>
                            <div class="col-3 cheklist">✓</div>
                        </div>

                        <div class="row service-quality">
                            <div class="col-3">Watch on TV,  Laptop, Mobile</div>
                            <div class="col-3">x</div>
                            <div class="col-3 cheklist">✓</div>
                            <div class="col-3 cheklist">✓</div>
                        </div>
                        <div class="row service-quality">
                            <div class="col-3">Unlimited movies and tv show</div>
                            <div class="col-3">x</div>
                            <div class="col-3">x</div>
                            <div class="col-3 cheklist">✓</div>
                        </div>
                    </div>
                    <div class="submit-button row">
                        <Link to={this.state.service1 || this.state.service2 || this.state.service3 ? 'upgrade-premium/pembayaran' : 'upgrade-premium'}>
                            <button className={this.state.service1 || this.state.service2 || this.state.service3 ? 'btn btn-primary' : 'btn btn-secondary'}
                            >
                                Selanjutnya</button></Link>
                    </div>
                </div>
            </>
        )

    }
}

export default UpgradePremium;