import { PolyhedronGeometry } from 'three'

export default function ({
  vertices,
  indices,
  radius,
  detail
}) {
  return new PolyhedronGeometry(
    vertices,
    indices,
    radius,
    detail
  )
}
