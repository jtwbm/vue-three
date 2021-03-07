import { CircleGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radius = 3,
      segments = 15,
      thetaStart = 0,
      thetaLength = 2 * Math.PI
    } = this.config
    this.geometry = new CircleGeometry(
      radius,
      segments,
      thetaStart,
      thetaLength
    )
  }
}
