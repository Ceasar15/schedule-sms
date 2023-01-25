<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Company
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="3">
            Support
          </a>
        </li>
      </ul>
      <div class="copyright pull-right">
        © {{ year }} made with <i class="tim-icons icon-heart-2"></i> by
        <a href="#" target="_blank" rel="noopener">Me</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>

</style>
