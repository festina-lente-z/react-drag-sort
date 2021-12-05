import { useState } from 'react'
import DragItem from './DragItem'
import './style.css'

const navList = ['茶茶丸', '雷姆', '苹果', '花寿司', '杰克', '美玲', '百合', '小润', '月兔', '彭花']

const DragList = () => {
  const [items, setItems] = useState(navList);
  const itemDropped = item => setItems([...items, item]);
  return (
    <div className="list">
      {navList.map((item, index) => {
        return <DragItem key={index} item={item} index={index} onItemDropped={itemDropped}/>
      })}
    </div>
  )
}

export default DragList