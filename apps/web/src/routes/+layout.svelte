<script lang="ts">
  import { Footer, Header } from '@components/layout';

  import '../app.css';
</script>

<div>
  <Header />
  <div class="min-h-[50vh]">
    <slot />
  </div>
  <Footer />
</div>
