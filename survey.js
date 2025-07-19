
// survey.js
document.getElementById('surveyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="vote"]:checked');
  if (selected) {
    const vote = selected.value;
    localStorage.setItem('userVote', vote);
    document.getElementById('voteResult').innerText = "از رأی شما سپاسگزاریم: " + vote;
  } else {
    document.getElementById('voteResult').innerText = "لطفاً یک گزینه را انتخاب کنید.";
  }
});
