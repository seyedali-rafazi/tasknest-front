import React from 'react'
import SidebarNavlink from '../recomended-projects/SidebarNavlink'

function OrderSidebar() {
  return (
    <div className="flex flex-row justify-evenly lg:flex-col border border-secondery-200 rounded-lg shadow-sm overflow-x-scroll lg:overflow-x-hidden">
      <SidebarNavlink path="/order-project">
        <span className="whitespace-nowrap "> New project registration</span>
      </SidebarNavlink>
    </div>
  );
}

export default OrderSidebar