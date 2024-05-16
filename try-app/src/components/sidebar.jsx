import React from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import { CgFeed, CgGames } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { ImFlag } from "react-icons/im";
import { MdEvent, MdGroups, MdOndemandVideo, MdOutlinePayment, MdOutlineSaveAlt } from "react-icons/md";
import { RiMemoriesFill } from "react-icons/ri";
import { RxActivityLog } from "react-icons/rx";
import { SiAlwaysdata } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";




export default function sidebar () {
  return (
    <div>
    <div className="side-center">
    <div className="side-items">
       <div className="item-1">
        <div className="sub">
            <VscAccount/>
        </div>
        <div className="sub">
        <a href="">Samuel Dawson</a>
        </div>

       </div>
       <div className="item-1">
        <div className="sub">
            <FaUserFriends/>
            </div>
            <div className="sub">
       <a href="">Find Friends</a>
                </div>        
       </div>
       <div className="item-1">
       <div className="sub">
       <RiMemoriesFill/>
        </div>
        <div className="sub">
       <a href="">Memories</a>
        </div>
        
       </div>
       <div className="item-1">
        <div className="sub">
            <MdOutlineSaveAlt />
            </div>
            <div className="sub">
       <a href="">Saved</a>
                
                </div>
       </div>
       <div className="item-1">
        <div className="sub">
            <MdGroups/>
        </div>
        <div className="sub">
       <a href="">Groups</a>
            
            </div>        
       </div>
       <div className="item-1">
        <div className="sub">
            <MdOndemandVideo/>
        </div>
        <div className="sub">
       <a href="">Videos</a>
            
            </div>        
       </div>
       <div className="item-1">
        <div className="sub">
        < GoHomeFill />
        </div>
        <div className="sub">
        <a href="">Marketplace</a>

        </div>
        
       </div>
       <div className="item-1">
        <div className="sub">
           <CgFeed /> 
        </div>
        <div className="sub">
       <a href="">Feeds</a>
            
            </div>        
       </div>
       <div className="item-1">
        <div className="sub">
            <MdEvent/>

        </div>
        <div className="sub">
       <a href="">Events</a>


        </div>
        
       </div>
       <div className="item-1">
        <div className="sub">
            <SiAlwaysdata/>
        </div>
        <div className="sub">
        <a href="">Ads Manager</a>
        </div>
        
       </div>
       <div className="item-1">
        <div className="sub">
        <MdOutlinePayment/>

        </div>
        <div className="sub">
       <a href="">Order and payments</a>

        </div>
        
       </div>
       <div className="item-1">
        <div className="sub">
            <ImFlag/>

        </div>
        <div className="sub">
       <a href="">Pages</a>

        </div>
        
       </div>
       <div className="item-1">
        <div className="sub">
        <CgGames/>
        </div>
        <div className="sub">
       <a href="">Play Games</a>
            
            </div>       
        
       </div>
       <div className="item-1">
        <div className="sub">
         <RxActivityLog/>
        </div>
        <div className="sub">
        <a href="">Recent Activity</a>
        </div>
        
       </div>
    </div>
    <div className="cSide">
        <div className="main-center">
            <div className="box1">
                <div className="profile">
                    <AiFillAccountBook/>
                </div>

                <p>Create Story</p>
            </div>
        </div>

    </div>
    
    <div className="lSide">
        
        
    </div>
    </div>
    </div>
  )
}
