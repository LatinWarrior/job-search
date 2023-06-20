<template>
	<header class="w-full text-sm">
		<div class="fixed left-0 top-0 h-16 w-full bg-white">
			<div
				class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
			>
				<a
					:href="url"
					target="_blank"
					class="flex h-full items-center text-xl"
					>{{ company }}</a
				>
				<nav class="ml-12 h-full">
					<ul class="flex h-full list-none">
						<li
							class="ml-9 h-full"
							v-for="menuItem in menuItems"
							v-bind:key="menuItem"
						>
							<a
								href="#"
								class="flex h-full items-center py-2.5"
								>{{ menuItem }}</a
							>
						</li>
					</ul>
				</nav>
				<div class="ml-auto flex h-full items-center">
					<profile-image v-if="isLoggedIn" />
					<action-button
						v-else
						@click="loginUser"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	// Use options API for now, instead of the Vue 3 composition API.
	import ActionButton from '@/components/ActionButton.vue';
	import ProfileImage from './ProfileImage.vue';

	export default {
		name: 'MainNav',
		components: {
			ActionButton,
			ProfileImage,
		},
		data() {
			return {
				company: 'Doodle Careers',
				url: 'https://careers.google.com',
				menuItems: [
					'Teams',
					'Locations',
					'Life at Doodle Corp',
					'How we hire',
					'Students',
					'Jobs',
				],
				isLoggedIn: false,
			};
		},
		methods: {
			loginUser() {
				this.isLoggedIn = true;
			},
		},
	};
</script>
