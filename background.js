chrome.runtime.onInstalled.addListener((details) => {
  // Check if the extension was just installed (not updated)
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: "onboarding.html" });
  }
});