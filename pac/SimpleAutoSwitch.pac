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
}("+SimpleAutoSwitch", {
    "+SimpleAutoSwitch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)youtube-nocookie\.com$/.test(host)) return "+LanternProxy";
        if (/google/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)goo\.gl$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)feedburner\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)t\.co$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)cdninstagram\.com$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)getlantern\.org$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)lantern\.io$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)shadowsocks\.org$/.test(host)) return "+LanternProxy";
        if (/(?:^|\.)github\.com$/.test(host)) return "+LanternProxy";        
        return "DIRECT";
    },
    "+LanternProxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 192.168.21.48:52432";
    }
});
