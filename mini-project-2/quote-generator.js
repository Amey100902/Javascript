var quote = document.querySelector('.quotes');
  var person = document.querySelector('.person');
  var btn = document.querySelector('#new-quote');


var quotes = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    '"The way to get started is to quit talking and begin doing."',
    '"If life were predictable it would cease to be life, and be without flavor."',
    '"The future belongs to those who believe in the beauty of their dreams."',
    "It does not matter how slowly you go as long as you do not stop.",
    "Life is what happens when you're busy making other plans.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The only impossible journey is the one you never begin.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it."
  ];
  
  var persons = [
    "Nelson Mandela",
    "Walt Disney",
    "Eleanor Roosevelt",
    "Eleanor Roosevelt",
    "Confucius",
    "John Lennon",
    "Abraham Lincoln",
    "Tony Robbins",
    "Winston Churchill",
    "Peter Drucker"
  ];

  
  btn.addEventListener('click', function(){
    
    const Index = Math.floor(Math.random() * quotes.length);
    
    

    quote.innerHTML=quotes[Index];
    person.innerHTML=persons[Index];
  })