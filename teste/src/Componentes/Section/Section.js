import React from 'react';
import './Section.css';
import sandals from './sandals.png'

function Section(props) {
    return (
        <section>
            <div className="input1">
                <img src={sandals} alt="lupa de busca" />
            </div>
        </section>
    )
}

export default Section