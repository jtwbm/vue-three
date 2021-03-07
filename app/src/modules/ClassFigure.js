import { MeshBasicMaterial, Mesh } from 'three'

export class Figure {
  constructor ({ id, type, config }) {
    this.id = id
    this.type = type
    this.config = config

    this.geometry = null
    this.material = null
    this.figure = null
  }

  createGeometry () {
    throw new Error('Нужно вызывать метод create() из дочернего класса!')
  }

  createMaterial () {
    this.material = new MeshBasicMaterial({
      color: this.config.color,
      wireframe: this.config.wireframe
    })
  }

  createFigure () {
    const mesh = new Mesh(this.geometry, this.createMaterial())
    mesh.name = this.id
    return mesh
  }

  create () {
    this.createGeometry()
    this.createMaterial()
    const figure = this.createFigure()
    return figure
  }
}
