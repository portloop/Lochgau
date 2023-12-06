import axios from "axios";
import cheerio from 'cheerio';

async function fetchHTML(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function parseHTML(html) {
  const $ = cheerio.load(html);
  const events = [];

  // Общий объект для объединения данных
  const combinedEvent = {
    time: "",
    tournament: "",
    teams: []
  };

  // Выбираем только нужные tr.row-competition
  $(html).each((index, element) => {
    const teams = [];

    const time = $(element).find('.column-date').text().trim();
    const tournament = $(element).find('.column-team a').text().trim();

    // Выбираем команды только внутри текущего tr.row-competition
    $(element).find('.column-club').each((index, clubElement) => {
      const clubName = $(clubElement).find('.club-name').text().trim();
      const logoElement = $(clubElement).find('.club-logo span');
      const teamLogo = 'https:' + logoElement.attr('data-responsive-image');

      const team = {
        club: clubName,
        logo: teamLogo
      };

      teams.push(team);
    });

    // Обновляем значения общего объекта
    combinedEvent.time = time || combinedEvent.time;
    combinedEvent.tournament = tournament || combinedEvent.tournament;
    combinedEvent.teams = [...combinedEvent.teams, ...teams];
  });

  // Добавляем объединенные данные в массив events
  events.push(combinedEvent);

  return events;
}

async function getData(apiUrl) {
  try {
    const html = await fetchHTML(apiUrl);
    const events = parseHTML(html);
    return events;
  } catch (error) {
    throw error;
  }
}

export default getData;
