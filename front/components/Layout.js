import React, { Fragment } from 'react'


const Layout = ( {children} ) => {
    return (
        <Fragment>
            <div>영역1</div>
            <div>{ children }</div>
            <div>영역2</div>
        </Fragment>
    )
}

export default Layout