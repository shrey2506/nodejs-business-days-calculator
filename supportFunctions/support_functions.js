exports.parseDate = function (date) {
    var parts = date.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]);
}