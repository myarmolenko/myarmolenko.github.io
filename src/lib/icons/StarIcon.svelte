<script lang="ts">
	let { points, filled }: { points: string; filled: boolean } = $props();
</script>

<svg
	class="star-icon"
	class:filled
	viewBox="0 0 24 24"
	width="24"
	height="24"
	aria-hidden="true"
>
	<polygon {points} />
</svg>

<style>
	.star-icon {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linejoin: round;
	}

	.star-icon.filled {
		fill: currentColor;
	}
</style>
