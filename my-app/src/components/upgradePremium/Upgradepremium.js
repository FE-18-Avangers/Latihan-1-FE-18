import React from 'react';
import './UpgradePremium.css'
import { Link } from "react-router-dom";

class UpgradePremium extends React.Component {
    state = {
        service: false,
    }

    serviceClickedHandler = () => {
        this.setState({ service: true })
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
                            <p>Basic</p>
                        </div>
                        <div className='service col-3'>
                            <p
                            >Standard</p>
                        </div>
                        <div className='service col-3'>
                            <p
                                onClick={this.serviceClickedHandler.bind(this)}
                                style={{ opacity: this.state.service ? '0.8' : null }}
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
                        <Link to={this.state.service ? 'upgrade-premium/pembayaran' : 'upgrade-premium'}>
                            <button className={this.state.service ? 'btn btn-primary' : 'btn btn-secondary'}
                            >
                                Selanjutnya</button></Link>
                    </div>
                </div>
            </>
        )

    }
}

export default UpgradePremium;