import { ShapeGeometry } from 'three'

export default function ({
  shapes,
  curveSegments = 12
}) {
  return new ShapeGeometry(
    shapes,
    curveSegments
  )
}
