const inputs = document.querySelectorAll('.controls input');
function updateHandler() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);


  console.log(this.name);
}
inputs.forEach(input => input.addEventListener('change', updateHandler));
inputs.forEach(input => input.addEventListener('mousemove', updateHandler));
