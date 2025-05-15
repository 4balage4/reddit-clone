import {render, screen} from '@testing-library/react'
import Layout from './Layout/Layout'
import {MemoryRouter} from 'react-router'
import ToastProvider from './ToastNotification/ToastProvider'
import { expect, describe, test } from 'vitest'
import { setActive } from '../features/menuSlices/activeSlice'

import { Provider } from 'react-redux'



// import the reducers to make a cleaner tests, but if I don't use any state importing the store would be enough
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../store'



describe('Menu button testing', () => {


  const renderLayout = (store) => {


        render(
          <Provider store={store}>
            <MemoryRouter>
            <ToastProvider>
              <Layout />
            </ToastProvider>
            </MemoryRouter>
          </Provider>
      )
  }

  test('menu buttons and form with a button is rendering', () => {
    const store = configureStore({ reducer: rootReducer })
      renderLayout(store)

      const europe = screen.getByRole('button', {name: /europe/i})
      const pics = screen.getByRole('button', {name: /pics/i})
      const home = screen.getByRole('button', {name: /home/i})
      const search = screen.getByRole('button', {name: /search/i})
      const input = screen.getByRole('textbox')
      expect(europe).toBeInTheDocument()
      expect(pics).toBeInTheDocument()
      expect(home).toBeInTheDocument()
      expect(search).toBeInTheDocument()
      expect(input).toBeInTheDocument()



    })



  test('sets and clickable', () => {
        const store = configureStore({ reducer: rootReducer })
    renderLayout(store)


        const europe = screen.getByRole('button', {name: /europe/i})

      const pics = screen.getByRole('button', {name: /pics/i})
      const home = screen.getByRole('button', {name: /home/i})
      const search = screen.getByRole('button', {name: /search/i})
      const input = screen.getByRole('textbox')



  })


})
