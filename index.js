const form = document.getElementById('form')
// selected form from DOM

form.addEventListener('submit', (e) => { // added submit event listener on form
  e.preventDefault() // preventing page reload
  const formData = new FormData(form) // got formdata
  const Name = formData.get('name')
  const Email = formData.get('email')
  const Subject = formData.get('sub')
  const Msg = formData.get('msg')

  const body = 
  `Name= ${Name}
   Email= ${Email}
   Subject= ${Subject}
   Mesage= ${Msg}`
  // created body string 
  
  const uri = `mailto:your@email.com?body=${encodeURIComponent(body)}`;
  // created final uri to redirect to
  window.location.href = uri
  // redirected to the uri
})

