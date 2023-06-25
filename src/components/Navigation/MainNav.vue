<template>
	<header :class="['w-full', 'text-sm', headerHeightClass]">
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
						text="Sign in"
						type="primary"
						@click="loginUser"
					/>
				</div>
			</div>
			<the-subnav v-if="isLoggedIn" />
		</div>
	</header>
</template>

<script>
	// Use options API for now, instead of the Vue 3 composition API.
	import ActionButton from '@/components/Shared/ActionButton.vue';
	import ProfileImage from '@/components/Navigation/ProfileImage.vue';
	import TheSubnav from '@/components/Navigation/TheSubnav.vue';

	export default {
		name: 'MainNav',
		components: {
			ActionButton,
			ProfileImage,
			TheSubnav,
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
		computed: {
			headerHeightClass() {
				return {
					'h-16': !this.isLoggedIn,
					'h-32': this.isLoggedIn,
				};
			},
		},
		methods: {
			loginUser() {
				this.isLoggedIn = true;
			},
		},
	};
</script>
