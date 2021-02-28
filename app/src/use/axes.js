import { AxesHelper } from 'three'

export function useAxes (size) {
  const axes = new AxesHelper(size)
  return { axes }
}
