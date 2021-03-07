import { DodecahedronGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radius = 3,
      detail = 10
    } = this.config
    this.geometry = new DodecahedronGeometry(
      radius,
      detail
    )
  }
}
