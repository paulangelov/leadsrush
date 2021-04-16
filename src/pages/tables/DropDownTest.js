import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  { text: "Bermuda", flag: "bm", key: "bm", value: "bm" },
  { text: "Bhutan", flag: "bt", key: "bt", value: "bt" },
  { text: "Bolivia", flag: "bo", key: "bo", value: "bo" },
  { text: "Bosnia", flag: "ba", key: "ba", value: "ba" },
  { text: "Botswana", flag: "bw", key: "bw", value: "bw" },
  { text: "Bouvet Island", flag: "bv", key: "bv", value: "bv" },
  { text: "Brazil", flag: "br", key: "br", value: "br" },
  { text: "British Virgin Islands", flag: "vg", key: "vg", value: "vg" },
  { text: "Brunei", flag: "bn", key: "bn", value: "bn" },
  { text: "Bulgaria", flag: "bg", key: "bg", value: "bg" },
  { text: "Burkina Faso", flag: "bf", key: "bf", value: "bf" },
  { text: "Burma", flag: "mm", key: "mm", value: "mm", alias: "Myanmar" },
  { text: "Burundi", flag: "bi", key: "bi", value: "bi" },
  { text: "Caicos Islands", flag: "tc", key: "tc", value: "tc" },
  { text: "Cambodia", flag: "kh", key: "kh", value: "kh" },
  { text: "Cameroon", flag: "cm", key: "cm", value: "cm" },
  { text: "Canada", flag: "ca", key: "ca", value: "ca" },
  { text: "Cape Verde", flag: "cv", key: "cv", value: "cv" },
  { text: "Cayman Islands", flag: "ky", key: "ky", value: "ky" },
  { text: "Central African Republic", flag: "cf", key: "cf", value: "cf" },
  { text: "Chad", flag: "td", key: "td", value: "td" },
  { text: "Chile", flag: "cl", key: "cl", value: "cl" },
  { text: "China", flag: "cn", key: "cn", value: "cn" },
  { text: "Christmas Island", flag: "cx", key: "cx", value: "cx" },
  { text: "Cocos Islands", flag: "cc", key: "cc", value: "cc" },
  { text: "Colombia", flag: "co", key: "co", value: "co" },
  { text: "Comoros", flag: "km", key: "km", value: "km" },
  { text: "Congo", flag: "cd", key: "cd", value: "cd" },
  { text: "Congo Brazzaville", flag: "cg", key: "cg", value: "cg" },
  { text: "Cook Islands", flag: "ck", key: "ck", value: "ck" },
  { text: "Costa Rica", flag: "cr", key: "cr", value: "cr" },
  { text: "Cote Divoire", flag: "ci", key: "ci", value: "ci" },
  { text: "Croatia", flag: "hr", key: "hr", value: "hr" },
  { text: "Cuba", flag: "cu", key: "cu", value: "cu" },
  { text: "Cyprus", flag: "cy", key: "cy", value: "cy" },
  { text: "Czech Republic", flag: "cz", key: "cz", value: "cz" },
  { text: "Denmark", flag: "dk", key: "dk", value: "dk" },
  { text: "Djibouti", flag: "dj", key: "dj", value: "dj" },
  { text: "Dominica", flag: "dm", key: "dm", value: "dm" },
  { text: "Dominican Republic", flag: "do", key: "do", value: "do" },
  { text: "Ecuador", flag: "ec", key: "ec", value: "ec" },
  { text: "Egypt", flag: "eg", key: "eg", value: "eg" },
  { text: "El Salvador", flag: "sv", key: "sv", value: "sv" },
  { text: "England", flag: "gb", key: "gb", value: "gb eng" },
  { text: "Equatorial Guinea", flag: "gq", key: "gq", value: "gq" },
  { text: "Eritrea", flag: "er", key: "er", value: "er" },
  { text: "Estonia", flag: "ee", key: "ee", value: "ee" },
  { text: "Ethiopia", flag: "et", key: "et", value: "et" },
  { text: "Europeanunion", flag: "eu", key: "eu", value: "eu" },
  { text: "Falkland Islands", flag: "fk", key: "fk", value: "fk" },
  { text: "Faroe Islands", flag: "fo", key: "fo", value: "fo" },
  { text: "Fiji", flag: "fj", key: "fj", value: "fj" },
  { text: "Finland", flag: "fi", key: "fi", value: "fi" },
  { text: "France", flag: "fr", key: "fr", value: "fr" },
  { text: "French Guiana", flag: "gf", key: "gf", value: "gf" },
  { text: "French Polynesia", flag: "pf", key: "pf", value: "pf" },
  { text: "French Territories", flag: "tf", key: "tf", value: "tf" },
  { text: "Gabon", flag: "ga", key: "ga", value: "ga" },
  { text: "Gambia", flag: "gm", key: "gm", value: "gm" },
  { text: "Georgia", flag: "ge", key: "ge", value: "ge" },
  { text: "Germany", flag: "de", key: "de", value: "de" },
  { text: "Ghana", flag: "gh", key: "gh", value: "gh" },
  { text: "Gibraltar", flag: "gi", key: "gi", value: "gi" },
  { text: "Greece", flag: "gr", key: "gr", value: "gr" },
  { text: "Greenland", flag: "gl", key: "gl", value: "gl" },
  { text: "Grenada", flag: "gd", key: "gd", value: "gd" },
  { text: "Guadeloupe", flag: "gp", key: "gp", value: "gp" },
  { text: "Guam", flag: "gu", key: "gu", value: "gu" },
  { text: "Guatemala", flag: "gt", key: "gt", value: "gt" },
  { text: "Guinea", flag: "gn", key: "gn", value: "gn" },
  { text: "Guinea-Bissau", flag: "gw", key: "gw", value: "gw" },
  { text: "Guyana", flag: "gy", key: "gy", value: "gy" },
  { text: "Haiti", flag: "ht", key: "ht", value: "ht" },
  { text: "Heard Island", flag: "hm", key: "hm", value: "hm" },
  { text: "Honduras", flag: "hn", key: "hn", value: "hn" },
  { text: "Hong Kong", flag: "hk", key: "hk", value: "hk" },
  { text: "Hungary", flag: "hu", key: "hu", value: "hu" },
  { text: "Iceland", flag: "is", key: "is", value: "is" },
  { text: "India", flag: "in", key: "in", value: "in" },
  { text: "Indian Ocean Territory", flag: "io", key: "io", value: "io" },
  { text: "Indonesia", flag: "id", key: "id", value: "id" },
  { text: "Iran", flag: "ir", key: "ir", value: "ir" },
  { text: "Iraq", flag: "iq", key: "iq", value: "iq" },
  { text: "Ireland", flag: "ie", key: "ie", value: "ie" },
  { text: "Israel", flag: "il", key: "il", value: "il" },
  { text: "Italy", flag: "it", key: "it", value: "it" },
  { text: "Jamaica", flag: "jm", key: "jm", value: "jm" },
  { text: "Jan Mayen", flag: "sj", key: "sj", value: "sj", alias: "Svalbard" },
  { text: "Japan", flag: "jp", key: "jp", value: "jp" },
  { text: "Jordan", flag: "jo", key: "jo", value: "jo" },
  { text: "Kazakhstan", flag: "kz", key: "kz", value: "kz" },
  { text: "Kenya", flag: "ke", key: "ke", value: "ke" },
  { text: "Kiribati", flag: "ki", key: "ki", value: "ki" },
  { text: "Kuwait", flag: "kw", key: "kw", value: "kw" },
  { text: "Kyrgyzstan", flag: "kg", key: "kg", value: "kg" },
  { text: "Laos", flag: "la", key: "la", value: "la" },
  { text: "Latvia", flag: "lv", key: "lv", value: "lv" },
  { text: "Lebanon", flag: "lb", key: "lb", value: "lb" },
  { text: "Lesotho", flag: "ls", key: "ls", value: "ls" },
  { text: "Liberia", flag: "lr", key: "lr", value: "lr" },
  { text: "Libya", flag: "ly", key: "ly", value: "ly" },
  { text: "Liechtenstein", flag: "li", key: "li", value: "li" },
  { text: "Lithuania", flag: "lt", key: "lt", value: "lt" },
  { text: "Luxembourg", flag: "lu", key: "lu", value: "lu" },
  { text: "Macau", flag: "mo", key: "mo", value: "mo" },
  { text: "Macedonia", flag: "mk", key: "mk", value: "mk" },
  { text: "Madagascar", flag: "mg", key: "mg", value: "mg" },
  { text: "Malawi", flag: "mw", key: "mw", value: "mw" },
  { text: "Malaysia", flag: "my", key: "my", value: "my" },
  { text: "Maldives", flag: "mv", key: "mv", value: "mv" },
  { text: "Mali", flag: "ml", key: "ml", value: "ml" },
  { text: "Malta", flag: "mt", key: "mt", value: "mt" },
  { text: "Marshall Islands", flag: "mh", key: "mh", value: "mh" },
  { text: "Martinique", flag: "mq", key: "mq", value: "mq" },
  { text: "Mauritania", flag: "mr", key: "mr", value: "mr" },
  { text: "Mauritius", flag: "mu", key: "mu", value: "mu" },
  { text: "Mayotte", flag: "yt", key: "yt", value: "yt" },
  { text: "Mexico", flag: "mx", key: "mx", value: "mx" },
  { text: "Micronesia", flag: "fm", key: "fm", value: "fm" },
  { text: "Moldova", flag: "md", key: "md", value: "md" },
  { text: "Monaco", flag: "mc", key: "mc", value: "mc" },
  { text: "Mongolia", flag: "mn", key: "mn", value: "mn" },
  { text: "Montenegro", flag: "me", key: "me", value: "me" },
  { text: "Montserrat", flag: "ms", key: "ms", value: "ms" },
  { text: "Morocco", flag: "ma", key: "ma", value: "ma" },
  { text: "Mozambique", flag: "mz", key: "mz", value: "mz" },
  { text: "Namibia", flag: "na", key: "na", value: "na" },
  { text: "Nauru", flag: "nr", key: "nr", value: "nr" },
  { text: "Nepal", flag: "np", key: "np", value: "np" },
  { text: "Netherlands", flag: "nl", key: "nl", value: "nl" },
  { text: "Netherlandsantilles", flag: "an", key: "an", value: "an" },
  { text: "New Caledonia", flag: "nc", key: "nc", value: "nc" },
  { text: "New Guinea", flag: "pg", key: "pg", value: "pg" },
  { text: "New Zealand", flag: "nz", key: "nz", value: "nz" },
  { text: "Nicaragua", flag: "ni", key: "ni", value: "ni" },
  { text: "Niger", flag: "ne", key: "ne", value: "ne" },
  { text: "Nigeria", flag: "ng", key: "ng", value: "ng" },
  { text: "Niue", flag: "nu", key: "nu", value: "nu" },
  { text: "Norfolk Island", flag: "nf", key: "nf", value: "nf" },
  { text: "North Korea", flag: "kp", key: "kp", value: "kp" },
  { text: "Northern Mariana Islands", flag: "mp", key: "mp", value: "mp" },
  { text: "Norway", flag: "no", key: "no", value: "no" },
  { text: "Oman", flag: "om", key: "om", value: "om" },
  { text: "Pakistan", flag: "pk", key: "pk", value: "pk" },
  { text: "Palau", flag: "pw", key: "pw", value: "pw" },
  { text: "Palestine", flag: "ps", key: "ps", value: "ps" },
  { text: "Panama", flag: "pa", key: "pa", value: "pa" },
  { text: "Paraguay", flag: "py", key: "py", value: "py" },
  { text: "Peru", flag: "pe", key: "pe", value: "pe" },
  { text: "Philippines", flag: "ph", key: "ph", value: "ph" },
  { text: "Pitcairn Islands", flag: "pn", key: "pn", value: "pn" },
  { text: "Poland", flag: "pl", key: "pl", value: "pl" },
  { text: "Portugal", flag: "pt", key: "pt", value: "pt" },
  { text: "Puerto Rico", flag: "pr", key: "pr", value: "pr" },
  { text: "Qatar", flag: "qa", key: "qa", value: "qa" },
  { text: "Reunion", flag: "re", key: "re", value: "re" },
  { text: "Romania", flag: "ro", key: "ro", value: "ro" },
  { text: "Russia", flag: "ru", key: "ru", value: "ru" },
  { text: "Rwanda", flag: "rw", key: "rw", value: "rw" },
  { text: "Saint Helena", flag: "sh", key: "sh", value: "sh" },
  { text: "Saint Kitts and Nevis", flag: "kn", key: "kn", value: "kn" },
  { text: "Saint Lucia", flag: "lc", key: "lc", value: "lc" },
  { text: "Saint Pierre", flag: "pm", key: "pm", value: "pm" },
  { text: "Saint Vincent", flag: "vc", key: "vc", value: "vc" },
  { text: "Samoa", flag: "ws", key: "ws", value: "ws" },
  { text: "San Marino", flag: "sm", key: "sm", value: "sm" },
  { text: "Sandwich Islands", flag: "gs", key: "gs", value: "gs" },
  { text: "Sao Tome", flag: "st", key: "st", value: "st" },
  { text: "Saudi Arabia", flag: "sa", key: "sa", value: "sa" },
  { text: "Scotland", flag: "gb", key: "gb", value: "gb sct" },
  { text: "Senegal", flag: "sn", key: "sn", value: "sn" },
  { text: "Serbia", flag: "cs", key: "cs", value: "cs" },
  { text: "Serbia", flag: "rs", key: "rs", value: "rs" },
  { text: "Seychelles", flag: "sc", key: "sc", value: "sc" },
  { text: "Sierra Leone", flag: "sl", key: "sl", value: "sl" },
  { text: "Singapore", flag: "sg", key: "sg", value: "sg" },
  { text: "Slovakia", flag: "sk", key: "sk", value: "sk" },
  { text: "Slovenia", flag: "si", key: "si", value: "si" },
  { text: "Solomon Islands", flag: "sb", key: "sb", value: "sb" },
  { text: "Somalia", flag: "so", key: "so", value: "so" },
  { text: "South Africa", flag: "za", key: "za", value: "za" },
  { text: "South Korea", flag: "kr", key: "kr", value: "kr" },
  { text: "Spain", flag: "es", key: "es", value: "es" },
  { text: "Sri Lanka", flag: "lk", key: "lk", value: "lk" },
  { text: "Sudan", flag: "sd", key: "sd", value: "sd" },
  { text: "Suritext", flag: "sr", key: "sr", value: "sr" },
  { text: "Swaziland", flag: "sz", key: "sz", value: "sz" },
  { text: "Sweden", flag: "se", key: "se", value: "se" },
  { text: "Switzerland", flag: "ch", key: "ch", value: "ch" },
  { text: "Syria", flag: "sy", key: "sy", value: "sy" },
  { text: "Taiwan", flag: "tw", key: "tw", value: "tw" },
  { text: "Tajikistan", flag: "tj", key: "tj", value: "tj" },
  { text: "Tanzania", flag: "tz", key: "tz", value: "tz" },
  { text: "Thailand", flag: "th", key: "th", value: "th" },
  { text: "Timorleste", flag: "tl", key: "tl", value: "tl" },
  { text: "Togo", flag: "tg", key: "tg", value: "tg" },
  { text: "Tokelau", flag: "tk", key: "tk", value: "tk" },
  { text: "Tonga", flag: "to", key: "to", value: "to" },
  { text: "Trinidad", flag: "tt", key: "tt", value: "tt" },
  { text: "Tunisia", flag: "tn", key: "tn", value: "tn" },
  { text: "Turkey", flag: "tr", key: "tr", value: "tr" },
  { text: "Turkmenistan", flag: "tm", key: "tm", value: "tm" },
  { text: "Tuvalu", flag: "tv", key: "tv", value: "tv" },
  {
    text: "U.A.E.",
    flag: "ae",
    key: "ae",
    value: "ae",
    alias: "United Arab Emirates",
  },
  { text: "Uganda", flag: "ug", key: "ug", value: "ug" },
  { text: "Ukraine", flag: "ua", key: "ua", value: "ua" },
  { text: "United Kingdom", flag: "gb", key: "gb", value: "gb", alias: "uk" },
  {
    text: "United States",
    flag: "us",
    key: "us",
    value: "us",
    alias: "America",
  },
  { text: "Uruguay", flag: "uy", key: "uy", value: "uy" },
  { text: "US Minor Islands", flag: "um", key: "um", value: "um" },
  { text: "US Virgin Islands", flag: "vi", key: "vi", value: "vi" },
  { text: "Uzbekistan", flag: "uz", key: "uz", value: "uz" },
  { text: "Vanuatu", flag: "vu", key: "vu", value: "vu" },
  { text: "Vatican City", flag: "va", key: "va", value: "va" },
  { text: "Venezuela", flag: "ve", key: "ve", value: "ve" },
  { text: "Vietnam", flag: "vn", key: "vn", value: "vn" },
  { text: "Wales", flag: "gb", key: "gb", value: "gb wls" },
  { text: "Wallis and Futuna", flag: "wf", key: "wf", value: "wf" },
  { text: "Western Sahara", flag: "eh", key: "eh", value: "eh" },
  { text: "Yemen", flag: "ye", key: "ye", value: "ye" },
  { text: "Zambia", flag: "zm", key: "zm", value: "zm" },
  { text: "Zimbabwe", flag: "zw", key: "zw", value: "zw" },
];

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" },
];

const DropDownTest = () => {
  const [opacity, setOpacity] = useState(false);
  return (
    <Grid container={true} justify="center">
      <Grid item={true} lg={6} md={6} sm={12} xs={12}>
        <Box mb={3} width="100%" p={5}>
          <Box
            width="100%"
            borderRadius="6px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={10}
            bgcolor={
              opacity ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 1)"
            }
            boxShadow="rgb(50 50 93 / 3%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px"
          >
            <Typography variant="h2">
              {opacity ? "Country 20% opacity" : "Country 100% opacity"}{" "}
            </Typography>
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryOptions}
            />
          </Box>{" "}
        </Box>
        <Box
          width="100%"
          borderRadius="6px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={10}
          bgcolor={
            opacity ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"
          }
          boxShadow="rgb(50 50 93 / 3%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px"
        >
          {" "}
          <Typography variant="h2">
            {opacity ? "Country 50% opacity" : "Country 100% opacity"}{" "}
          </Typography>
          <Dropdown
            placeholder="Skills"
            fluid
            multiple
            selection
            options={options}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "0 auto" }}
          onClick={() => setOpacity((prevState) => !prevState)}
        >
          {" "}
          Opacity On/Off Button{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default DropDownTest;
