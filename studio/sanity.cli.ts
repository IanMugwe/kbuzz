import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: 'ydvtjdhb', dataset: 'production'},
  // Hosted at https://kbuzz.sanity.studio
  studioHost: 'kbuzz',
  deployment: {appId: 'jbcboqngjcup9i0ffspbzgl8', autoUpdates: true},
})
