import { createStore } from 'vuex';

export default createStore({
    state: {
        isDarkMode: false,
        currentView: 'Projects',
      },
      mutations: {
        toggleDarkMode(state) {
          state.isDarkMode = !state.isDarkMode;
        },
        setCurrentView(state, view) {
          state.currentView = view;
        },
      },
});
