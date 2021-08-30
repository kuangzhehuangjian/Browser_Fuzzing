</script>
    <script type="text/javascript" src="{{ SITEURL }}/theme/tipuesearch/tipuesearch.min.js"></script>
    {% endif %}
    <script>
    $(document).ready(function() {
      $('#tipue_search_input').tipuesearch({
        'mode' : 'static',
        'show': 10,
        'minimumLength': 2,
        'newWindow': false
      });
    });
    