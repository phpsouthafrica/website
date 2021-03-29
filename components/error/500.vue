<template>
  <div>
    <b-container id="container" fluid>
      <b-container class="pt-4 pb-4">
        <b-row>
          <b-col lg="1" />
          <b-col lg="10" class="mb-5 text-center">
            <h1 class="mt-3">
              <b>500 - Server Error</b>
            </h1>
            <p style="font-size: 18px;">
              We apologise for the inconvenience, something went wrong on our end. Please try refreshing the page, or going back and attempting the action again.
            </p>
            <div id="error-icon-500" />
          </b-col>
          <b-col lg="1" />
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  head: {
    title: '500 - Server Error | PHP South Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '500 - Server Error.' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: '500 - Server Error | PHP South Africa' },
      { hid: 'og:title', name: 'og:title', content: '500 - Server Error | PHP South Africa' },
      { hid: 'og:description', name: 'og:description', content: '500 - Server Error.' },
      { hid: 'og:site_name', name: 'og:site_name', content: '500 - Server Error | PHP South Africa' }
    ]
  }
}
</script>

<style>
#error-icon-500 {
  height: 420px;
  background-image: url('/images/errors/500.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 1256px) {
  #error-icon-500 {
      height: 256px;
  }
}
</style>
