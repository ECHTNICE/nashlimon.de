function copyToClipboard(btn) {
  const content = btn.parentNode;
  const textToCopy = content.innerText.slice(6);

  navigator.clipboard.writeText(textToCopy).then(() => {
    // Visuelles Feedback
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check"></i> done!`;
    btn.classList.add('btn-success');
    btn.classList.remove('btn-outline-secondary');

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('btn-success');
      btn.classList.add('btn-outline-secondary');
    }, 2000);
  });
};


function setCookie(name, value, days) {
        let expires = "";
        if (days) {
          let date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
      }

      function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }

      function acceptCookies() {
        setCookie('cookieConsent', 'accepted', 365);
        document.getElementById('cookie-banner').style.display = 'none';

        // Google Analytics aktivieren (Beispiel)
        loadAnalytics();
      }

      function declineCookies() {
        setCookie('cookieConsent', 'declined', 365);
        document.getElementById('cookie-banner').style.display = 'none';
      }

      function loadAnalytics() {
        // HIER DEINE GOOGLE ANALYTICS ID EINSETZEN
        let script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=<%- id.google %>";
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '<%- id.google %>', { 'anonymize_ip': true });
      }

      window.onload = function () {
        let consent = getCookie('cookieConsent');
        if (consent === 'accepted') {
          document.getElementById('cookie-banner').style.display = 'none';
          loadAnalytics();
        }
      };