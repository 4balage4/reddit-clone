import React from 'react'
// npm install classnames
import classnames from 'classnames'

function Button({className, children, ...rest}) {

  let allClasses = classnames(className)

  return (
    <button className={allClasses} {...rest}>{children}</button>
  )
}

export default Button
