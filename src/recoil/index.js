import { atom, selector } from 'recoil'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000/'
})

// Les déclarations
export const declarationsSelector = selector({
  key: 'declarationsSelector',
  get: async () => {
    const { data } = await request.get('declarations.json')
    return data
  }
})
export const declarationsState = atom({
  key: 'declarationsState',
  default: declarationsSelector
})



// Une déclaration et ses détails
export const selectedDeclarationIdState = atom({
  key: 'selectedDeclarationIdState',
  default: null
})
export const selectedDeclarationSelector = selector({
  key: 'selectedDeclarationSelector',
  get: async ({ get }) => {
    const id = get(selectedDeclarationIdState)
    if (id === null) return false
    const { data } = await request.get(`${id}.json`)
    return data
  }
})
export const selectedDeclarationState = atom({
  key: 'selectedDeclarationState',
  default: selectedDeclarationSelector
})