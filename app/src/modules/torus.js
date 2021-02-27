import { TorusGeometry } from 'three'

export default function ({
  radius = 2,
  tube = 1,
  radialSegments = 15,
  tubularSegments = 20,
  arc = 2 * Math.PI
}) {
  return new TorusGeometry(
    radius,
    tube,
    radialSegments,
    tubularSegments,
    arc
  )
}
