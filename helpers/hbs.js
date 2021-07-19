const moment = require('moment')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
    editIcon: function (noteUser, loggedUser, noteId, floating = true) {
        if (noteUser._id.toString() == loggedUser._id.toString()) {
            if (floating) {
                return `<a href="/notes/edit/${noteId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
            } else {
                return `<a href="/notes/edit/${noteId}"><i class="fas fa-edit fa-small"></i></a>`
            }
        } else {
            return ''
        }
    },
    select: function (selected, options) {
        return options
            .fn(this)
            .replace(
                new RegExp('value="' + selected + '"'),
                '$& selected="selected"'
            )
            .replace(
                new RegExp('>' + selected + '</option>'),
                'selected="selected"$&'
            )
    }
}