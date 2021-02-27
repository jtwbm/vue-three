import { CircleGeometry } from 'three'

export default function ({
  radius = 3,
  segments = 15,
  thetaStart = 0,
  thetaLength = 2 * Math.PI
}) {
  return new CircleGeometry(
    radius,
    segments,
    thetaStart,
    thetaLength
  )
}
