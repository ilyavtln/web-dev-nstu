const news = [{
  id: 1,
  title: '«В Новосибирске назвали самый криминальный район»',
  description: 'Стал извеcтен самый криминальный район Новосибирска. Об этом nsk.aif.ru сообщили в региональной прокуратуре.',
  date: '09.02.2024 06:05',
  href: 'news1',
  page: 'news1.html'
}, {
  id: 2,
  title: '«Локомотив» в гостях обыграл петербургский «Зенит» в суперлиге, отыгравшись со счета 0–2»',
  description: 'Новосибирский «Локомотив» победил петербургский «Зенит» в матче 21‑го тура чемпионата России по волейболу среди мужских команд.',
  date: '07.02.2024 23:19',
  href: 'news2',
  page: 'news2.html'
}, {
  id: 3,
  title: '«Новосибирская область вошла в тройку регионов с самым высоким креативным потенциалом»',
  description: 'В топ-3, без Москвы и Санкт-Петербурга, вошли Краснодарский край, Новосибирская и Нижегородская области. Оценивали инфраструктуру креативных индустрий, политику региона, турпривлекательность и др',
  date: '08.02.2024 17:23',
  href: 'news3',
  page: 'news3.html'
}, {
  id: 4,
  title: '«Специалисты дорожных служб просят не парковать машины на некоторых улицах»',
  description: 'В ближайшие дни синоптики обещают новосибирцам резкое изменение погоды. Коммунальные и дорожные службы сейчас заняты уборкой снега: с одной стороны, нужно убрать снег и наледь с крыш жилых домов и зданий иного назначения, чтобы в теплую погоду не допустить ЧП, с другой – необходимо прочищать дороги и тротуары, чтобы к весне город не поплыл.',
  date: '09.02.2024 18:17',
  href: 'news4',
  page: 'news4.html'
}, {
  id: 5,
  title: '«Звезда StandUp-шоу Андрей Атлас через 10 дней приедет в Новосибирск с концертом «Две спальни»»',
  description: 'Популярный комик из StandUp-шоу на ТНТ Андрей Атлас отметит десятилетие творческой карьеры и семейной жизни концертом «Две спальни» в Новосибирске.',
  date: '09.02.2024 14:05',
  href: 'news5',
  page: 'news5.html'
}, {
  id: 6,
  title: '«В Новосибирске эпидемический порог по гриппу и ОРВИ превышен на 20%»',
  description: 'Заболеваемость выше пороговых уровней во всех возрастных категориях',
  date: '09.02.2024 10:26',
  href: 'news6',
  page: 'news6.html'
},]

const postListDiv = document.getElementById('post-list');

news.forEach(post => {
  const postHtml = `
    <div class="d-flex flex-column justify-content-between bg-02 rounded-3 p-3">
      <div>
        <div class="p-1 mb-2 bg-primary rounded-1 text-01-color w-fit-content">${post?.date}</div>
        <img class="w-100 rounded-2" src="assets/images/${post?.href}.jpg" alt="Новости">
        <h3>${post?.title}</h3>
        <p>${post?.description}</p>
      </div>
      <a class="btn btn-primary" href="pages/${post?.page}">Открыть</a>
    </div>
  `;
  postListDiv.innerHTML += postHtml;
});

const navItem = document.getElementById('navigation');

const navHtml = `
    <nav class="navbar bg-01 p-1">
        <div class="container">
              <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                    <a class="nav-item" href="../index.html"><img class="nav-logo" src="assets/logos/icon.svg"></a>
                    <a class="nav-item" href="../index.html">Главная страница</a>
                    <a class="nav-item" href="/pages/news1.html">Новости</a>
                    <a class="nav-item" href="/pages/info.html">Контакты</a>
                    <!-- <a href="/">Скоро</a> -->
              </div>
        </div>
    </nav>
  `;
navItem.innerHTML = navHtml;