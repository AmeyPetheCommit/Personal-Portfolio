document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });

  tsParticles.load("tsparticles", {
    background: { color: "#0f0f0f" },
    particles: {
      color: { value: "#00adb5" },
      links: { enable: true, color: "#00adb5", distance: 150 },
      move: { enable: true, speed: 1 },
      number: { value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: 2 },
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      // Close menu after clicking a nav link
      hamburger.classList.remove("open");
      navLinks.classList.remove("active");
    });
  });
});



// Animate on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default reload
    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        form.reset(); // Clear form fields
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    });
  });


  document.querySelectorAll('.open-video').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      const video = modal.querySelector('video');
      modal.style.display = 'flex';
      video.play();
    });
  });

  document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.video-modal');
      const video = modal.querySelector('video');
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('video-modal')) {
      const video = e.target.querySelector('video');
      e.target.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    }
  });


