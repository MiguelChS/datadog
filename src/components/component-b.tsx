import React, { useContext } from "react"
import { StoreContext } from '../context-app'

export const ComponentB: React.FC<{ props: any }> = ({ props }) => {
  const { clientState } = useContext(StoreContext)
  return <input value={clientState.name} />
}