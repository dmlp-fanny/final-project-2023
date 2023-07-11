import { useState } from "react";
import "./Tag.scss";

export default function Tag ({ tag }){
    const { tag_name } = tag
    
    return (
 
        <div className={'tag tag' + (tag.id % 10)}>
        { tag_name }
        </div>
    )
}
