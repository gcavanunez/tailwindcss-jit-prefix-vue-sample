<template>
  <div
    class="
      tw-min-h-screen
      tw-bg-gray-100
      tw-py-6
      tw-flex
      tw-flex-col
      tw-justify-center
      sm:tw-py-12
    "
  >
    <div class="tw-relative tw-py-3 sm:tw-max-w-xl sm:tw-mx-auto tw-block">
      <div
        class="
          tw-absolute
          tw-inset-0
          tw-bg-gradient-to-r
          tw-from-cyan-400
          tw-to-light-blue-500
          tw-shadow-lg
          tw-transform
          tw--skew-y-6
          sm:tw-skew-y-0 sm:tw--rotate-6 sm:tw-rounded-3xl
        "
      ></div>
      <div
        class="
          tw-relative tw-px-4 tw-py-10 tw-bg-white tw-shadow-lg
          sm:tw-rounded-3xl sm:tw-p-20
        "
      >
        <div class="tw-max-w-md tw-mx-auto">
          <div>
            <img src="/img/logo.svg" class="tw-h-7 sm:tw-h-8" />
          </div>
          <div class="tw-divide-y tw-divide-gray-200">
            <div
              class="
                tw-py-8 tw-text-base tw-leading-6 tw-space-y-4 tw-text-gray-700
                sm:tw-text-lg sm:tw-leading-7
              "
            >
              <p>
                An advanced online playground for Tailwind CSS, including
                support for things like:
              </p>
              <ul class="tw-list-disc tw-space-y-2">
                <li class="tw-flex tw-items-start">
                  <span class="tw-h-6 tw-flex tw-items-center sm:tw-h-7">
                    <svg
                      class="tw-flex-shrink-0 tw-h-5 tw-w-5 tw-text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="tw-ml-2">
                    Customizing your
                    <code class="tw-text-sm tw-font-bold tw-text-gray-900"
                      >tailwind.config.js</code
                    >
                    file
                  </p>
                </li>
                <li class="tw-flex tw-items-start">
                  <span class="tw-h-6 tw-flex tw-items-center sm:tw-h-7">
                    <svg
                      class="tw-flex-shrink-0 tw-h-5 tw-w-5 tw-text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="tw-ml-2">
                    Extracting classes with
                    <code class="tw-text-sm tw-font-bold tw-text-gray-900"
                      >@apply</code
                    >
                  </p>
                </li>
                <li class="tw-flex tw-items-start">
                  <span class="tw-h-6 tw-flex tw-items-center sm:tw-h-7">
                    <svg
                      class="tw-flex-shrink-0 tw-h-5 tw-w-5 tw-text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="tw-ml-2">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div
              class="
                tw-pt-6 tw-text-base tw-leading-6 tw-font-bold
                sm:tw-text-lg sm:tw-leading-7
              "
            >
              <p>Want to dig deeper into Tailwind?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  class="text-cyan-600 hover:text-cyan-700"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

