import { createContext, useContext, useState } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

// the children will render everything because this is wrapped around the whole app.
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    console.log(toasts)

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{addToast}}>
      {children}

      <div className="toasts-container">
        {toasts.map((toast) => {
          return (
            <Toast key={toast.id} type={toast.type}>
              {toast.message}
            </Toast>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;

export const useToast = () => useContext(ToastContext);
