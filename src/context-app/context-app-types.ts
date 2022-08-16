
export interface StoreContextState extends Record<string, any> {}

export interface StoreContextValue {
  clientState: StoreContextState
  setState: (values: Partial<StoreContextState>) => void
}

export interface StoreProviderProps {
  children: React.ReactNode,
  values: StoreContextState
}