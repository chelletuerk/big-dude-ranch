const getData = () => {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `https://gist.githubusercontent.com/chelletuerk/638f59dbfec4eeaafb1d91123db8fcc3/raw/e0eeb4ed7f9e68e38ee51db6bb6bc881fdb5dc94/big-nerd-ranch.json`,
    success: function(data) {
      sortDate(data)
      renderSortedTitles(data)
    }
  })
}

const sortDate = (data) => {
  data.sort((a, b) => {
    let dateA = a.published_at.split('-').join('')
    let dateB = b.published_at.split('-').join('')
      if (dateA > dateB) {
        return -1
      }

      if (dateB < dateA) {
        return 1
      }
    })
  }

const renderSortedTitles = (data) => {
  data.forEach((e, i) => {
    $('.titles').append(`<p class="title">${e.title}<br>`)
  })
}

getData()
