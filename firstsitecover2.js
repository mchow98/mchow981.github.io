

console.log("hello"); 


/* var quote = [

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
	quote = quote[randomNum];
	window.alert(quote); 
} 

var q1 = quotegenerator();


var button = document.getElementbyId("btn");

var launch = button.submit(function(event) { 
	/*return window.alert() */
 /* }); */


$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	  
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	 
	   
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	   
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    },

	    {
	    	quote:"If you fail to prepare, you prepare to fail.",
	    	name: "Benjamin Franklin"
	    },

	    {  
	    	quote: "A journey of a thousand miles begins with one step.",
	    	name: "Lao Tzu"
	    }



	];
		// $('quoteContainer').hide();

		$('#btn').click(function(){
			var quote = $('#quoteContainer p').text();
			var quoteSomeone = $('#quoteSomeone').text();
			//prevent browser's default action
			event.preventDefault(); 
			//getting a new random number to attach to a quote 
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//grab the quote from the array
			// for (i=0;i<=sourceLength;i+=1){ ??
			var newQuoteText =  quoteSource[randomNumber].quote;  /* quoteSource[4].quote */
			var newQuoteSomeone = quoteSource[randomNumber].name;

			/* if (newQuoteText == quoteSource[4].quote) {
				//$('#quotetextlarge') 
				
				 document.getElementById("quoteContainer").style.fontSize = "50px";
				 }
			*/

			var spentquote = [];
			

			// quote = quotesource[randomNumber].quote;
			while (newQuoteText in spentquote) {
					NewQuoteText = quotesource[randomNumber].quote
					if (spentquote.length == quoteSource.length) {
						console.log("end of quotes"); 
						spentquote=[] 
					}
					else { 
					
						console.log("hi")

					}
				}
			spentquote.push(newQuoteText)
					
			//FIND A WAY TO APPEND IT TO THE EMPTY SPENTQUOTE ARRAY.
			// console.log(newQuoteText,newQuoteSomeone);
      var timeAnimation = 600;
      var quoteContainer = $('#quoteContainer');
      //fadeout first so you can do a new one!
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
			quoteContainer.append('<p id="quotetext">'+newQuoteText+'</p>'+'<p id="quoteSomeone">'+'-'+newQuoteSomeone+'</p>');
        
        if (newQuoteText == quoteSource[4].quote) {
				//$('#quotetextlarge') 
				
				 document.getElementById("quotetext").style.fontSize = "80%";
				 }

		 if (newQuoteText == quoteSource[3].quote) {
				//$('#quotetextlarge') 
				
				 document.getElementById("quotetext").style.fontSize = "80%";
				 }


        //fadein animation
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			// break; --> used 4 the for loop?
	// ;//end for loop  
	
	});//end quoteButton function
		
		
});//end document ready?




