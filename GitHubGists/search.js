function filterTable(event) {
  var filter = event.target.value.toUpperCase();
  var rows = document.querySelector("#myTable tbody").rows;
  for (var i = 0; i < rows.length; i++) {
    var firstCol = rows[i].cells[0].textContent.toUpperCase();
    var secondCol = rows[i].cells[1].textContent.toUpperCase();
    if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
document.querySelector('#myInput').addEventListener('keyup', filterTable, false);
$("#datec").click(function() {
  $('tr.Entries').each(function() {
    var t = this.cells[1].textContent.split('/');
    $(this).data('_ts', new Date(t[2], t[1] - 1, t[0]).getTime());
  }).sort(function(a, b) {
    return $(a).data('_ts') < $(b).data('_ts');
  }).appendTo('tbody');
});