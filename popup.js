document.addEventListener('DOMContentLoaded', () => {
  const themeSelect = document.getElementById('theme');
  const immersionSlider = document.getElementById('immersion');
  const immersionVal = document.getElementById('immersionVal');
  const applyBtn = document.getElementById('applyBtn');
  const statusDiv = document.getElementById('status');
  
  // NEW: Grab the new UI elements
  const closeBtn = document.getElementById('closeBtn');
  const onboardingLink = document.getElementById('onboardingLink');

  // Load saved settings
  chrome.storage.local.get(['theme', 'immersion'], (data) => {
    if (data.theme) themeSelect.value = data.theme;
    if (data.immersion) {
      immersionSlider.value = data.immersion;
      immersionVal.textContent = data.immersion;
    }
  });

  immersionSlider.addEventListener('input', (e) => {
    immersionVal.textContent = e.target.value;
  });

  // NEW: Close button functionality
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      window.close(); // Closes the extension popup
    });
  }

  // NEW: Onboarding link functionality
  if (onboardingLink) {
    onboardingLink.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent standard link jump
      // Open the onboarding page in a brand new browser tab
      chrome.tabs.create({ url: 'onboarding.html' });
    });
  }

  function showStatus(msg, color) {
    if (!statusDiv) return;
    statusDiv.textContent = msg;
    statusDiv.style.color = color;
    setTimeout(() => { statusDiv.textContent = ""; }, 2500);
  }

  // Save and apply (Updated to match the new clean colors)
  applyBtn.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    const selectedImmersion = parseInt(immersionSlider.value, 10);
    showStatus("Applying...", "#6366f1"); // Changed to Indigo

    chrome.storage.local.set({ theme: selectedTheme, immersion: selectedImmersion }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (!currentTab || !currentTab.id) return;

        // Block restricted pages
        if (currentTab.url && (currentTab.url.startsWith('chrome://') || currentTab.url.startsWith('edge://') || currentTab.url.startsWith('about:'))) {
          showStatus("Cannot alter browser pages.", "#ef4444"); // Changed to a clean Red
          return;
        }

        // Try to send the message
        chrome.tabs.sendMessage(currentTab.id, { action: "updateReality" }, (response) => {
          if (chrome.runtime.lastError) {
            // If the script is missing, inject it!
            chrome.scripting.executeScript({
              target: { tabId: currentTab.id },
              files: ['content.js']
            }, () => {
              if (chrome.runtime.lastError) {
                showStatus("Please refresh the page.", "#ef4444");
              } else {
                chrome.tabs.sendMessage(currentTab.id, { action: "updateReality" });
                showStatus("Filter Applied!", "#10b981"); // Changed to a clean Green
              }
            });
          } else {
            showStatus("Filter Applied!", "#10b981");
          }
        });
      });
    });
  });
});