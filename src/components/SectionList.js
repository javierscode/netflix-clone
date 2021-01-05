import React from 'react'
import { getOriginalImage } from '../utils'

const SectionList = ({title, list}) => {
    return (
        <div className="section-list">
            <h2>{title}</h2>
            <div className="list">
                {list.map((item)=>(
                  <div className="item" style={{backgroundImage: "url('"+getOriginalImage(item.backdrop_path)+"')"}}>
                    <h3>{item.name ? item.name : item.title}</h3>
                  </div>
                ))}
            </div>
          </div>
    )
}
export default SectionList