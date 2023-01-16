<script setup lang="ts">
onMounted(() => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  circles.forEach(function (circle: any, index: any) {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle: any, index: any) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle: any = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
});
</script>
<template>
  <main class="cursor">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </main>
</template>
<style>
.cursor {
  pointer-events: none;
  position: fixed;
  display: block;
  border-radius: 0;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  z-index: 9999999999999999;
}

.circle {
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 20px;
  background-color: #fff;
}
</style>
