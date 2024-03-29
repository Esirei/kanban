<template>
  <InertiaHead title="Log in" />

  <BreezeValidationErrors class="mb-4" />

  <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
    {{ status }}
  </div>

  <form @submit.prevent="submit">
    <div>
      <BreezeLabel for="email" value="Email" />
      <BreezeInput
        id="email"
        v-model="form.email"
        type="email"
        class="mt-1 block w-full"
        required
        autofocus
        autocomplete="username" />
    </div>

    <div class="mt-4">
      <BreezeLabel for="password" value="Password" />
      <BreezeInput
        id="password"
        v-model="form.password"
        type="password"
        class="mt-1 block w-full"
        required
        autocomplete="current-password" />
    </div>

    <div class="mt-4 block">
      <label class="flex items-center">
        <BreezeCheckbox v-model:checked="form.remember" name="remember" />
        <span class="ml-2 text-sm text-gray-600">Remember me</span>
      </label>
    </div>

    <div class="mt-4 flex items-center justify-end">
      <InertiaLink
        v-if="canResetPassword"
        :href="route('password.request')"
        class="text-sm text-gray-600 underline hover:text-gray-900">
        Forgot your password?
      </InertiaLink>

      <BreezeButton
        class="ml-4"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing">
        Log in
      </BreezeButton>
    </div>
  </form>
</template>

<script>
import BreezeButton from '@/Components/Button.vue';
import BreezeCheckbox from '@/Components/Checkbox.vue';
import BreezeGuestLayout from '@/Layouts/Guest.vue';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';

export default {
  components: {
    BreezeButton,
    BreezeCheckbox,
    BreezeInput,
    BreezeLabel,
    BreezeValidationErrors,
  },
  layout: BreezeGuestLayout,

  props: {
    canResetPassword: Boolean,
    status: String,
  },

  data() {
    return {
      form: this.$inertia.form({
        email: '',
        password: '',
        remember: false,
      }),
    };
  },

  methods: {
    submit() {
      this.form.post(this.route('login'), {
        onFinish: () => this.form.reset('password'),
      });
    },
  },
};
</script>
