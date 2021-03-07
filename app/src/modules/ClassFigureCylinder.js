import { CylinderGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radiusTop = 1,
      radiusBottom = 2,
      height = 3,
      radialSegments = 15,
      heightSegments = 10,
      openEnded = false,
      thetaStart = 0,
      thetaLength = 2 * Math.PI
    } = this.config
    this.geometry = new CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    )
  }
}
