import React  from 'react';
import Particles from 'react-particles-js';
import './water.css';
import shapes1 from '../Images/1.svg';

const Background = () => {

    return (
        <Particles id="particles-js"
        params={{
            "particles": {
                "number": {
                    "value": 15,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "speed": 0.5,
                    "out_mode": "out"
                },
                "shape": {
                    "type": [
                        "image",
                        'circle'
                    ],
        
                    "image": [
                        {
                            "src": shapes1,
                            "height": 23,
                            "width": 20
                        },
                    ]
                },
                "color": {
                    "value": "#0C1115"
                },
                "size": {
                    "value": 15,
                    "random": false,
                    "anim": {
                        "enable": true,
                        "speed": 0.5,
                        "size_min": 10,
                        "sync": false
                    }
                }
            },
            "retina_detect": false
        }} />
    )
}


export default Background;