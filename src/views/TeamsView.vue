<template>
	<h1 class="text-6xl font-bold">Teams Page</h1>
	<button @click="goToHome">Go to Home Page</button>
</template>

<script>
	export default {
		name: 'TeamsView',
		methods: {
			goToHome() {
				this.$router.push({ name: 'Home' });
			},
		},
	};
</script>
