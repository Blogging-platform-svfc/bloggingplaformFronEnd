import { Component } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {


  posts: any[] = []; // Array to store the posts with additional data like likes, comments, and posting date

  constructor() {}
  editPost(index: number): void {
    this.posts[index].isEditing = true; // Enable editing mode
  }

  savePost(index: number): void {
    this.posts[index].isEditing = false; // Disable editing mode
    this.posts[index].datePosted = new Date().toLocaleString(); // Update the post date (optional)
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1); // Remove the post
  }

  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string; // Image URL
        // Insert the image into the editor below the current content
        const editorContent = document.querySelector('.editor') as HTMLElement;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Uploaded Image';
        imgElement.classList.add('uploaded-image');
        editorContent.appendChild(imgElement);
      };
      reader.readAsDataURL(file);
    }
  }
  onVideoUpload(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files?.length) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const videoUrl = reader.result as string;
        // Insert video into the editor
        const videoHtml = `<video src="${videoUrl}" controls class="uploaded-video"></video>`;
        document.execCommand('insertHTML', false, videoHtml);
      };
      reader.readAsDataURL(file);
    }
  }
  // Apply formatting like bold, italic, underline, etc.
  formatText(command: string): void {
    // @ts-ignore
    document.execCommand(command, false, null);
  }

  // Insert elements like blockquote or code block
  addAngleBrackets(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      const wrappedText = `<${selectedText}>`;
      document.execCommand('insertText', false, wrappedText);
    }
  }

  addUnorderedList(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      // Wrap the selected text with <ul><li></li></ul>
      const listItems = selectedText.split('\n').map(item => `<li>${item}</li>`).join('');
      const unorderedList = `<ul>${listItems}</ul>`;
      document.execCommand('insertHTML', false, unorderedList);
    }
  }
  addSuperscript(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      // Wrap the selected text with superscript HTML tag
      const superscriptText = `<sup>${selectedText}</sup>`;
      document.execCommand('insertHTML', false, superscriptText);
    }
  }

  addSubscript(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      // Wrap the selected text with subscript HTML tag
      const subscriptText = `<sub>${selectedText}</sub>`;
      document.execCommand('insertHTML', false, subscriptText);
    }
  }

  // Add quotation marks around the selected text
  addQuotation(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      const quotedText = `"${selectedText}"`;
      document.execCommand('insertText', false, quotedText);
    }
  }
  addOrderedList(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      // Wrap the selected text with <ol><li></li></ol>
      const listItems = selectedText.split('\n').map(item => `<li>${item}</li>`).join('');
      const orderedList = `<ol>${listItems}</ol>`;
      document.execCommand('insertHTML', false, orderedList);
    }
  }
  alignLeft(): void {
    document.execCommand('justifyLeft');
  }

  alignCenter(): void {
    document.execCommand('justifyCenter');
  }

  alignRight(): void {
    document.execCommand('justifyRight');
  }
// Add paragraph tag around the selected text
  addParagraph(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      const paragraphText = `<p>${selectedText}</p>`;
      document.execCommand('insertHTML', false, paragraphText);
    }
  }

// Set text back to normal style (clear formatting)
  setNormalText(): void {
    document.execCommand('removeFormat');
  }
// Add link to the selected text
  addLink(): void {
    const selectedText = window.getSelection()?.toString();
    const url = prompt('Enter the URL:', 'https://'); // Prompt for URL

    if (selectedText && url) {
      const linkText = `<a href="${url}" target="_blank">${selectedText}</a>`;
      document.execCommand('insertHTML', false, linkText); // Insert the hyperlink into the editor
    }
  }
  // Handle editing the post (toggle isEditing flag)



  // Add heading tags (h1, h2, etc.) around the selected text
  addHeading(tag: string): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      const headingText = `<${tag}>${selectedText}</${tag}>`;
      document.execCommand('insertHTML', false, headingText);
    }
  }

  // Change the font-family of the editor content
  changeFont(event: Event): void {
    const selectedFont = (event.target as HTMLSelectElement).value;
    document.execCommand('fontName', false, selectedFont);
  }

  // Handle input events (if additional logic is needed)
  onInput(event: Event): void {
    console.log('Content changed:', (event.target as HTMLElement).innerHTML);
  }

  // Post the content from the editor
  postContent(editorContent: HTMLElement): void {
    const content = editorContent.innerHTML; // Get the content from the editor
    if (content.trim()) {
      this.posts.push({
        content,           // Store the post content
        likes: 0,          // Initial number of likes
        comments: [],      // Array to store comments
        newComment: '',    // New comment input
        showCommentBox: false, // Whether to show the comment box
        datePosted: new Date().toLocaleString(),// Store the posting date
        isEditing: false // New post is not in editing mode
      });
      editorContent.innerHTML = ''; // Clear the editor after posting
    }
  }
  getVideoUrl(content: string): string | null {
    const videoTagMatch = content.match(/<video.*?src="(.*?)"/);
    return videoTagMatch ? videoTagMatch[1] : null;
  }
  // Like a post
  likePost(index: number): void {
    this.posts[index].likes += 1;
  }

  // Toggle comment box visibility
  toggleCommentBox(index: number): void {
    this.posts[index].showCommentBox = !this.posts[index].showCommentBox;
  }

  // Add a comment to a post
  addComment(index: number): void {
    if (this.posts[index].newComment.trim()) {
      this.posts[index].comments.push(this.posts[index].newComment);
      this.posts[index].newComment = ''; // Clear the input field after posting the comment
    }
  }

  // Share post logic (dummy example)
  sharePost(index: number): void {
    alert('Post shared: ' + this.posts[index].content);
  }

  // View post logic (dummy example)
  viewPost(index: number): void {
    alert('Viewing post: ' + this.posts[index].content);
  }

}
