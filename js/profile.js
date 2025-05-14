document.addEventListener('DOMContentLoaded', function() {
   // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            
            // Toggle icon between bars and X
            const icon = mobileMenuButton.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    const style = document.createElement('style');
    style.textContent = `
        .nav-links.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: white;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            z-index: 100;
        }
        
        .nav-links.show li {
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Profile dropdown toggle (can be expanded in future)
    const profileIcon = document.querySelector('.profile-icon');
    
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            // Functionality to be added when dropdown is implemented
            console.log('Profile icon clicked');
        });
    }

    // Edit profile button
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            alert('Edit profile functionality to be implemented');
        });
    }

    // Edit child info buttons
    const editInfoBtns = document.querySelectorAll('.edit-info-btn');
    
    if (editInfoBtns.length > 0) {
        editInfoBtns.forEach(button => {
            button.addEventListener('click', function() {
                const childName = this.closest('.child-card').querySelector('h3').textContent;
                alert(`Edit information for ${childName}`);
            });
        });
    }

    // View activity details button
    const viewActivityBtn = document.querySelector('.view-all-btn');
    
    if (viewActivityBtn) {
        viewActivityBtn.addEventListener('click', function() {
            alert('View activity details functionality to be implemented');
        });
    }

    // Saved content cards
    const contentCards = document.querySelectorAll('.content-card');
    
    if (contentCards.length > 0) {
        contentCards.forEach(card => {
            card.addEventListener('click', function() {
                const contentTitle = this.querySelector('h3').textContent;
                alert(`Opening content: ${contentTitle}`);
            });
        });
    }

    // Add hover effect for cards
    const allCards = document.querySelectorAll('.child-card, .content-card, .activity-item');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Add hover effect for buttons
    const allButtons = document.querySelectorAll('button');
    
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('edit-profile-btn') || 
                this.classList.contains('edit-info-btn')) {
                this.style.backgroundColor = 'var(--primary-dark)';
                this.style.color = 'white';
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.classList.contains('edit-profile-btn') || 
                this.classList.contains('edit-info-btn')) {
                this.style.backgroundColor = 'var(--primary-color)';
                this.style.color = 'var(--text-color)';
                this.style.transform = 'translateY(0)';
            }
        });
    });
});
