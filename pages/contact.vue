<template>
  <div>
    <b-container id="container" fluid>
      <b-container class="pt-4 pb-5 mb-3">
        <b-row>
          <b-col lg="12" class="mb-3 text-center">
            <h1 class="mt-3">
              <b>Get In Touch</b>
            </h1>
            <p style="font-size: 18px;" class="text-justify">
              Contact
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <b-alert
              v-model="success"
              variant="primary"
              dismissible
              fade
              class="text-left"
              @dismissed="success=false"
            >
              Thank you for your interest in PHP South Africa - we will contact you soon!
            </b-alert>
            <b-overlay
              :show="overlay"
              spinner-variant="primary"
              spinner-type="grow"
              rounded="sm"
            >
              <b-card :aria-hidden="overlay ? 'true' : null">
                <b-form class="needs-validation" @submit="onSubmit">
                  <b-form-group>
                    <b-form-input v-model="form.name" :state="validation.name ? !Array.isArray(validation.name) : null" placeholder="Name *" />
                    <b-form-invalid-feedback :state="validation.name ? !Array.isArray(validation.name) : false" class="text-left">
                      {{ (validation.name !== null) ? validation.name[0] : '' }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input v-model="form.company" :state="validation.company ? !Array.isArray(validation.company) : null" placeholder="Company *" />
                    <b-form-invalid-feedback :state="validation.company ? !Array.isArray(validation.company) : false" class="text-left">
                      {{ (validation.company !== null) ? validation.company[0] : '' }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input v-model="form.email" :state="validation.email ? !Array.isArray(validation.email) : null" type="email" placeholder="Email *" />
                    <b-form-invalid-feedback :state="validation.email ? Array.isArray(validation.email) : false" class="text-left">
                      {{ (validation.email !== null) ? validation.email[0] : '' }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input v-model="form.contact" :state="validation.contact ? !Array.isArray(validation.contact) : null" placeholder="Contact *" />
                    <b-form-invalid-feedback :state="validation.contact ? !Array.isArray(validation.contact) : false" class="text-left">
                      {{ (validation.contact !== null) ? validation.contact[0] : '' }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input v-model="form.country" :state="validation.country ? !Array.isArray(validation.country) : null" placeholder="Country *" />
                    <b-form-invalid-feedback :state="validation.country ? !Array.isArray(validation.country) : false" class="text-left">
                      {{ (validation.country !== null) ? validation.country[0] : '' }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group>
                    <b-form-textarea
                      v-model="form.message"
                      placeholder="How can we help? *"
                      cols="20"
                      rows="5"
                      wrap="hard"
                      style="resize: none;"
                      :state="validation.message ? !Array.isArray(validation.message) : null"
                    />
                    <b-form-invalid-feedback :state="validation.message ? !Array.isArray(validation.message) : false" class="text-left">
                      {{ (validation.message !== null) ? validation.message[0] : '' }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group>
                    <button id="submit-button" type="submit" class="btn btn-primary btn-block">
                      Submit
                    </button>
                  </b-form-group>
                </b-form>
              </b-card>
              <template v-slot:overlay>
                <div class="text-center">
                  <b-spinner
                    style="border-top-color: #2591c9; border-left-color: #2591c9; border-bottom-color: #2591c9;"
                  />
                  <p>Submitting</p>
                </div>
              </template>
            </b-overlay>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        name: '',
        company: '',
        email: '',
        contact: '',
        country: '',
        message: '',
        source: 'PHP South Africa Website | Contact Page'
      },
      errors: {
        name: null,
        company: null,
        email: null,
        contact: null,
        country: null,
        message: null
      },
      overlay: false,
      success: false
    }
  },
  computed: {
    validation () {
      return this.errors
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.disableSubmitButton()
      this.showOverlay()
      this.resetErrors()
      this.submitLead()
    },
    showOverlay () {
      this.overlay = true
    },
    hideOverlay () {
      this.overlay = false
    },
    showSuccessMessage () {
      this.success = true
    },
    enableSubmitButton () {
      document.getElementById('submit-button').removeAttribute('disabled')
    },
    disableSubmitButton () {
      document.getElementById('submit-button').setAttribute('disabled', '')
    },
    resetForm () {
      this.form.name = ''
      this.form.company = ''
      this.form.email = ''
      this.form.contact = ''
      this.form.country = ''
      this.form.message = ''
      this.overlay = false
      this.enableSubmitButton()
    },
    resetErrors () {
      this.errors.name = null
      this.errors.company = null
      this.errors.email = null
      this.errors.contact = null
      this.errors.country = null
      this.errors.message = null
    },
    setErrors (errors) {
      for (const parameter in errors) {
        this.errors[parameter] = errors[parameter]
      }
      for (const parameter in this.errors) {
        if (this.errors[parameter] == null) {
          this.errors[parameter] = true
        }
      }
    },
    submitLead () {
      const params = {
        name: this.form.name,
        company: this.form.company,
        email: this.form.email,
        contact: this.form.contact,
        country: this.form.country,
        message: this.form.message,
        source: this.form.source
      }
      this.$axios.post('/api/leads', params).then(function (response) {
        this.showSuccessMessage()
        this.resetForm()
      }.bind(this)).catch(function (errors) {
        this.enableSubmitButton()
        this.hideOverlay()
        this.setErrors(errors.response.data.errors)
      }.bind(this))
    }
  },
  head: {
    title: 'Contact Us | PHP South Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PHP South Africa' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Contact Us | PHP South Africa' },
      { hid: 'og:title', name: 'og:title', content: 'Contact Us | PHP South Africa' },
      { hid: 'og:description', name: 'og:description', content: 'PHP South Africa' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Contact Us | PHP South Africa' }
    ]
  }
}
</script>
