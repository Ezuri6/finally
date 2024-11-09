let name = prompt("What is your name?");
      name = name.trim();
      if (name.length > 0) {
        alert(`Welcome to this adventure, ${name}! 🐢`);
      } else {
        alert("Too bad, we cannot proceed without your name!🦀");
      }