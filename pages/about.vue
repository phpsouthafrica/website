<template>
  <div>
    <b-container id="container" fluid>
      <b-container class="pt-4 pb-3">
        <b-row>
          <b-col lg="12" class="mb-4">
            <div id="content-icon" />
            <p style="font-size: 18px;" class="text-justify">
              About
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <ContactBanner />
  </div>
</template>

<script>
import ContactBanner from '~/components/ContactBanner.vue'

export default {
  components: {
    ContactBanner
  },
  head: {
    title: 'About PHP South Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PHP South Africa' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'About PHP South Africa' },
      { hid: 'og:title', name: 'og:title', content: 'About PHP South Africa' },
      { hid: 'og:description', name: 'og:description', content: 'PHP South Africa' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'About PHP South Africa' }
    ]
  }
}
</script>

<style>
#content-icon {
  height: 225px;
  background-image: url('/logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
