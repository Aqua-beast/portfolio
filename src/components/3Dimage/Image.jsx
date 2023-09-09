import React from 'react'
import './Image.css'
import { TypeAnimation } from 'react-type-animation'
import pp from '../../images/giphy.gif'
import {AiOutlineArrowDown} from 'react-icons/ai';

export default function Image() {
    return (
        <div className='content'>
            <div className='typer'>
                <div className='script'>
                    <div className='draw'>
                        <div className='pointer'></div>
                        <div className='liner'></div>
                    </div>
                    <div className='intro'>
                        <span className='heading'><span className='salutation'>Hey</span>, there I am Aryan Sadh.</span>
                    </div>
                </div>
                <div className='words-gen'>
                    <TypeAnimation
                        sequence={[
                            'A Web Developer . . .',
                            1000,
                            'A Web Designer . . .',
                            2000,
                            'And a Content Writer . . .',
                            3000,
                            () => { },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </div>
                <div className='arrow-box'>
                    <AiOutlineArrowDown className='arrow' />
                </div>
            </div>
            <div className='pic'>
                <img className='pic-pp' src={pp} alt="Aryan Sadh front profile" />
            </div>
        </div>
    )
}


