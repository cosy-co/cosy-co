<script lang="ts">
  import { Footer, Header } from '@lib/components/layout';

  import '../app.css';
</script>

<div>
  <Header />
  <div class="min-h-[50vh] relative">
    <slot />
  </div>
  <Footer />
</div>
