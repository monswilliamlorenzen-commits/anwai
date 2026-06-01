(function () {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let spatialGrid = {};
  const GRID_SIZE = 150;

  let state = {
    mode: 'cosmic-dust', speed: 1.3, pulse: 1, turbulence: 0.3, density: 50,
    scale: 1, symmetry: 6, coherence: 0.7, depth: 0.8, trails: 0.2,
    color: '#ffffff', bgColor: '#0a0a0a', style: 'dots', mouseInfluence: 0.5,
    interactionRange: 150, colorMode: 'solid', gradientColor1: '#ff006e',
    gradientColor2: '#8338ec', gradientColor3: '#3a86ff', gradientSpeed: 1,
    noise: 0, glitch: 0, rgbDistortion: 0, scanlines: 0, ghostTrails: 0,
    trailOpacity: 0.7, brightness: 1, interactionMode: 'mouse', autoAnimSpeed: 1,
    waveFrequency: 1, chaos: 0.3, distanceMode: 'center', distanceStrength: 0.5,
    mappingScale: 1, time: 0, mouseX: -9999, mouseY: -9999, particles: []
  };

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }

  function updateSpatialGrid() {
    spatialGrid = {};
    for (let p of state.particles) {
      const gx = Math.floor(p.x / GRID_SIZE);
      const gy = Math.floor(p.y / GRID_SIZE);
      const key = `${gx},${gy}`;
      if (!spatialGrid[key]) spatialGrid[key] = [];
      spatialGrid[key].push(p);
    }
  }

  class Particle {
    constructor(x, y) {
      this.x = x; this.y = y;
      this.baseX = x; this.baseY = y;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.size = Math.random() * 3 + 1;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 0.5 + 0.5;
      this.phase = Math.random() * Math.PI * 2;
    }

    update() {
      const t = state.time * state.speed;
      const pulse = Math.sin(t * state.pulse + this.phase) * 0.5 + 0.5;
      this.vx += (Math.random() - 0.5) * 0.1 * state.turbulence;
      this.vy += (Math.random() - 0.5) * 0.1 * state.turbulence;
      this.vx *= 0.95; this.vy *= 0.95;
      this.x += this.vx * state.speed;
      this.y += this.vy * state.speed;
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
      this.size = (1 + pulse * 0.3) * state.scale * 2;

      const mdx = state.mouseX - this.x;
      const mdy = state.mouseY - this.y;
      const distSq = mdx * mdx + mdy * mdy;
      const rangeSq = state.interactionRange * state.interactionRange;
      if (distSq < rangeSq && distSq > 0) {
        const mdist = Math.sqrt(distSq);
        const influence = (1 - mdist / state.interactionRange) * state.mouseInfluence;
        this.x += (mdx / mdist) * influence * 2;
        this.y += (mdy / mdist) * influence * 2;
      }
    }

    draw() {
      ctx.globalAlpha = state.depth;
      ctx.fillStyle = state.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function initParticles() {
    state.particles = [];
    const count = state.density * 10;
    for (let i = 0; i < count; i++) {
      state.particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
  }

  let lastFrameTime = performance.now();
  function animate() {
    const now = performance.now();
    const deltaTime = Math.min((now - lastFrameTime) / 1000, 0.033);
    lastFrameTime = now;

    ctx.fillStyle = hexToRgba(state.bgColor, 1 - state.trails * 0.5);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    state.particles.forEach(p => p.update());
    state.particles.forEach(p => p.draw());

    state.time += deltaTime * state.speed;
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', (e) => {
    state.mouseX = e.clientX;
    state.mouseY = e.clientY;
  });

  resizeCanvas();
  animate();
})();
