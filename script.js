angular.module('color-find', [])

.directive('colorTable', function() {
    return {
        template: '<table>' +
            '<tr  ng-repeat="color in colorData">' +
            '<td style="{{\'border-left:14px solid #\'+color.hex}}">{{color.year}}</td>' +
            '<td>{{color["name"]}}</td>' +
            '<td>{{color["code"]||"N/A"}}</td>' +
            '<td>{{color.hex}}</td>' +
            '</tr>' + '</table>',
        controller: function($scope) {
            $scope.colorData = [{
                "year": "Year",
                "car": "Model",
                "name": "Color Name",
                "code": "Color Code",
                "hex": "Hex Code"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "White",
                "code": "502",
                "hex": "E6DDCA"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Light Gray",
                "code": "503",
                "hex": "9F9E9C"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Gray",
                "code": "511",
                "hex": "808A8D"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Medium Gray",
                "code": "518",
                "hex": "6C7175"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Maroon",
                "code": "521",
                "hex": "5E2228"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Pagoda Red",
                "code": "524",
                "hex": "BE2327"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Cherry Red",
                "code": "525",
                "hex": "9B2A30"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "529",
                "hex": "A48E87"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Dark Gray",
                "code": "530",
                "hex": "4F4A49"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Bronze",
                "code": "531",
                "hex": "847D78"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Rocky Brown",
                "code": "535",
                "hex": "645D59"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Green",
                "code": "546",
                "hex": "808572"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Kasumi Green",
                "code": "554",
                "hex": "C0C5BA"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Green",
                "code": "558",
                "hex": "455E56"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Turquoise",
                "code": "562",
                "hex": "7FB7B7"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Sky Blue",
                "code": "563",
                "hex": "85B3C1"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Mount Fuji Blue",
                "code": "564",
                "hex": "53636B"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Nissan Blue",
                "code": "567",
                "hex": "507B8B"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Sky Blue",
                "code": "570",
                "hex": "A0B2BA"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Blue",
                "code": "574",
                "hex": "5F6D72"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "604",
                "hex": "414955"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Off White",
                "code": "637",
                "hex": "E5E1D4"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Maroon",
                "code": "639",
                "hex": "5B2C2F"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "White",
                "code": "655",
                "hex": "E7DBD2"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Toba Aqua",
                "code": "660",
                "hex": "4B5F71"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Yellow",
                "code": "665",
                "hex": "DBD1AD"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Leaf Green",
                "code": "803",
                "hex": "888980"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "White",
                "code": "821",
                "hex": "E2DAD2"
            }, {
                "year": "1967",
                "car": "Datsun",
                "name": "Green",
                "code": "907",
                "hex": "2D3B35"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "White",
                "code": "502",
                "hex": "E6DDCA"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Light Gray",
                "code": "503",
                "hex": "9F9E9C"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Gray",
                "code": "511",
                "hex": "808A8D"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Medium Gray",
                "code": "518",
                "hex": "6C7175"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Maroon",
                "code": "521",
                "hex": "5E2228"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Pagoda Red",
                "code": "524",
                "hex": "BE2327"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Cherry Red",
                "code": "525",
                "hex": "9B2A30"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "529",
                "hex": "A48E87"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Dark Gray",
                "code": "530",
                "hex": "4F4A49"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Bronze",
                "code": "531",
                "hex": "847D78"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Rocky Brown",
                "code": "535",
                "hex": "645D59"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Green",
                "code": "546",
                "hex": "808572"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Kasumi Green",
                "code": "554",
                "hex": "C0C5BA"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Green",
                "code": "558",
                "hex": "455E56"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Turquoise",
                "code": "562",
                "hex": "7FB7B7"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Mount Fuji Blue",
                "code": "564",
                "hex": "53636B"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Nissan Blue",
                "code": "567",
                "hex": "507B8B"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Sky Blue",
                "code": "570",
                "hex": "A0B2BA"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Blue",
                "code": "574",
                "hex": "5F6D72"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "604",
                "hex": "414955"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Off White",
                "code": "637",
                "hex": "E5E1D4"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Maroon",
                "code": "639",
                "hex": "5B2C2F"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "White",
                "code": "655",
                "hex": "E7DBD2"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Toba Aqua",
                "code": "660",
                "hex": "4B5F71"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Red",
                "code": "664",
                "hex": "AB0014"
            }, {
                "year": "1968",
                "car": "Datsun",
                "name": "Yellow",
                "code": "665",
                "hex": "DBD1AD"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "White",
                "code": "502",
                "hex": "E6DDCA"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Light Gray",
                "code": "503",
                "hex": "9F9E9C"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Gray",
                "code": "511",
                "hex": "808A8D"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Medium Gray",
                "code": "518",
                "hex": "6C7175"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Pagoda Red",
                "code": "524",
                "hex": "BE2327"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Cherry Red",
                "code": "525",
                "hex": "9B2A30"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "529",
                "hex": "A48E87"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Dark Gray",
                "code": "530",
                "hex": "4F4A49"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Bronze",
                "code": "531",
                "hex": "847D78"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Rocky Brown",
                "code": "535",
                "hex": "645D59"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Green",
                "code": "546",
                "hex": "808572"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Kasumi Green",
                "code": "554",
                "hex": "C0C5BA"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Green",
                "code": "558",
                "hex": "455E56"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Turquoise",
                "code": "562",
                "hex": "7FB7B7"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Mount Fuji Blue",
                "code": "564",
                "hex": "53636B"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Sky Blue",
                "code": "570",
                "hex": "A0B2BA"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Blue",
                "code": "574",
                "hex": "5F6D72"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "604",
                "hex": "414955"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Off White",
                "code": "637",
                "hex": "E5E1D4"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Maroon",
                "code": "639",
                "hex": "5B2C2F"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "645",
                "hex": "30394C"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "White",
                "code": "655",
                "hex": "E7DBD2"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Toba Aqua",
                "code": "660",
                "hex": "4B5F71"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Red",
                "code": "664",
                "hex": "AB0014"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Medium Gray",
                "code": "712",
                "hex": "636066"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Leaf Green",
                "code": "803",
                "hex": "888980"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Mexican Red",
                "code": "814",
                "hex": "6A1F25"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Houston Yellow",
                "code": "817",
                "hex": "D3BB95"
            }, {
                "year": "1969",
                "car": "Datsun",
                "name": "Green",
                "code": "818",
                "hex": "4C5249"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "529",
                "hex": "A48E87"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Bronze",
                "code": "531",
                "hex": "847D78"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "645",
                "hex": "30394C"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "White",
                "code": "655",
                "hex": "E7DBD2"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Toba Aqua",
                "code": "660",
                "hex": "4B5F71"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Red",
                "code": "664",
                "hex": "AB0014"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Mexican Red",
                "code": "814",
                "hex": "6A1F25"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Houston Yellow",
                "code": "817",
                "hex": "D3BB95"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Green",
                "code": "818",
                "hex": "4C5249"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Cream Ivory",
                "code": "831",
                "hex": "C4BB9B"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Light Gray",
                "code": "901",
                "hex": "9F9FA1"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Blue",
                "code": "903",
                "hex": "385A72"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "White",
                "code": "904",
                "hex": "F2E5D9"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Red",
                "code": "905",
                "hex": "C80010"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Gold",
                "code": "906",
                "hex": "A26347"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Green",
                "code": "907",
                "hex": "2D3B35"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "California Yellow",
                "code": "910",
                "hex": "DBD5A5"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Dark Green",
                "code": "911",
                "hex": "3F4944"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Orange",
                "code": "918",
                "hex": "B23A2D"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Yellow",
                "code": "919",
                "hex": "DDCA72"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Gold",
                "code": "920",
                "hex": "AE6132"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Dark Green",
                "code": "930",
                "hex": "344039"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Gold",
                "code": "931",
                "hex": "A26540"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Red",
                "code": "932",
                "hex": "BA0015"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Sahara Gold",
                "code": "938",
                "hex": "A86428"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Olive Green",
                "code": "939",
                "hex": "4F4C3C"
            }, {
                "year": "1970",
                "car": "Datsun",
                "name": "Green",
                "code": "940",
                "hex": "387448"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "645",
                "hex": "30394C"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Green",
                "code": "703",
                "hex": "4B5D59"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Red",
                "code": "820",
                "hex": "831924"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "White",
                "code": "821",
                "hex": "E2DAD2"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Dark Green",
                "code": "930",
                "hex": "344039"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Gold",
                "code": "931",
                "hex": "A26540"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Red",
                "code": "932",
                "hex": "BA0015"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Sahara Gold",
                "code": "938",
                "hex": "A86428"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Olive Green",
                "code": "939",
                "hex": "4F4C3C"
            }, {
                "year": "1971",
                "car": "Datsun",
                "name": "Green",
                "code": "940",
                "hex": "387448"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Green",
                "code": "003",
                "hex": "435043"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Sunbird Orange",
                "code": "006",
                "hex": "C33431"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "White",
                "code": "018",
                "hex": "DFE7D6"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "020",
                "hex": "C3B37D"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Green",
                "code": "021",
                "hex": "467F4D"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Orange",
                "code": "022",
                "hex": "EA5227"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Sunset Orange",
                "code": "052",
                "hex": "D74122"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Mellow Yellow",
                "code": "102",
                "hex": "C7A860"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "True Blue",
                "code": "103",
                "hex": "3F6698"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Cactus Green",
                "code": "104",
                "hex": "807F67"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Red Persimmon",
                "code": "110",
                "hex": "D72D2B"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Yellow Lime",
                "code": "112",
                "hex": "C0CC56"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Green",
                "code": "113",
                "hex": "5B6242"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Bronze",
                "code": "114",
                "hex": "784847"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Blue",
                "code": "115",
                "hex": "2C6195"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Ivory White",
                "code": "502",
                "hex": "E6DDCA"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Black",
                "code": "505",
                "hex": "000000"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Pagoda Red",
                "code": "524",
                "hex": "D22A2C"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Cherry Red",
                "code": "525",
                "hex": "9B2A30"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "529",
                "hex": "A48E87"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Dragon Green",
                "code": "558",
                "hex": "386350"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Turquoise",
                "code": "562",
                "hex": "7FB7B7"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Mount Fuji Blue",
                "code": "564",
                "hex": "53636B"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Nissan Blue",
                "code": "567",
                "hex": "507B8B"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Island Turquosie",
                "code": "568",
                "hex": "26657F"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Sky Blue",
                "code": "570",
                "hex": "A0B2BA"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Eggshell",
                "code": "637",
                "hex": "E5E1D4"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Light Maroon",
                "code": "639",
                "hex": "5B2C2F"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "645",
                "hex": "30394C"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "White",
                "code": "655",
                "hex": "E7DBD2"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Dark Blue",
                "code": "660",
                "hex": "4B5F71"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "White",
                "code": "665",
                "hex": "DBD1AD"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Light Gray",
                "code": "666",
                "hex": "B7B0AD"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Green",
                "code": "703",
                "hex": "4B5D59"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Medium Gray",
                "code": "712",
                "hex": "636066"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Cream",
                "code": "817",
                "hex": "D3BB95"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Red",
                "code": "820",
                "hex": "831924"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "White",
                "code": "821",
                "hex": "E2DAD2"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Light Gray",
                "code": "901",
                "hex": "9F9FA1"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "White",
                "code": "904",
                "hex": "F2E5D9"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Cherry Red",
                "code": "905",
                "hex": "C80010"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Gold",
                "code": "906",
                "hex": "A26347"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Green",
                "code": "907",
                "hex": "2D3B35"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Mexican Orange",
                "code": "918",
                "hex": "B23A2D"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Dark Green",
                "code": "930",
                "hex": "344039"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Desert Gold",
                "code": "931",
                "hex": "A26540"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Red",
                "code": "932",
                "hex": "BA0015"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Sahara Gold",
                "code": "938",
                "hex": "A86428"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Olive Green",
                "code": "939",
                "hex": "4F4C3C"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Kelly Green",
                "code": "940",
                "hex": "387448"
            }, {
                "year": "1972",
                "car": "Datsun",
                "name": "Green",
                "code": "965",
                "hex": "3B4640"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Green",
                "code": "003",
                "hex": "435043"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Sunbird Orange",
                "code": "006",
                "hex": "C33431"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Pewter",
                "code": "012",
                "hex": "ABB6BC"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "White",
                "code": "018",
                "hex": "DFE7D6"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Sunshine Yellow",
                "code": "019",
                "hex": "EAD568"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Orange",
                "code": "022",
                "hex": "EA5227"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Sunset Orange",
                "code": "052",
                "hex": "D74122"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Mellow Yellow",
                "code": "102",
                "hex": "C7A860"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "True Blue",
                "code": "103",
                "hex": "3F6698"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Cactus Green",
                "code": "104",
                "hex": "807F67"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Red Persimmon",
                "code": "110",
                "hex": "D72D2B"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Yellow Lime",
                "code": "112",
                "hex": "C0CC56"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Avocado Green",
                "code": "113",
                "hex": "5B6242"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Bronze",
                "code": "114",
                "hex": "784847"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Blue",
                "code": "115",
                "hex": "2C6195"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Seaview Aqua",
                "code": "121",
                "hex": "398B98"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Dark Golden Brown",
                "code": "122",
                "hex": "7F5D47"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Chartreuse Green",
                "code": "123",
                "hex": "669B3E"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Beige",
                "code": "125",
                "hex": "B39A81"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Ivory White",
                "code": "502",
                "hex": "E6DDCA"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Black",
                "code": "505",
                "hex": "000000"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Pagoda Red",
                "code": "524",
                "hex": "D22A2C"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Cherry Red",
                "code": "525",
                "hex": "9B2A30"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Bamboo Tan",
                "code": "529",
                "hex": "A48E87"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Gray Green",
                "code": "546",
                "hex": "808572"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Dragon Green",
                "code": "558",
                "hex": "386350"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Asian Blue",
                "code": "562",
                "hex": "7FB7B7"
            }, {
                "year": "1973",
                "car": "Datsun",
                "name": "Mount Fuji Blue",
                "code": "564",
                "hex": "53636B"
            }]
        }
    }
})
