import './bootstrap';

import Vue from 'vue';
import App from './App';

// 组件区
import Loading from '@/components/custom-loading/custom-loading';
import Hint from '@/components/custom-hint/custom-hint';
import Empty from '@/components/custom-empty/custom-empty';
import LoadMore from '@/components/load-more.vue';
import PageLoad from '@/components/custom-page-load/custom-page-load';
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
import MescrollUNI from "@/components/mescroll-uni/mescroll-uni.vue";
import cuCustom from '@/common/colorui/components/cu-custom.vue';

Vue.component('Empty', Empty);
Vue.component('custom-empty', Empty);
Vue.component('LoadMore', LoadMore);
Vue.component('mescroll-body', MescrollBody);
Vue.component('mescroll-uni', MescrollUNI);
Vue.component('cu-custom', cuCustom);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
	...App
});

app.$mount();
