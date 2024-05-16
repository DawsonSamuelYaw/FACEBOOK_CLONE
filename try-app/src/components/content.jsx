import React from 'react'
import pic from './pic.png'
import { VscAccount } from "react-icons/vsc";
import { RiLiveLine } from "react-icons/ri";


export default function content() {
  return (
    <div>
        <div className="content-main">
            <div className="logo">
                <img src={pic} alt="" className='con-pic' />

            </div>
            <div className="content-p">
                <p>Create story</p>
            </div>
        </div>
        <div className='sec'>
            <div className="sec-1">
                <div className="pic">
                    <VscAccount/>
                </div>
                <div className="in">
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="sec-2">
                <div className="live">
                    <RiLiveLine/>
                </div>
                <div className="photos">


                </div>
                <div className="feeling">

                </div>
            </div>

        </div>
    </div>
  )
}
