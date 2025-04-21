const Tweets = ({ tweets, shortAddress, contract,account }) => {
  console.log(account)
  const like = (author, id) => async () => {
    if (!contract || !account) {
      console.error(
        "Web3 or contract not initialized or account not connected."
      );
      return;
    }
    try {
      console.log("Liking tweet:", author, id);
      await contract.methods.likeTweet(author,id).send({ from: account });
      console.log("Tweet liked successfully!");
    } catch (error) {
      console.error("User rejected request:", error);
    }
  };
    return (
      <div id="tweetsContainer">
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet">
            <img
              className="user-icon"
              src={`https://avatar.iran.liara.run/public/boy?username=${tweet.author}`}
              alt="User Icon"
            />
            <div className="tweet-inner">
              <div className="author">{shortAddress(tweet.author)}</div>
              <div className="content">{tweet.content}</div>
              <div className="likes">{tweet.likes}</div>
              <button
                className="like-button"
                onClick={like(tweet.author,tweet.id)}
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Tweets;
  