
            /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
            var disqus_shortname = '{{ DISQUS_SITENAME }}'; // required: replace example with your forum shortname

            {% if article %}
                {% if not DISQUS_NO_ID %}
                    var disqus_identifier = '{{ article.date|strftime('%Y-%m-') ~ article.slug if DISQUS_ID_PREFIX_SLUG else article.slug }}';
                {% endif %}
                var disqus_url = '{{ SITEURL }}/{{ article.url }}';
            {% elif page %}
                {% if not DISQUS_NO_ID %}
                    var disqus_identifier = 'page-{{ page.slug }}';
                {% endif %}
                var disqus_url = '{{ SITEURL }}/{{ page.url }}';
            {% endif %}

            var disqus_config = function () {
                this.language = "{{ DEFAULT_LANG }}";
            };

            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function () {
                var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        