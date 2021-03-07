import { ParametricGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      func,
      slices,
      stacks
    } = this.config
    this.geometry = new ParametricGeometry(
      func,
      slices,
      stacks
    )
  }
}
