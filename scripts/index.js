const news = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque aut cumque debitis dolore, doloribus esse, eveniet, magni minima neque nesciunt obcaecati quae quas quisquam saepe sequi sit tenetur?',
        date: '08.02.2024',
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque aut cumque debitis dolore, doloribus esse, eveniet, magni minima neque nesciunt obcaecati quae quas quisquam saepe sequi sit tenetur?',
        date: '08.02.2024',
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque aut cumque debitis dolore, doloribus esse, eveniet, magni minima neque nesciunt obcaecati quae quas quisquam saepe sequi sit tenetur?',
        date: '08.02.2024',
    },
    {
        id: 4,
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque aut cumque debitis dolore, doloribus esse, eveniet, magni minima neque nesciunt obcaecati quae quas quisquam saepe sequi sit tenetur?',
        date: '08.02.2024',
    },
    {
        id: 5,
        title: 'Post 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque aut cumque debitis dolore, doloribus esse, eveniet, magni minima neque nesciunt obcaecati quae quas quisquam saepe sequi sit tenetur?',
        date: '08.02.2024',
    },
    {
        id: 6,
        title: 'Post 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque aut cumque debitis dolore, doloribus esse, eveniet, magni minima neque nesciunt obcaecati quae quas quisquam saepe sequi sit tenetur?',
        date: '08.02.2024',
    },
]

const postListDiv = document.getElementById('post-list');

news.forEach(post => {
    const postHtml = `
        <div class="bg-02 rounded-3 p-3">
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p>${post.date}</p>
        </div>
      `;
    postListDiv.innerHTML += postHtml;
});