import { PolyhedronGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      vertices,
      indices,
      radius,
      detail
    } = this.config
    this.geometry = new PolyhedronGeometry(
      vertices,
      indices,
      radius,
      detail
    )
  }
}
