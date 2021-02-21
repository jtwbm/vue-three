<template>
  <div ref="canvas"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'App',
  data() {
    return {
      winW: window.innerWidth || 100,
      winH: window.innerHeight || 100,
      // локальная камера
      fov: 75,
    };
  },
  methods: {
    init() {
      //   1. Создаем сцену
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xcccccc);
      
      this.camera = new THREE.PerspectiveCamera(this.fov, this.winW / this.winH, 1, 1000);
      this.camera.position.z = 5;
      this.camera.position.y = 1;
      this.camera.position.x = 1;
      
      //   вспомогательные оси x, y, z
      let axes = new THREE.AxesHelper(5);
      this.scene.add(axes);
      this.donut = new this.Torus(0x562354);
      this.scene.add(this.donut);
      
      //   3. Создаем визуализатор (renderer)
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.winW, this.winH);
      
      this.$refs.canvas.appendChild(this.renderer.domElement); // добавляем визаулизатор в DOM
    },
    loop() {
      this.renderer.render(this.scene, this.camera); // рендер сцены
      this.donut.rotation.y -= .01;
      this.donut.rotation.z += .01;
      this.donut.rotation.x += .01;

      requestAnimationFrame(this.loop);
    },
    Torus(color = 0xcccccc) {
      // радиус кольца, толщина кольца, кол-во сегментов создающих толщину, кол-во сегментов создающих круг, арка
      const geometry = new THREE.TorusGeometry(1,.4,10,20,2 * Math.PI);
      const material = new THREE.MeshBasicMaterial({ color: color,
                                                   wireframe: true});
      const torus = new THREE.Mesh(geometry, material);
      return torus;
    },
  },
  mounted() {
    this.init();
    this.loop();
  }
}
</script>
<style lang="scss">
@import 'reset-css';
</style>