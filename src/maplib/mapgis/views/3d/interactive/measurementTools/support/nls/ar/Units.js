// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define({measures:{length:"\u0627\u0644\u0637\u0648\u0644",area:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629",volume:"\u0627\u0644\u062d\u062c\u0645",angle:"\u0632\u0627\u0648\u064a\u0629"},units:{millimeters:{singular:"\u0645\u0644\u0644\u064a\u0645\u062a\u0631",plural:"\u0645\u0644\u0644\u064a\u0645\u062a\u0631",abbr:"\u0645\u0645"},centimeters:{singular:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631",plural:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631",abbr:"\u0633\u0645"},decimeters:{singular:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631",
plural:"\u062f\u064a\u0633\u064a\u0645\u064a\u062a\u0631",abbr:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631"},meters:{singular:"\u0645\u062a\u0631",plural:"\u0623\u0645\u062a\u0627\u0631",abbr:"\u0645\u062a\u0631"},kilometers:{singular:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631",plural:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631",abbr:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631"},inches:{singular:"\u0628\u0648\u0635\u0629",plural:"\u0628\u0648\u0635\u0629",abbr:"\u0641\u064a"},feet:{singular:"\u0642\u062f\u0645",
plural:"\u0642\u062f\u0645",abbr:"\u0642\u062f\u0645"},yards:{singular:"\u064a\u0627\u0631\u062f\u0629",plural:"\u064a\u0627\u0631\u062f\u0627\u062a",abbr:"\u064a\u0627\u0631\u062f"},miles:{singular:"\u0645\u064a\u0644",plural:"\u0623\u0645\u064a\u0627\u0644",abbr:"\u0645\u064a\u0644"},"nautical-miles":{singular:"\u0645\u064a\u0644 \u0628\u062d\u0631\u064a",plural:"\u0623\u0645\u064a\u0627\u0644 \u0628\u062d\u0631\u064a\u0629",abbr:"\u0645\u064a\u0644 \u0628\u062d\u0631\u064a"},"us-feet":{singular:"\u0642\u062f\u0645 (\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629)",
plural:"\u0642\u062f\u0645 (\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629)",abbr:"\u0642\u062f\u0645"},"square-millimeters":{singular:"\u0645\u0644\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",plural:"\u0645\u0644\u0644\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",abbr:"\u0645\u0644\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639"},"square-centimeters":{singular:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",plural:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",
abbr:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639"},"square-decimeters":{singular:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",plural:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",abbr:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631 \u0645\u0631\u0628\u0639"},"square-meters":{singular:"\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",plural:"\u0645\u062a\u0631 \u0645\u0631\u0628\u0639",abbr:"\u0645\u062a\u0631 \u0645\u0631\u0628\u0639"},
"square-kilometers":{singular:"\u0643\u064a\u0644\u0648 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639",plural:"\u0643\u064a\u0644\u0648 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639",abbr:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631 \u0645\u0631\u0628\u0639"},"square-inches":{singular:"\u0628\u0648\u0635\u0629 \u0645\u0631\u0628\u0639\u0629",plural:"\u0628\u0648\u0635\u0629 \u0645\u0631\u0628\u0639\u0629",abbr:"\u0628\u0648\u0635\u0629 \u0645\u0631\u0628\u0639\u0629"},"square-feet":{singular:"\u0642\u062f\u0645 \u0645\u0631\u0628\u0639",
plural:"\u0642\u062f\u0645 \u0645\u0631\u0628\u0639",abbr:"\u0642\u062f\u0645 \u0645\u0631\u0628\u0639"},"square-yards":{singular:"\u064a\u0627\u0631\u062f\u0629 \u0645\u0631\u0628\u0639\u0629",plural:"\u064a\u0627\u0631\u062f\u0629 \u0645\u0631\u0628\u0639\u0629",abbr:"\u064a\u0627\u0631\u062f\u0629 \u0645\u0631\u0628\u0639\u0629"},"square-miles":{singular:"\u0645\u064a\u0644 \u0645\u0631\u0628\u0639",plural:"\u0645\u064a\u0644 \u0645\u0631\u0628\u0639",abbr:"\u0645\u064a\u0644 \u0645\u0631\u0628\u0639"},
"square-us-feet":{singular:"\u0642\u062f\u0645 \u0645\u0631\u0628\u0639 (\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629)",plural:"\u0642\u062f\u0645 \u0645\u0631\u0628\u0639 (\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629)",abbr:"\u0642\u062f\u0645 \u0645\u0631\u0628\u0639"},acres:{singular:"\u0622\u0643\u0631",plural:"\u0641\u062f\u0627\u0646",abbr:"\u0622\u0643\u0631"},ares:{singular:"\u0647\u064a",plural:"\u0622\u0631",
abbr:"a"},hectares:{singular:"\u0647\u0643\u062a\u0627\u0631",plural:"\u0647\u064a\u0643\u062a\u0627\u0631",abbr:"\u0647\u064a\u0643\u062a\u0627\u0631\u0627\u062a"},liters:{singular:"\u0644\u062a\u0631",plural:"\u0644\u062a\u0631",abbr:"l"},"cubic-millimeters":{singular:"\u0645\u0644\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",plural:"\u0645\u0644\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",abbr:"\u0645\u0644\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628"},"cubic-centimeters":{singular:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",
plural:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",abbr:"\u0633\u0646\u062a\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628"},"cubic-decimeters":{singular:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",plural:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",abbr:"\u062f\u064a\u0633\u064a\u0645\u062a\u0631 \u0645\u0643\u0639\u0628"},"cubic-meters":{singular:"\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",plural:"\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",
abbr:"\u0645\u062a\u0631 \u0645\u0643\u0639\u0628"},"cubic-kilometers":{singular:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",plural:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631 \u0645\u0643\u0639\u0628",abbr:"\u0643\u064a\u0644\u0648\u0645\u062a\u0631 \u0645\u0643\u0639\u0628"},"cubic-inches":{singular:"\u0628\u0648\u0635\u0629 \u0645\u0643\u0639\u0628\u0629",plural:"\u0628\u0648\u0635\u0629 \u0645\u0643\u0639\u0628\u0629",abbr:"\u0628\u0648\u0635\u0629 \u0645\u0643\u0639\u0628\u0629"},
"cubic-feet":{singular:"\u0642\u062f\u0645 \u0645\u0643\u0639\u0628",plural:"\u0642\u062f\u0645 \u0645\u0643\u0639\u0628",abbr:"\u0642\u062f\u0645 \u0645\u0643\u0639\u0628"},"cubic-yards":{singular:"\u064a\u0627\u0631\u062f\u0629 \u0645\u0643\u0639\u0628\u0629",plural:"\u064a\u0627\u0631\u062f\u0629 \u0645\u0643\u0639\u0628\u0629",abbr:"\u064a\u0627\u0631\u062f\u0629 \u0645\u0643\u0639\u0628\u0629"},"cubic-miles":{singular:"\u0645\u064a\u0644 \u0645\u0643\u0639\u0628",plural:"\u0645\u064a\u0644 \u0645\u0643\u0639\u0628",
abbr:"\u0645\u064a\u0644 \u0645\u0643\u0639\u0628"},radians:{singular:"radian",plural:"\u0627\u0644\u062a\u0642\u062f\u064a\u0631\u0627\u062a \u0627\u0644\u062f\u0627\u0626\u0631\u064a\u0629",abbr:""},degrees:{singular:"\u062f\u0631\u062c\u0629",plural:"\u062f\u0631\u062c\u0627\u062a",abbr:"\u00b0"}}});