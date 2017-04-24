var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+MacAutoSwitch", {
    "+MacAutoSwitch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)chromium\.org$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)atlassian\.com$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)freeipa\.org$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)ntdtv\.com$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)mitbbs\.com$/.test(host)) return "+LanternPAC";
        if (/(?:^|\.)marc\.info$/.test(host)) return "+LanternPAC";
        return "+SimpleAutoSwitch";
    },
    "+SimpleAutoSwitch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)youtube-nocookie\.com$/.test(host)) return "+LanternProxy";
        if (/google/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)goo\.gl$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)feedburner\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)t\.co$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)getlantern\.org$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)lantern\.io$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)shadowsocks\.org$/.test(host)) return "+LanternProxy";
        return "DIRECT";
    },
    "+LanternProxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 192.168.21.48:52432";
    },
    "+LanternPAC": function() {
        ;
var bypassDomains = [];
		function FindProxyForURL(url, host) {
			if (isPlainHostName(host) // including localhost
			|| shExpMatch(host, "*.local")) {
				return "DIRECT";
			}
			// only checks plain IP addresses to avoid leaking domain name
			if (/^[0-9.]+$/.test(host)) {
				if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
				isInNet(host, "172.16.0.0",  "255.240.0.0") ||
				isInNet(host, "192.168.0.0",  "255.255.0.0") ||
				isInNet(host, "127.0.0.0", "255.255.255.0")) {
					return "DIRECT";
				}
			}
			// Lantern desktop version proxies only http(s) and ws(s)
			if (url.substring(0, 4) != 'http' && (url.substring(0, 2) != 'ws')) {
				return "DIRECT";
			}
			for (var d in bypassDomains) {
				if (host == bypassDomains[d]) {
					return "DIRECT";
				}
			}
			return "PROXY [::]:52432; DIRECT";
		}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});