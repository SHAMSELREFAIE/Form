function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Reset all error styles
    document.querySelectorAll('.input-with-icon input').forEach(input => {
        input.style.borderColor = '#ddd';
    });
    
    let isValid = true;
    
    if (firstName === "") {
        showError("firstName", "الاسم الأول مطلوب");
        isValid = false;
    }
    
    if (lastName === "") {
        showError("lastName", "الاسم الأخير مطلوب");
        isValid = false;
    }
    
    if (email === "") {
        showError("email", "البريد الإلكتروني مطلوب");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("email", "البريد الإلكتروني غير صالح");
        isValid = false;
    }
    
    if (password === "") {
        showError("password", "كلمة المرور مطلوبة");
        isValid = false;
    } else if (password.length < 6) {
        showError("password", "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
        isValid = false;
    }
    
    if (isValid) {
        // Success animation
        const form = document.querySelector('.registration-form');
        form.style.animation = 'none';
        void form.offsetWidth; // Trigger reflow
        form.style.animation = 'successShake 0.5s ease';
        
        setTimeout(() => {
            alert("تم إرسال النموذج بنجاح!");
            form.reset();
            form.style.animation = '';
        }, 500);
    }
    
    return false; // Prevent form submission for demo
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = '#e74c3c';
    
    const errorElement = document.getElementById(`${fieldId}-error`);
    errorElement.textContent = message;
    
    // Error shake animation
    field.style.animation = 'none';
    void field.offsetWidth; // Trigger reflow
    field.style.animation = 'errorShake 0.4s ease';
}

// Add custom animations
const style = document.createElement('style');
style.textContent = `
    @keyframes successShake {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-5px) rotate(1deg); }
        50% { transform: translateY(0) rotate(-1deg); }
        75% { transform: translateY(-3px) rotate(1deg); }
    }
    
    @keyframes errorShake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-5px); }
        40%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
