import { ShapeGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      shapes,
      curveSegments = 12
    } = this.config
    this.geometry = new ShapeGeometry(
      shapes,
      curveSegments
    )
  }
}
