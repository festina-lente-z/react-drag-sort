import { useState } from 'react'
import './style.css'

const DragItem = (props) => {
  const { item, onItemDropped } = props
  const handleDragStart = (ev) => {
    ev.dataTransfer.setData('drag-item', item)
  }

  const handleDragOver = (ev) => {
    
    ev.preventDefault()
  }

  const handleDrop = (ev) => {
    // drop 事件的默认行为是以链接形式打开
    ev.preventDefault()
    const data = ev.dataTransfer.getData('drag-item')
    console.log(data);
    if (data) {
      onItemDropped(data)
    }
  }
  return (
    <div 
      className="item"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {item}
    </div>
  )
}

export default DragItem