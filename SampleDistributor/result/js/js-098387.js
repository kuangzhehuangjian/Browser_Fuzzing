
{
  "@context": "http://schema.org",
  "@type": "Article",
  "name": "{{ article.title|striptags }}",
  "headline": "{{ article.title|striptags }}",
  "datePublished": "{{ article.date }}",
  "dateModified": "{{ article.modified }}",
  "author": {
    "@type": "Person",
    "name": "{{ article.author.name }}",
    "url": "{{ SITEURL }}/{{ article.author.url }}"
  },
  "image": "{{ default_cover }}",
  "url": "{{ SITEURL }}/{{ article.url }}",
  "description": "{{ description }}"
}
