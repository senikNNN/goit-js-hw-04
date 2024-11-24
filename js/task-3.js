const profile = {
  username: "Jacob",
  playTime: 300,

  // Змінює ім'я профілю
  changeUsername(newName) {
    this.username = newName;
  },

  // Збільшує кількість ігрових годин
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Повертає інформацію про профіль
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

// Перевірка роботи об'єкта
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
