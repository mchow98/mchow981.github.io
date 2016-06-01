

var quote = [

' "A journey of a thousand miles begins with one step"-Lao Tzu ', 
' "Some desire is necessary to keep life in motion." ',
'"Nothing in life is to be feared. It is only to be understood." ',
' " In the book of life, the answers aren\'t in the back." ',  
' "If you fail to prepare, you prepare to fail" -Ben Franklin'
' "Hard work beats talent when talent doesn\'t work hard" ',
' "Have the courage to follow your heart and intuition. They somehow know what you truly want to become" - Steve Jobs',
' "In the practice of tolerence, one\'s enemy is the best teacher" ', 
' "If you follow in the tracks of others, you will leave no footprints behind" ',
' "tenth quote" '
]


var randomNum = math.floor((math.random() * 10));

function quotegenerator() { 
	quote = quote[randomNum]
	return quote 
} 

var button = document.getElementbyId("btn")

button.submit(function(event) 

