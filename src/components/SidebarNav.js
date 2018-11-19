import React from 'react';

const SidebarNav = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Email Helper</h1>
      <ul className="sidebar__list">
        <li className="sidebar__listitem">Create New</li>
        <li className="sidebar__listitem">Edit Existing</li>
        <li className="sidebar__listitem">View All</li>
      </ul>
    </div>
  )
}

export default SidebarNav;
