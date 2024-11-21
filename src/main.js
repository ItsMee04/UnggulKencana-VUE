//Bootstrap CSS
import "@/assets/css/bootstrap.min.css";

//Datetimepicker CSS
import "@/assets/css/bootstrap-datetimepicker.min.css";

//animation CSS
import "@/assets/css/animate.css";

//Select2 CSS
import "@/assets/plugins/select2/css/select2.min.css";

//Summernote CSS
import "@/assets/plugins/summernote/summernote-bs4.min.css";

//Datatable CSS
import "@/assets/css/dataTables.bootstrap5.min.css";

//Fontawesome CSS
import "@/assets/plugins/fontawesome/css/fontawesome.min.css";
import "@/assets/plugins/fontawesome/css/all.min.css";

//Boxicons CSS
import "@/assets/plugins/boxicons/css/boxicons.min.css";

//Fancybox
import "@/assets/plugins/fancybox/jquery.fancybox.min.css";

//Swiper CSS
import "@/assets/plugins/swiper/swiper.min.css";

//Daterangepikcer CSS
import "@/assets/plugins/daterangepicker/daterangepicker.css";

//Mobile CSS
import "@/assets/plugins/intltelinput/css/intlTelInput.css";
import "@/assets/plugins/intltelinput/css/demo.css";

//Map CSS
import "@/assets/plugins/jvectormap/jquery-jvectormap-2.0.5.css";

//Main CSS
import "@/assets/css/style.css";

//SCRIPT

//jQuery
import "@/assets/js/jquery-3.7.1.min.js";

//Feather Icon JS
import "@/assets/js/feather.min.js";

//Slimscroll JS
import "@/assets/js/jquery.slimscroll.min.js";

//Datatable JS
import "@/assets/js/jquery.dataTables.min.js";
import "@/assets/js/dataTables.bootstrap5.min.js";

//Bootstrap Core JS
import "@/assets/js/bootstrap.bundle.min.js";

//Chart JS
import "@/assets/plugins/apexchart/apexcharts.min.js";
import "@/assets/plugins/apexchart/chart-data.js";

//Daterangepikcer JS
import "@/assets/plugins/daterangepicker/daterangepicker.js";

//Summernote JS
import "@/assets/plugins/summernote/summernote-bs4.min.js";

//Mobile Input
import "@/assets/plugins/intltelinput/js/intlTelInput.js";

//Swiper JS
import "@/assets/plugins/swiper/swiper.min.js";

//FancyBox JS
import "@/assets/plugins/fancybox/jquery.fancybox.min.js";

//Map JS
import "@/assets/plugins/jvectormap/jquery-jvectormap-2.0.5.min.js";
import "@/assets/plugins/jvectormap/jquery-jvectormap-world-mill.js";
import "@/assets/plugins/jvectormap/jquery-jvectormap-ru-mill.js";
import "@/assets/plugins/jvectormap/jquery-jvectormap-us-aea.js";
import "@/assets/plugins/jvectormap/jquery-jvectormap-uk_countries-mill.js";
import "@/assets/plugins/jvectormap/jquery-jvectormap-in-mill.js";
import "@/assets/js/jvectormap.js";

//Chart JS
import "@/assets/plugins/apexchart/apexcharts.min.js";
import "@/assets/plugins/apexchart/chart-data.js";

//Sweetalert 2
import "@/assets/plugins/sweetalert/sweetalert2.all.min.js";
import "@/assets/plugins/sweetalert/sweetalerts.min.js";

//Custom JS
import "@/assets/js/theme-script.js";
import "@/assets/js/script.js";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
