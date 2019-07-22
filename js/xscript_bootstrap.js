/*  Copyright 2014: Xavier Llamas Rolland                      */
/*                                                             */
/*  This software distributed under the GPLv3 License          */
/*                                                             */
////////////////////////////////////////////////////////////////



/* xbScript Classes - Bootstrap augmented xScript classes */


/* xbLink */

function xbLink(label,href,clss){
   xLink.call(this,label,href,"btn " + (clss || "btn-default"));
}

xbLink.prototype = new xLink();

/* xbStringInput */

function xbStringInput(label,name,clss,wclss){
   xInput.call(this,clss || "form-control","form-group " + (wclss || ""));
   this.iname = name;
   this.node = document.createElement("div");
   this.node.id = this.id + "_w";
   this.node.className = this.wclss;
   var l = "<label class='control-label' for='" + name + "'>" + label + "</label>";
   var i = "<input type='text" +
           "' id='" + this.id +
           "' name='" + name +
           "' class='" + this.clss +
           "'>";
   this.node.innerHTML = l + i;
}

xbStringInput.prototype = new xInput();

xbStringInput.prototype.setError = function(e){
   if (e)
      this.addWrapperClass("has-error");
   else
      this.addWrapperClass("");
}

/* xbNumberInput */

function xbNumberInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss,wclss);
   this.setType("number");
}

xbNumberInput.prototype = new xbStringInput();

/* xbEmailInput */

function xbEmailInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss,wclss);
   this.setType("email");
}

xbEmailInput.prototype = new xbStringInput();

/* xbTelInput */

function xbTelInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss,wclss);
   this.setType("tel");
}

xbTelInput.prototype = new xbStringInput();

/* xbDateInput */

function xbDateInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss,wclss);
   this.setType("date");
}

xbDateInput.prototype = new xbStringInput();

/* xbRangeInput */

function xbRangeInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss,wclss);
   this.setType("range");
}

xbRangeInput.prototype = new xbStringInput();

/* xbPasswordInput */

function xbPasswordInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss,wclss);
   this.setType("password");
}

xbPasswordInput.prototype = new xbStringInput();

/* xbFileInput */

function xbFileInput(label,name,clss,wclss){
   xbStringInput.call(this,label,name,clss || "_",wclss);
   this.setType("file");
}

xbFileInput.prototype = new xbStringInput();

/* xbTextAreaInput */

function xbTextAreaInput(label,name,rows,clss,wclss){
   xInput.call(this,clss || "form-control","form-group " + (wclss || ""));
   this.iname = name;
   this.node = document.createElement("div");
   this.node.id = this.id + "_w";
   this.node.className = this.wclss;
   var l = "<label class='control-label' for='" + name + "'>" + label + "</label>";
   var i = "<textarea" +
           " id='" + this.id +
           "' name='" + name +
           "' class='" + this.clss +
           "' rows='" + rows +
           "'></textarea>";
   this.node.innerHTML = l + i;
}

xbTextAreaInput.prototype = new xInput();

xbTextAreaInput.prototype.setFocus = function(){
   this.node.getElementsByTagName("textarea")[0].focus();
   return this;
}

xbTextAreaInput.prototype.setSelected = function(){
   this.node.getElementsByTagName("textarea")[0].select();
   return this;
}

xbTextAreaInput.prototype.setValue = function(v){
   this.node.getElementsByTagName("textarea")[0].value = v;
   return this;
}

xbTextAreaInput.prototype.getValue = function(){
   return this.node.getElementsByTagName("textarea")[0].value;
}

xbTextAreaInput.prototype.setPlaceholder = function(p){
   this.node.getElementsByTagName("textarea")[0].placeholder = p;
   return this;
}

xbTextAreaInput.prototype.setError = function(e){
   if (e)
      this.addWrapperClass("has-error");
   else
      this.addWrapperClass("");
}

xbTextAreaInput.prototype.setReadOnly = function(r){
   this.node.getElementsByTagName("textarea")[0].readOnly = r;
   return this;
}

xbTextAreaInput.prototype.setDisabled = function(d){
   this.node.getElementsByTagName("textarea")[0].disabled = d;
   return this;
}

xbTextAreaInput.prototype.setName = function(name){
   this.iname = name;
   this.node.getElementsByTagName("textarea")[0].setAttribute("name",name);
   this.node.getElementsByTagName("label")[0].setAttribute("for",name);
}

/* xbCheckBox */

function xbCheckBox(label,name,clss,wclss){
   xInput.call(this,clss || "checkbox","form-group " + (wclss || ""));
   this.iname = name;
   this.node = document.createElement("div");
   this.node.id = this.id + "_w";
   this.node.className = this.wclss;
   var i = "<div class='" + this.clss + "'><label class='control-label'><input type='checkbox" +
           "' id='" + this.id +
           "' name='" + name +
           "'>" + label + "</label></div>";
   this.node.innerHTML = i;
}

xbCheckBox.prototype = new xInput();

xbCheckBox.prototype.setChecked = function(c){
   this.node.getElementsByTagName("input")[0].checked = c;
   return this;
}

xbCheckBox.prototype.getValue = function(){
   return this.node.getElementsByTagName("input")[0].checked;
}

xbCheckBox.prototype.setError = function(e){
   if (e)
      this.addWrapperClass("has-error");
   else
      this.addWrapperClass("");
}

/* xbSelect */

function xbSelect(label,sname,clss,wclss){
   xInput.call(this,clss || "form-control","form-group " + (wclss || ""));
   this.iname = sname;
   this.node = document.createElement("div");
   this.node.id = this.id + "_w";
   this.node.className = this.wclss;
   var l = "<label class='control-label' for='" + sname + "'>" + label + "</label>";
   var s = "<select id='" + this.id + "' name='" + sname + "' class='" + this.clss + "'>";
   s += "</select>";
   this.node.innerHTML = l + s;
}

xbSelect.prototype = new xInput();

xbSelect.prototype.setFocus = function(){
   this.node.getElementsByTagName("select")[0].focus();
   return this;
}

xbSelect.prototype.setSelected = function(){
   this.node.getElementsByTagName("select")[0].select();
   return this;
}

xbSelect.prototype.addOption = function(label,value){
   var n = this.node.getElementsByTagName("select")[0];
   opt = document.createElement("option");
   opt.text = label;
   opt.value = value;
   n.appendChild(opt);
   return this;
}

xbSelect.prototype.addOptions = function(options){
   var n = this.node.getElementsByTagName("select")[0];
   var opt;
   for(var i = 0; i < options.length; i++){
      opt = document.createElement("option");
      opt.text = options[i].label;
      opt.value = options[i].value;
      n.appendChild(opt);
   }
   return this;
}

xbSelect.prototype.setSelected = function(s){
   var n = this.node.getElementsByTagName("select")[0];
   for (var i = 0; i < n.options.length; i++){
     if (s == n.options[i].value){
        n.selectedIndex = i;
        break;
     }
   }
   return this;
}

xbSelect.prototype.clear = function(){
   var n = this.node.getElementsByTagName("select")[0];
   n.selected.index = -1;
   return this;
}

xbSelect.prototype.setValue = function(v){
   this.setSelected(v);
   return this;
}

xbSelect.prototype.getValue = function(){
   return this.node.getElementsByTagName("select")[0].value;
}

xbSelect.prototype.setError = function(e){
   if (e)
      this.addWrapperClass("has-error");
   else
      this.addWrapperClass("");
   return this;
}

xbSelect.prototype.setReadOnly = function(r){
   return this;
}

xbSelect.prototype.setDisabled = function(d){
   this.node.getElementsByTagName("select")[0].disabled = d;
   return this;
}

xbSelect.prototype.setName = function(name){
   this.iname = name;
   this.node.getElementsByTagName("select")[0].setAttribute("name",name);
   this.node.getElementsByTagName("label")[0].setAttribute("for",name);
   return this;
}

xbSelect.prototype.clearOptions = function(){
   var n = this.node.getElementsByTagName("select")[0];
   while(n.firstChild)
      n.removeChild(n.firstChild);
   return this;
}

/* xbMultiSelect */

function xbMultiSelect(label,sname,clss,wclss){
   xbSelect.call(this,label,sname,clss,wclss);
   this.node.getElementsByTagName("select")[0].setAttribute("multiple","");
}

xbMultiSelect.prototype = new xbSelect();

xbMultiSelect.prototype.getValues = function(){
   var values = [];
   var n = this.node.getElementsByTagName("select")[0];
   for (var i = 0; i < n.options.length; i++){
      if (n.options[i].selected)
         values.push(n.options[i].value);
   }
   return values;
}

/* xbForm */

function xbForm(clss){
  xMultiElement.call(this,clss || "");
  this.node = document.createElement("form");
  this.node.id = this.id;
  this.node.setAttribute("role","form");
  this.node.className = this.clss;
}

xbForm.prototype = new xMultiElement();

xbForm.prototype.getFormData = function(){
   var fields = new Object();

   function deepGetFormData(e){
      for (var i = 0; i < e.elements.length; i++){
         if (typeof e.elements[i].elements !== "undefined")
            deepGetFormData(e.elements[i]);
         if (typeof e.elements[i].element !== "undefined"){
            if (typeof e.elements[i].element.getValue !=="undefined"){
               fields[e.elements[i].element.getName()] = e.elements[i].element.getValue();
            }
         }
         if (typeof e.elements[i].getValue !== "undefined"){
            fields[e.elements[i].getName()] = e.elements[i].getValue();
         }
      }
   }

   deepGetFormData(this);
   return fields;
}

xbForm.prototype.validateForm = function(){
   var val = true;

   function deepValidate(e){
      if (typeof e.elements == "undefined")
         return;
      for (var i = 0; i < e.elements.length; i++){
         deepValidate(e.elements[i]);
         if (typeof e.elements[i].getValue !== "undefined"){
            if (!e.elements[i].validate()){
               val = false;
               e.elements[i].setError(true);
            }
            else
               e.elements[i].setError(false);
         }
      }
   }

   deepValidate(this);
   return val;
}

/* xbButton */

function xbButton(label,clss){
   xButton.call(this,label,"btn " + (clss || "btn-default"));
}

xbButton.prototype = new xButton()

/* xbButtonIcon */

function xbButtonIcon(label,icon,right,clss){
   var nlabel = "<span class='glyphicon " + icon + "'></span>";
   if (right)
      xButton.call(this,label + "" + nlabel,"btn " + (clss || "btn-default"));
   else
      xButton.call(this,nlabel + "" + label,"btn " + (clss || "btn-default"));
}

xbButtonIcon.prototype = new xButton();

/* xbButtonPopOver */

function xbButtonPopOver(label,title,content,clss){
   xbButton.call(this,label,clss);
   this.node.dataset.container = "body";
   this.node.dataset.toggle = "popover";
   this.node.dataset.title = title;
   this.node.dataset.content = content;
}

xbButtonPopOver.prototype = new xbButton();

/* xbButtonDropdown */

function xbButtonDropdown(label,icon,clss,wclss,dclss){
   xSection.call(this,"btn-group " + ("" || wclss));
   icon = icon || "caret";
   this.button = new xbButton(label + " <span class='" + icon + "'></span>","dropdown-toggle " + (clss || "btn-default"));
   this.button.node.dataset.toggle = "dropdown";
   this.list = new xList("dropdown-menu " + (dclss || ""));
   this.list.node.setAttribute("role","menu");
   this.addElement(this.button)
       .addElement(this.list);
}

xbButtonDropdown.prototype = new xSection();

xbButtonDropdown.prototype.addItem = function(item){
   this.list.addElement(item);
   return this;
}

/* xbButtonDropdownItem */

function xbButtonDropdownItem(label,f,clss){
   xLink.call(this,label,"#",clss);
   this.bindFunction(f);
}

xbButtonDropdownItem.prototype = new xLink();

/* xbButtonGroup */

function xbButtonGroup(clss){
   xSection.call(this,"btn-group " + (clss || ""));
}

xbButtonGroup.prototype = new xSection();

xbButtonGroup.prototype.addButton = function(btn){
   this.addElement(btn);
   return this;
}

/* xbButtonGroupVertical */

function xbButtonGroupVertical(clss){
   xbButtonGroup.call(this,"btn-group-vertical " + (clss || ""));
}

xbButtonGroupVertical.prototype = new xbButtonGroup();

/* xbImage */

function xbImage(src,alt,clss){
   if (typeof clss == "undefined")
      clss = "";
   xImage.call(this,src,alt,clss);
}

xbImage.prototype = new xImage();

/* xTextBox */

function xbTextBox(text, clss){
   xTextBox.call(this,text,clss);
}

xbTextBox.prototype = new xTextBox();

/* xbPara */

function xbPara(text, clss){
   if (typeof clss == "undefined")
      clss = "";
   xPara.call(this,text,clss);
}

xbPara.prototype = new xPara();

/* xbAlert         */

function xbAlert(clss){
   xSection.call(this,"alert " + (clss || ""));
}

xbAlert.prototype = new xSection();


/* xbProgressBar */

function xbProgressBar(bmin, bmax, clss){
   xSection.call(this,"progress");
   this.bar = new xSection("progress-bar " + (clss || ""));
   this.bar.node.setAttribute("aria-valuemin",bmin);
   this.bar.node.setAttribute("aria-valuemax",bmax);
   this.bar.node.setAttribute("aria-valuenow",0);
   this.bar.node.setAttribute("role","progressbar");
   this.addElement(this.bar);
}

xbProgressBar.prototype = new xSection();

xbProgressBar.prototype.setProgress = function(v,txt){
   this.bar.node.setAttribute("aria-valuenow",v);
   this.bar.node.style.width = v + "%";
   if (txt)
      this.bar.node.innerHTML = txt;
}

/* xbJumbotron */

function xbJumbotron(){
   xSection.call(this,"jumbotron");
}

xbJumbotron.prototype = new xSection();

/* xbLayout */

function xbLayout(rows,cols,widths,clss){
   xLayout.call(this,rows,cols,widths,clss);
}

xbLayout.prototype = new xLayout();

/* xbPanel */

function xbPanel(clss){
   xPanel.call(this,clss || "panel");
}

xbPanel.prototype = new xPanel();

/* xbTitlePanel */

function xbTitlePanel(title, clss){
   xTitlePanel.call(this,title,"panel-body","panel-heading","panel " + (clss || "panel-default"));
}

xbTitlePanel.prototype = new xTitlePanel();

/* xbTable */

function xbTable(clss){
   xTable.call(this,"table " + (clss || ""));
}

xbTable.prototype = new xTable();

/* xbElementsTable */

function xbElementsTable(clss){
   xElementsTable.call(this,"table " + (clss || ""));
}

xbElementsTable.prototype = new xElementsTable();

/* xbTabs */

function xbTabs(clss){
   xTwoElementSection.call(this,"tab-content");
   this.auxnode = document.createElement("ul");
   this.auxnode.className = "nav nav-tabs " + (clss || "");
   this.auxnode.setAttribute("role","tablist");
}

xbTabs.prototype = new xTwoElementSection();

xbTabs.prototype.addPane = function(title,pane){
   var li;
   li = document.createElement("li");
   li.id = pane.id + "_li";
   li.innerHTML = "<a href='#" + pane.id + "' id='" + pane.id + "_a" + "' role='tab' data-toggle='tab'>" + title + "</a>";
   this.auxnode.appendChild(li);
   this.addElement(pane);
   return this;
}

xbTabs.prototype.removePane = function(index){
   this.elements[index].remove();
   return this;
}

xbTabs.prototype.removeAuxElement = function(element){
   var li = document.getElementById(element.id + "_li");
   li.parentNode.removeChild(li);
   return this;
}

xbTabs.prototype.activatePane = function(index){
   for (var i = 0; i < this.elements.length; i++){
      if (i == index){
         this.auxnode.children[i].className = "active";
         this.elements[i].node.className = this.elements[i].clss + " active";
      }
      else{
         this.auxnode.children[i].className = "";
         this.elements[i].node.className = this.elements[i].clss;
      }
   }
}

xbTabs.prototype.setPaneTitle = function(index,title){
   var pane = this.getElement(index);
   document.getElementById(pane.id + "_a").innerHTML = title;
}

/* xbTabPane */

function xbTabPane(clss){
   xSection.call(this,"tab-pane " + (clss || ""));
}

xbTabPane.prototype = new xSection();

/* xbNavBar */

function xbNavBar(title,clss,lclss){
   xSection.call(this,"navbar navbar-default " + (clss || ""));
   this.node.setAttribute("role","navigation");
   this.cont = new xSection("container-fluid");
   this.header = new xSection("navbar-header");
   this.nav = new xSection("collapse navbar-collapse");
   this.cont.addElement(this.header);
   this.addElement(this.cont);

   this.navBtn = new xButton("","navbar-toggle collapsed")
                     .addElement(new xSpan("Toggle navigation","sr-only"))
                     .addElement(new xSpan("","icon-bar"))
                     .addElement(new xSpan("","icon-bar"))
                     .addElement(new xSpan("","icon-bar"));
   this.navBtn.node.dataset.toggle = "collapse";
   this.navBtn.node.dataset.target = this.nav.getHashId();
   this.navA = new xLink(title,"#","navbar-brand");
   this.header.addElement(this.navBtn)
              .addElement(this.navA);

   this.navList = new xList("nav navbar-top-links " + (lclss || ""));
   this.cont.addElement(this.navList);
}

xbNavBar.prototype = new xSection();

xbNavBar.prototype.addDropdown = function(dd){
   this.navList.addElement(dd);
   dd.node.parentNode.className = "dropdown";
   var a = document.createElement("a");
   a.href = "#";
   a.className = "dropdown-toggle";
   a.dataset.toggle = "dropdown";
   if (dd.titleWrapper)
      a.innerHTML = "<" + dd.titleWrapper + ">" + dd.title + "<span class='caret'></span>" + "</" + dd.titleWrapper + ">";
   else
      a.innerHTML = dd.title + "<span class='caret'></span>";
   dd.node.parentNode.insertBefore(a,dd.node);
   return this;
}

xbNavBar.prototype.addItem = function(item){
   this.navList.addElement(item);
   return this;
}

xbNavBar.prototype.getNavItem = function(index){
   return this.navList.elements[index];
}

xbNavBar.prototype.setTitle = function(title){
   this.navA.node.innerHTML = title;
}

xbNavBar.prototype.setHamburgerTarget = function(target){
   this.navBtn.node.dataset.target = target;
}

/* xbNavBarDropdown */

function xbNavBarDropdown(title,clss){
   xList.call(this,"dropdown-menu " + (clss || ""));
   this.title = title;
   this.titleWrapper = null;
   this.node.setAttribute("role","menu");
}

xbNavBarDropdown.prototype = new xList();

xbNavBarDropdown.prototype.addItem = function(item){
   this.addElement(item);
   return this;
}

xbNavBarDropdown.prototype.addDivider = function(){
   t = new xSection("");
   this.addElement(t);
   t.node.parentNode.className = "divider";
   return this;
}

xbNavBarDropdown.prototype.addTitleWrapper = function(w){
   this.titleWrapper = w;
   return this;
}

xbNavBarDropdown.prototype.disabled = function(d){
   var li = this.node.parentNode;
   if (li){
      if (d){
         li.className = "dropdown disabled";
         this.node.previousSibling.dataset.toggle = "";
      }
      else{
         li.className = "dropdown";
         this.node.previousSibling.dataset.toggle = "dropdown";
      }
   }
   for (var i = 0; i < this.elements.length; i++)
      this.elements[i].disabled(d);
}

/* xbNavBarItem */

function xbNavBarItem(label,clss){
   var clickf = null;

   xLink.call(this,label,"#","");
   this.node.dataset.target = ".navbar-collapse";
   this.node.dataset.toggle = "collapse";
}

xbNavBarItem.prototype = new xLink();

xbNavBarItem.prototype.bindFunction = function(f){
   this.node.onclick = f;
   this.clickf = f;
   return this;
}

xbNavBarItem.prototype.disabled = function(d){
   var li = this.node.parentNode;
   if (li){
      if (d){
         li.className = "disabled";
         this.node.onclick = null;
      }
      else{
         li.className = "";
         this.node.onclick = this.clickf;
      }
   }
}

/* xbModal */

function xbModal(title,clss,dlg_clss){
  xSection.call(this,"modal " + (clss || ""));
  this.node.setAttribute("aria-hidden","true");
  this.node.dataset.backdrop = "static";
  this.node.dataset.keyboard = "false";
  this.dialog = new xSection("modal-dialog " + (dlg_clss || ""));
  this.content = new xSection("modal-content");
  this.header = new xSection("modal-header");
  this.closeBtn = new xbButton("<span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span>","close");
  this.closeBtn.node.dataset.dismiss = "modal";
  this.header.addElement(this.closeBtn)
             .addElement(new xHtml("h4",title,"modal-title"));
  this.addElement(this.dialog);
  this.dialog.addElement(this.content);
  this.body = new xSection("modal-body");
  this.footer = new xSection("modal-footer");
  this.content.addElement(this.header)
              .addElement(this.body)
              .addElement(this.footer);
  this.setToTop();
  this.setAutoRemove(true);
}

xbModal.prototype = new xSection();

xbModal.prototype.setDynamic = function(){
  this.node.dataset.backdrop = "";
  this.node.dataset.keyboard = "true";
}

xbModal.prototype.addToFooter = function(element){
   this.footer.addElement(element);
   return this;
}

xbModal.prototype.addToBody = function(element){
   this.body.addElement(element);
   return this;
}

xbModal.prototype.addCloseButton = function(label,clss){
   var cbtn = new xbButton(label,clss);
   cbtn.node.dataset.dismiss = "modal";
   this.footer.addElement(cbtn);
   return this;
}

xbModal.prototype.show = function(){
   $(this.getHashId()).modal("show");
   return this;
}

xbModal.prototype.hide = function(){
   $(this.getHashId()).modal("hide");
   return this;
}

xbModal.prototype.setAutoRemove = function(autoremove){
  var modal = this;
  if (autoremove)
     $(this.getHashId()).on("hidden.bs.modal",function(){modal.remove()});
  else
     $(this.getHashId()).on("hidden.bs.modal",function(){});
  return this;
}

xbModal.prototype.remove = function()
{
   this.hide();
   this.removeNode();
   if (this.parent)
      this.parent.removeElement(this);
   return this;
}



/* xbModalOpenButton */

function xbModalOpenButton(label,modal,clss){
   xbButton.call(this,label,clss);
   this.node.dataset.toggle = "modal";
   this.node.dataset.target = modal.getHashId();
}

xbModalOpenButton.prototype = new xbButton();

/* xbModalOpenLink */

function xbModalOpenLink(label,modal,clss){
   xLink.call(this,label,modal.getHashId(),"");
   this.node.dataset.target = modal.getHashId();
   this.node.dataset.toggle = "modal";
}

xbModalOpenLink.prototype = new xLink();

/* xbListGroup */

function xbListGroup(clss){
   xSection.call(this,"list-group " + (clss || ""));
}

xbListGroup.prototype = new xSection();

xbListGroup.prototype.addItem = function(item){
   this.addElement(item);
   return this;
}

/* xbListGroupItem */

function xbListGroupItem(label,clss){
   xLink.call(this,label,"#","list-group-item " + (clss || ""));
}

xbListGroupItem.prototype = new xLink();


/* xbMediaList */

function xbMediaList(clss){
   xMultiHtml.call(this,"ul","media-list " + (clss || ""));
}

xbMediaList.prototype = new xMultiHtml();

/* xbMediaItem */

function xbMediaItem(heading,src,alt,clss,iclss){
   xMultiHtml.call(this,"li","media");
   this.media = new xSection(clss || "media-left");
   this.a = new xLink("","#");
   this.img = new xImage(src,alt,"media-object " + (iclss || ""));
   this.body = new xSection("media-body");
   this.body.addElement(new xHtml("h4",heading,"media-heading"));
   this.a.addElement(this.img);
   this.media.addElement(this.a);
   this.addElement(this.media)
       .addElement(this.body);
}

xbMediaItem.prototype = new xMultiHtml();

xbMediaItem.prototype.addToBody = function(element){
   this.body.addElement(element);
   return this;
}

xbMediaItem.prototype.bindFunction = function(f){
   this.a.bindFunction(f);
}



/* xbTheme     */

function xbTheme(label,ct){
   var myself = this;
   this.themes =
            [{label: "aCelery", value: "acelery"},
             {label: "Cerulean", value: "cerulean"},
             {label: "Cosmo", value: "cosmo"},
             {label: "Cyborg", value: "cyborg"},
             {label: "Darkly", value: "darkly"},
             {label: "Default", value: "default"},
             {label: "Flatly", value: "flatly"},
             {label: "Journal", value: "journal"},
             {label: "Lumen", value: "lumen"},
             {label: "Paper", value: "paper"},
             {label: "Readable", value: "readable"},
             {label: "Sandstone", value: "sandstone"},
             {label: "Simplex", value: "simplex"},
             {label: "Slate", value: "slate"},
             {label: "Spacelab", value: "spacelab"},
             {label: "Superhero", value: "superhero"},
             {label: "United", value: "united"},
             {label: "Yeti", value: "yeti"}];
   this.currTheme = ct || "acelery";
   xbSelect.call(this,label);
   this.addOptions(this.themes);
   this.bindToEvent("change",function(){myself.setTheme(myself.getValue())});
   this.setSelected(this.currTheme);
}

xbTheme.prototype = new xbSelect();

xbTheme.prototype.setTheme = function(th){
   var link = document.createElement("link");
       link.id = "xbtheme";
       link.type = "text/css";
       link.rel = "stylesheet";
       link.href = "/tools/css/bootstrap_themes/" + th.toLowerCase() + "/bootstrap.min.css";
   var head = document.getElementsByTagName("head")[0];
   var plink = document.getElementById("xbtheme");
   if (plink)
      head.removeChild(plink);
   head.appendChild(link);
   this.currTheme = th;
   if (reqCssFiles.length > 0)
      LazyLoad.css(reqCssFiles,function(){});
}

/*  xbCarousel  */

function xbCarousel(clss){
   xSection.call(this,"carousel slide " + (clss || ""));
   this.inx = 0;
   this.node.dataset.ride = "carousel";
   this.indicator = new xMultiHtml("ol","carousel-indicators");
   this.slidewrap = new xSection("carousel-inner");
   this.slidewrap.node.setAttribute("role","listbox");
   this.addElement(this.indicator)
       .addElement(this.slidewrap);

   this.leftctl = new xLink("",this.getHashId(),"left carousel-control");
   this.leftctl.node.dataset.slide = "prev";
   this.leftctl.node.setAttribute("role","button");
   var lc = new xSpan("","glyphicon glyphicon-chevron-left");
   lc.node.setAttribute("aria-hidden","true");
   this.leftctl.addElement(lc);

   this.rightctl = new xLink("",this.getHashId(),"right carousel-control");
   this.rightctl.node.dataset.slide = "next";
   this.rightctl.node.setAttribute("role","button");
   var rc = new xSpan("","glyphicon glyphicon-chevron-right");
   rc.node.setAttribute("aria-hidden","true");
   this.rightctl.addElement(rc);

   this.addElement(this.leftctl)
       .addElement(this.rightctl);
}

xbCarousel.prototype = new xSection();

xbCarousel.prototype.addSlide = function(slide){
   var clss = "";
   if (this.inx == 0){
      clss = "active";
      slide.node.className = "item active";
   }
   this.slidewrap.addElement(slide);
   var ind = new xHtml("li","",clss);
   ind.node.dataset.target = this.getHashId();
   ind.node.setAttribute("data-slide-to", this.inx);
   this.indicator.addElement(ind);
   this.inx++;
}


/* xbSlide */

function xbSlide(imgsrc,caption,imgclss){
   xSection.call(this,"item");
   this.image = new xImage(imgsrc,"",imgclss);
   this.caption = new xSection("carousel-caption");
   if (caption)
      this.caption.addElement(caption);
   this.addElement(this.image)
       .addElement(this.caption);
}

xbSlide.prototype = new xSection();
