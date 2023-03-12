
import {Link}from "react-router-dom";
import "./sidebar.css"

const navitem=[
    {display:"Home",to:"/"},
    {display:"Contact",to:"/contact"},
    {display:"about",to:"/about"}
]
export const Sidebar=()=>{

    return(
        <div id="sidebar">
            {
                navitem.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div id="outerd" >
                            <div className="item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}