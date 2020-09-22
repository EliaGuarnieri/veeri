<template>
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 247 102"
    width="60"
    height="26"
    :fill="colore"
  >
    <rect id="i" x="240.5" y="17" width="5" height="84" />
    <path
      id="r"
      d="M204.1,59c7,0.1,13.6-3.2,17.7-8.8c2.6-3.5,4-7.8,3.9-12.2c0.1-4.4-1.3-8.7-3.9-12.2c-4.2-5.6-10.8-8.9-17.7-8.8
	h-25.6v84h5V59h12.8l22.2,42h5l-22.2-42H204.1z M183.5,54V22h21.3c0,0,16,0,16,16s-16,16-16,16H183.5z"
    />
    <g id="icona">
      <polygon
        id="e-dx"
        points="167.5,17 167.5,101 117.5,101 117.5,96 162.5,96 162.5,59 125.5,59 125.5,54 162.5,54 162.5,22
		117.5,22 117.5,17 	"
      />
      <polygon
        id="e-sx"
        points="73.5,22 73.5,54 110.5,54 110.5,59 73.5,59 73.5,96 118.5,96 118.5,101 68.5,101 68.5,17 118.5,17
		118.5,22 	"
      />
      <circle id="pallino" cx="118.4" cy="6" r="5.2" />
    </g>
    <polygon id="v" points="0.8,17 6,17 32.1,85 53.1,17 58.3,17 32.1,100.7 " />
  </svg>
</template>

<script>
export default {
  props: {
    colore: {
      type: String,
      default: 'hsl(238, 76%, 48%)',
    },
  },
}
</script>

<style>
#logo {
  animation: 1s appear;
  margin: auto;
  shape-rendering: geometricPrecision;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
