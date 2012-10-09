Date.dayNames = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'
];

Date.monthNames = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
];

Date.monthNumbers = {
    'Jan': 0,
    'Feb': 1,
    'Mär': 2,
    'Apr': 3,
    'Mai': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Okt': 9,
    'Nov': 10,
    'Dez': 11
};

Date.getShortMonthName = function (month) {
    return Date.monthNames[month].substring(0, 3);
};

Date.getShortDayName = function (day) {
    return Date.dayNames[day].substring(0, 3);
};

Date.getMonthNumber = function (name) {
    return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.parseCodes.S.s = '(?:st|nd|rd|th)';

if (Ext.picker.Picker) {
    Ext.override(Ext.picker.Picker, {
        doneText: 'Done'
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Tag',
        'monthText': 'Monat',
        'yearText': 'Jahr',
        'slotOrder': ['day', 'month', 'year']
    });
}

if (Ext.IndexBar) {
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    });
}

if (Ext.NestedList) {
    Ext.override(Ext.NestedList, {
        'backText': 'Zurück',
        'loadingText': 'Lade...',
        'emptyText': 'Keine Einträge vorhanden.'
    });
}

if (Ext.util.Format) {
    Ext.util.Format.defaultDateFormat = 'd.m.Y';
}

if (Ext.MessageBox) {
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Abbrechen';
    Ext.MessageBox.YES.text = 'Ja';
    Ext.MessageBox.NO.text = 'Nein';
}
