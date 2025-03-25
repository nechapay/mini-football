Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var num = Math.floor(Math.random() * (i + 1))
    var d = this[num]
    this[num] = this[i]
    this[i] = d
  }
  return this
}

window.addEventListener('load', function (e) {
  setHeader()
  setGroups()
  setTeams()
  initDrag()
  initDrop()
  fullscreenInit()
  loadGroups()
})

var HEADER =
  'Первенство Вооруженных Сил Российской Федерации<br> среди общеобразовательных организаций Министерства обороны Российской Федерации по мини-футболу'

var groups = [
  {
    id: 'group_1',
    name: 'Группа А',
    size: 3,
    teams: [
      {
        id: 't_1',
        badge: 'A1',
        name: ''
      },
      {
        id: 't_2',
        badge: 'A2',
        name: ''
      },
      {
        id: 't_3',
        badge: 'A3',
        name: ''
      }
    ]
  },
  {
    id: 'group_2',
    name: 'Группа В',
    size: 3,
    teams: [
      {
        id: 't_6',
        badge: 'B1',
        name: ''
      },
      {
        id: 't_7',
        badge: 'B2',
        name: ''
      },
      {
        id: 't_8',
        badge: 'B3',
        name: ''
      }
    ]
  },
  {
    id: 'group_3',
    name: 'Группа С',
    size: 3,
    teams: [
      {
        id: 't_9',
        badge: 'С1',
        name: ''
      },
      {
        id: 't_10',
        badge: 'С2',
        name: ''
      },
      {
        id: 't_11',
        badge: 'С3',
        name: ''
      }
    ]
  },
  {
    id: 'group_4',
    name: 'Группа D',
    size: 3,
    teams: [
      {
        id: 't_12',
        badge: 'D1',
        name: ''
      },
      {
        id: 't_13',
        badge: 'D2',
        name: ''
      },
      {
        id: 't_14',
        badge: 'D3',
        name: ''
      }
    ]
  },
  {
    id: 'group_5',
    name: 'Группа E',
    size: 3,
    teams: [
      {
        id: 't_15',
        badge: 'E1',
        name: ''
      },
      {
        id: 't_16',
        badge: 'E2',
        name: ''
      },
      {
        id: 't_17',
        badge: 'E3',
        name: ''
      }
    ]
  },
  {
    id: 'group_6',
    name: 'Группа F',
    size: 3,
    teams: [
      {
        id: 't_18',
        badge: 'F1',
        name: ''
      },
      {
        id: 't_19',
        badge: 'F2',
        name: ''
      },
      {
        id: 't_20',
        badge: 'F3',
        name: ''
      }
    ]
  },
  {
    id: 'group_7',
    name: 'Группа G',
    size: 4,
    teams: [
      {
        id: 't_22',
        badge: 'G1',
        name: ''
      },
      {
        id: 't_23',
        badge: 'G2',
        name: ''
      },
      {
        id: 't_24',
        badge: 'G3',
        name: ''
      },
      {
        id: 't_25',
        badge: 'G4',
        name: ''
      }
    ]
  },
  {
    id: 'group_8',
    name: 'Группа H',
    size: 4,
    teams: [
      {
        id: 't_26',
        badge: 'H1',
        name: ''
      },
      {
        id: 't_27',
        badge: 'H2',
        name: ''
      },
      {
        id: 't_28',
        badge: 'H3',
        name: ''
      },
      {
        id: 't_29',
        badge: 'H4',
        name: ''
      }
    ]
  }
]

var teams = [
  {
    id: 'team01',
    name: 'КК (школы IT-технологий)',
    shortname: ''
  },
  {
    id: 'team02',
    name: 'Санкт-Петербургский КВК',
    shortname: ''
  },
  {
    id: 'team03',
    name: 'Ульяновское ГСВУ',
    shortname: ''
  },
  {
    id: 'team04',
    name: 'Екатеринбургское СВУ',
    shortname: ''
  },
  {
    id: 'team05',
    name: 'Омский КВК',
    shortname: ''
  },
  {
    id: 'team06',
    name: 'Филиал НВМУ г. Мурманск',
    shortname: ''
  },
  {
    id: 'team07',
    name: 'Санкт-Петербургское СВУ',
    shortname: ''
  },
  {
    id: 'team08',
    name: 'Оренбургское ПКУ',
    shortname: ''
  },
  {
    id: 'team09',
    name: 'Кызылское ПКУ',
    shortname: ''
  },
  {
    id: 'team10',
    name: 'Тверское СВУ',
    shortname: ''
  },
  {
    id: 'team11',
    name: 'Тюменское ПКУ',
    shortname: ''
  },
  {
    id: 'team12',
    name: 'Казанское СВУ',
    shortname: ''
  },
  {
    id: 'team13',
    name: 'Тульское СВУ',
    shortname: ''
  },
  {
    id: 'team14',
    name: 'Северо-Кавказское СВУ',
    shortname: ''
  },
  {
    id: 'team15',
    name: 'Московское ВМУ',
    shortname: ''
  },
  {
    id: 'team16',
    name: 'Кемеровское ПКУ',
    shortname: ''
  },
  {
    id: 'team17',
    name: 'Ставропольское ПКУ',
    shortname: ''
  },
  {
    id: 'team18',
    name: 'Петрозаводское ПКУ',
    shortname: ''
  },
  {
    id: 'team19',
    name: 'Московское СВУ',
    shortname: ''
  },
  {
    id: 'team20',
    name: 'Уссурийское СВУ',
    shortname: ''
  },
  {
    id: 'team21',
    name: 'Пермское СВУ',
    shortname: ''
  },
  {
    id: 'team22',
    name: 'Аксайский КК',
    shortname: ''
  },
  // {
  //   id: 'team23',
  //   name: 'Кронштадтский морской КВК',
  //   shortname: ''
  // },
  {
    id: 'team24',
    name: 'Филиал НВМУ г. Калининград',
    shortname: ''
  },
  {
    id: 'team25',
    name: 'Филиал НВМУ г. Севастополь',
    shortname: ''
  },
  {
    id: 'team26',
    name: 'Иркутское СВУ',
    shortname: ''
  },
  {
    id: 'team27',
    name: 'Краснодарское ПКУ',
    shortname: ''
  }
]

var hand_header = new Vue({
  el: '#hand_header',
  data: {
    text: ''
  },
  methods: {
    show: function (txt) {
      this.text = txt
    }
  }
})

var hand_groups = new Vue({
  el: '#hand_groups',
  data: {
    groups: []
  },
  methods: {
    setGroups: function (arr) {
      this.groups = arr
    },
    addTeam: function (group, txt, id) {
      this.groups.forEach(function (item) {
        if (item.id === group) {
          item.teams.forEach(function (team) {
            if (team.id === id) {
              item.name = txt
            }
          })
        }
      })
    }
  }
})

var hand_teams = new Vue({
  el: '#hand_teams',
  data: {
    teams: []
  },
  methods: {
    setTeams: function (arr) {
      this.teams = arr
      initDrag()
    }
  }
})

function setHeader() {
  hand_header.show(HEADER)
}

function setTeams() {
  // hand_teams.setTeams(teams);
  var $teams = $('.teams-container')

  teams.forEach(function (item) {
    $teams.append('<div id="' + item.id + '" class="team drag">' + item.name + '</div>')
  })
}

function setGroups() {
  var $groups = $('.groups-container')

  groups.forEach(function (item) {
    console.log(item)
    $groups.append(
      `<div id="${item.id}" class="group">
      <div class="group-name">${item.name}</div>
      <div class="group-body"></div></div>`
    )
    let $group = $('#' + item.id + ' group-body')
    item.teams.forEach(function (team) {
      $group.append(`<div class="my-badge">${team.name}</div><div id="${team.id}" class="team-container drop"></div>`)
    })
  })
}

function initDrag() {
  var $drag = $('.drag')
  $drag.draggable({
    revert: true,
    start: function () {
      $('.drop').toggleClass('highlight')
    },
    stop: function () {
      $('.drop').toggleClass('highlight')
    },
    stack: $drag
  })
}

function initDrop() {
  var $drop = $('.drop')
  $drop.droppable({
    accept: $('.drag'),
    drop: function (e, ui) {
      var id = $(this).parent().parent().attr('id')
      let slotId = $(this).attr('id')
      var teamName = $(ui.draggable).text()
      groups.forEach(function (item) {
        if (item.id === id) {
          item.teams.forEach(function (team) {
            if (team.id === slotId && team.name === '') {
              team.name = teamName
              $('#' + team.id).append(`<div class="team-place drag">${team.name}</div>`)
              initDrag()
              if ($(ui.draggable).hasClass('team-place')) {
                removeTeam($(ui.draggable).parent().attr('id'))
              } else {
                $(ui.draggable).draggable('destroy').addClass('my-hide')
              }
            }
          })
          placeTeams()
        }
      })
    }
  })
}

function placeTeams() {
  $('.group-body').empty()
  groups.forEach(function (item) {
    item.teams.forEach(function (team) {
      let element = team.name === '' ? '' : `<div class="team-place drag">${team.name}</div>`
      $('#' + item.id)
        .find('.group-body')
        .append(
          `<div class="my-badge">${team.badge}</div><div id="${team.id}" class="team-container drop">${element}</div>`
        )
    })
  })
  saveGroups()
  initDrag()
  initDrop()
  initRemove()
}

function removeTeam(id) {
  groups.forEach(function (item) {
    item.teams.forEach(function (team) {
      if (team.id === id) {
        team.name = ''
        $('#' + id).empty()
      }
    })
  })
}

function initRemove() {
  $('.team-place').on('dblclick', function () {
    var teamName = $(this).text()
    removeTeam($(this).parent().attr('id'))
    teams.forEach(function (item) {
      if (item.name === teamName) {
        $('#' + item.id).removeClass('my-hide')
        placeTeams()
        initDrag()
        initDrop()
      }
    })
  })
}

function saveGroups() {
  localStorage.setItem('groups3', JSON.stringify(groups))
}

function loadGroups() {
  groups = JSON.parse(localStorage.getItem('groups3')) || [
    {
      id: 'group_1',
      name: 'Группа А',
      size: 3,
      teams: [
        {
          id: 't_1',
          badge: 'A1',
          name: ''
        },
        {
          id: 't_2',
          badge: 'A2',
          name: ''
        },
        {
          id: 't_3',
          badge: 'A3',
          name: ''
        }
      ]
    },
    {
      id: 'group_2',
      name: 'Группа В',
      size: 3,
      teams: [
        {
          id: 't_6',
          badge: 'B1',
          name: ''
        },
        {
          id: 't_7',
          badge: 'B2',
          name: ''
        },
        {
          id: 't_8',
          badge: 'B3',
          name: ''
        }
      ]
    },
    {
      id: 'group_3',
      name: 'Группа С',
      size: 3,
      teams: [
        {
          id: 't_9',
          badge: 'С1',
          name: ''
        },
        {
          id: 't_10',
          badge: 'С2',
          name: ''
        },
        {
          id: 't_11',
          badge: 'С3',
          name: ''
        }
      ]
    },
    {
      id: 'group_4',
      name: 'Группа D',
      size: 3,
      teams: [
        {
          id: 't_12',
          badge: 'D1',
          name: ''
        },
        {
          id: 't_13',
          badge: 'D2',
          name: ''
        },
        {
          id: 't_14',
          badge: 'D3',
          name: ''
        }
      ]
    },
    {
      id: 'group_5',
      name: 'Группа E',
      size: 3,
      teams: [
        {
          id: 't_15',
          badge: 'E1',
          name: ''
        },
        {
          id: 't_16',
          badge: 'E2',
          name: ''
        },
        {
          id: 't_17',
          badge: 'E3',
          name: ''
        }
      ]
    },
    {
      id: 'group_6',
      name: 'Группа F',
      size: 3,
      teams: [
        {
          id: 't_18',
          badge: 'F1',
          name: ''
        },
        {
          id: 't_19',
          badge: 'F2',
          name: ''
        },
        {
          id: 't_20',
          badge: 'F3',
          name: ''
        }
      ]
    },
    {
      id: 'group_7',
      name: 'Группа G',
      size: 4,
      teams: [
        {
          id: 't_22',
          badge: 'G1',
          name: ''
        },
        {
          id: 't_23',
          badge: 'G2',
          name: ''
        },
        {
          id: 't_24',
          badge: 'G3',
          name: ''
        },
        {
          id: 't_25',
          badge: 'G4',
          name: ''
        }
      ]
    },
    {
      id: 'group_8',
      name: 'Группа H',
      size: 4,
      teams: [
        {
          id: 't_26',
          badge: 'H1',
          name: ''
        },
        {
          id: 't_27',
          badge: 'H2',
          name: ''
        },
        {
          id: 't_28',
          badge: 'H3',
          name: ''
        },
        {
          id: 't_29',
          badge: 'H4',
          name: ''
        }
      ]
    }
  ]
  placeTeams()
  hideTeams()
  $('#refresh').on('click', function () {
    clearGroups()
    location.reload()
  })
}

function clearGroups() {
  localStorage.clear()
}

function hideTeams() {
  groups.forEach(function (group) {
    group.teams.forEach(function (item) {
      teams.forEach(function (team) {
        if (team.name === item.name) {
          $('#' + team.id).addClass('my-hide')
        }
      })
    })
  })
}

var fullscreen = false

function fullscreenInit() {
  var animationTo = document.getElementById('animation-to'),
    animationFrom = document.getElementById('animation-from')

  button.addEventListener(
    'click',
    function () {
      var el = document.documentElement,
        rfs
      if (button.classList.contains('animated')) {
        aniFrom()
        el = document
        rfs = el.exitFullscreen || el.webkitExitFullscreen || el.mozCancelFullScreen || el.msExitFullscreen
      } else {
        aniTo()
        rfs = el.requestFullscreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
      }
      rfs.call(el)
    },
    false
  )

  var $button = $('#button')

  document.addEventListener('webkitfullscreenchange', function (event) {
    fullscreen = !fullscreen

    if (!fullscreen && $button.hasClass('animated')) {
      aniFrom()
    }
  })

  function aniFrom() {
    button.classList.remove('animated')
    animationFrom.beginElement()
  }

  function aniTo() {
    button.classList.add('animated')
    animationTo.beginElement()
  }
}
