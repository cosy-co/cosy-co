<script lang="ts">
  import { Footer, Header } from '@components/layout';

  import '../app.css';
</script>

<div>
  <Header />
  <div class="max-w-7xl mx-auto w-11/12">
    <slot />
  </div>
  <Footer />
</div>
