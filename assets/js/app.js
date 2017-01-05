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

		dialogInfo = {
			$body : $('#dialog'),
			$name : $('#edit-opponent-name'),
			$msg : $('#edit-preview-msg'),
			$saveBtn : $('#edit-save'),
			$deleteBtn : $('#edit-delete'),
			$close : $('#dialog-close')
		},

		$opponentName = $('#opponent-name'),
		$previewMsg = $('#preview-msg'),

		$screenShot = $('#screen-shot'),
		$screenShotBtn = $('#screen-shot-btn'),

		$screen = $('.screen');
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
			$opponentName.focus();

		},

		talkAddTrigger: function() {

			function addTalk() {

				var talksCount = $('.talk-block').length;
				var insertData = {
						received : null,
						name : $opponentName.val(),
						msg : $previewMsg.val()
					};

				if(insertData.name.length > 0 && insertData.msg.length > 0 && talksCount < TALK_MAXLEN) {

					if($checkTimeRandom.prop('checked'))
						insertData.received = getRandomTime();
					else
						insertData.received = $previewDate.val();


					$(
						'<li class="talk-block">' +
							'<div class="inner">' +
								'<div class="last-msg-arrived">' + insertData.received + '</div>' +
								'<div class="profile-image">' +
									'<img src="./assets/image/empty_room.png">' +
								'</div>' +
								'<div class="talk-preview-wrap">' +
									'<h4 class="talk-preview-from">' + insertData.name + '</h4>' +
									'<p class="talk-preview">' + insertData.msg + '</p>' +
							'</div>' +
						'</li>'
					).appendTo($talkList);

					$opponentName.val('').focus();
					$previewMsg.val('');
					app.setRemaining(++addedCount);
					app.dialogTrigger();

				} else if(talksCount >= TALK_MAXLEN) {

					alert('8項目までしか追加できません。');

				} else {

					alert('項目を入力してください。');

				}
			}

			$addTalkBtn.click(addTalk);

		},

		dialogTrigger : function() {
			var $talk = $('.talk-block'),
				$current;

			$talk.off('click');
			dialogInfo.$deleteBtn.off('click');
			dialogInfo.$saveBtn.off('click');

			function openDialog() {
				dialogInfo.$body.addClass('active');
			}
			function closeDialog() {
				dialogInfo.$body.removeClass('active');
			}

			$talk.click(function(e) {
				$current = $(this);

				// dialogInfo.$deleteBtn.off('click');

				openDialog();

				dialogInfo.$name.val($current.find('.talk-preview-from').text());
				dialogInfo.$msg.val($current.find('.talk-preview').text());

			});

			dialogInfo.$deleteBtn.click(function() {
				$current.remove();
				--addedCount;
				app.setRemaining();
				app.dialogTrigger();
				closeDialog();
			});

			dialogInfo.$saveBtn.click(function() {
				$current.find('.talk-preview-from').text(dialogInfo.$name.val());
				$current.find('.talk-preview').text(dialogInfo.$msg.val());
				closeDialog();
			});

			dialogInfo.$close.click(closeDialog);
		},

		screenShotTrigger : function() {
			$screenShotBtn.click(function() {
				app.takeScreenShot();
			});
		},

		takeScreenShot:  function() {
	    html2canvas($screen).then(function(canvas) {
	        var imgData = canvas.toDataURL();
					$screenShot.attr('src', imgData);
	    });
		},

		setRemaining : function() {
			$remainingCount.text(TALK_MAXLEN - addedCount);
		}

	};
	app.init();
	app.talkAddTrigger();
	app.dialogTrigger();
	app.screenShotTrigger();
});

function getRandomTime() {
	var d = new Date(parseInt(Math.random(0,100000000)*100000000));
	return d.getHours() + ':' + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();
}
