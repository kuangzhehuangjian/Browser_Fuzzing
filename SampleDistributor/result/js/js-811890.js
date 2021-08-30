
        $(document).ready(function () {
            if (!window.jXHR) {
                var jxhr = document.createElement('script');
                jxhr.type = 'text/javascript';
                jxhr.src = '{{ SITEURL }}/theme/js/jXHR.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(jxhr, s);
            }

            github.showRepos({
                user: '{{ GITHUB_USER }}',
                count: {{ GITHUB_REPO_COUNT }},
                skip_forks: {{ GITHUB_SKIP_FORK }},
                target: '#gh_repos'
            });
        });
    