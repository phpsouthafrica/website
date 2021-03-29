<template>
  <footer id="app-footer" class="container-fluid py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm">
          <h5>Company</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/about">About</a>
            </li>
            <li>
              <a class="text-muted" href="/events">Events</a>
            </li>
            <li>
              <a class="text-muted" href="/newsletter">Newsletter</a>
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <h5>Products</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/docs">Documentation</a>
            </li>
            <li>
              <a class="text-muted" href="/docs/release-notes">Release Notes</a>
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <h5>Contact</h5>
          <ul class="list-unstyled text-small">
            <li class="mt-2">
              <a class="text-muted" href="#" target="_">
                <img src="/footer/linkedin.png" height="20px">
              </a>
            </li>
            <li>
              <a class="text-muted" href="tel:0623489186">Tel: +27(0) 62 348 9186</a>
            </li>
            <li>
              <a class="text-muted" href="mailto:info@phpsouthafrica.org">Email: info@phpsouthafrica.org</a>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row align-items-center justify-content-center">
        <div class="col-xs text-center">
          <a href="/">
            <img src="/logo.png" alt="Logo" height="64px">
          </a>
        </div>
        <div class="col-xs text-center">
          <small class="text-muted text-justify">
            ©
            <span id="copyrght-date">2020</span> PHP South Africa. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  mounted () {
    this.setCopyrightDate()
  },
  methods: {
    setCopyrightDate () {
      const copyrightDate = document.getElementById('copyrght-date')
      copyrightDate.innerHTML = (new Date()).getFullYear()
    }
  }
}
</script>
