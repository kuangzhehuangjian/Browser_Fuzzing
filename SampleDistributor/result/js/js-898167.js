
        var _paq = _paq || [];
        _paq.push(["trackPageView"]);
        _paq.push(["enableLinkTracking"]);

        (function() {
            var u=(("https:" == document.location.protocol) ? "https://{{ PIWIK_SSL_URL }}/" : "http://{{ PIWIK_URL }}/");
            _paq.push(["setTrackerUrl", u+"piwik.php"]);
            _paq.push(["setSiteId", "{{ PIWIK_SITE_ID }}"]);
            var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
            g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
        })();
    