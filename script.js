
function handleSubmit(form, successEl, resetFields){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(successEl){ successEl.classList.add('show'); }
      form.reset();
    });
  }
  handleSubmit(document.getElementById('heroForm'), null);
  handleSubmit(document.getElementById('waitlistForm'), document.getElementById('formSuccess'));
