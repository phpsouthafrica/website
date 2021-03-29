<template>
  <b-navbar id="navbar" toggleable="md" type="light" variant="light" class="fixed-top">
    <b-navbar-brand href="#">
      <img src="/logo.png" alt="Logo" height="64px">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">
          Home
        </b-nav-item>
        <b-nav-item href="/about">
          About
        </b-nav-item>
        <b-nav-item href="/contact">
          Contact
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <a href="/register" class="btn btn-primary my-2 my-sm-0">Register</a>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  mounted () {
    this.setActiveNavbarItem()
  },
  methods: {
    setActiveNavbarItem () {
      const pathname = location.pathname
      if (pathname.localeCompare('/contact') !== 0) {
        const matchingNavbarItem = document.querySelector('a[href="' + pathname + '"]')
        if (matchingNavbarItem) {
          matchingNavbarItem.className += ' active'
        }
      }
    }
  }
}
</script>
