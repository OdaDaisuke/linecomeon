$(function() {
	const TALK_MAXLEN = 8;

	/*
	 * line talk screen elements
	 */
	var mobile = {
		$time : $('.mobile-time'),
		$talk_lists : $('li.talk-block'),
		$last_msg_arrived : $('.last-msg-arrived')
	};
	var $talk_list = $('.talk-lists');
	var $add_talk_btn = $('#add-talk');
	var $previewDate = $('#preview-date');

	/*
	 * entire logic
	 */
	var app = {
		init: function() {

			var d = new Date(),
				day = d.getDay(),
				text = d.getHours() + ":" + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();

			if (day < 10)
				day = '0' + day;

			mobile.$time.text(text);
			$previewDate.attr('value', d.getFullYear() + '-' + d.getMonth() + 1 + '-' + day);

		},
		talk_add_trigger: function() {

			function add_talk() {
				var get_random_time = function() {
					var d = new Date(parseInt(Math.random(0,100000000)*100000000));
					return d.getHours() + ':' + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();
				};
				var name = $('#opponent-name').val();
				var msg = $('#preview-msg').val();
				var talksCount = 0;
				$('.talk-block').each(function() {
					++talksCount;
				});

				if(name.length > 0 && msg.length > 0 && talksCount < TALK_MAXLEN) {
					var $li = $(
						'<li class="talk-block">' +
							'<div class="inner">' +
								'<div class="last-msg-arrived">' + get_random_time() + '</div>' +
								'<div class="profile-image">' +
									'<img src="./assets/image/empty_room.png">' +
								'</div>' +
								'<div class="talk-preview-wrap">' +
									'<h4 class="talk-preview-from">' + name + '</h4>' +
									'<p class="talk-preview">' + msg + '</p>' +
							'</div>' +
						'</li>'
					);

					$talk_list.append($li);

					$('#opponent-name').val('');
					$('#preview-msg').val('');
					app.talk_delete_trigger();

				} else if(talksCount >= TALK_MAXLEN) {

					alert('8項目までしか追加できません。');

				} else {

					alert('項目を入力してください。');

				}
			}

			$add_talk_btn.click(add_talk);

		},
		talk_delete_trigger : function() {
			var $talk = $('.talk-block');
			$talk.off('click');
			$talk.click(function(e) {
				var index = $talk.index($(this));
				var title = $talk.eq(index).find('.talk-preview-from').text();
				if(confirm(title + 'のトークを削除しますか？')) {
					$talk.eq(index).remove();
				}
			});
		}
	};
	app.init();
	app.talk_add_trigger();
});
