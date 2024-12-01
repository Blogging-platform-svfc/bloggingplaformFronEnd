  let isBold = false;
  let isItalic = false;

  function toggleComments() {
  var commentSection = document.getElementById('comment-section2');
  if (commentSection.style.display === 'none') {
  commentSection.style.display = 'block';
} else {
  commentSection.style.display = 'none';
}
}

  function incrementLikes() {
  var likeCountElement = document.getElementById('like-count2');
  var likeCount = parseInt(likeCountElement.innerText.split(' ')[0]);
  likeCount++;
  likeCountElement.innerText = likeCount + ' likes';
}

  function incrementCommentLikes(element) {
  var likeCountElement = element.querySelector('.like-count2');
  var likeCount = parseInt(likeCountElement.innerText);
  likeCount++;
  likeCountElement.innerText = likeCount;
}

  function toggleBold() {
  isBold = !isBold;
  var commentInput = document.getElementById('comment-input2');
  if (isBold) {
  commentInput.style.fontWeight = 'bold';
} else {
  commentInput.style.fontWeight = 'normal';
}
}

  function toggleItalic() {
  isItalic = !isItalic;
  var commentInput = document.getElementById('comment-input2');
  if (isItalic) {
  commentInput.style.fontStyle = 'italic';
} else {
  commentInput.style.fontStyle = 'normal';
}
}

  function toggleEmojiPicker() {
  var emojiPicker = document.getElementById('emoji-picker2');
  if (emojiPicker.style.display === 'none' || emojiPicker.style.display === '') {
  emojiPicker.style.display = 'block';
} else {
  emojiPicker.style.display = 'none';
}
}

  function addEmoji(emoji) {
  var commentInput = document.getElementById('comment-input2');
  commentInput.value += emoji;
  toggleEmojiPicker();
}

  function submitComment() {
  var commentInput = document.getElementById('comment-input2');
  var commentText = commentInput.value.trim();
  if (commentText === '') {
  return;
}

  var commentSection = document.getElementById('comment-section2');
  var newComment = document.createElement('div');
  newComment.className = 'comment2';
  newComment.innerHTML = `
                <img src="https://via.placeholder.com/40" alt="Profile picture of the commenter" width="40" height="40">
                <div class="text2">
                    <p><strong>You</strong> <span class="info2">Just now</span></p>
                    <p style="font-weight: ${isBold ? 'bold' : 'normal'}; font-style: ${isItalic ? 'italic' : 'normal'};">${commentText}</p>
                    <div class="actions2">
                        <span onclick="incrementCommentLikes(this)"><i class="far fa-thumbs-up"></i> <span class="like-count2">0</span></span>
                        <span><i class="far fa-thumbs-down"></i> 0</span>
                        <span>Reply</span>
                    </div>
                </div>
            `;
  commentSection.appendChild(newComment);
  commentInput.value = '';
  commentInput.style.fontWeight = 'normal';
  commentInput.style.fontStyle = 'normal';
  isBold = false;
  isItalic = false;
}
