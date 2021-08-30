This page contains all of Logger's Change Logs.

<a name="change-log-2.1.1"></a>
##Change Log 2.1.1
[Download](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/tree/master/releases/2.1.1)<br/>
[Release Page](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues?milestone=5&state=closed)<br/>

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/37" target="_blank">37</a></td>
    <td>Bug compiling logger_configure fixed.</td>
    <td></td>
  </tr>
</table>


<a name="change-log-2.1.0"></a>
##Change Log 2.1.0
[Download](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/tree/master/releases/2.1.0)<br/>
[Release Page](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues?milestone=3&state=closed)<br/>
Release Articles
- [Logger 2.1.0 - Released!](http://www.talkapex.com/2013/08/logger-210-released.html)

**Note: Review Issue [#31](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/31) as it may impact your application if you manually inserted into the *LOGGER\_LOGS* table.**

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/17" target="_blank">17</a></td>
    <td>Allow for large text (> 4000 chars) to be passed into p_text parameter. If > 4000 then will be appended to the EXTRA column. In future may not be necessary with 12c large varchar2 column support (see issue #30)</td>
    <td><a href="http://www.talkapex.com/2013/08/logger-210-text-length-4000-characters.html" target="_blank">Text Length &gt; 4000 Characters</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/20" target="_blank">20</a></td>
    <td>Restructured documentation:
<ul>
	<li>Moving or removing most content from README.md to various wiki pages. This now frees up the main project page with a brief overview of what Logger is.</li>
	<li>Generate API document. This will make it easier for developers to quickly see all the different commands Logger has.</li>
</ul>
    </td>
    <td><a href="http://www.talkapex.com/2013/08/logger-210-documentation-overhaul.html" target="_blank">Documentation Overhaul</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/24" target="_blank">24</a></td>
    <td>Open ok_to_log as public.</td>
    <td><a href="http://www.talkapex.com/2013/08/logger-210-oktolog.html" target="_blank">ok_to_log</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/26" target="_blank">26</a></td>
    <td>Fixed error compiling in 10g (or any 11gR1 and below).</td>
    <td><a href="http://www.talkapex.com/2013/08/logger-210-10g-sequence-fixed.html" target="_blank">10g Sequence Fixed</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/27" target="_blank">27</a></td>
    <td>Generate demo scripts and add them to build. More demo scripts to come during future releases. Avoids the need to regenerate for presentations and learning.</td>
    <td><a href="http://www.talkapex.com/2013/08/logger-210-demo-scripts.html" target="_blank">Demo Scripts</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/28" target="_blank">28</a></td>
    <td>Include wiki documents as part of build. Wiki is technically part of a different git repository. By adding documentation with release developers will maintain history on API documentation etc.</td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/31" target="_blank">31</a></td>
    <td>Remove trigger on LOGGER_LOGS. For performance issues and to resolve the large text issue the trigger on LOGGER_LOGS has been dropped. In its place, all insert commands should now use ins_logger_logs.<br/><br//>Performance improvement as part of disabling the trigger. Initial tests show ~15% performance improvement for instances that are using APEX. Part of the speed improvement is how the USER is logged.</td>
    <td><a href="http://www.talkapex.com/2013/08/logger-210-insloggerlogs.html" target="_blank">ins_logger_logs</a></td>
  </tr>
</table>

<a name="change-log-2.0.0"></a>
##Change Log 2.0.0
[Download](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/tree/master/releases/2.0.0)<br/>
[Release Page](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues?milestone=1&state=closed)<br/>
Release Articles
- [Logger 2.0.0 Alpha](http://www.talkapex.com/2013/06/logger-200-released.html)
- [Logger 2.0.0 Beta](http://www.talkapex.com/2013/05/logger-200-beta.html)
- [Logger 2.0.0 - Released!](http://www.talkapex.com/2013/06/logger-200-released.html)

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td>New</td>
    <td>Moved to GitHub and restructured / updated documentation</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>Added p_params support and append_params functions.</td>
    <td><a href="http://www.talkapex.com/2013/05/logger-200-logging-parameters.html" target="_blank">Logging Parameters</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/4" target="_blank">4</a></td>
    <td>Client specific level setting (to enable logging based on client_id)</td>
    <td><a href="http://www.talkapex.com/2013/05/logger-200-enable-session-specific.html" target="_blank">Enable Session Specific Logging</a><br/><a href="http://www.talkapex.com/2013/05/logger-200-session-specific-logging.html" target="_blank">Session Specific Logging - Advanced Features</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/issues/8" target="_blank">8</a></td>
    <td>New build script which will allow for future versions of logger to be updated. This was built off a 1.4.0 release.</td>
    <td></td>
  </tr>
</table>

<a name="change-log-1.4.0"></a>
##Change Log 1.4.0
[Download](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/tree/master/releases/1.4.0)

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td>Fix</td>
    <td>Fixed an issue detecting 11.2 RAC installations</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>APEX no longer supported from a web-only installation if the schema was provisioned by APEX. Essentially the APEX team removed the "create any context" privelege when provisioning a new workspace, likely for security reasons. I (Tyler) agree with their choice, it unfortunately impacts logger.</td>
    <td></td>
  </tr>
</table>


<a name="change-log-1.3.0"></a>
##Change Log 1.3.0
[Download](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/tree/master/releases/1.3.0)

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td>Fix</td>
    <td>Fixed major flaw in time calculation used in time_start/time_stop</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>Changed implementation of LOG_APEX_ITEMS to use the APEX views so explicit privs on wwv_flow_data are not required. Thanks to Scott Spendolini for this suggestion.</td>
    <td></td>
  </tr>
</table>

<a name="change-log-1.2.2"></a>
##Change Log 1.2.2

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td>Fix</td>
    <td>Fixed an error with the admin security check reported by John Flack</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>It is now possible to install logger in multiple schemas as the global context is now prefixed with the schema name. So, the global context name in the LOGGER schema would be LOGGER_LOGCTX and the SCOTT schema would be SCOTT_LOGCTX. Thanks to Bill Wheeling for reporting this one.</td>
    <td></td>
  </tr>
</table>

<a name="change-log-1.2.0"></a>
##Change Log 1.2.0
[Download](https://github.com/tmuth/Logger---A-PL-SQL-Logging-Utility/tree/master/releases/1.2.0)

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td>New</td>
    <td>PROTECT_ADMIN_PROCS preference which is TRUE by default, protects set_level, purge and purge_all. This means that only someone logged into the schema where logger is installed can call these procedures. The idea is that you could grant execute on logger to other schemas, but want to prevent them from changing the levels or purging the logs.</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>Preference called INCLUDE_CALL_STACK allows you to enable / disable logging of the full call stack for LEVELS greater than ERROR (such as debug). Logging the call stack does take additional resources and also requires additional storage per row. So, you can still read your debug messages, but you simply won't see the full call stack. The value is TRUE by default.</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>CLOB parameter of "P_EXTRA" was added to call LOG... procedures. This populates a CLOB column in LOGGER_LOGS called "EXTRA". This column is also used by several new functions / procedures where the values are relatively large.</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>logger.log_userenv procedure logs information obtained through sys_context('userenv'...), such as IP Address, NLS info, schema / user information. It's use is documented here.</td>
    <td></td>
  </tr>
  <tr>
    <td>New</td>
    <td>logger.log_cgi_env procedure grabs all output from owa_util.print_cgi_env and logs it to logger_logs.extra. Useful in debugging some APEX issues. It's use is documented here.</td>
    <td></td><br/
  </tr>
  <tr>
    <td>New</td>
    <td>logger.log_character_codes procedure supplements the output of the SQL DUMP() function, great for finding hidden carriage return / line feeds or other non-printable characters.It's use is documented here.</td>
    <td></td>
  </tr>
  <tr>
    <td>Fix</td>
    <td>set_level, purge and purge_all so they are now autonomous transactions (thanks Tony).</td>
    <td></td>
  </tr>
</table>


#Template (ignore)

<a name="change-log-TODOVERSION"></a>
##Change Log TODOVERSION
[Download](TODO_URL)<br/>
[Release Page](TODO_URL)<br/>
Release Articles
- [TODO_NAME](TOOD_URL)

<table border="0">
  <tr>
  	<td>Issue#</td>
    <td>Feature</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
    <td>TODO</td>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
  </tr>
  <tr>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
    <td>TODO</td>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
  </tr>
  <tr>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
    <td>TODO</td>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
  </tr>
  <tr>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
    <td>TODO</td>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
  </tr>
  <tr>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
    <td>TODO</td>
    <td><a href="TODO_URL" target="_blank">TODO_TITLE</a></td>
  </tr>
</table>
