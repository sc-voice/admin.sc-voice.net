// Utilities
import { defineStore } from 'pinia';
import { ref } from 'vue';

const SERVERS = [{
  name:'www.api.sc-voice.net',
  url: 'https://www.api.sc-voice.net',
  title: 'Default language server; SuttaCentral gateway',
},{
  name:'pli.api.sc-voice.net',
  url: 'https://pli.api.sc-voice.net',
  title: 'Pali server (pli)',
},{
  name:'s1.sc-voice.net',
  url: 'https://s1.sc-voice.net',
  title: 'Legacy scv-server',
}]

const FILTERS=[{
  title: 'Glossary',
  icon: 'mdi-file-word-box',
  value: "",
},{
  title: 'SuttaCentral Voice',
  icon: 'mdi-account-voice',
  value: 'voice',
},{
  title: 'Administration',
  icon: 'mdi-shield-crown',
  value: 'admin',
},{
  title: 'Voice API Servers',
  icon: 'mdi-server',
  value: 'api',
}];

export const useAppStore = defineStore('app', {
  state: () => ({
    servers: SERVERS,
    filters: FILTERS,
    filter: ref('api'),
  }),
})
