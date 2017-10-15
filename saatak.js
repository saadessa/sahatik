function fillTable(result) {
                var table = document.getElementById("inbound_keywords").tBodies[0];
                var data = result.data;
                for (var i = 0; i < data.length; i++) {
                 table.innerHTML += ["<tr>", "<td>", data[i][0], "</td>", "<td>", data[i][1], "</td>", "</tr>"].join(',');   
                }
            }
           
            var script = document.createElement("script");
            script.src = "https://api.tynt.com/publisher/v1/keyword/inbound?site_guid=a2b7hyUtWr5PqRrkHcnlxd&api_key=6z7P3C7e3J7b604L6E4N723w3p3y6b6L&hours=24&callback=fillTable";
            script.async = "async";
            document.getElementsByTagName("head")[0].appendChild(script);
document.write(document.referrer);
