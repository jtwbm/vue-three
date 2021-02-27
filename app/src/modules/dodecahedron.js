import { DodecahedronGeometry } from 'three'

export default function ({
  radius = 3,
  detail = 10
}) {
  return new DodecahedronGeometry(
    radius,
    detail
  )
}
