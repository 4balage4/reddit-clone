import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router'
import ToastProvider from '../components/ToastNotification/ToastProvider'
import { Provider } from 'react-redux'
import { setupStore } from '@reduxjs/toolkit'
import { rootReducer } from '../store'



function renderWithProviders(ui, extendedRenderOptions = {}) {

  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions


  const Wrapper = ({children}) => (
    <Provider store={store}>{children}

    </Provider>
  )

  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions})
  }
}

export default test-utils
