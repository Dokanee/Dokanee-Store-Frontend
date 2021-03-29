<template>
  <div>
   <Template-1 v-if="templateInfo.templateId==1 || templateInfo.templateId==null"></Template-1>
   <Template-2 v-if="templateInfo.templateId==2"></Template-2>
  </div>
</template>
<script>
import Template1 from '../views/template1'
import Template2 from '../views/Template2'
import {mapGetters, mapActions} from "vuex";
export default {
  components: {
      "Template-1": Template1,
      "Template-2": Template2,
  },
  data() {
    return {
      template: 2,
    }
  },
   methods: {
      ...mapActions(["getStoreInfo","getTemplateInfo"])
    },
    computed:
      mapGetters(["storeInfo", "templateInfo"]),

    created() {
      this.getInfo();
      this.getTemplate();
    }
}
</script>
