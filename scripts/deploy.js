const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'bs-online-meeting-tools',
        user: {
            name: 'SvenjaJeschke',
            email: 'svenja.jeschke12@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)