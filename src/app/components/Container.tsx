import React from 'react'


 interface Ichildren {
        children : React.ReactNode;
    }

function Container({ children }: Ichildren) {
  return <div className="mx-auto px-4 max-w-screen-xl">{children}</div>;
}

export default Container;
