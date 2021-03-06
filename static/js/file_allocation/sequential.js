$(document).ready(function () {
    var canv = document.getElementById("can");
    var ctx = canv.getContext("2d");
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
        }
        else {
            alert("Please enter valid size!");
        }
    });

    $('#add').click(function addFile() {
        if (count == 0) {
            for (var i = 0; i < 200; i++) {
                colors[i] = i % 2 == 0 ? "red" : "#9cff3f";
                file_sizes[i] = 0;
                file_names[i] = "";
                starts[i] = 0;
                ends[i] = 0;
            }
            start = 0;
            end = 0;

        }
        var name = document.getElementById("file_name").value;
        var size = document.getElementById("file_size").value;
        size = parseInt(size);
        if (name != "" && size != "") {
            if (point + size > memSize - 1) {
                alert("Cannot allocate!!");
            }
            else {
                starts[count] = point + 1;
                point = ends[count] = point + size;
                file_names[count] = name;
                file_sizes[count] = size;
                count++;
                showOutput();
            }
        }
        else {
            alert("Please enter all details!!");
        }
    });

    function showOutput() {
        document.getElementById("fa-canvas").style.display = "flex";
        canv.style.width = "100%";
        var str = "";
        ctx.fillStyle = "#f1f1f1";
        ctx.fillRect(0, 0, canv.width, canv.height);
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
            </tr>
            `;
            ctx.font = "10px Arial";
            ctx.fillStyle = colors[i];
            ctx.fillRect(starts[i] * canv.width / memSize, 0, (ends[i] + 1 - starts[i]) * canv.width / memSize, canv.height);
            ctx.strokeText(file_names[i], starts[i] * canv.width / memSize, canv.height * 3 / 4);
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