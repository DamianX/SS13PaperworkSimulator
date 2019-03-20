/* jshint jquery: true */
/* global checkFieldCount */
'use strict';

$(function() {
    $("#settings-dialog").dialog({
        autoOpen: false
    });

    $('#settings-btn').click(function() {
        $("#settings-dialog").dialog('open');
    });

    $('#pen-checkbox').click(updateFields);
    $('#filled-checkbox').click(updateFields);

    $('#theme-select option').click(function(e) {
        var target = $(e.target);
        var targetSelect = target.parent();

        $('.controlgroup .control').css('-webkit-transition', 'none');
        $('.controlgroup .control').css('-moz-transition', 'none');
        $('.controlgroup .control').css('-ms-transition', 'none');
        $('.controlgroup .control').css('-o-transition', 'none');
        $('.controlgroup .control').css('transition', 'none');

        for (var i = 0; i < $('#theme-select option').length; ++i) {
            var option = $('#theme-select option')[i];
            $('body').removeClass($(option).val());
        }
        $('body').addClass(targetSelect.val());

        setTimeout(function() {
            $('.controlgroup .control').css('-webkit-transition', '');
            $('.controlgroup .control').css('-moz-transition', '');
            $('.controlgroup .control').css('-ms-transition', '');
            $('.controlgroup .control').css('-o-transition', '');
            $('.controlgroup .control').css('transition', '');
        }, 300);
    });
});

function updateFields() {
    var innerHtml = '';
    if ($('#filled-checkbox').is(':checked')) {
        innerHtml += '<span class="sample-text">Lorem ipsum dolor sit amet</span>';
    }
    if ($('#pen-checkbox').is(':checked')) {
        var html = '<span class="write-prompt" title="Players in-game will click this to write on the paper">write</span>';
        innerHtml += html;
        $('.output-end').html(html);
        $('.write-prompt').tooltip();
    } else {
        $('.output-end').html('');
    }
    $('.paper_field').html(innerHtml);

    checkFieldCount();
}

