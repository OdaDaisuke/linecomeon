$(function() {
	const TALK_MAXLEN = 8;

	/*
	 * line talk screen elements
	 */
	var mobile = {
			$clock : $('.mobile-time'),
			$talkLists : $('li.talk-block'),
			$lastMsgArrived : $('.last-msg-arrived')
		},

		$talkList = $('.talk-lists'),
		$addTalkBtn = $('#add-talk'),

		$remainingCount = $('#remaining-counts'),
		$previewDate = $('#preview-date'),
		$checkTimeRandom = $('#check-time-random'),

		addedCount = 0;

	/*
	 * entire logic
	 */
	var app = {
		init: function() {

			var d = new Date(),
				clockText = d.getHours() + ":" + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();

			// set
			mobile.$clock.text(clockText);
			$previewDate.attr('value', d.getHours() + ":" + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes());
			$remainingCount.text(TALK_MAXLEN);
			$talkList.sortable();

		},
		talkAddTrigger: function() {

			function addTalk() {
				var name = $('#opponent-name').val();
				var msg = $('#preview-msg').val();
				var talksCount = 0;
				$('.talk-block').each(function() {
					++talksCount;
				});

				if(name.length > 0 && msg.length > 0 && talksCount < TALK_MAXLEN) {

					var insertData;
					if($checkTimeRandom.prop('checked'))
						insertTime = getRandomTime();
					else
						insertTime = $previewDate.val();

					var $li = $(
						'<li class="talk-block">' +
							'<div class="inner">' +
								'<div class="last-msg-arrived">' + insertTime + '</div>' +
								'<div class="profile-image">' +
									'<img src="./assets/image/empty_room.png">' +
								'</div>' +
								'<div class="talk-preview-wrap">' +
									'<h4 class="talk-preview-from">' + name + '</h4>' +
									'<p class="talk-preview">' + msg + '</p>' +
							'</div>' +
						'</li>'
					);

					$talkList.append($li);

					$remainingCount.text(TALK_MAXLEN - (++addedCount));
					$('#opponent-name').val('');
					$('#preview-msg').val('');
					app.talkDeleteTrigger();

				} else if(talksCount >= TALK_MAXLEN) {

					alert('8項目までしか追加できません。');

				} else {

					alert('項目を入力してください。');

				}
			}

			$addTalkBtn.click(addTalk);

		},
		talkDeleteTrigger : function() {
			var $talk = $('.talk-block');
			$talk.off('click');

			$talk.click(function(e) {
				var index = $talk.index($(this)),
					title = $talk.eq(index).find('.talk-preview-from').text();

				if(confirm(title + 'のトークを削除しますか？')) {
					$talk.eq(index).remove();
					$remainingCount.text(TALK_MAXLEN - (--addedCount));
				}

			});
		}
	};
	app.init();
	app.talkAddTrigger();
});

function getRandomTime() {
	var d = new Date(parseInt(Math.random(0,100000000)*100000000));
	return d.getHours() + ':' + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();
}
