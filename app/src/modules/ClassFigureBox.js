import { BoxGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      width = 1,
      height = 1,
      depth = 1,
      widthSegments = 1,
      heightSegments = 1,
      depthSegments = 1
    } = this.config
    this.geometry = new BoxGeometry(
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    )
  }
}
