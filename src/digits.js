import React from 'react';
import PropTypes from "prop-types";



const MyDigits = (props) => {
    return (
        <div className="container clock">
            <div className="card-group ">
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text"><i className="far fa-clock"></i></span>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text">{props.one}</span>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text">{props.two}</span>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text">{props.three}</span>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text">{props.four}</span>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text">{props.five}</span>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                    <span className="card-text">{props.six}</span>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-block justify-content-center">
                <button className="btn-outline-success btn-panel" id="b-resume" onClick={props.resume}>
                    <i class="far fa-play-circle"></i>
                </button>
                <button className="btn-outline-success btn-panel" id="b-pause" onClick={props.pause}>
                    <i class="far fa-pause-circle"></i>
                </button>
                <button className="btn-outline-success btn-panel" id="b-reset" onClick={props.reset}>
                    Reset
                </button>
            </div>
        </div>

    );
};

MyDigits.propTypes = {
    one: PropTypes.number,
    two: PropTypes.number,
    three: PropTypes.number,
    four: PropTypes.number,
    five: PropTypes.number,
    six: PropTypes.number,
    resume: PropTypes.func,
    pause: PropTypes.func,
    reset: PropTypes.func,
};


export default MyDigits;