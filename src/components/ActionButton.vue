<template>
	<button
		class="rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white hover:shadow-blue"
		@click="handleClick"
	>
		Sign in
	</button>
</template>

<script>
	// Use options API.
	export default {
		name: 'ActionButton',
		methods: {
			handleClick() {
				console.log(`I have been clicked!`);
			},
		},
	};
</script>
