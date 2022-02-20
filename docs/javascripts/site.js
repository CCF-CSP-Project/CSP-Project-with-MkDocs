$(document).ready(function () {
    $('#idea_list').DataTable(
        {
            columnDefs: [
                {
                    targets: "_all",
                    className: 'dt-body-center'
                },
                {
                    orderable: false,
                    targets: [2, 3, 4, 5]
                }
            ],
            language: {
                "lengthMenu": "每页展示 _MENU_ 条题解",
                "zeroRecords": "没有查询到任何题解QAQ，不如自己创作一个？",
                "info": "目前为第 _PAGE_ 页，总共 _PAGES_ 页",
                "infoEmpty": "没有题解记录",
                "infoFiltered": "(从 _MAX_ 条题解中筛选)",
                "paginate": {
                    "previous": "上一页",
                    "next": "下一页"
                },
                "search": "查找关键字："
            }
        }
    );
});