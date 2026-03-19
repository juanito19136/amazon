// Netflix Landing Page - Simple Script

// DOM Elements
const emailInput = document.querySelector('.email-input');
const getStartedBtn = document.querySelector('.get-started-btn');
const signInBtn = document.querySelector('.sign-in-btn');
const languageSelector = document.querySelector('.language-selector');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	initEventListeners();
});

function initEventListeners() {
	// Get Started Button
	if (getStartedBtn) {
		getStartedBtn.addEventListener('click', handleGetStarted);
	}

	// Sign In Button
	if (signInBtn) {
		signInBtn.addEventListener('click', () => {
			alert('Sign In functionality would redirect to login page');
		});
	}

	// Email Input - Validate on Enter
	if (emailInput) {
		emailInput.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				handleGetStarted();
			}
		});

		emailInput.addEventListener('focus', function() {
			this.style.boxShadow = '0 0 15px rgba(229, 9, 20, 0.5)';
		});

		emailInput.addEventListener('blur', function() {
			this.style.boxShadow = '';
		});
	}

	// Language Selector
	if (languageSelector) {
		languageSelector.addEventListener('click', () => {
			alert('Language selection would open language menu');
		});
	}
}

function handleGetStarted() {
	const email = emailInput.value.trim();

	if (!email) {
		alert('Please enter a valid email address');
		emailInput.focus();
		return;
	}

	// Simple email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert('Please enter a valid email address');
		emailInput.focus();
		return;
	}

	// Success
	alert(`Welcome! Continuing with email: ${email}`);
	emailInput.value = '';
}
