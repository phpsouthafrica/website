<template>
  <div>
    <b-container id="container" fluid>
      <b-container class="pt-4 pb-5 mb-5">
        <b-row>
          <b-col lg="12" class="mb-5">
            <h1 class="mt-3">
              <b>PHP South Africa Documentation</b>
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12" class="mb-5">
            <span id="platform-overview" style="position: relative; top: -220px;" />
            <h3 class="mt-3">
              <b>Platform Overview</b>
            </h3>
            <b-link href="/docs/release-notes">
              <b>Release Notes</b>
            </b-link>
            <p>
              Release notes track incremental improvements and major releases for the various PHP South Africa products and services (i.e. The Platform).
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Docs | PHP South Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Helpful information on the PHP South Africa platform.' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Docs | PHP South Africa' },
      { hid: 'og:title', name: 'og:title', content: 'Docs | PHP South Africa' },
      { hid: 'og:description', name: 'og:description', content: 'Helpful information on the PHP South Africa platform.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Docs | PHP South Africa' }
    ]
  }
}
</script>
