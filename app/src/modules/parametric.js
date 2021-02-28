import { ParametricGeometry } from 'three'

export default function ({
  func,
  slices,
  stacks
}) {
  return new ParametricGeometry(
    func,
    slices,
    stacks
  )
}
