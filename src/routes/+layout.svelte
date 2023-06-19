<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import AuthProvider from '$lib/stores/auth/AuthProvider.svelte';

	import Topbar from './topbar.svelte';
</script>

<AuthProvider>
	<!-- App Shell -->
	<AppShell>
		<svelte:fragment slot="header">
			<!-- App Bar -->

			<Topbar />
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />

		<svelte:fragment slot="pageFooter">
			<div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
				<hr class="opacity-20" />
				<section
					class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0"
				>
					<p>
						<a
							class="anchor"
							href="https://github.com/latamswap/nativo/blob/master/LICENSE"
							target="_blank"
							rel="noreferrer">BUSL-1.1 License</a
						> <span class="opacity-10 mx-2">|</span>
						<a
							class="anchor"
							href="https://www.github.com/latamswap/"
							target="_blank"
							rel="noreferrer">LatamSwap</a
						>
					</p>

					<div class="flex space-x-4">
						<a class="btn variant-soft" href="/documentation"> <span>Documentation</span></a>
						<a
							class="btn variant-soft"
							href="https://github.com/latamswap/nativo"
							target="_blank"
							rel="noreferrer"
						>
							<span>Github</span></a
						>
					</div>
				</section>
			</div>
		</svelte:fragment>
	</AppShell>
</AuthProvider>
