import Vue from 'vue';
import Vuex from 'vuex';

import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey } from '@/api';

Vue.use(Vuex);

const state = {
  // single source of data
  surveys: [],
  currentSurvey: {},
};

const actions = {
  // asynchronous actions
  loadSurveys(context) {
    return fetchSurveys()
      // .then(response => context.commit('setSurveys', { surveys: response }));
      .then((response) => {
        context.commit('setSurveys', { surveys: response.data.surveys });
        console.log(1, state);
        console.log(2, response.data.surveys);
      });
  },
  //    object destructured { id } getting value from object that will be entered
  loadSurvey(context, { id }) {
    return fetchSurvey(id)
      // .then(response => context.commit('setSurvey', { survey: response }));
      .then((response) => {
        context.commit('setSurvey', { survey: response.data.survey });
      });
  },
  addSurveyResponse(context) {
    return saveSurveyResponse(context.state.currentSurvey);
  },
  submitNewSurvey(context, survey) {
    return postNewSurvey(survey);
  },
};

const mutations = {
  // isolated data mutations
  // eslint-disable-next-line
  setSurveys(state, payload) {
    state.surveys = payload.surveys;
  },
  // eslint-disable-next-line
  setSurvey(state, payload) {
    const survey = payload.survey;
    const nQuestions = survey.questions.length;
    // eslint-disable-next-line
    for (let i = 0; i < nQuestions; i++) {
      survey.questions[i].choice = null;
    }
    state.currentSurvey = survey;
  },
  // eslint-disable-next-line
  setChoice(state, payload) {
    const { questionId, choice } = payload;
    const nQuestions = state.currentSurvey.questions.length;
    // eslint-disable-next-line
    for (let i = 0; i < nQuestions; i++) {
      if (state.currentSurvey.questions[i].id === questionId) {
        state.currentSurvey.questions[i].choice = choice;
        break;
      }
    }
  },
};

const getters = {
  // reusable data accessors
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;
