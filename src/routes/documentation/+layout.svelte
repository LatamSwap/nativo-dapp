<script lang="ts">
	import Sidebar from './Sidebar.svelte';
</script>

<div class="w-full h-full flex flex-col overflow-hidden">
	<div class="flex-auto w-full h-full flex overflow-hidden">
		<aside
			class="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto hidden md:block"
		>
			<div
				class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 lg:grid w-[360px] overflow-hidden"
			>
				<Sidebar />
			</div>
		</aside>

		<div class="overflow-y-scroll flex-1 overflow-x-hidden flex flex-col">
			<main class="flex-auto">
				<div class="layout-docs p-10 flex items-start gap-10 doc-shell relative">
					<div class="mx-auto w-full max-w-4xl">
						<slot />
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
