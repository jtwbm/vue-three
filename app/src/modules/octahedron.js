import { OctahedronGeometry } from 'three'

export default function ({
  radius = 1,
  detail = 0
}) {
  return new OctahedronGeometry(
    radius,
    detail
  )
}
