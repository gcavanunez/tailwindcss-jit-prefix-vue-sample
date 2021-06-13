<template>
  <renderless-layout>
    <v-container fluid class="tw-p-0">
      <sticky-header>
        <template #title>
          <primary-title> Salas Virtuales </primary-title>
        </template>
        <template #actions>
          <div class="tw-flex tw-items-center">
            <v-btn
              to="/admin/booths/create"
              color="secondary"
              rounded
              class="
                tw-px-8 tw-font-bold tw-normal-case
                focus:tw-outline-none focus:tw-ring focus:tw-ring-secondary-300
                tw-text-gray-50
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="tw-w-6 tw-h-6 tw-mr-2 tw--ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Nueva Sala
            </v-btn>
          </div>
        </template>
      </sticky-header>
      <v-row class="tw-p-0 tw-m-0">
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="10"
          class="tw-container tw-mx-auto"
        >
          <v-card
            flat
            color="transparent"
            class="
              tw-mb-6
              tw-overflow-hidden
              tw-bg-transparent
              tw-border-transparent
              tw-shadow-md
              tw-rounded-3xl
            "
          >
            <v-container
              class="
                tw-p-0
                tw-bg-gradient-to-r
                tw-from-bizzdome-terciary
                tw-to-bizzdome-light-brown
              "
              fluid
            >
              <div class="tw-px-4 tw-py-5 sm:tw-px-6">
                <p class="tw-max-w-xl tw-mt-1 tw-text-sm tw-text-gray-100">
                  En esta área puede crear muchos tipos de salas virtuales que
                  puede personalizar con plantillas, gráficos y contenido. Estas
                  son las áreas a las que los usuarios navegarán dentro de los
                  espacios más grandes de la experiencia virtual.
                </p>
              </div>
            </v-container>
          </v-card>
          <v-card class="tw-shadow-md tw-rounded-3xl" white>
            <v-container
              v-if="false"
              class="
                tw-p-0
                tw-bg-gradient-to-r
                tw-from-primary-500
                tw-to-secondary-500
              "
              fluid
            >
              <div
                class="
                  tw-px-4 tw-py-5 tw-border-b tw-border-gray-200
                  sm:tw-px-6
                "
              >
                <div
                  class="
                    tw-flex
                    tw-flex-wrap
                    tw-items-center
                    tw-justify-between
                    tw--mt-4
                    tw--ml-4
                    sm:tw-flex-nowrap
                  "
                >
                  <div class="tw-mt-4 tw-ml-4">
                    <h3
                      class="
                        tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-50
                      "
                    >
                      Salas Virtuales
                    </h3>
                    <p class="tw-max-w-3xl tw-mt-1 tw-text-sm tw-text-gray-100">
                      En esta área puede crear muchos tipos de salas virtuales
                      que puede personalizar con plantillas, gráficos y
                      contenido. Estas son las áreas a las que los usuarios
                      navegarán dentro de los espacios más grandes de la
                      experiencia virtual.
                    </p>
                  </div>
                  <div class="tw-flex-shrink-0 tw-mt-4 tw-ml-4">
                    <v-btn
                      color="primary"
                      type="submit"
                      to="/admin/booths/create"
                      rounded
                      class="
                        tw-px-8 tw-normal-case
                        focus:tw-outline-none
                        focus:tw-ring
                        focus:tw-ring-primary-300
                        text--white text--lighten-4
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="tw-w-6 tw-h-6 tw-mr-2 tw--ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Nueva Sala
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-container>
            <v-container class="tw-p-0" fluid>
              <div
                class="
                  tw-flex tw-flex-col-reverse tw-grid-cols-5 tw-pt-3 tw-border-b
                  xl:tw-grid
                "
              >
                <div class="tw-flex tw-items-end tw-col-span-3">
                  <v-tabs v-model="virtual_room_type" show-arrows>
                    <v-tab
                      v-for="booth_type in booth_types"
                      :key="booth_type.text"
                      :href="'#' + booth_type.value"
                    >
                      {{ booth_type.text }}
                    </v-tab>
                  </v-tabs>
                </div>
                <div
                  class="
                    tw-grid
                    tw-grid-cols-2
                    tw-col-span-2
                    tw-gap-6
                    tw-px-4
                    tw-pb-3
                  "
                >
                  <v-select
                    v-model="filter_selected"
                    :items="[]"
                    label="Buscar por"
                    prepend-inner-icon="sort"
                    hide-details
                    outlined
                    rounded
                  />
                  <v-text-field
                    v-model="search"
                    outlined
                    rounded
                    append-icon="search"
                    label="Buscar"
                    hide-details
                  />
                </div>
              </div>
            </v-container>
            <v-container class="tw-p-0 tw-overflow-hidden" fluid>
              <v-data-table
                v-model="selected"
                :search="search"
                :headers="headers"
                :items="rows"
                :options.sync="options"
                :server-items-length="totalRows"
                :loading="loading"
                class="elevation-1"
                :footer-props="footer_props"
                :class="{ mobile: $vuetify.breakpoint.mdAndDown }"
              >
                <template v-slot:body="{ items }">
                  <transition mode="out-in" name="fade">
                    <tbody v-if="items.length" key="main-table">
                      <template v-if="!isMobile">
                        <tr
                          v-for="item in items"
                          :key="item.id"
                          class="tw-cursor-pointer sm:tw-py-4"
                          @click="showItem(item)"
                        >
                          <td>
                            <div class="tw-flex py-4">
                              <div class="tw-flex-shrink-0">
                                <div
                                  class="
                                    tw-flex
                                    tw-items-center
                                    tw-justify-center
                                    tw-w-32
                                    tw-shadow
                                    tw-rounded-xl
                                  "
                                >
                                  <v-img
                                    :src="item.bg_desktop"
                                    class="
                                      tw-aspect-w-16
                                      tw-aspect-h-10
                                      tw-rounded-xl
                                    "
                                  />
                                </div>
                              </div>
                              <div class="tw-flex tw-items-center tw-ml-4">
                                <div>
                                  <quinary-title :dark="false">
                                    {{ item.label }}
                                  </quinary-title>
                                  <common-badge>
                                    {{ item.slug }}
                                  </common-badge>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="tw-flex tw-justify-start">
                              <span
                                class="
                                  tw-relative
                                  tw-inline-block
                                  tw-w-32
                                  tw-px-3
                                  tw-py-1
                                  tw-font-semibold
                                  tw-leading-tight
                                  tw-text-center
                                  tw-text-gray-900
                                  tw-truncate
                                "
                              >
                                <span
                                  aria-hidden
                                  class="
                                    tw-absolute
                                    tw-inset-0
                                    tw-bg-gray-200
                                    tw-rounded-full
                                    tw-opacity-75
                                  "
                                />
                                <span class="tw-relative tw-truncate">{{
                                  item.room_type.label
                                }}</span>
                              </span>
                            </div>
                          </td>
                          <td>
                            <p
                              class="
                                tw-text-gray-900 tw-whitespace-no-wrap
                                mb-0
                              "
                            >
                              {{ item.creator.first_name }}
                              {{ item.creator.last_name }}
                            </p>
                            <p
                              class="
                                tw-text-gray-600 tw-whitespace-no-wrap
                                mb-0
                              "
                            >
                              {{
                                item.creator.roles
                                  .map((row) => row.label)
                                  .toString()
                              }}
                            </p>
                          </td>

                          <td>
                            <div class="tw-flex tw-justify-start">
                              <status-badge :is-active="!!item.is_active" />
                            </div>
                          </td>
                          <td>
                            <div class="tw-flex tw-justify-start tw-space-x-2">
                              <language-badge
                                v-for="{ language } in item.languages"
                                :key="language.id"
                                :language="language"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="tw-flex tw-justify-end">
                              <span>
                                {{ item.updated_at | time_stamp_m_d_y }}
                                {{ item.updated_at | time_stamp_hh_mm }}
                              </span>
                            </div>
                          </td>
                          <td>
                            <v-btn
                              fab
                              text
                              small
                              class="
                                tw-text-gray-300
                                focus:tw-outline-none
                                focus:tw-text-gray-600
                                focus:tw-ring-primary-500
                              "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="tw-w-6 tw-h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </v-btn>
                          </td>
                        </tr>
                      </template>
                      <template v-else>
                        <tr
                          v-for="item in items"
                          :key="item.id"
                          class
                          @click="showItem(item)"
                        >
                          <td class="tw-bg-gray-100 py-4">
                            <div
                              v-ripple
                              class="
                                tw-px-6
                                tw-pt-4
                                tw-pb-6
                                tw-transition
                                tw-duration-300
                                tw-ease-in-out
                                tw-bg-white
                                tw-rounded-lg
                                tw-shadow-sm
                                tw-cursor-pointer
                                xl:tw-px-10 xl:tw-pt-6 xl:tw-pb-8
                                hover:tw-shadow-md
                              "
                            >
                              <div class="tw-flex">
                                <div class="tw-flex-shrink-0">
                                  <div
                                    class="
                                      tw-flex
                                      tw-items-center
                                      tw-justify-center
                                      tw-w-10
                                      tw-h-10
                                      tw-rounded-full
                                      tw-bg-primary-200
                                      tw-text-primary-800
                                    "
                                  >
                                    <svg
                                      fill="currentColor"
                                      class="tw-w-6 tw-h-6"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center tw-ml-4">
                                  <h5
                                    class="
                                      tw-text-lg
                                      tw-font-medium
                                      tw-leading-6
                                      tw-text-gray-900
                                    "
                                  >
                                    {{ item.public_id }} | {{ item.id }}
                                  </h5>
                                </div>
                              </div>
                              <div
                                class="
                                  tw-mt-2 tw-mb-4 tw-text-sm tw-text-gray-800
                                "
                              >
                                <span
                                  class="
                                    tw-font-medium tw-leading-6 tw-text-gray-500
                                  "
                                >
                                  Hora y Fecha de Consulta
                                </span>
                                <div
                                  class="
                                    tw-w-8
                                    tw-h-1
                                    tw-mb-2
                                    tw-rounded-full
                                    tw-bg-primary-200
                                  "
                                />

                                <p
                                  class="
                                    tw-font-semibold
                                    tw-leading-tight
                                    tw-text-gray-900
                                    tw-whitespace-no-wrap
                                    mb-0
                                  "
                                >
                                  {{ item.date_time_consult | hh_mm }} |
                                  {{ item.date_time_consult | m_d_y }}
                                </p>
                                <p
                                  class="
                                    tw-text-sm
                                    tw-text-gray-600
                                    tw-whitespace-no-wrap
                                    mb-0
                                  "
                                >
                                  {{ item.date_time_consult | in_or_ago }}
                                  {{ item.date_time_consult | get_time_diff }}
                                </p>
                              </div>
                              <div
                                class="
                                  tw-mt-2 tw-mb-4 tw-text-sm tw-text-gray-800
                                "
                              >
                                <span
                                  class="
                                    tw-font-medium tw-leading-6 tw-text-gray-500
                                  "
                                >
                                  Doctor
                                </span>
                                <div
                                  class="
                                    tw-w-8
                                    tw-h-1
                                    tw-mb-2
                                    tw-rounded-full
                                    tw-bg-primary-200
                                  "
                                />

                                <div
                                  class="
                                    tw-font-semibold
                                    tw-leading-tight
                                    tw-text-gray-900
                                    tw-whitespace-no-wrap
                                    mb-0
                                  "
                                >
                                  {{ item.doctor.first_name }}
                                  {{ item.doctor.last_name }}
                                </div>
                              </div>
                              <div class="tw-mt-4 tw-text-sm tw-text-gray-800">
                                <span
                                  class="
                                    tw-font-medium tw-leading-6 tw-text-gray-500
                                  "
                                >
                                  Motivo
                                </span>
                                <div
                                  class="
                                    tw-w-8
                                    tw-h-1
                                    tw-mb-2
                                    tw-rounded-full
                                    tw-bg-primary-200
                                  "
                                />

                                <p>{{ item.motive }}</p>
                              </div>
                              <div
                                class="
                                  tw-flex tw-items-center tw-py-2 tw-space-x-4
                                "
                              >
                                <span
                                  v-if="item.status_id"
                                  :key="item.id"
                                  class="
                                    tw-relative
                                    tw-inline-block
                                    tw-px-3
                                    tw-py-1
                                    tw-font-semibold
                                    tw-leading-tight
                                    tw-text-orange-900
                                  "
                                >
                                  <span
                                    aria-hidden
                                    class="
                                      tw-absolute
                                      tw-inset-0
                                      tw-bg-orange-200
                                      tw-rounded-full
                                      tw-opacity-50
                                    "
                                  />
                                  <span class="tw-relative">Pendiente</span>
                                </span>
                                <span
                                  class="
                                    tw-relative
                                    tw-inline-block
                                    tw-w-32
                                    tw-px-3
                                    tw-py-1
                                    tw-font-semibold
                                    tw-leading-tight
                                    tw-text-center
                                    tw-text-gray-900
                                    tw-truncate
                                  "
                                >
                                  <span
                                    aria-hidden
                                    class="
                                      tw-absolute
                                      tw-inset-0
                                      tw-bg-gray-200
                                      tw-rounded-full
                                      tw-opacity-75
                                    "
                                  />
                                  <span class="tw-relative tw-truncate">{{
                                    item.speciality.label
                                  }}</span>
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </template>
                    </tbody>
                    <tbody v-if="!items.length && !loading" key="zero_table">
                      <tr>
                        <td colspan="8">
                          <v-alert
                            class="mx-8 mt-4"
                            color="primary"
                            border="left"
                            type="info"
                            elevation="2"
                            colored-border
                          >
                            <strong>No hay Salas</strong>
                          </v-alert>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-if="!items.length && loading" key="loading_table">
                      <tr>
                        <td colspan="8">
                          <v-alert
                            class="mx-8 mt-4"
                            color="primary darken-1"
                            border="left"
                            type="success"
                            elevation="2"
                            colored-border
                          >
                            <strong>Cargando</strong>
                          </v-alert>
                        </td>
                      </tr>
                    </tbody>
                  </transition>
                </template>
              </v-data-table>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </renderless-layout>
</template>

<script>
import PrimaryTitle from "@/components/Titles/PrimaryTitle";
import QuinaryTitle from "@/components/Titles/QuinaryTitle";
import StickyHeader from "@/components/StickyHeader";

import CommonBadge from "@/components/CommonBadge";
import StatusBadge from "@/components/StatusBadge";
import LanguageBadge from "@/components/LanguageBadge";
import { VirtualRoomsServiceInstance } from "@/services/VirtualRoomsService";
import { mapGetters } from "vuex";
export default {
  components: {
    CommonBadge,
    QuinaryTitle,
    StickyHeader,
    PrimaryTitle,
    StatusBadge,
    LanguageBadge,
  },
  data: () => ({
    virtual_room_type: "all",
    menu2: false,
    filter_status: "",
    filter_speciality: "",
    filter_selected: "public_id",
    search: "",
    filter_allowed: [
      {
        text: "Nombre",
        value: "public_id",
      },
      {
        text: "Estado",
        value: "status",
      },
      {
        text: "Especialidad",
        value: "speciality",
      },
    ],
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "label",
      },
      {
        text: "Tipo de sala",
        align: "start",
        sortable: false,
        value: "room_type",
      },

      { text: "Creador", value: "protein", align: "start", sortable: false },
      { text: "Status", value: "date_time_consult", sortable: true },
      { text: "Idioma(s)", value: "status", sortable: false, align: "start" },
      {
        text: "Ultima Actualizacion",
        value: "updated_at",
        sortable: false,
        align: "end",
      },
      { text: "", value: "go", sortable: false },
    ],
    selected: undefined,
    totalRows: 0,
    rows: [],
    loading: false,
    options: {},
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    booth_types() {
      return [{ text: "Todos", value: "all" }, ...this.room_types];
    },
    ...mapGetters({
      room_types: ["constants/room_types"],
    }),
    footer_props() {
      const obj = {
        "items-per-page-options": [
          10,
          20,
          30,
          40,
          50,
          { text: "Todos", value: this.totalRows },
        ],
      };
      return obj;
    },
    filter_statuses() {
      return this.$store.getters.constants.statuses.map((item) => {
        const new_item = {
          text: item.label,
          value: item.id,
        };
        return new_item;
      });
    },
    filter_specialities() {
      return this.$store.getters.constants.specialities.map((item) => {
        const new_item = {
          text: item.label,
          value: item.id,
        };
        return new_item;
      });
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    options: {
      handler() {
        this.getLeads();
      },
      deep: true,
    },
    filter_status: {
      handler() {
        this.getLeads();
      },
      deep: true,
    },
    filter_speciality: {
      handler() {
        this.getLeads();
      },
      deep: true,
    },
    filter_selected: {
      handler() {
        this.getLeads();
      },
      deep: true,
    },
    search: {
      handler() {
        this.getLeads();
      },
      deep: true,
    },
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    showItem(a) {
      return this.$router.push({
        name: "admin.booths.edit.canvas",
        params: { id: a.id },
      });
    },
    getLeads() {
      // this.loading = true;
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //  let page_number = page.page || this.state.pagination.page;
      // let rowsPerPage = page.rowsPerPage || this.state.pagination.rowsPerPage;
      VirtualRoomsServiceInstance.index({
        params: {
          page: page,
          rowsPerPage: itemsPerPage,
          sortBy: sortBy,
          sortDesc: sortDesc,
          search: this.search,
        },
      })
        .then((response) => {
          const { total, data } = response.data.data;
          this.rows = data;
          this.totalRows = total;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>
