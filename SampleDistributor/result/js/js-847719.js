
                    var disqus = '{{ DISQUS_SITENAME }}';
                    var disqus_shortname = '{{ DISQUS_SITENAME }}';
                    {% if article.disqus_identifier %}
                    var disqus_identifier = '{{ article.disqus_identifier }}';
                    {% else %}
                    var disqus_identifier = '/{{ article.url }}';
                    {% endif %}
                    var disqus_url = '{{ SITEURL }}/{{ article.url }}';
                