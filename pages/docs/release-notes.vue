<template>
  <div>
    <b-container id="container" fluid>
      <b-container class="pt-4 pb-4">
        <b-row>
          <b-col lg="12" class="mb-4">
            <b-breadcrumb :items="items" />
            <h1 class="mt-3">
              <b>Release Notes</b>
            </h1>
            <p>
              Release notes track incremental improvements and major releases for PHP South Africa's various products and services.
            </p>
            <div class="dropdown-divider" />
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12" class="mb-2">
            <div v-for="releaseNotesForMonth in releaseNotesGrouped" :key="releaseNotesForMonth.key">
              <b-row>
                <b-col lg="12" class="my-auto pt-2 pb-2">
                  <h3>
                    <b>{{ releaseNotesForMonth.month }}</b>
                  </h3>
                </b-col>
              </b-row>

              <b-row v-for="(releaseNotesForDay, day) in releaseNotesForMonth.days" :key="day">
                <b-col lg="12" class="my-auto">
                  <h5>
                    <b>{{ day }}</b>
                  </h5>
                  <ul>
                    <li v-for="releaseNote in releaseNotesForDay" :key="releaseNote">
                      {{ releaseNote }}
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </div>
            <p v-if="releaseNotes.length <= 0">
              There are currently no releases.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$axios.$get('/api/release-notes').then(function (response) {
      this.release_notes = response.data.release_notes
      const releaseNotesGrouped = {}
      for (let i = 0; i < this.release_notes.length; i++) {
        const releaseNote = this.release_notes[i]
        const date = new Date(releaseNote.created_at)
        const month = this.months[date.getMonth()] + ' ' + date.getFullYear()
        const day = this.months[date.getMonth()] + ' ' + date.getDate()
        if (!releaseNotesGrouped[month]) {
          releaseNotesGrouped[month] = {}
          releaseNotesGrouped[month].key = Object.keys(releaseNotesGrouped).length
          releaseNotesGrouped[month].month = month
          releaseNotesGrouped[month].days = {}
        }
        if (!releaseNotesGrouped[month].days[day]) {
          releaseNotesGrouped[month].days[day] = []
        }
        releaseNotesGrouped[month].days[day][releaseNotesGrouped[month].days[day].length] = releaseNote.body
      }
      this.release_notes_grouped = releaseNotesGrouped
    }.bind(this))
  },
  data () {
    return {
      items: [
        {
          text: 'Docs',
          href: '/docs'
        },
        {
          text: 'Platform Overview',
          href: '/docs#platform-overview'
        },
        {
          text: 'Release Notes',
          active: true
        }
      ],
      release_notes: [],
      release_notes_grouped: {},
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  computed: {
    releaseNotes () {
      return this.release_notes
    },
    releaseNotesGrouped () {
      return this.release_notes_grouped
    }
  },
  head: {
    title: 'Release Notes | PHP South Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Release notes track incremental improvements and major releases for PHP South Africa\'s various products and services.' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Release Notes | PHP South Africa' },
      { hid: 'og:title', name: 'og:title', content: 'Release Notes | PHP South Africa' },
      { hid: 'og:description', name: 'og:description', content: 'Release notes track incremental improvements and major releases for PHP South Africa\'s various products and services.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Release Notes | PHP South Africa' }
    ]
  }
}
</script>
