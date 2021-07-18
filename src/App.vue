<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <hr>
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding HTML</router-link> |
    <router-link to="/databindinginputtext">Data Binding Input-Text</router-link> |
    <router-link to="/databindinginputnumber">Data Binding Input-Number</router-link> |
    <router-link to="/databindingtextarea">Data Binding Textarea</router-link>
    <hr>
    <router-link to="/databindingselect">Data Binding Select</router-link> |
    <router-link to="/databindingcheckbox">Data Binding Checkbox</router-link> |
    <router-link to="/databindingcheckbox2">Data Binding Checkbox2</router-link> |
    <router-link to="/databindingRadio">Data Binding Radio</router-link>
    <hr>
    <router-link to="/databindingattribue">Data Binding Attribue</router-link> |
    <router-link to="/databindingbutton">Data Binding Button</router-link> |
    <router-link to="/databindingclass">Data Binding Class</router-link> |
    <router-link to="/databindingclass2">Data Binding Class2</router-link>
    <hr>
    <router-link to="/databindingstyle">Data Binding Style</router-link> |
    <router-link to="/databindinglist">Data Binding List</router-link> |
    <router-link to="/renderingvifvshow">Rendering v-if / v-show</router-link> |
    <router-link to="/eventclick">Event Click</router-link> |
    <router-link to="/eventchange">Event Change</router-link>
    <hr>
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/watch2">Watch2</router-link>
    <hr>
    <router-link to="/databindinglist2">Data Binding List2</router-link> |
    <router-link to="/nestedcomponent">NestedComponent</router-link> |
    <router-link to="/parentcomponent">ParentComponent</router-link> |
    <router-link to="/parentcomponent2">ParentComponent2</router-link> |
    <router-link to="/slotusemodallayout">SlotModal</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link>
    <hr>
    <router-link to="/calculator">Calculator</router-link> |
  </div>
  <br>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border-bottom: 0.5em dashed #42b983;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav hr {
  width: 80%;
}
</style>
