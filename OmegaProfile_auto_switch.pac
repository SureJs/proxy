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
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)chenhd\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)github-cloud\.s3\.amazonaws\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)navicat\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)atlassian\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)filewatcher\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)test\.hadoop$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fedorainfracloud\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)redhat\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)osdir\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)freeipa\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)valleytalk\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)iweb\.ca$/.test(host)) return "+PAC";
        if (/(?:^|\.)iteye\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)kxcdn\.com$/.test(host)) return "+PAC";
        if (/^127\.0\.0\.1$/.test(host)) return "DIRECT";
        if (/(?:^|\.)prometheus\.io$/.test(host)) return "+PAC";
        if (/^172\.16\./.test(host)) return "DIRECT";
        if (/(?:^|\.)cosme-de\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)akamai\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)meetup\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)alluxio\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)alluxio-com-site-prod\.s3\.amazonaws\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)51\.nb$/.test(host)) return "DIRECT";
        if (/(?:^|\.)feedburner\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)xiaohongshu\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)r-project\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)cloudfront\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)coach\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)notepad-plus-plus\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)lantern\.io$/.test(host)) return "+PAC";
        if (/(?:^|\.)getmdl\.io$/.test(host)) return "+PAC";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)itellyou\.cn$/.test(host)) return "+PAC";
        if (/(?:^|\.)dropboxusercontent\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)gethue\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)atdmt\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)nexac\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)simpli\.fi$/.test(host)) return "+PAC";
        if (/(?:^|\.)burt\.io$/.test(host)) return "+PAC";
        if (/(?:^|\.)sfgate\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)csdn\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)oracle\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)linkedin\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)brightfunnel\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)akamaihd\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)amazon-adsystem\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)crwdcntrl\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)weather\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)tiqcdn\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)lithium\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)ntdtv\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)github\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)d31qbv1cthcecs\.cloudfront\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)adsrvr\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)ibm\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)d5nxst8fruw4z\.cloudfront\.net$/.test(host)) return "+PAC";
        if (/(?:^|\.)visualwebsiteoptimizer\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)getlantern\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)youtube-nocookie\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)mathjax\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)quantserve\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)mitbbs\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)cloudera\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)marc\.info$/.test(host)) return "+PAC";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)apache\.org$/.test(host)) return "+PAC";
        if (/(?:^|\.)apple\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)aixifan\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)company-target\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)rubiconproject\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)t\.co$/.test(host)) return "+PAC";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)demandbase\.com$/.test(host)) return "+PAC";
        if (/(?:^|\.)gitbooks\.io$/.test(host)) return "+PAC";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+PAC";
        if (/google/.test(host)) return "+PAC";
        return "DIRECT";
    },
    "+PAC": function() {
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
			return "PROXY 192.168.21.48:52432; DIRECT";
		}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});