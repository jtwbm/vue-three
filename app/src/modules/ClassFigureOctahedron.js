import { OctahedronGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radius = 1,
      detail = 0
    } = this.config
    this.geometry = new OctahedronGeometry(
      radius,
      detail
    )
  }
}
