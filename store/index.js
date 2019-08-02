export const state = () => ({
  githubProjects: []
});

export const mutations = {
  updateGithubProjects: (state, payload) => {
    state.githubProjects = payload;
  }
};

export const actions = {
  async getGithubProjects({ state, commit }) {
    if (state.githubProjects.length) return;

    try {
      let githubProjects = await fetch(
        `https://api.github.com/users/noahcg/repos?page=1&per_page=100`
      ).then(res => res.json());

      console.log(githubProjects);
      commit("updateGithubProjects", githubProjects);
    } catch (err) {
      console.log(err);
    }
  }
};
