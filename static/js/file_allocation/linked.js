$(document).ready(function () {
  var canv = document.getElementById("can");
  var ctx = canv.getContext("2d");
  var used, next, remaining, allocations;
  var colors = new Array(200);
  var file_sizes = new Array(200);
  var file_names = new Array(200);
  var starts = new Array(200);
  var ends = new Array(200);
  var count = 0;
  var point = -1;
  var memSize;
  var a = 0, b = 0;
  
  $('#find').click(function getSize() {
      memSize = document.getElementById("nof").value;
      if (memSize != "") {
          vis2 = document.getElementById("vis2");
          vis2.style.display = "flex";
          used = new Array(parseInt(memSize));
          next = new Array(parseInt(memSize));
          remaining = parseInt(memSize);
          allocations = new Array(parseInt(memSize));
          for (var i = 0; i < parseInt(memSize); i++) {
              allocations[i] = -1;
              used[i] = false;
              next[i] = -1;
          }
      }
      else
          alert("Please enter valid size!");
  });
  
  $('#add').click(function addFile() {
      if (count == 0) {
          for (var i = 0; i < memSize; i++) {
              if (Math.random() > 0.5) {
                  remaining--;
                  used[i] = true;
              }
              next[i] = -1;
          }
          for (var i = 0; i < 200; i++) {
              colors[i] = color();
              file_sizes[i] = 0;
              file_names[i] = "";
              starts[i] = 0;
              ends[i] = 0;
          }
      }
      var name = document.getElementById("file_name").value;
      var size = document.getElementById("file_size").value;
      size = parseInt(size);
      var cnt = 0;
      if (name != "" && size != "") {
          if (size > remaining) {
              alert("Cannot allocate!!");
          }
          else {
              var prev = -1;
              for (var i = 0; i < size; i++) {
                  for (var j = 0; j < memSize; j++) {
                      if (!used[j]) {
                          if (prev != -1) {
                              next[prev] = j;
                          }
                          if (i == 0)
                              starts[count] = j;
                          prev = j;
                          allocations[j] = count + 1;
                          used[j] = true;
                          break;
                      }
  
                  }
              }
              next[prev] = -1;
              ends[count] = prev;
              file_names[count] = name;
              file_sizes[count] = size;
              count++;
              showOutput();
              remaining -= size;
              console.log(allocations);
          }
  
      }
      else {
          alert("Please enter all details!!");
      }
  });
  
  function showOutput() {
    const file = document.createElement('div');
    document.getElementById('fa-output').innerHTML = '';
    file.classList.add('table-responsive');
    file.classList.add('fa-table');
    var table_html = 
    `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Filename</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Size</th>
                    <th>Block Path</th>
                </tr>
            </thead>
            <tbody>
    `
    for (var i = 0; i < count; i++) {
        table_html += 
        `
        <tr>
            <td>${file_names[i]}</td>
            <td>${starts[i]}</td>
            <td>${ends[i]}</td>
            <td>${file_sizes[i]}</td>
            <td>
        `
        for (j = 0; j < memSize; j++) {
            if (parseInt(allocations[j]) == i + 1) {
                table_html += `
                -->${j}
                `;
            }
        }
        table_html +=
        `
            </td>
        </tr>
        `;
    }

    table_html +=
    `             
            </tbody>
        </table>
    `;
    file.innerHTML = table_html;
    document.getElementById('fa-output').appendChild(file);
    document.getElementById('fa-output').style.display = "flex";
  }
  
  function color() {
      var hex = '0123456789abcdef';
      var col = '#';
      for (i = 0; i < 6; i++)
          col += hex[Math.floor(Math.random() * 16)]
      return col;
  }
});