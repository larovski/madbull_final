import create from "zustand"
import produce from "immer"

export const useStore = create(set => ({
  openNews: false,
  openFaucet: false,
  openNavbar: false,
  toggleNews: state =>
    set(
      produce(draft => {
        draft.openNews = state
        draft.openFaucet = false
        draft.openNavbar = false
      })
    ),
  toggleFaucet: state =>
    set(
      produce(draft => {
        draft.openFaucet = state
        draft.openNavbar = false
        draft.openNews = false
      })
    ),
  toggleNavbar: state =>
    set(
      produce(draft => {
        draft.openNavbar = state
        draft.openFaucet = false
        draft.openNews = false
      })
    ),
}))
