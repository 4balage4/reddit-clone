
function Toast({children, type}) {
  return (
    <div className={`toast ${type}`}>{children}</div>
  )
}

export default Toast
