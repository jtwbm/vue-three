import { BoxGeometry } from 'three'

export default function ({
  width = 1,
  height = 1,
  depth = 1,
  widthSegments = 1,
  heightSegments = 1,
  depthSegments = 1
}) {
  return new BoxGeometry(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegments
  )
}
