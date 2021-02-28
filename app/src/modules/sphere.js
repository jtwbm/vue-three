import { SphereGeometry } from 'three'

export default function ({
  radius = 1,
  widthSegments = 8,
  heightSegments = 6,
  phiStart = 0,
  phiLength = Math.PI * 2,
  thetaStart = 0,
  thetaLength = Math.PI
}) {
  return new SphereGeometry(
    radius,
    widthSegments,
    heightSegments,
    phiStart,
    phiLength,
    thetaStart,
    thetaLength
  )
}
