import ChartRenderer from "./charts/ChartRenderer";

const ChartAdminComponent = {
    install: (vue) => {
        vue.component('ChartRenderer', ChartRenderer);
    }
};

export default ChartAdminComponent;

