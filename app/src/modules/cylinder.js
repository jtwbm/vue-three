import { CylinderGeometry } from 'three'

export default function ({
  radiusTop = 1,
  radiusBottom = 2,
  height = 3,
  radialSegments = 15,
  heightSegments = 10,
  openEnded = false,
  thetaStart = 0,
  thetaLength = 2 * Math.PI
}) {
  return new CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  )
}
