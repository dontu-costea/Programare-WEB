let input = document.getElementsById('input');
input.addEventListener('focusout', (event) => {
	if(event.value.isInteger()) {
		event.value = 0;
	}
  });