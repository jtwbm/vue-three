import { TorusKnotGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radius = 1,
      tube = 0.4,
      tubularSegments = 64,
      radialSegments = 8,
      p = 2,
      q = 3
    } = this.config
    this.geometry = new TorusKnotGeometry(
      radius,
      tube,
      tubularSegments,
      radialSegments,
      p,
      q
    )
  }
}
