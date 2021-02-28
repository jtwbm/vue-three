import { PlaneGeometry } from 'three'

export default function ({
  width = 1,
  height = 1,
  widthSegments = 1,
  heightSegments = 1
}) {
  return new PlaneGeometry(
    width,
    height,
    widthSegments,
    heightSegments
  )
}
