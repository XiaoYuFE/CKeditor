(function() {
    CKEDITOR.plugins.add('smileybox', {
        icons: 'smileybox',
        beforeInit: function(editor) {
            editor.smiley = {};
            editor.smiley.dialogId = editor.name + "-smiley-dialog";
            editor.smiley.initialLinkText = "";
        },
        init: function() {
            editor.ui.addButton('smileybox', {
                // The text part of the button (if available) and the tooltip.
                label: '表情符号',
                // The command to execute on click.
                command: 'smileybox',
                // The button placement in the toolbar (toolbar group name).
                toolbar: 'insert,2'
            });

            $(document).on("click", ".smiley-pic-list img", function(event) {
                event.preventDefault();
                var $el = $(this);
                var src = $el.attr("src");
                var img = new CKEDITOR.dom.element('img');
                img.setAttribute('src', src);
                editor.insertElement(img);
            });


            editor.addCommand('smileybox', {
                exec: function(editor) {
                    if (!editor.smiley.$dialog) {
                        //进行ajax请求并返回数据
                        $.ajax({
                            url: './php/smiley.php',
                            type: 'post',
                            dataType: 'json',
                            data: {},
                            success: function(data) {
                                renderDialogHtml.call(editor, data);
                                editor.smiley.layerIndex = layer.open({
                                    type: 1,
                                    shade: false,
                                    title: false, //不显示标题
                                    area: "420px",
                                    content: editor.smiley.$dialog, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
                                    success: function(layero, index) {

                                    },
                                    cancel: function(index, layero) {

                                    }
                                })
                            }
                        })
                    } else {
                        editor.smiley.layerIndex = layer.open({
                            type: 1,
                            shade: false,
                            title: false, //不显示标题
                            area: "420px",
                            content: editor.smiley.$dialog, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
                            success: function(layero, index) {

                            },
                            cancel: function(index, layero) {

                            }
                        })
                    }


                }
            });
        }
    });

    function renderDialogHtml(data) {
        var editor = this;
        var hdStr = '',
            bdStr = '';
        for (i = 0; i < data.length; i++) {
            if (i == 0) {
                hdStr += '<li class="active"><a href="#" data-type="' + data[i].type + '">' + data[i].title + '</a></li>';
                bdStr += '<ul class="smiley-pic-list active">';
            } else {
                hdStr += '<li><a href="#" data-type="' + data[i].type + '">' + data[i].title + '</a></li>';
                bdStr += '<ul class="smiley-pic-list active">';
            }
            
            for (var j = 0; j < data[i].list.length; j++) {
                bdStr += '<li><img src="' + data[i].list[j] + '"></li>';
            }
            bdStr += '</ul>';
        }

        var str = '<div class="ckeditor-smiley-dialog" id="' + editor.smiley.dialogId + '">' +
            '<ul class="smiley-hd-list">' +
                hdStr+
                '<li class="move-seat"></li>' +
            '</ul>' +
            '<div class="smiley-bd">' +
                '<ul class="smiley-pic-list">' +
                        bdStr+
                '</ul>' +
            '</div>' +
            '<div>';
        $(str).appendTo($("body"));
        editor.smiley.$dialog = $("#" + editor.smiley.dialogId);
    }
})()