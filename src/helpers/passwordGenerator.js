export default function generatePassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specials = '!@#$%^&*()';
  
    let password = '';
    let countDigits = 0;
    let countSpecials = 0;
  
    for (let i = 0; i < 2; i++) {
      password += digits[Math.floor(Math.random() * 10)]; // Sélectionne un chiffre aléatoire
      countDigits++;
    }
  
    for (let i = 0; i < 2; i++) {
      password += specials[Math.floor(Math.random() * specials.length)]; // Sélectionne un caractère spécial aléatoire
      countSpecials++;
    }
  
    for (let i = 0; i < 8 - countDigits - countSpecials; i++) {
      password += characters[Math.floor(Math.random() * characters.length)]; // Sélectionne un caractère alphabétique aléatoire
    }
  
    password = password.split('').sort(() => Math.random() - 0.5).join(''); // Mélange les caractères du mot de passe
  
    return password;
  }
  