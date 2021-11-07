# PROJECT PLANNING

## Step 1 - Identify Each View

-   We need to determine the look and functionality of each view in your app. One of the best approaches is to draw each view of the app on paper so that you'll have a good idea of what information and data you're planning to have on each page.

Instead of paper and pencil, you can be a bit more digital and use software for creating mockups. If you were given project specifications, check your mock against them to make sure that you have all of the required features.

For this project, we'll use the screenshots of the app we'll be building instead of mocks.

### View for the Dashboard Page

[Screenshot of the Dashboard Page]('https://video.udacity-data.com/topher/2018/March/5abd5601_nd019-redux-l7-views-01-dashboard/nd019-redux-l7-views-01-dashboard.jpg');

### Dashboard View Requirements

-   is located at the home route `(/)`
-   shows tweets sorted from most recently added at the top, to oldest at the bottom
-   each tweet will show:

*   the author
*   the time stamp
*   who the author is replying to
*   the text of the tweet
*   a reply button - with the number of replies (if higher than 0)
*   a like button - with the number of likes (if higher than 0)

### View for the Tweet Page

[Screenshot of the Tweet Page]('https://video.udacity-data.com/topher/2018/March/5abd5636_nd019-redux-l7-views-02-tweet/nd019-redux-l7-views-02-tweet.jpg');

### Tweet Page View Requirements

-   is located at /tweet/:id
-   shows an individual tweet

*   the author
*   the time stamp
*   a reply button - with the number of replies (if higher than 0)
*   a like button - with the number of likes (if higher than 0)

-   has a reply form
-   shows all replies

### The New Tweet View Requirements

-   is located at /new
-   has a textbox for adding a new tweet

### View Recap

So these are the 3 views we need in our app:

-   Dashboard
-   Tweet
-   New Tweet

We now have a clear idea of what we're trying to build and can be confident that our views meet all of the provided requirements.

<hr />

## Step 2 - Break Each View Into a Hierarchy of Components

-   draw boxes around every component
-   arrange our components into a hierarchy

### Components for the Dashboard View

[Screenshot of drawn components for the Dashboard View]('https://video.udacity-data.com/topher/2018/March/5abd56d2_nd019-redux-l7-components-01-dashboard/nd019-redux-l7-components-01-dashboard.png');
**_Dashboard view broken up into Components._**

I broke this view into the following React Components:

-   App - the overall container for the project
-   Navigation - displays the navigation
-   Tweets List - responsible for the entire list of tweets
-   Tweet - in charge of display the content for a single tweet

<hr />

### Components for the Tweet View

[Screenshot of breakdown for Tweet View]('https://video.udacity-data.com/topher/2018/March/5abd56f5_nd019-redux-l7-components-02-tweet/nd019-redux-l7-components-02-tweet.png');
**_Tweet view broken up into Components._**

I broke this view into the following React Components:

-   App - the overall container for the project
-   Navigation - displays the navigation
-   Tweet Container - displays a list of tweets
-   Tweet - displays the content for a single tweet
-   New Tweet - display the form to create a new tweet (reply)

<hr />

### Components for the New Tweet View

[Screenshot for New Tweet Broken up into Component]('https://video.udacity-data.com/topher/2018/March/5abd570f_nd019-redux-l7-components-03-new-tweet/nd019-redux-l7-components-03-new-tweet.png');
**_New Tweet view broken up into Components._**

I broke this view into the following React Components:

-   App - the overall container for the project
-   Navigation - displays the navigation
-   New Tweet - display the form to create a new tweet

### All Components

-   App
-   Navigation
-   Tweets List
-   Tweet Container
-   Tweet
-   New Tweet

<hr />

## Step 3 - Determine What Events Happen in the App

We need to take a look at what is happening in each component. Let's determine what actions the app or the user is performing on the data. Is the data being set, modified, or deleted?...then we'll need an action to keep track of that event!

Let's italicize the action and bold the data.

-- For the Tweets List component, the only information that we see is that we'll have to get a list of all of the tweets. So for this component, we just need to:

-   get the tweets
    So the action type for event this will probably be something like `GET_LIST_OF_TWEETS` or `GET_DATA.`

*   The Tweet Component

-   We get a particular tweet from a list of tweets.
-   We get the authedUser (user that is currently logged in) so the user can toggle the likes on each tweet.
-   We get the authedUser so the user can reply to a tweet.

### Tweet Container Component

-   We get a specific tweet from a list of tweets.
-   We get the replies to a specific tweet from a list of tweets.

### New Tweet Component

-   We get the authedUser so the user can create a new tweet.
-   We set the text of the new tweet.

<hr />

## Step 4 - Determine What Data Lives in the Store

**"Use Redux for state that matters globally or is mutated in complex ways… The rule of thumb is: do whatever is less awkward."**

-   In the Dashboard Component, we need to access the current list of tweets. If the Dashboard Component knows the ID of the tweet that needs to be displayed, it can just pass that ID to the Tweet Component, which will render the tweet.

-   In the Tweet Component, we need to pick out a tweet with a specific id from the current list of tweets.

```
tweets: {
  tweetId: {tweetId, authorId, authorName, authorAvatar, timestamp, text, likes, replies, replyingTo},
  tweetId: {tweetId, authorId, authorName, authorAvatar, timestamp, text, likes, replies, replyingTo}
}
```
