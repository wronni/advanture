// State Management
let currentPage = 1;
const totalPages = 3;

// DOM Elements
const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-btn');
const pageLinks = document.querySelectorAll('[data-page-link]');

// Initialize
function init() {
    setupNavigation();
    setupKeyboardControls();
    setupPageLinks();
    updateNavButtons();
    
    // Preload images
    preloadImages();
    
    // Add transition end listeners
    pages.forEach(page => {
        page.addEventListener('transitionend', handleTransitionEnd);
    });
    
    console.log('Orange interactive pages initialized');
}

// Navigation Functions
function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage) {
        return;
    }
    
    const currentPageEl = document.getElementById(`page${currentPage}`);
    const nextPageEl = document.getElementById(`page${pageNumber}`);
    
    if (!currentPageEl || !nextPageEl) return;
    
    // Animate out current page
    currentPageEl.classList.add('fade-out');
    
    // Delay the fade-in of the next page
    setTimeout(() => {
        currentPageEl.classList.remove('active', 'fade-out');
        nextPageEl.classList.add('active', 'fade-in');
        currentPage = pageNumber;
        updateNavButtons();
        
        // Clean up animation class
        setTimeout(() => {
            nextPageEl.classList.remove('fade-in');
        }, 400);
    }, 300);
}

function nextPage() {
    const next = currentPage >= totalPages ? 1 : currentPage + 1;
    goToPage(next);
}

function prevPage() {
    const prev = currentPage <= 1 ? totalPages : currentPage - 1;
    goToPage(prev);
}

// Setup Functions
function setupNavigation() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pageNum = parseInt(e.target.dataset.page);
            goToPage(pageNum);
        });
    });
}

function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                nextPage();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                prevPage();
                break;
            case '1':
            case '2':
            case '3':
                e.preventDefault();
                goToPage(parseInt(e.key));
                break;
        }
    });
}

function setupPageLinks() {
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = parseInt(link.dataset.pageLink);
            goToPage(targetPage);
        });
    });
}

function updateNavButtons() {
    navButtons.forEach(btn => {
        const pageNum = parseInt(btn.dataset.page);
        if (pageNum === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handleTransitionEnd(e) {
    if (e.propertyName === 'opacity') {
        // Clean up any lingering animation classes
        e.target.classList.remove('fade-in', 'fade-out');
    }
}

// Image Preloading
function preloadImages() {
    const imageUrls = [
        'https://www.figma.com/api/mcp/asset/36b0d3b8-ea42-4483-bf6c-80beda0750f1',
        'https://www.figma.com/api/mcp/asset/009275fa-e36f-463d-a735-e12452cea327',
        'https://www.figma.com/api/mcp/asset/47be17dd-2802-4d3d-8476-9c504d7eec74'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Enhanced Text Interactions
function setupTextAnimations() {
    const textElements = document.querySelectorAll('.page-text');
    
    textElements.forEach(text => {
        // Add hover effect with slight rotation
        text.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.05) rotate(-1deg)';
        });
        
        text.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Add click animation
        text.addEventListener('mousedown', (e) => {
            e.target.style.transform = 'scale(0.95)';
        });
        
        text.addEventListener('mouseup', (e) => {
            e.target.style.transform = 'scale(1.05)';
        });
    });
}

// Swipe Gesture Support (for mobile)
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    if (touchEndX < touchStartX - 50) {
        nextPage();
    }
    if (touchEndX > touchStartX + 50) {
        prevPage();
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

// URL Hash Navigation
function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
        const pageNum = parseInt(hash.replace('#page', ''));
        if (pageNum >= 1 && pageNum <= totalPages) {
            goToPage(pageNum);
        }
    }
}

window.addEventListener('hashchange', handleHashChange);

// Handle browser back/forward
window.addEventListener('popstate', handleHashChange);

// Auto-hide keyboard hint after first interaction
let hasInteracted = false;
function hideKeyboardHint() {
    if (!hasInteracted) {
        const hint = document.querySelector('.keyboard-hint');
        if (hint) {
            setTimeout(() => {
                hint.style.opacity = '0';
                setTimeout(() => {
                    hint.style.display = 'none';
                }, 300);
            }, 5000);
        }
        hasInteracted = true;
    }
}

document.addEventListener('click', hideKeyboardHint);
document.addEventListener('keydown', hideKeyboardHint);

// Performance: Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle any resize-specific logic here
        console.log('Window resized');
    }, 250);
});

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add text animations after init
setTimeout(setupTextAnimations, 100);

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        goToPage,
        nextPage,
        prevPage,
        currentPage: () => currentPage
    };
}
