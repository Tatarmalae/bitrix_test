{"version":3,"sources":["spam-protection.bundle.js"],"names":["this","BX","Landing","Ui","Panel","Formsettingspanel","exports","landing_ui_card_headercard","landing_loc","landing_ui_field_radiobuttonfield","landing_ui_panel_basepresetpanel","landing_ui_form_formsettingsform","main_core","ui_buttons","landing_ui_panel_formsettingspanel","landing_ui_card_messagecard","ownKeys","object","enumerableOnly","keys","Object","getOwnPropertySymbols","symbols","filter","sym","getOwnPropertyDescriptor","enumerable","push","apply","_objectSpread","target","i","arguments","length","source","forEach","key","babelHelpers","defineProperty","getOwnPropertyDescriptors","defineProperties","KeysForm","_FormSettingsForm","inherits","options","_this","classCallCheck","possibleConstructorReturn","getPrototypeOf","call","setEventNamespace","Dom","addClass","layout","getButton","renderTo","value","createClass","_this2","cache","remember","Button","text","buttonLabel","color","ButtonColor","LIGHT_BORDER","onclick","setWaiting","Runtime","loadExtension","then","_ref","Captcha","open","result","formSettingsPanel","FormSettingsPanel","getInstance","getFormDictionary","captcha","hasKeys","Type","isStringFilled","secret","activeButton","getSidebarButtons","find","button","isActive","getLayout","click","emit","serialize","FormSettingsForm","ownKeys$1","_objectSpread$1","SpamProtection","_ContentWrapper","header","HeaderCard","title","Loc","getMessage","message","MessageCard","description","angle","captchaTypeForm","id","fields","RadioButtonField","selector","Text","toBoolean","formOptions","data","recaptcha","use","items","icon","addItem","subscribe","onTypeChange","bind","assertThisInitialized","hasDefaultsCaptchaKeys","hasDefaults","hasCustomKeys","dictionary","remove","getCustomKeysForm","getRequiredKeysForm","getKeysSettingsForm","getValue","valueReducer","sourceValue","onChange","event","getData","skipPrepare","ContentWrapper","default","Content","UI","Card","Field","Form"],"mappings":"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","file":"spam-protection.bundle.map.js"}