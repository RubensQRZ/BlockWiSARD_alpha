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
 * @fileoverview dbkBlocks On Blockly.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Blocks.WiSARD');
goog.require('Blockly.Blocks');

// cor_blocos_wisard antiga 48
var cor_blocos_wisard = 0;
var cor_bloco_wisard_comp = 54;
var cor_condicionantes = 65;
var cor_sensores = 80;
var wisard_first_block_id = null;



Blockly.Blocks['create_wisard'] = {
  init: function() {
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/cerebro.png", 30, 30, "*"))
        .appendField(Blockly.Msg.CREATE_WISARD_BLOCK_CREATE);
        //.appendField("com endereços de tamanho")
        //.appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["15","15"], ["20","20"], ["30","30"]]), "adress_size");
    this.setColour(cor_blocos_wisard);
 this.setTooltip(Blockly.Msg.CREATE_WISARD_BLOCK_CREATE_TOOLTIP);
 this.setHelpUrl("");
  },
/*
    onchange: function(e) { (modelo antigo, pra usar caso de problema com o novo, que segue abaixo)
       var blocks = [];
       for (var blockID in Blockly.mainWorkspace.blockDB_) {
          if (Blockly.mainWorkspace.blockDB_[blockID].type == this.type) {
                 blocks.push(Blockly.mainWorkspace.blockDB_[blockID]);
                if(blocks.length > 1){
                    break;
                }
          }
        }
        if (blocks.length > 1){
           this.setWarningText(Blockly.Msg.CREAT_WISARD_BLOCK_ALREADY_USED);
           this.setDisabled(true);
        }else {
           this.setWarningText(null);
           this.setDisabled(false);
        }
   },
 */

     onchange: function(e) {
       var blocks = [];
       for (var blockID in Blockly.mainWorkspace.blockDB_) {
          if (Blockly.mainWorkspace.blockDB_[blockID].type == this.type) {
                blocks.push(Blockly.mainWorkspace.blockDB_[blockID]);
                if(blocks.length > 1){
                    break;
                }
          }
        }
        if(blocks.length == 1){
           wisard_first_block_id = this.id;
           this.setWarningText(null);
           this.setDisabled(false);
        }else if (blocks.length > 1) {
            if (this.id != wisard_first_block_id){
                   this.setWarningText(Blockly.Msg.CREAT_WISARD_BLOCK_ALREADY_USED);
                   this.setDisabled(true);
            }
        }

       for (var blockID in Blockly.mainWorkspace.blockDB_) {
          if (Blockly.mainWorkspace.blockDB_[blockID].type == this.type){
                    if (this.isInFlyout){
                        this.setWarningText(Blockly.Msg.CREAT_WISARD_BLOCK_ALREADY_USED);
                        this.setDisabled(true);
                        break;
                     }
           }
        }
   },

};



Blockly.Blocks['block_wisard_train_pattern_picture_group'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/treinar_pasta_imagens.png", 64, 30, "*"))
        .appendField(Blockly.Msg.LEARN_WITH_FOLDER_IMAGES_LEARN)
        .appendField(new Blockly.FieldRotulo(Blockly.Msg.LEARN_WITH_FOLDER_LABEL_NAME), "label")
        .appendField(Blockly.Msg.LEARN_WITH_FOLDER_IMAGES_FOLDER )
        .appendField(new Blockly.FieldDropdown(this.generateOptions), "nome_da_pasta");
    this.setColour(cor_blocos_wisard);
 this.setTooltip(Blockly.Msg.LEARN_WITH_FOLDER_IMAGES_TOOLTIP);
 this.setHelpUrl("");
  },


  generateOptions: function() {
    var options = [];
    var folderOptions = [];
    if (document.location.hostname == 'localhost') {
        ArdublocklyServer.requesWiSARDImagestoTrainFolders(function(jsonObj) {
            Ardublockly.setImagesToTrainFoldersHtml(
            ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
    }
    var folderOptions = document.getElementById('wisard_train_folder_list');
    var size = folderOptions.options.length;
    if (size == 0) {
        options.push(["quadrado", "quadrado"]);
    }else{
        for(var i = 0; i < size; i++) {
             var folderName = String(folderOptions.options[i].text);
             options.push([folderName, folderName]);
         }
    }
    return options;
    },

  onchange: function(e) {
    if (!findPairBlockBefore("create_wisard",this)){
           this.setWarningText(Blockly.Msg.REQUIRE_CREATEWISARD_BLOCK);
           if (!this.isInFlyout && !this.getInheritedDisabled()) {
               this.setDisabled(true);
           }
    }else {
           this.setWarningText(null);
           this.setDisabled(false);
    }
  },

};


Blockly.Blocks['block_wisard_train_pattern_picture_single'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/treinar_imagem_unica.png", 64, 30, "*"))
        .appendField(Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_LEARN)
        .appendField(new Blockly.FieldRotulo(Blockly.Msg.LEARN_WITH_PICTURE_LABEL_NAME), "label")
        .appendField(Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_PHOTOGRAPH)
        .appendField(Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_SAVE)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "salvar")
        .appendField(")");
    this.setColour(cor_blocos_wisard);
 this.setTooltip(Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_TOOLTIP);
 this.setHelpUrl("");
  },

  onchange: function(e) {
    if ((!findPairBlockBefore("create_wisard",this))||(!findPairBlockBefore("block_wisard_get_picture",this))){
           this.setWarningText(Blockly.Msg.REQUIRE_CREATEWISARD_AND_GETPICTURE_BLOCKS);
           if (!this.isInFlyout && !this.getInheritedDisabled()) {
               this.setDisabled(true);
           }
    }else {
           this.setWarningText(null);
           this.setDisabled(false);
    }
  },

};


Blockly.Blocks['block_wisard_classify_pattern_picture'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/classificar_imagem.png", 64, 30, "*"))
        .appendField(Blockly.Msg.RECOGNIZE_PHOTOGRAPHED_IMAGE);
    this.setColour(cor_blocos_wisard);
 this.setTooltip(Blockly.Msg.RECOGNIZE_PHOTOGRAPHED_IMAGE_TOOLTIP);
 this.setHelpUrl("");
  },
  onchange: function(e) {
     /*  if ((!findPairBlockBefore("create_wisard",this))
           ||(!findPairBlockBefore("block_wisard_get_picture",this))
           ||((!findPairBlockBefore("block_wisard_train_pattern_picture_single",this))
            && (!findPairBlockBefore("block_wisard_train_pattern_picture_group",this)))) */
       if ((!findPairBlockBefore("create_wisard",this))
           ||(!findPairBlockBefore("block_wisard_get_picture",this)))
          {
              this.setWarningText(Blockly.Msg.REQUIRE_PREVIOUS_ClASSIFY_PICTURE_BLOCKS);
              if (!this.isInFlyout && !this.getInheritedDisabled()) {
                  this.setDisabled(true);
           }
          }else {
            this.setWarningText(null);
            this.setDisabled(false);
          }
   },
};





Blockly.Blocks['block_wisard_condicionante_classify_pattern_picture'] = {
  init: function() {
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/classificar_imagem.png", 64, 25, "*"))
        .appendField(Blockly.Msg.CONDICTION_RECOGNIZE_IMAGE)
        .appendField(new Blockly.FieldRotulo(Blockly.Msg.RECOGNIZE_PHOTOGRAPHED_IMAGE_LABEL_NAME), "label");
    this.setColour(cor_condicionantes);
 this.setTooltip(Blockly.Msg.CONDICTION_RECOGNIZE_IMAGE_TOOLTIP);
 this.setHelpUrl("");
  },

  onchange: function(e) {

    if (this.parentBlock_ == null) {
	    this.setWarningText(Blockly.Msg.REQUIRE_WHILE_IF_BLOCK);
        if (!this.isInFlyout && !this.getInheritedDisabled()) {
           this.setDisabled(true);
        }
	} else {

       /*if ((!findPairBlockBefore("create_wisard",this))
           ||(!findPairBlockBefore("block_wisard_get_picture",this))
           ||(!findPairBlockBefore("block_wisard_classify_pattern_picture",this))
           ||((!findPairBlockBefore("block_wisard_train_pattern_picture_single",this))
            && (!findPairBlockBefore("block_wisard_train_pattern_picture_group",this))))
          {*/
              
       if ((!findPairBlockBefore("create_wisard",this))
           ||(!findPairBlockBefore("block_wisard_get_picture",this)))
          {
              this.setWarningText(Blockly.Msg.REQUIRE_PREVIOUS_CONDITIONAL_ClASSIFY_PICTURE_BLOCKS);
              if (!this.isInFlyout && !this.getInheritedDisabled()) {
                  this.setDisabled(true);
           }
          }else {
            this.setWarningText(null);
            this.setDisabled(false);
          }
    }

  },
 };
 
 
 
 Blockly.Blocks['block_wisard_condicionante_unclassified'] = {
  init: function() {
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/imagem_nao_classificada.png", 64, 25, "*"))
        .appendField(Blockly.Msg.CONDICTION_UNCLISSIFIED_IMAGE);
    this.setColour(cor_condicionantes);
 this.setTooltip(Blockly.Msg.CONDICTION_UNCLISSIFIED_IMAGE_TOOLTIP);
 this.setHelpUrl("");
  },

  onchange: function(e) {

    if (this.parentBlock_ == null) {
	    this.setWarningText(Blockly.Msg.REQUIRE_WHILE_IF_BLOCK);
        if (!this.isInFlyout && !this.getInheritedDisabled()) {
           this.setDisabled(true);
        }
	} else {

       if ((!findPairBlockBefore("create_wisard",this))
           ||(!findPairBlockBefore("block_wisard_get_picture",this)))
          {
              this.setWarningText(Blockly.Msg.REQUIRE_PREVIOUS_CONDITIONAL_ClASSIFY_PICTURE_BLOCKS);
              if (!this.isInFlyout && !this.getInheritedDisabled()) {
                  this.setDisabled(true);
           }
          }else {
            this.setWarningText(null);
            this.setDisabled(false);
          }
    }

  },
 };




Blockly.Blocks['block_wisard_show_mental_Image'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/imagem_mental.png", 64, 30, "*"))
        .appendField(Blockly.Msg.SHOW_MENTAL_IMAGE_SHOW)
        .appendField(new Blockly.FieldRotulo(Blockly.Msg.LEARN_WITH_PICTURE_LABEL_NAME), "label");
    this.setColour(cor_blocos_wisard);
 this.setTooltip(Blockly.Msg.SHOW_MENTAL_IMAGE_TOOTIP);
 this.setHelpUrl("");
  },
/*
    onchange: function(e) {
       if ((!findPairBlockBefore("create_wisard",this))
           ||((!findPairBlockBefore("block_wisard_train_pattern_picture_single",this))
            && (!findPairBlockBefore("block_wisard_train_pattern_picture_group",this))))
              
          {
              //this.setWarningText(Blockly.Msg.REQUIRE_PREVIOUS_CONDITIONAL_ClASSIFY_PICTURE_BLOCKS);
              this.setWarningText("Para usar este bloco você precisa antes usar os blocos Criar WiSARD e Aprender");
              if (!this.isInFlyout && !this.getInheritedDisabled()) {
                  this.setDisabled(true);
           }
          }else {
            this.setWarningText(null);
            this.setDisabled(false);
          }
   },
*/
};

Blockly.Blocks['block_wisard_get_picture'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/web_cam.png", 30, 30, "*"))
        .appendField(Blockly.Msg.PHOTOGRAPH_IMAGE);
    this.setColour(cor_sensores);
 this.setTooltip(Blockly.Msg.PHOTOGRAPH_IMAGE_TOOLTIP );
 this.setHelpUrl("");
  }
};

/*
Blockly.Blocks['block_wisard_show_picture'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/foto.png", 25, 25, "*"))
        .appendField(Blockly.Msg.SHOW_PHOTOGRAPHED_IMAGE);
    this.setColour(cor_valores);
 this.setTooltip(Blockly.Msg.SHOW_PHOTOGRAPHED_IMAGE_TOOLTIP);
 this.setHelpUrl("");
 },
  onchange: function(e) {
    if (!findPairBlockBefore("block_wisard_get_picture",this)){
           this.setWarningText(Blockly.Msg.REQUIRE_GETPICTURE_BLOCK);
           if (!this.isInFlyout && !this.getInheritedDisabled()) {
               this.setDisabled(true);
           }
    }else {
           this.setWarningText(null);
           this.setDisabled(false);
    }
  },

};

*/


Blockly.Blocks['apresenta_imagem_fotografada'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/foto.png", 15, 15, "*"))
            .appendField(Blockly.Msg.SHOW_PHOTOGRAPHED_IMAGE);
        this.setColour(cor_valores);
        this.setOutput(true, 'Picture');
        this.setTooltip(Blockly.Msg.SHOW_PHOTOGRAPHED_IMAGE_TOOLTIP);
        this.setHelpUrl("");
     },

   onchange: function(e) {
    if (!findPairBlockBefore("block_wisard_get_picture",this)){
           this.setWarningText(Blockly.Msg.REQUIRE_GETPICTURE_BLOCK);
           if (!this.isInFlyout && !this.getInheritedDisabled()) {
               this.setDisabled(true);
           }
    }else {
           this.setWarningText(null);
           this.setDisabled(false);
    }
  },

 };


Blockly.Blocks['mostra_imagem_no_terminal_de_video'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_monitor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/monitor_foto.png", 30, 30, "*"))
        .appendField(Blockly.Msg.SHOW_IMAGE_BEFORE);
    this.appendValueInput("IMAGE")
        .setCheck('Picture');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHOW_IMAGE_AFTER);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SHOW_IMAGE_TOOLTIP);
  }
};

 Blockly.Blocks['apresenta_imagem_branca'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/imagem_branca.png", 15, 15, "*"))
            .appendField(Blockly.Msg.SHOW_WHITE_IMAGE);
        this.setColour(cor_valores);
        this.setOutput(true, 'Picture');
        this.setTooltip(Blockly.Msg.SHOW_WHITE_IMAGE_TOOLTIP);
        this.setHelpUrl("");
     },
 };



//*************************************************************************************

/*

Blockly.Blocks['block_wisard_train_pattern_text'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput();
    this.appendDummyInput()
	    .appendField("   ")
        .appendField("PADRÃO PARA TREINAR");
    this.appendDummyInput()
        .appendField("   ")
        .appendField("Valor:")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value1")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value2")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value3")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value4")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value5")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value6")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value7")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value8")
        .appendField("   ");
    this.appendDummyInput()
        .appendField("   ")
        .appendField("Rótulo:")
        .appendField(new Blockly.FieldRotulo("rotulo"), "label");
    this.appendDummyInput();
    this.setColour(cor_blocos_wisard);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_wisard_classify_pattern_text'] = {
  init: function() {
    this.setOutput(true, null);
    this.appendDummyInput();
    this.appendDummyInput()
	    .appendField("   ")
        .appendField("PADRÃO PARA RECONHECER");
    this.appendDummyInput()
        .appendField("    ")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value1")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value2")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value3")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value4")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value5")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value6")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value7")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "value8")
	  	.appendField(" = ")
        .appendField(new Blockly.FieldRotulo("rotulo"), "label")
	  	.appendField("   ");
    this.appendDummyInput();
    this.setColour(cor_condicionantes);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/

/*
Blockly.Blocks['label_get'] = {
  init: function() {
    this.setColour(52);
    this.appendDummyInput()
        .appendField(new Blockly.FieldRotulo(
        'rotulo'), 'VAR');
    this.setOutput(true);
    this.setTooltip('cria um rótulo para ser usado pela WiSARD');
  }

};

*/
//-------------------------------------------------

Blockly.Blocks['stl_import'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	  
    this.appendDummyInput();		  
    this.appendDummyInput()
	    .appendField("   ") 
        .appendField("PASTA COM PADRÕES PARA TREINAR")
	    .appendField("   ") ;	  
    this.appendDummyInput()
	    .appendField("   ") 	  
	    .appendField("Pasta:") 	  
        .appendField(new Blockly.FieldButton("Buscar Pasta"),'STL_BUTTON');  
    this.appendDummyInput()	 
        .appendField("   ")	  
        .appendField("Rótulo:")
        .appendField(new Blockly.FieldTextInput("rótulo"), "label");	  
    this.appendDummyInput();
    this.setColour(cor_blocos_wisard);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





/**
// I want a block for stl import (file). 
Blockly.Blocks['stl_import'] = {
  init: function() {	  
    //this.category = 'PRIMITIVE_CSG'
    this.appendDummyInput();	  
    this.appendDummyInput()
	    .appendField("   ") 
        .appendField("PASTA COM PADRÕES PARA TREINAR");
    this.appendDummyInput()
        .appendField("    ");	    
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "pasta");	
    this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabel(""),'STL_FILENAME');
    this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldButton("Buscar Pasta"),'STL_BUTTON');
    this.appendDummyInput('C')variables
        .appendField(new Blockly.FieldLabel(""),'STL_CONTENTS')
        .setVisible(false);
    this.appendDummyInput()	 
        .appendField("   ")	  
        .appendField("Rótulo:")
        .appendField(new Blockly.FieldTextInput("rótulo"), "label");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true, null);	  	  
    this.setColour(60);
    this.setTooltip('');
    //this.setWarningText('STL files are not saved with your blocks.');
    this.setHelpUrl('http://www.example.com/');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }    
    // if one of the value fields is missing, I want to pop up a warning.
    var fn = this.getField('STL_FILENAME').getText();
    var contents = this.getField('STL_CONTENTS').getText();
    if (fn.length > 0) {
      this.getField('STL_BUTTON').setVisible(false);
      this.setCommentText(fn + '\ncenter: (' + Blockscad.csg_center[contents] + ')');
    }
    this.getField('STL_CONTENTS').setVisible(false);
     this.render();
  }
};
**/
