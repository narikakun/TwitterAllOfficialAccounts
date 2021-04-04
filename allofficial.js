$(document).on('DOMNodeInserted', show_badge);

function show_badge (event) {
    const tweets = $(event.target).find('article');
    tweets.each((index, element) => {
        console.log(element);
        show_badge_tweet(element);
    });
    if (tweets.length == 0) return;
	show_badge_user();
}

function show_badge_user () {
    var profile_elements = document.getElementsByClassName('css-901oao r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-1udh08x r-qvutc0');
    for(var i = 0; i < profile_elements.length; i++){
        if (profile_elements[i].lastElementChild.innerHTML) return;
        profile_elements[i].innerHTML += '<span class="css-901oao css-16my406 r-18u37iz r-1q142lx r-1tl8opc r-adyw6z r-135wba7 r-bcqeeo r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div aria-label="認証済みアカウントについての詳細が表示されます。" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-4qtqp9 r-9cviqr r-1ny4l3l r-o7ynqc r-6416eg"><svg viewBox="0 0 24 24" aria-label="認証済みアカウント" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div></div></span>';
    }
}

function show_badge_tweet (tweet) {
    var elements = tweet.getElementsByClassName('css-1dbjc4n r-1awozwy r-18u37iz r-dnmrzs');
    for(var i = 0; i < elements.length; i++){
        var element = elements[i].firstElementChild;
        if (element.lastElementChild.innerHTML && element.children[1]) return;
        element.firstElementChild.innerHTML += '<div dir="auto" class="css-901oao r-jwli3a r-18u37iz r-1q142lx r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"><svg viewBox="0 0 24 24" aria-label="認証済みアカウント" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div>';
    }
}