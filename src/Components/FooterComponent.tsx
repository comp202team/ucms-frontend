import React from 'react';

const FooterComponent = () => {

    
  return (
    <div>
      <footer style={{
        textAlign:"center",
        position:"fixed",
        bottom:0,
        width:"100%",
        backgroundColor: "#f2f2f2",
        padding:10,
    }}>
        <span className="text-muted">School Management System</span>
      </footer>
    </div>
  );
};

export default FooterComponent;