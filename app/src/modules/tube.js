import { TubeGeometry } from 'three'

export default function ({
  path,
  tubularSegments = 64,
  radius = 1,
  radialSegments = 8,
  closed = false
}) {
  console.log(path)
  return new TubeGeometry(
    path,
    tubularSegments,
    radius,
    radialSegments,
    closed
  )
}
