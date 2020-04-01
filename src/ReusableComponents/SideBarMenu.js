import React from 'react';
import MetisMenu from 'react-metismenu';



function SideBarMenu({content}) {
  return (
    <div>
      <MetisMenu content={content} />
    </div>
  );
}

export default SideBarMenu;