this["GeotriggerEditor"] = this["GeotriggerEditor"] || {};
this["GeotriggerEditor"]["Templates"] = this["GeotriggerEditor"]["Templates"] || {};

this["GeotriggerEditor"]["Templates"]["controls"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"gt-drawer-controls\">\n  <a href=\"#list\" class=\"gt-tool gt-tool-list active gt-tooltip\"><span>List</span></a>\n</div>\n<div class=\"gt-tool-controls\">\n  <button class=\"gt-tool gt-tool-polygon gt-tooltip\"><span>New Polygon Tool</span></button>\n  <button class=\"gt-tool gt-tool-radius gt-tooltip\"><span>New Radius Tool</span></button>\n</div>";
  });

this["GeotriggerEditor"]["Templates"]["empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"gt-panel-top-bar\">\n  <h3 class=\"gt-panel-top-bar-left\">List <span class=\"gt-trigger-count\"></span></h3>\n  <a href=\"#\" class=\"gt-panel-top-bar-button gt-close-drawer\"></a>\n</div>\n\n<div class=\"gt-panel-no-triggers\">\n  <h5>This application doesn't have any Geotrigger rules yet.</h5>\n</div>\n\n<ul class=\"gt-tool-descriptions\">\n  <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-create\"></span>\n    <h5>Create a New Trigger</h5>\n    <p>Create a new Geotrigger rule by first using one of the drawing tools, then defining its properties in the form that appears.</p>\n  </li>\n\n  <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-polygon\"></span>\n    <h5>Using the Polygon Tool</h5>\n    <p>Click on the map to create each point of a polygon. Click on the first point you created to close the shape.</p>\n  </li>\n\n  <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-radius\"></span>\n    <h5>Using the Radius Tool</h5>\n    <p>Click a point on the map, then hold and drag to define a radius around that point.</p>\n  </li>\n</ul>\n";
  });

this["GeotriggerEditor"]["Templates"]["form/actions/callbackUrl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-action=\"callbackUrl\" class='gt-property'>\n  <div class=\"gt-property-header\">\n    notify this URL\n    <a class=\"gt-remove-action gt-delete-icon\"></a>\n  </div>\n\n  <div class=\"gt-property-item\">\n    <input class='gt-input-fill' type='text' name='action[callbackUrl]' placeholder='http://' value='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.callbackUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/actions/notification/data"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-notification='data' class='gt-property-item gt-notification-action'>\n  <label class=\"gt-notification-left\" for='action[notification][data]'>\n    <span class='gt-label-left'>some data:</span>\n  </label>\n\n  <div class=\"gt-notification-center\">\n    <textarea class='gt-input' name='action[notification][data]' placeholder='{ \"your\": \"data\" }'>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.notification)),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n  </div>\n\n  <div class='gt-notification-right'>\n    <a class=\"gt-remove-notification gt-delete-icon\"></a>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/actions/notification/icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-notification='icon' class='gt-property-item gt-notification-action'>\n  <label class=\"gt-notification-left\" for='action[notification][icon]'>\n    <span class='gt-label-left'>an icon:</span>\n  </label>\n\n  <div class='gt-notification-center'>\n    <input class='gt-input' type='text' name='action[notification][icon]' placeholder='icon' value='"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.notification)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n  </div>\n\n  <div class='gt-notification-right'>\n    <a class=\"gt-remove-notification gt-delete-icon\"></a>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/actions/notification/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-action=\"notification\" class=\"gt-property\">\n  <div class=\"gt-property-header\">\n    send a notification to the device with..\n    <a class=\"gt-remove-action gt-delete-icon\"></a>\n  </div>\n\n  <div class=\"gt-notification-actions\"></div>\n\n  <div class=\"gt-property-item gt-btn-group\">\n    <button data-notification=\"text\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-notification\">&#043; a message</button>\n    <button data-notification=\"url\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-notification\">&#043; a URL</button>\n    <button data-notification=\"data\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-notification\">&#043; some data</button>\n    <button data-notification=\"icon\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-notification\">&#043; an icon</button>\n    <button data-notification=\"sound\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-notification\">&#043; a sound</button>\n  </div>\n</div>";
  });

this["GeotriggerEditor"]["Templates"]["form/actions/notification/sound"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-notification='sound' class='gt-property-item gt-notification-action'>\n  <label class=\"gt-notification-left\" for='action[notification][sound]'>\n    <span class='gt-label-left'>a sound:</span>\n  </label>\n\n  <div class='gt-notification-center'>\n    <input class='gt-input' type='text' name='action[notification][sound]' placeholder='sound' value='"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.notification)),stack1 == null || stack1 === false ? stack1 : stack1.sound)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n  </div>\n\n  <div class='gt-notification-right'>\n    <a class=\"gt-remove-notification gt-delete-icon\"></a>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/actions/notification/text"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-notification='text' class='gt-property-item gt-notification-action'>\n  <label class=\"gt-notification-left\" for='action[notification][text]'>\n    <span class='gt-label-left'>a message:</span>\n  </label>\n\n  <div class='gt-notification-center'>\n    <textarea class='gt-action-message-box' name='action[notification][text]' placeholder='message'>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.notification)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n  </div>\n\n  <div class='gt-notification-right'>\n    <a class=\"gt-remove-notification gt-delete-icon\"></a>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/actions/notification/url"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-notification='url' class='gt-property-item gt-notification-action'>\n  <label class=\"gt-notification-left\" for='action[notification][url]'>\n    <span class='gt-label-left'>a URL:</span>\n  </label>\n\n  <div class='gt-notification-center'>\n    <input class='gt-input' type='text' name='action[notification][url]' placeholder='http://' value='"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.notification)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n  </div>\n\n  <div class='gt-notification-right'>\n    <a class=\"gt-remove-notification gt-delete-icon\"></a>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/actions/trackingProfile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n      <option value=\"fine\">[3] fine</option>\n      <option value=\"adaptive\">[2] adaptive</option>\n      <option value=\"rough\">[1] rough</option>\n      <option value=\"off\">[0] off</option>\n      ";
  }

  buffer += "<div data-action=\"trackingProfile\" class=\"gt-property\">\n  <div class=\"gt-property-header\">\n    change the device's tracking profile\n    <a class=\"gt-remove-action gt-delete-icon\"></a>\n  </div>\n\n  <div class=\"gt-property-item\">\n    <select class=\"gt-select-full\" name=\"action[trackingProfile]\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.select || (depth0 && depth0.select)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.trackingProfile), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.action)),stack1 == null || stack1 === false ? stack1 : stack1.trackingProfile), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </select>\n  </div>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["form/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "Edit";
  }

function program3(depth0,data) {
  
  
  return "Create";
  }

function program5(depth0,data) {
  
  
  return "\n              <option value='enter'>enters</option>\n              <option value='leave'>leaves</option>\n              ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n            <span class=\"gt-shape-indicator\">a ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.shape || (depth0 && depth0.shape)),stack1 ? stack1.call(depth0, (depth0 && depth0.condition), options) : helperMissing.call(depth0, "shape", (depth0 && depth0.condition), options)))
    + "</span>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n            <span class=\"gt-shape-indicator\">a...</span>\n            ";
  }

function program11(depth0,data) {
  
  
  return " gt-hide";
  }

function program13(depth0,data) {
  
  
  return "\n      <button class='gt-button gt-button-blue gt-submit'>Update</button>\n      <ul class='gt-edit-controls'>\n        <li>\n          <a class='gt-reset-delete' href='#'>&#x2716;</a>\n        </li>\n        <li>\n          <button class='gt-item-delete gt-button-delete'></button>\n        </li>\n      </ul>\n      ";
  }

function program15(depth0,data) {
  
  
  return "\n      <button class='gt-button gt-button-blue gt-submit'>Save</button>\n      ";
  }

  buffer += "<div class='gt-panel-top-bar'>\n  <a href='#list' class='gt-panel-top-bar-button gt-back-to-list'></a>\n  <h3>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.triggerId), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n  <a href='#' class='gt-panel-top-bar-button gt-close-drawer'></a>\n</div>\n\n<div class='gt-panel-content'>\n  <form class='gt-form gt-form-edit'>\n\n    <section class='gt-form-section gt-conditions'>\n      <div class=\"gt-property\">\n        <div class=\"gt-property-header\">When a device tagged..</div>\n\n        <div class=\"gt-property-item\">\n          <textarea class='gt-input' name='tags' placeholder='enter tags'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.tagList || (depth0 && depth0.tagList)),stack1 ? stack1.call(depth0, (depth0 && depth0.tags), options) : helperMissing.call(depth0, "tagList", (depth0 && depth0.tags), options)))
    + "</textarea>\n        </div>\n\n        <div class=\"gt-property-item\">\n            <select name='condition[direction]' class='gt-direction'>\n              ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.select || (depth0 && depth0.select)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.condition)),stack1 == null || stack1 === false ? stack1 : stack1.direction), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.condition)),stack1 == null || stack1 === false ? stack1 : stack1.direction), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </select>\n\n            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.condition), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            <input name=\"geometry-type\" type=\"hidden\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.shape || (depth0 && depth0.shape)),stack1 ? stack1.call(depth0, (depth0 && depth0.condition), options) : helperMissing.call(depth0, "shape", (depth0 && depth0.condition), options)))
    + "\">\n        </div>\n      </div>\n    </section>\n\n    <section class=\"gt-form-section gt-actions\"></section>\n\n    <section class=\"gt-form-section gt-action-toggles\">\n      <button data-action=\"notification\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-action\">&#043; send a notification</button>\n      <button data-action=\"callbackUrl\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-action\">&#043; post to a callback URL</button>\n      <button data-action=\"trackingProfile\" class=\"gt-button gt-button-light-gray gt-button-small gt-add-action\">&#043; change the tracking profile</button>\n    </section>\n\n    <section class=\"gt-form-section gt-title-wrapper\">\n      <button class=\"gt-button gt-button-light-gray gt-button-small gt-add-title";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">&#043; add a title</button>\n\n      <div class='gt-title gt-property";
  stack2 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "'>\n        <div class=\"gt-property-header\">\n          Title\n          <a class=\"gt-remove-title gt-delete-icon\"></a>\n        </div>\n\n        <div class=\"gt-property-item\">\n          <input class='gt-input-fill' type='text' name='properties[title]' placeholder='Geotrigger Title' value='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n        </div>\n      </div>\n    </section>\n\n    <section class='gt-form-section gt-submit-wrapper'>\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.triggerId), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </section>\n  </form>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n      <span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.defaultTitle || (depth0 && depth0.defaultTitle)),stack1 ? stack1.call(depth0, (depth0 && depth0.condition), options) : helperMissing.call(depth0, "defaultTitle", (depth0 && depth0.condition), options)))
    + "</span>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program7(depth0,data) {
  
  var stack1, options;
  options = {hash:{},data:data};
  return escapeExpression(((stack1 = helpers.defaultTitle || (depth0 && depth0.defaultTitle)),stack1 ? stack1.call(depth0, (depth0 && depth0.condition), options) : helperMissing.call(depth0, "defaultTitle", (depth0 && depth0.condition), options)));
  }

  buffer += "<span class='gt-item-edit gt-icon ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.actionIcon || (depth0 && depth0.actionIcon)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.condition)),stack1 == null || stack1 === false ? stack1 : stack1.direction), ((stack1 = (depth0 && depth0.condition)),stack1 == null || stack1 === false ? stack1 : stack1.geo), options) : helperMissing.call(depth0, "actionIcon", ((stack1 = (depth0 && depth0.condition)),stack1 == null || stack1 === false ? stack1 : stack1.direction), ((stack1 = (depth0 && depth0.condition)),stack1 == null || stack1 === false ? stack1 : stack1.geo), options)))
    + " gt-icon-polygon'></span>\n<h5>\n  <a class='gt-item-edit' href='#edit/";
  if (stack2 = helpers.triggerId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.triggerId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </a>\n</h5>\n<div class='gt-item-toolbar'>\n  <a class='gt-edit-icon' href='#edit/";
  if (stack2 = helpers.triggerId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.triggerId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'></a>\n  <a class='gt-delete-icon' href='#'></a>\n</div>\n<div class='gt-tags'>\n  <strong>Tags</strong><span>:</span> ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.tagLinks || (depth0 && depth0.tagLinks)),stack1 ? stack1.call(depth0, (depth0 && depth0.tags), options) : helperMissing.call(depth0, "tagLinks", (depth0 && depth0.tags), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n<div class='gt-id'>\n  <strong>ID</strong><span>:</span> ";
  if (stack2 = helpers.triggerId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.triggerId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n</div>\n<div class='gt-list-delete'>\n  <h5>Delete ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "?</h5>\n  <button class='gt-confirm-delete gt-button-small gt-button-delete'>Delete</button>\n  <button class='gt-cancel-delete gt-button-small gt-button gt-button-gray'>Cancel</button>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"gt-list-header gt-hide\">\n  <div class=\"gt-panel-top-bar\">\n    <h3 class=\"gt-panel-top-bar-left\">List <span class=\"gt-trigger-count\">(";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></h3>\n    <a href=\"#\" class=\"gt-panel-top-bar-button gt-close-drawer\"></a>\n  </div>\n  <div class=\"gt-search\">\n    <input type=\"search\" placeholder=\"Search\"><a href=\"#list\" class=\"gt-icon-clear\"></a>\n  </div>\n</div>\n<ul class=\"gt-results\"></ul>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id='gt-controls-region'></div>\n<div id='gt-content'>\n  <div id='gt-drawer-region'></div>\n  <div id='gt-map-region'></div>\n  <div id='gt-notes-region'></div>\n</div>\n";
  });

this["GeotriggerEditor"]["Templates"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button class='gt-close'>&times;</button> ";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  });