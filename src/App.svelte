<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './home.svelte';
  import EditProfile from './edit-profile.svelte';

  export let url = '';
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/profile" component={EditProfile} />
</Router>
