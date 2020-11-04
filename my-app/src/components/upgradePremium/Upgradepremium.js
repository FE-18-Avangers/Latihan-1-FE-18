import React from 'react';
import './UpgradePremium.css'

export default class UpgradePremium extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>
                    <h2>Upgrade Premium</h2>
                    <p>Pilih layanan sesuai keinginan anda</p>
                </div>
                <div className='category-services row'>
                    <div className='service col-3'>
                        Basic
                    </div>
                    <div className='service col-3'>
                        Standart
                    </div>
                    <div className='service col-3'>
                        Premium
                    </div>
                </div>
            </div>
        )

    }
}