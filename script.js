
const inputs = document.querySelectorAll('.control .input')

function handleUpdate(){
    const suffix = this.dataset.sizing || ''
    console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))