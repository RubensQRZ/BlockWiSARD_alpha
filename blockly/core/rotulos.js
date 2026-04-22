/** Modified by BlockWiSARD
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
 * @fileoverview Utility functions for handling rotulos.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Rotulos');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.Workspace');
goog.require('goog.string');


/**
 * Category to separate rotulo names from procedures and generated functions.
 */
Blockly.Rotulos.NAME_TYPE = 'ROTULO';

/**
 * Find all user-created rotulos.
 * @param {!Blockly.Block|!Blockly.Workspace} root Root block or workspace.
 * @return {!Array.<string>} Array of rotulo names.
 */
Blockly.Rotulos.allRotulos = function(root) {
  var blocks;
  if (root.getDescendants) {
    // Root is Block.
    blocks = root.getDescendants();
  } else if (root.getAllBlocks) {
    // Root is Workspace.
    blocks = root.getAllBlocks();
  } else {
    throw 'Not Block or Workspace: ' + root;
  }
  var rotuloHash = Object.create(null);
  // Iterate through every block and add each rotulo to the hash.
  for (var x = 0; x < blocks.length; x++) {
    var blockRotulos = blocks[x].getRotulos();
    for (var y = 0; y < blockRotulos.length; y++) {
      var varName = blockRotulos[y];
      // Rotulo name may be null if the block is only half-built.
      if (varName) {
        rotuloHash[varName.toLowerCase()] = varName;
      }
    }
  }
  // Flatten the hash into a list.
  var rotuloList = [];
  for (var name in rotuloHash) {
    rotuloList.push(rotuloHash[name]);
  }
  return rotuloList;
};

/**
 * Find all instances of the specified rotulo and rename them.
 * @param {string} oldName Rotulo to rename.
 * @param {string} newName New rotulo name.
 * @param {!Blockly.Workspace} workspace Workspace rename rotulos in.
 */
Blockly.Rotulos.renameRotulo = function(oldName, newName, workspace) {
  Blockly.Events.setGroup(true);
  var blocks = workspace.getAllBlocks();
  // Iterate through every block.
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].renameRotulo(oldName, newName);
  }
  Blockly.Events.setGroup(false);
};

/**
 * Construct the blocks required by the flyout for the rotulo category.
 * @param {!Blockly.Workspace} workspace The workspace contianing rotulos.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.Rotulos.flyoutCategory = function(workspace) {
  var rotuloList = Blockly.Rotulos.allRotulos(workspace);
  rotuloList.sort(goog.string.caseInsensitiveCompare);
  // In addition to the user's rotulos, we also want to display the default
  // rotulo name at the top.  We also don't want this duplicated if the
  // user has created a rotulo of the same name.
  goog.array.remove(rotuloList, Blockly.Msg.VARIABLES_DEFAULT_NAME);
  rotuloList.unshift(Blockly.Msg.VARIABLES_DEFAULT_NAME);

  var xmlList = [];
  for (var i = 0; i < rotuloList.length; i++) {
    if (Blockly.Blocks['rotulos_set']) {
      // <block type="rotulos_set" gap="8">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'rotulos_set');
      if (Blockly.Blocks['rotulos_get']) {
        block.setAttribute('gap', 8);
      }
      var field = goog.dom.createDom('field', null, rotuloList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    if (Blockly.Blocks['rotulos_get']) {
      // <block type="rotulos_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'rotulos_get');
      if (Blockly.Blocks['rotulos_set']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, rotuloList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
  }
  return xmlList;
};

/**
* Return a new rotulo name that is not yet being used. This will try to
* generate single letter rotulo names in the range 'i' to 'z' to start with.
* If no unique name is located it will try 'i' to 'z', 'a' to 'h',
* then 'i2' to 'z2' etc.  Skip 'l'.
 * @param {!Blockly.Workspace} workspace The workspace to be unique in.
* @return {string} New rotulo name.
*/
Blockly.Rotulos.generateUniqueName = function(workspace) {
  var rotuloList = Blockly.Rotulos.allRotulos(workspace);
  var newName = '';
  if (rotuloList.length) {
    var nameSuffix = 1;
    var letters = '0123456789abcdefghijkmnopqrstuvxz';  // No 'l'.
    var letterIndex = 0;
    //var potName = letters.charAt(letterIndex);
    var potName = Blockly.Msg.NEW_ROULO_NAME  + letters.charAt(letterIndex);
    while (!newName) {
      var inUse = false;
      for (var i = 0; i < rotuloList.length; i++) {
        if (rotuloList[i].toLowerCase() == potName) {
          // This potential name is already used.
          inUse = true;
          break;
        }
      }
      if (inUse) {
        // Try the next potential name.
        letterIndex++;
        if (letterIndex == letters.length) {
          // Reached the end of the character sequence so back to 'i'.
          // a new suffix.
          letterIndex = 0;
          nameSuffix++;
        }
        var potName = Blockly.Msg.NEW_ROULO_NAME + letters.charAt(letterIndex);
        //var potName = letters.charAt(letterIndex);
        if (nameSuffix > 1) {
          potName += nameSuffix;
        }
      } else {
        // We can use the current potential name.
        newName = potName;
      }
    }
  } else {
    newName = Blockly.Msg.NEW_ROULO_NAME;
  }
  return newName;
};
