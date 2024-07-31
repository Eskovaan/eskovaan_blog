
$(document).ready(function() {
    // Toggle visibility of the message content
    $(".button-message").on("click",function() {
        const id = $(this).data("id"); // Get the ID of the message
        const messageContent = $(`#message-content-${id}`); // Find the corresponding message content
        const button = $(this); // Get the button that was clicked

        // Toggle the message content and button text
        if (messageContent.is(':visible')) {
            messageContent.hide();
            button.text('Show Message');
        } else {
            messageContent.show();
            button.text('Hide Message');
        }
    });

    // Scroll to the new post if the URL hash is '#new-post'
    if (window.location.hash === '#new-post') {
        const newPostElement = document.getElementById('new-post');
        newPostElement.scrollIntoView(false);
        // Remove the hash from the URL after scrolling
        history.replaceState(null, null, ' ');
    }

    // Handle delete post without reloading the page
    $("form.con-buttonbox3").on("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const form = $(this); // Store reference to the current form
        const postId = form.find("input[name='id']").val(); // Get the post ID from the hidden input
        
        // Send an AJAX request to delete the post
        $.ajax({
            type: "POST", 
            url: "/delete-post", 
            data: form.serialize(), // Serialize form data for sending

            // On successful request, remove the post from the DOM
            success: function(response) {
                if (response.success) {
                    // Remove the post element
                    $(`#message-content-${postId}`).closest('.con-post').remove();
                    // Check if there are any posts left
                    if ($(".con-post").length === 0) {
                        window.location.href = "/"; // Redirect to the home page
                    }
                } else {
                    console.error("Failed to delete post."); // Log error if deletion fails
                }
            },
            // On request error, log the error to the console
            error: function() {
                console.error("Error occurred while deleting post.");
            }
        });
    });
});