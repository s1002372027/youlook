// sumFunction 插件对应组件的名字
import ghForm from './form';
import ghFormItem from './form/formItem.vue';
import ghInput from './input';
import ghButton from './button'
import ghCheckbox from './checkbox'
import ghRadio from './radio'
import ghSelect from './select'
import ghDatePicker from './datePicker'
import datePicker from './datePicker/datePicker.vue'
import ghRow from './layout'
import ghCol from './layout/col.vue'
import ghLink from './link'
const components ={
	ghInput,
	ghButton,
	ghCheckbox,
	ghRadio,
	ghSelect,
	ghDatePicker,
	datePicker,
  ghRow,
  ghCol,
  ghLink,
  ghFormItem,
  ghForm
}


const install = (Vue)=>{
	Object.keys(components).forEach(key => {
	    Vue.component(key, components[key]);
	});
}
export default install;
