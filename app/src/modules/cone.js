import { ConeGeometry } from 'three'

export default function ({
  radius = 1,
  height = 3,
  radialSegments = 5,
  heightSegments = 10,
  openEnded = false,
  thetaStart = 0,
  thetaLength = 2 * Math.PI
}) {
  return new ConeGeometry(
    radius,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  )
}
