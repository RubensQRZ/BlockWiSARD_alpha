/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Rotulo input field.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldRotulo');

goog.require('Blockly.FieldDropdown');
goog.require('Blockly.Msg');
goog.require('Blockly.Rotulos');
goog.require('Blockly.utils');
goog.require('goog.string');


/**
 * Class for a rotulo's dropdown field.
 * @param {?string} varname The default name for the rotulo.  If null,
 *     a unique rotulo name will be generated.
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected.  Its sole argument is the new option value.
 * @extends {Blockly.FieldDropdown}
 * @constructor
 */
Blockly.FieldRotulo = function(varname, opt_validator) {
  Blockly.FieldRotulo.superClass_.constructor.call(this,
      this.dropdownCreate, opt_validator);
  this.setValue(varname || '');
};
goog.inherits(Blockly.FieldRotulo, Blockly.FieldDropdown);

/**
 * Sets a new change handler for angle field.
 * @param {Function} handler New change handler, or null.
 */
Blockly.FieldRotulo.prototype.setValidator = function(handler) {
  var wrappedHandler;
  if (handler) {
    // Wrap the user's change handler together with the rotulo rename handler.
    wrappedHandler = function(value) {
      var v1 = handler.call(this, value);
      if (v1 === null) {
        var v2 = v1;
      } else {
        if (v1 === undefined) {
          v1 = value;
        }
        var v2 = Blockly.FieldRotulo.dropdownChange.call(this, v1);
        if (v2 === undefined) {
          v2 = v1;
        }
      }
      return v2 === value ? undefined : v2;
    };
  } else {
    wrappedHandler = Blockly.FieldRotulo.dropdownChange;
  }
  Blockly.FieldRotulo.superClass_.setValidator.call(this, wrappedHandler);
};

/**
 * Install this dropdown on a block.
 */
Blockly.FieldRotulo.prototype.init = function() {
  if (this.fieldGroup_) {
    // Dropdown has already been initialized once.
    return;
  }
  Blockly.FieldRotulo.superClass_.init.call(this);
  if (!this.getValue()) {
    // Rotulos without names get uniquely named for this workspace.
    var workspace =
        this.sourceBlock_.isInFlyout ?
            this.sourceBlock_.workspace.targetWorkspace :
            this.sourceBlock_.workspace;
    this.setValue(Blockly.Rotulos.generateUniqueName(workspace));
  }
};

/**
 * Get the rotulo's name (use a rotuloDB to convert into a real name).
 * Unline a regular dropdown, rotulos are literal and have no neutral value.
 * @return {string} Current text.
 */
Blockly.FieldRotulo.prototype.getValue = function() {
  return this.getText();
};

/**
 * Set the rotulo name.
 * @param {string} newValue New text.
 */
Blockly.FieldRotulo.prototype.setValue = function(newValue) {
  if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.Change(
        this.sourceBlock_, 'field', this.name, this.value_, newValue));
  }
  this.value_ = newValue;
  this.setText(newValue);
};

/**
 * Return a sorted list of rotulo names for rotulo dropdown menus.
 * Include a special option at the end for creating a new rotulo name.
 * @return {!Array.<string>} Array of rotulo names.
 * @this {!Blockly.FieldRotulo}
 */
Blockly.FieldRotulo.prototype.dropdownCreate = function() {
  if (this.sourceBlock_ && this.sourceBlock_.workspace) {
    var rotuloList =
        Blockly.Rotulos.allRotulos(this.sourceBlock_.workspace);
  } else {
    var rotuloList = [];
  }
  // Ensure that the currently selected rotulo is an option.
  var name = this.getText();
  if (name && rotuloList.indexOf(name) == -1) {
    rotuloList.push(name);
  }
  rotuloList.sort(goog.string.caseInsensitiveCompare);


  rotuloList.push(Blockly.Msg.RENAME_ROTULO);
  rotuloList.push(Blockly.Msg.NEW_ROTULO);


  // Rotulos are not language-specific, use the name as both the user-facing
  // text and the internal representation.
  var options = [];
  for (var x = 0; x < rotuloList.length; x++) {
    options[x] = [rotuloList[x], rotuloList[x]];
  }
  return options;
};

/**
 * Event handler for a change in rotulo name.
 * Special case the 'New rotulo...' and 'Rename rotulo...' options.
 * In both of these special cases, prompt the user for a new name.
 * @param {string} text The selected dropdown menu option.
 * @return {null|undefined|string} An acceptable new rotulo name, or null if
 *     change is to be either aborted (cancel button) or has been already
 *     handled (rename), or undefined if an existing rotulo was chosen.
 * @this {!Blockly.FieldRotulo}
 */
Blockly.FieldRotulo.dropdownChange = function(text) {
  function promptName(promptText, defaultText, callback) {
    Blockly.hideChaff();
    var newVar = Blockly.prompt(promptText, defaultText, function(newVar) {
      // Merge runs of whitespace.  Strip leading and trailing whitespace.
      // Beyond this, all names are legal.
      if (newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
        if (newVar == Blockly.Msg.RENAME_ROTULO ||
            newVar == Blockly.Msg.NEW_ROTULO) {
          // Ok, not ALL names are legal...
          newVar = null;
        }
      }
      callback(newVar);
    });
  }
  var workspace = this.sourceBlock_.workspace;
  if (text == Blockly.Msg.RENAME_ROTULO) {
    var oldVar = this.getText();
    promptName(Blockly.Msg.RENAME_ROTULO_TITLE.replace('%1', oldVar),
               oldVar, function(text) {
      if (text) {
        Blockly.Rotulos.renameRotulo(oldVar, text, workspace);
      }
    });
    return null;
  } else if (text == Blockly.Msg.NEW_ROTULO) {
    /*promptName(Blockly.Msg.NEW_ROTULO_TITLE, '', function(text) {
      // Since rotulos are case-insensitive, ensure that if the new rotulo
      // matches with an existing rotulo, the new case prevails throughout.
      if (text) {
        Blockly.Rotulos.renameRotulo(text, text, workspace);
        //TODO: need to add here what too do with the newly created rotulo
      }
    });*/
    //TODO: this return rotulo needs to be made redundant
    return Blockly.Rotulos.generateUniqueName(workspace);
  }
  return undefined;
};
