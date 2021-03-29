<template>
  <div>
    <b-container id="container" fluid>
      <b-container class="pt-4 pb-4">
        <b-row>
          <b-col lg="7" class="mb-5">
            <div id="content-icon" class="mt-5" />
            <h1 class="text-center mt-3">
              <b>HEADING</b>
            </h1>
            <p style="font-size: 18px;" class="text-justify">
              LINE 1
            </p>
            <p class="d-none d-sm-block text-justify">
              LINE 2
            </p>
          </b-col>
          <b-col lg="1" />
          <b-col lg="4" class="text-center mb-5">
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
              <b-card title="HEADING" :aria-hidden="overlay ? 'true' : null">
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
    <ContactBanner />
  </div>
</template>

<script>
import ContactBanner from '~/components/ContactBanner.vue'

export default {
  components: {
    ContactBanner
  },
  data: () => {
    return {
      form: {
        name: '',
        company: '',
        email: '',
        contact: '',
        country: '',
        message: '',
        source: 'PHP South Africa Website | Home Page'
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
  }
}
</script>

<style>
#content-icon {
  height: 225px;
  background-image: url('/images/home/content-icon.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
