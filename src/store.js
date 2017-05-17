import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        todolist: [
            {
                id: 1,
                done: true,
                title: "今天下午3点开会"
            },
            {
                id: 2,
                done: false,
                title: "4点参加三龙舟比赛"
            },
            {
                id: 3,
                done: false,
                title: "项目进度"
            },
                {
                id: 4,
                done: false,
                title: "常见的色彩搭配按照色相的顺序归类"
            }
        ]
    },
  mutations: {
  }
})

export default store