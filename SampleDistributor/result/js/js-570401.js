</script>
    <script type="text/javascript" src="{{ SITEURL }}/theme/tipuesearch/tipuesearch.min.js">
    $(document).ready(function() {
      $('#tipue_search_input').tipuesearch({
        'mode' : 'json',
        'show': 10,
        'newWindow': false,
        'minimumLength': 2,
        'contentLocation': 'tipuesearch_content.json'
      });
    });
    