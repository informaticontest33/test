function FindProxyForURL(url, host) {
    if (!shExpMatch(url, "http://*")) {
        return 'DIRECT'
    }
    if (shExpMatch(host, "*.hin.ch") ||
        shExpMatch(host, "idp.fmh.ch") ||
        shExpMatch(host, "idp-test.fmh.ch") ||
        shExpMatch(host, "service.zurrose.ch") ||
        shExpMatch(host, "*.zur-rose.ch") ||
        shExpMatch(host, "testservice.zurrose.ch") ||
        shExpMatch(host, "estudio.zur-rose.ch") ||
        shExpMatch(host, "*.spitalstsag.ch") ||
        shExpMatch(host, "downloads-stage.zurrose.ch") ||
        shExpMatch(host, "downloads.zurrose.ch")) {
        return 'PROXY localhost:5016'
    }
    return 'DIRECT'
}


