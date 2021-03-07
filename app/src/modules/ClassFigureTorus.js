import { TorusGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radius = 2,
      tube = 1,
      radialSegments = 15,
      tubularSegments = 20,
      arc = 2 * Math.PI
    } = this.config
    this.geometry = new TorusGeometry(
      radius,
      tube,
      radialSegments,
      tubularSegments,
      arc
    )
  }
}
