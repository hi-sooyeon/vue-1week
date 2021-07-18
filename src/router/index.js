import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from "@/views/DataBindingInputText";
import DataBindingInputNumber from "@/views/DataBindingInputNumber";
import DataBindingTextarea from "@/views/DataBindingTextarea";
import DataBindingSelect from "@/views/DataBindingSelect";
import DataBindingCheckbox from "@/views/DataBindingCheckbox";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2";
import DataBindingRadio from "@/views/DataBindingRadio";
import DataBindingAttribue from "@/views/DataBindingAttribue";
import DataBindingButton from "@/views/DataBindingButton";
import DataBindingClass from "@/views/DataBindingClass";
import DataBindingClass2 from "@/views/DataBindingClass2";
import DataBindingStyle from "@/views/DataBindingStyle";
import DataBindingList from "@/views/DataBindingList";
import RenderingVifVshow from "@/views/RenderingVifVshow";
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import Computed from "@/views/Computed";
import Watch from "@/views/Watch";
import Watch2 from "@/views/Watch2";
import DataBindingList2 from "@/views/DataBindingList2";
import NestedComponent from "@/views/NestedComponent";
import ParentComponent from "@/views/ParentComponent";
import ParentComponent2 from "@/views/ParentComponent2";
import SlotUseModalLayout from "@/views/SlotUseModalLayout";
import ProvideInject from "@/views/ProvideInject";
import Calculator from "@/views/Calculator";
import CalculatorAPI from "@/views/CalculatorAPI";
import CalculatorAPI2 from "@/views/CalculatorAPI2";
import CalculatorAPI3 from "@/views/CalculatorAPI3";
import CalculatorAPI4 from "@/views/CalculatorAPI4";
import CompositionAPIProvide from "@/views/CompositionAPIProvide";
import Plugins from "@/views/Plugins";
import StoreAccess from "@/views/StoreAccess";

const routes = [
  {
    path: '/',
    name: 'Home',
    // path : 브라우저에서 접속하는 url 주소를 정의
    // component : 지정된 path로 들어왔을때 보여줄 vue '컴포넌트'
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // => 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route
    // => 이 라우트에 대한 chunk 파일이 분리되어 생성됨
    // which is lazy-loaded when the route is visited.
    // => 이 라우트 방문 시, lazy-load
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

    // * 첫 번째, 두 번째 차이점
    // 첫 번째 : 사용자가 해당 path 접근하지 않더라도 이미 vue 파일을 import
    // 두 번째 : path 접근 전까지는 vue 파일에 대한 import 안함

    // blob/master/vue.config.js => Lazy Load
  },
  {
  path: '/databinding',
  name: 'DataBinding',
  component: DataBinding
  },
  {
  path: '/databindinghtml',
  name: 'DataBindingHtml',
  component: DataBindingHtml
  },
  {
  path: '/databindinginputtext',
  name: 'DataBindingInputText',
  component: DataBindingInputText
  },
  {
  path: '/databindinginputnumber',
  name: 'DataBindingNumber',
  component: DataBindingInputNumber
  },
  {
  path: '/databindingtextarea',
  name: 'DataBindingTextarea',
  component: DataBindingTextarea
  },
  {
  path: '/databindingSelect',
  name: 'DataBindingSelect',
  component: DataBindingSelect
  },
  {
  path: '/databindingcheckbox',
  name: 'DataBindingCheckbox',
  component: DataBindingCheckbox
  },
  {
  path: '/databindingcheckbox2',
  name: 'DataBindingCheckbox2',
  component: DataBindingCheckbox2
  },
  {
  path: '/databindingradio',
  name: 'DataBindingRadio',
  component: DataBindingRadio
  },
  {
  path: '/databindingattribue',
  name: 'DataBindingAttribue',
  component: DataBindingAttribue
  },
  {
  path: '/databindingButton',
  name: 'DataBindingButton',
  component: DataBindingButton
  },
  {
  path: '/databindingclass',
  name: 'DataBindingClass',
  component: DataBindingClass
  },
  {
  path: '/databindingclass2',
  name: 'DataBindingClass2',
  component: DataBindingClass2
  },
  {
  path: '/databindingstyle',
  name: 'DataBindingStyle',
  component: DataBindingStyle
  },
  {
  path: '/databindinglist',
  name: 'DataBindingList',
  component: DataBindingList
  },
  {
  path: '/renderingvifvshow',
  name: 'RenderingVifVshow',
  component: RenderingVifVshow
  },
  {
  path: '/eventclick',
  name: 'EventClick',
  component: EventClick
  },
  {
  path: '/eventchange',
  name: 'EventChange',
  component: EventChange
  },
  {
  path: '/computed',
  name: 'Computed',
  component: Computed
  },
  {
  path: '/watch',
  name: 'Watch',
  component: Watch
  },
  {
  path: '/watch2',
  name: 'Watch2',
  component: Watch2
  },
  {
  path: '/databindinglist2',
  name: 'DataBindingList2',
  component: DataBindingList2
  },
  {
  path: '/nestedcomponent',
  name: 'NestedComponent',
  component: NestedComponent
  },
  {
  path: '/parentcomponent',
  name: 'ParentComponent',
  component: ParentComponent
  },
  {
    path: '/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
  path: '/slotusemodallayout',
  name: 'SlotUseModalLayout',
  component: SlotUseModalLayout
  },
  {
  path: '/provideinject',
  name: 'ProvideInject',
  component: ProvideInject
  },
  {
  path: '/calculator',
  name: 'Calculator',
  component: Calculator
  },
  {
  path: '/calculatorapi',
  name: 'CalculatorAPI',
  component: CalculatorAPI
  },
  {
    path: '/calculatorapi2',
    name: 'CalculatorAPI2',
    component: CalculatorAPI2
  },
  {
    path: '/calculatorapi3',
    name: 'CalculatorAPI3',
    component: CalculatorAPI3
  },
  {
    path: '/calculatorapi4',
    name: 'CalculatorAPI4',
    component: CalculatorAPI4
  },
  {
  path: '/compositionapiprovide',
  name: 'CompositionAPIProvide',
  component: CompositionAPIProvide
  },
  {
  path: '/plugins',
  name: 'Plugins',
  component: Plugins
  },
  {
  path: '/storeaccess',
  name: 'StoreAccess',
  component: StoreAccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
