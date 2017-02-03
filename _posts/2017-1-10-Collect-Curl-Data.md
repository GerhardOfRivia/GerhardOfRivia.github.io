---
layout: default
---

# Curl me some Data

## 

`$ curl --version`

```
curl 7.47.0 (x86_64-pc-linux-gnu) libcurl/7.47.0 GnuTLS/3.4.10 zlib/1.2.8 libidn/1.32 librtmp/2.3
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtmp rtsp smb smbs smtp smtps telnet tftp 
Features: AsynchDNS IDN IPv6 Largefile GSS-API Kerberos SPNEGO NTLM NTLM_WB SSL libz TLS-SRP UnixSockets
```

`man curl`

> -w, --write-out <format>
> 
> Make curl display information on stdout after a completed transfer. The format is a string that may contain plain text mixed with any number of variables. The format can be specified as a literal "string", or you can have curl read the format from a file with "@filename" and to tell curl to read the format from stdin you write "@-".

`curl -w "@../FARM/config/curl_json.txt" -o /dev/null -s www.google.com`

```
{ "url_effective" : "%{url_effective}", "remote_ip" : "%{remote_ip}", "speed_download" : "%{speed_download}", "time_namelookup" : "%{time_namelookup}", "time_connect" : %{time_connect}, "time_appconnect" : "%{time_appconnect}", "time_pretransfer" : "%{time_pretransfer}", "time_redirect" : "%{time_redirect}", "time_starttransfer" : "%{time_starttransfer}", "time_total" : "%{time_total}" }
```

Now my curl output is in JSON format.
