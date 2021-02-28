import { RingGeometry } from 'three'

export default function ({
  innerRadius = 0.5,
  outerRadius = 1,
  thetaSegments = 8,
  phiSegments = 1,
  thetaStart = 0,
  thetaLength = Math.PI * 2
}) {
  return new RingGeometry(
    innerRadius,
    outerRadius,
    thetaSegments,
    phiSegments,
    thetaStart,
    thetaLength
  )
}
