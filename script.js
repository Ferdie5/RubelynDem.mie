// Header toggle

// Get the MenuBtn element by its ID
let MenuBtn = document.getElementById('MenuBtn');

// Add a click event listener to the MenuBtn element
MenuBtn.addEventListener('click', function(e) {
    // Toggle the 'mobile-nav-active' class on the body element to show/hide the mobile navigation
    document.querySelector('body').classList.toggle('mobile-nav-active');
    
    // Toggle the 'fa-xmark' class on the MenuBtn element to change the icon when clicked
    this.classList.toggle("fa-xmark");
});
// Typing Effect for Auto Input 1
let typed1 = new Typed ('.auto-input1',{
    strings: [ 'Your Uncovering Insights', 'Your Achitecting Solutions','Your Future Information System Professional, poised to innovate and lead in the digital age.' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true,
    shuffle: true,
    cursorChar: '_', // Change the cursor character (underscore in this example)
    showCursor: true, // Show the cursor while typing
    cursorBlinking: true, 
    preStringTyped: function() {
      // Add font effect before typing each string
      document.querySelector('.auto-input1').style.fontStyle = 'italic';
      document.querySelector('.auto-input1').style.color = 'white';
    },
    onStringTyped: function() {
      // Reset font effect after typing each string
      document.querySelector('.auto-input1').style.fontStyle = 'normal';
      document.querySelector('.auto-input1').style.color = 'white';
    }
  });

// Typing Effect for Auto Input 2
let typed2 = new Typed ('.auto-input2',{
    strings: [ ' "The only way to do great work is to love what you do." ' ],
    typeSpeed: 50,
    backSpeed: 125,
    backDelay: 20000,
    loop: true,
    cursorChar: '_',
});

// Typing Effect for Auto Input 3
let typed3 = new Typed ('.auto-input3',{
    strings: ['About Me'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    cursorChar: '_',
});

// Typing Effect for Auto Input 4
let typed4 = new Typed ('.auto-input4',{
    strings: [ 'Skills'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    cursorChar: '_',
});

// Typing Effect for Auto Input 5
let typed5 = new Typed ('.auto-input5',{
    strings: [  'Contact Me'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    cursorChar: '_',
});

// Active link State On scroll 
// Get all links 
let navLinks = document.querySelectorAll('nav ul li a')
// Get all Sections
let Sections = document.querySelectorAll('section')

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPos = window.scrollY;

    // Loop through each section
    Sections.forEach(Section => {
        // Check if the scroll position is within the current section
        if (scrollPos > Section.offsetTop && scrollPos < (Section.offsetTop + Section.offsetHeight)) {
            // Loop through each navigation link
            navLinks.forEach(link => {
                // Remove the 'active' class from all navigation links
                link.classList.remove('active');

                // Check if the section ID matches the href of the navigation link
                if (Section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    // Add the 'active' class to the matching navigation link
                    link.classList.add('active');
                }
            });
        }
    });
});

//----------------------------------------------------------//
// EMAIL

// Add an event listener to the contact form for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the name, email, and message fields from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    // Create the subject for the email using the name
    var subject = "Message from " + name;

    // Construct the mailto link with recipient email, subject, and message body
    var mailtoLink = "mailto:Rubelyndemeterio@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg);
    
    // Redirect the browser to the mailto link to open the default email client
    window.location.href = mailtoLink;
});
