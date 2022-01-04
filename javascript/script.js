const commentsArea = document.querySelector(".comments-area");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.comments.length);

    function imprimir(element, indice) {
      console.log(indice);

      commentsArea.innerHTML += `<div class="comment">
        <div class="score-area">
          <span class="score-incremment">+</span>
          <span class="score-number">${data.comments[indice].score}</span>
          <span class="score-decremment">-</span>
        </div>
  
        <div class="comment-content">
          <div class="comment-top">
            <div class="infos-area">
              <div class="comment-min-picture">
                <img src="${data.comments[indice].user.image.png}" alt="comment-pic">
              </div>
              <span class="username-comment">${data.comments[indice].user.username}</span>
              <span class="createdAt-comment">${data.comments[indice].createdAt}</span>
            </div>
    
            <span class="action-btn">
              Reply
            </span>
          </div>
          <div class="comment-txt-area">
            <span class="comment-txt">
            ${data.comments[indice].content}
  
            </span>
          </div>
        </div>
       
      </div>
      
      `;
      if (data.comments[indice].replies.length > 0) {
        function imprimirReply(el, i) {
          commentsArea.innerHTML += `<div class="reply-area">
            <div class="line">
            </div>
            <div class="reply">
            
              <div class="score-area">
                <span class="score-incremment">+</span>
                <span class="score-number">${data.comments[indice].replies[i].score}</span>
                <span class="score-decremment">-</span>
              </div>
        
              <div class="comment-content">
                <div class="comment-top">
                  <div class="infos-area">
                    <div class="comment-min-picture">
                      <img src="${data.comments[indice].replies[i].user.image.png}" alt="comment-pic">
                    </div>
                    <span class="username-comment">${data.comments[indice].replies[i].user.username}</span>
                    <span class="createdAt-comment">${data.comments[indice].replies[i].createdAt}</span>
                  </div>
          
                  <span class="action-btn">
                    Reply
                  </span>
                </div>
                <div class="comment-txt-area">
                  <span class="comment-txt">
                  ${data.comments[indice].replies[i].content}
        
                  </span>
                </div>
              </div>
             
           
          </div>
          </div> `;
        }

        data.comments[indice].replies.forEach(imprimirReply);
      }
    }
    data.comments.forEach(imprimir);
    commentsArea.innerHTML += `  <div class="add-comment-area">
    <div class="user-img-area">
      <img src="${data.currentUser.image.png}" alt="${data.currentUser.username}_image" class="user-img">
    </div>
    <form action="">
    <textarea name="inputComment" resize="false" placeholder="Add a comment..." id="inputComment" rows="10"></textarea>
      <input type="submit" value="SEND" class="enviar">
    </form>
  </div>`;
  });
