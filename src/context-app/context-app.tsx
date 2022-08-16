import { createContext, useState } from 'react';
import { StoreContextState, StoreContextValue, StoreProviderProps } from './context-app-types';

export const defaultState: StoreContextState = {
}

export const StoreContext = createContext<StoreContextValue>({ clientState: defaultState, setState: () => { } })

export function StoreProvider({ children, values }: StoreProviderProps): JSX.Element {
  const [clientState, setClientState] = useState<StoreContextState>(values || defaultState)

  function setState(state: Partial<StoreContextState>) {
    setClientState(prevState => ({
      ...prevState,
      ...state
    }))
  }

  return (
    <StoreContext.Provider value={{ clientState, setState }}>
      {children}
    </StoreContext.Provider>
  )
}
