<script>
    let { children } = $props();
</script>

<div style="display:flex">

    <aside>

        Dashboard Sidebar

    </aside>

    <main>

        {@render children()}

    </main>

</div>