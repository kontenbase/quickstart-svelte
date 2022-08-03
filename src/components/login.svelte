<script>
  import { navigate } from 'svelte-routing';
  import { kontenbase } from '../lib/kontenbaseClient';

  let username;
  let password;

  const handleLogin = async () => {
    const { error, token } = await kontenbase.auth.login({
      // @ts-ignore
      username,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }
    if (token) {
      navigate('/profile');
    }
  };
</script>

<form on:submit|preventDefault={handleLogin}>
  <input type="hidden" name="operation" value="login" />
  <div class="form-group">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      bind:value={username}
    />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      bind:value={password}
    />
  </div>
  <div class="form-button">
    <button type="submit" class="button button-primary">Submit</button>
  </div>
</form>
