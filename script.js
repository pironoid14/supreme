function updateUTCTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString();
}

updateUTCTime();