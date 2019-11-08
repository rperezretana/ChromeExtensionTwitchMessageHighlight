var appeareanceAlert = 'background-color: lightskyblue;color: black;font-weight: bolder;';
var checkBoxForChat = '<div><input type="checkbox" id="HighlightNewChatters" value="check"> Highlight new twitch messages</div>';
var chattersRecord = {};
var Init = function()
{
	$( document ).ready(function() 
	{
		console.log("setting up event");
		  setTimeout(function(){
			$(checkBoxForChat).insertBefore(".chat-input__textarea");
		  },10000);
			$(document).on('DOMNodeInserted',function(el){
				let target = $(el.target);
				if( target.hasClass("chat-line__message"))
				{
					let userName = target.find(".chat-author__display-name").html();
					console.log("new chat message from "+userName);
					if($("#HighlightNewChatters").is(':checked'))
					{
						if(chattersRecord[userName]===undefined)
						{
							$(el.target).attr('style', appeareanceAlert);
						}
					}
					chattersRecord[userName] = true;
				}
			}); 
	});
	$(window).on('hashchange', function(e)
	{
		Init();
	});
};
Init();