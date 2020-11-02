function fixText(text) {
    var name = text.trim();
    var firstchar = name.slice(0, 1);
    var ufirstchar = firstchar.toUpperCase();
    var rest = name.slice(1, name.length);
    var lrest = rest.toLowerCase();
    return ufirstchar + lrest;
}
