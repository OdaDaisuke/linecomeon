const TALK_MAXLEN = 8;

/*
 * line talk screen elements
 */
var mobile = {
		$screen : $('.screen'),
		$clock : $('.mobile-time'),
		$opponentName : $('.app-caption-talk .text')
	},

	dialogInfo = {
		$body : $('#dialog'),
		$name : $('#edit-opponent-name'),
		$msg : $('#edit-preview-msg'),
		$saveBtn : $('#edit-save'),
		$date : $('#edit-preview-date'),
		$deleteBtn : $('#edit-delete'),
		$close : $('#dialog-close')
	},

	$opponentName = $('#opponent-name'),
	$previewMsg = $('#preview-msg'),
	$previewDate = $('#preview-date'),
	$previewProfile = $('#preview-profile'),
	$owner = $('[name="chat-owner"]'),
	$chatHistory = $('.chat-history'),
	$talkList = $('.talk-lists'),

	$checkTimeRandom = $('#check-time-random'),
	$checkOpponent = $('#check-chat-opponent');

	$screenShot = $('#screen-shot'),
	$screenShotBtn = $('#screen-shot-btn'),
	$addTalkBtn = $('#add-talk'),

	$remainingCount = $('#remaining-counts'),

	addedCount = 0;

/*
 * entire logic
 */
var app = {
	init: function() {

		var d = new Date(),
			clockText = d.getHours() + ":" + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();

		// set default value
		mobile.$clock.text(clockText);
		$previewDate.attr('value', d.getHours() + ":" + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes());
		$remainingCount.text(TALK_MAXLEN);
		$talkList.sortable();
		$chatHistory.sortable();
		$opponentName.focus();

		app.talkDialogTrigger();
		// screen shot trigger
		$screenShotBtn.click(function() {
			html2canvas(mobile.$screen).then(function(canvas) {
				var imgData = canvas.toDataURL();
				$screenShot.attr('src', imgData);
			});
		});

	},

	talkAddTrigger: function() {

		$addTalkBtn.click(function() {
			var talksCount = $('.talk-block').length;
			var insertData = {
					received : $previewDate.val(),
					name : escape($opponentName.val()),
					msg : escape($previewMsg.val()),
					profileURL : './assets/image/empty_room.png'
				};

			//フォーム入力チェック
			if(insertData.name.length > 0 && insertData.msg.length > 0 && talksCount < TALK_MAXLEN) {

				//受け取り時刻がランダムだったらランダム時刻代入
				if($checkTimeRandom.prop('checked'))
					insertData.received = getRandomTime();

				//プロフィール画像のURLが正気だったらそれを使う
				if($previewProfile.val().length > 0 && isURL($previewProfile.val()))
					insertData.profileURL = escape($previewProfile.val());

				$(
					'<li class="talk-block">' +
						'<div class="inner">' +
							'<div class="last-msg-arrived">' + insertData.received + '</div>' +
							'<div class="profile-image">' +
								'<img src="' + insertData.profileURL + '">' +
							'</div>' +
							'<div class="talk-preview-wrap">' +
								'<h4 class="talk-preview-from">' + insertData.name + '</h4>' +
								'<p class="talk-preview">' + insertData.msg + '</p>' +
						'</div>' +
					'</li>'
				).appendTo($talkList);

				$opponentName.val('').focus();
				$previewMsg.val('');
				$previewProfile.val('');

				//残り人数カウント
				setRemaining(++addedCount);

				//ダイアログトリガー更新
				app.talkDialogTrigger();

			} else if(talksCount >= TALK_MAXLEN)
				alert('8項目までしか追加できません。');
			else
				alert('項目を入力してください。');

		});

	},

	chatAddTrigger: function() {

		$opponentName.on('keyup', function() {
			mobile.$opponentName.text(escape($(this).val()));
		});

		$addTalkBtn.click(function() {

			var chatsCount = $('.chat-block').length,
				insertData = {
					received : $previewDate.val(),
					name : $opponentName.val(),
					msg : escape($previewMsg.val()),
					profileURL : './assets/image/empty_room.png'
				};

			if(insertData.msg.length > 0) {

				//受け取り時刻がランダムだったらランダム時刻代入
				if($checkTimeRandom.prop('checked'))
					insertData.received = getRandomTime();

				//プロフィール画像のURLが正気だったらそれを使う
				if($previewProfile.val().length > 0 && isURL($previewProfile.val()))
					insertData.profileURL = escape($previewProfile.val());

				// 自分が送信するメッセージだったら
				if(!$checkOpponent.prop('checked')) {

					$chatHistory.append($('<li class="chat-block mine">' +
						'<div class="chat-date"><span>' + insertData.received + "</span></div>" +
						'<div class="chat-wrap">' +
							'<div class="chat-balloon">' +
								'<p>' + insertData.msg + '</p>' +
							'</div>' +
						'</div>' +
						'</li>'
					));

				} else {

					$chatHistory.append($('<li class="chat-block">' +
							'<div class="profile-wrap">' +
								'<div class="profile-image">' +
									'<img src="' + insertData.profileURL + '">' +
								'</div>' +
							'</div>' +
							'<div class="chat-wrap">' +
								'<div class="chat-balloon">' +
									'<p>' + insertData.msg + '</p>' +
								'</div>' +
							'</div>' +
							'<div class="chat-date"><span>' + insertData.received + "</span></div>" +
						'</li>'
					));

				}

				//プロ画セット
				$('.profile-image').each(function() {
					$(this).find('img').attr('src', insertData.profileURL);
				});

				$previewMsg.val('').focus();
				app.chatDialogTrigger();

			} else alert('項目を入力してください。');

		});

	},

	talkDialogTrigger : function() {
		var $talks = $('.talk-block'),
			$current;

		$talks.off('click');
		dialogInfo.$deleteBtn.off('click');
		dialogInfo.$saveBtn.off('click');

		$talks.click(function(e) {
			$current = $(this);
			openDialog();
			dialogInfo.$name.val($current.find('.talk-preview-from').text());
			dialogInfo.$msg.val($current.find('.talk-preview').text());
		});

		dialogInfo.$deleteBtn.click(function() {
			$current.remove();
			--addedCount;
			setRemaining();
			app.talkDialogTrigger();
			closeDialog();
		});

		dialogInfo.$saveBtn.click(function() {
			$current.find('.talk-preview-from').text(dialogInfo.$name.val());
			$current.find('.talk-preview').text(dialogInfo.$msg.val());
			closeDialog();
		});

		dialogInfo.$close.click(closeDialog);
	},

	chatDialogTrigger : function() {
		var $chats = $('.chat-block'),
			$current;

		//イベントリセット
		$chats.off('click');
		dialogInfo.$deleteBtn.off('click');
		dialogInfo.$saveBtn.off('click');

		//項目クリック時のトリガー
		$chats.click(function(e) {
			$current = $(this);
			openDialog();
			dialogInfo.$msg.val(escape($current.find('p').text()));
			dialogInfo.$date.val($current.find('.chat-date').text());
		});

		//項目削除ボタントリガー
		dialogInfo.$deleteBtn.click(function() {
			$current.remove();
			app.chatDialogTrigger();
			closeDialog();
		});

		//項目保存トリガー
		dialogInfo.$saveBtn.click(function() {
			$current.find('p').text(escape(dialogInfo.$msg.val()));
			$current.find('.chat-date').text(dialogInfo.$date.val());
			closeDialog();
		});

		dialogInfo.$close.click(closeDialog);
	}

};
app.init();

//残り追加可能人数設定
function setRemaining() {
	$remainingCount.text(TALK_MAXLEN - addedCount);
}
function openDialog() {
	dialogInfo.$body.addClass('active');
}
function closeDialog() {
	dialogInfo.$body.removeClass('active');
}
