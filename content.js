chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action" ) {
			Array.prototype.slice.call(document.querySelectorAll("a")).filter(a => a.innerText.includes("unsubscribe")).forEach(a => a.click());
		}
	}
);
