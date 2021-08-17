/**
 * Bootstrap Table Hebrew translation
 * Author: legshooter
 */

$.fn.bootstrapTable.locales['he-IL'] = $.fn.bootstrapTable.locales['he'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'טוען, נא להמתין'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} שורות בעמוד`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `מציג ${pageFrom} עד ${pageTo} מ-${totalRows}שורות${totalNotFiltered} total rows)`
    }

    return `מציג ${pageFrom} עד ${pageTo} מ-${totalRows} שורות`
  },
  formatSRPaginationPreText () {
    return 'העמוד הקודם'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'העמוד הבא'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'נקה חיפוש'
  },
  formatSearch () {
    return 'חיפוש'
  },
  formatNoMatches () {
    return 'לא נמצאו רשומות תואמות'
  },
  formatPaginationSwitch () {
    return 'הסתר/הצג מספור דפים'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'רענן'
  },
  formatToggle () {
    return 'החלף תצוגה'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'עמודות'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'מסך מלא'
  },
  formatAllRows () {
    return 'הכל'
  },
  formatAutoRefresh () {
    return 'רענון אוטומטי'
  },
  formatExport () {
    return 'Export data'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'סגור'
  },
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL'])
