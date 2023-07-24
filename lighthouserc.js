module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: ['http://127.0.0.1:3000'],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {},
  },
};
