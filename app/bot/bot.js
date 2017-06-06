/// INIT
status.addListener("init", 
 function (params, context) {
    return {"text-message": "Welcome to the Laundromat!"};
});

/*
What I need to do is enable a webview to take place.
So when someone sends the proper command, the page opens.
/new - New Mixing Contract page
/join - Join Mix page
/withdraw - Withdraw
/find - NOT MVP
*/


///INFORMATION
status.command({
     name: "info",
     title: "information",
     description: "What's the Laundromat?",
     color: "blue",
     executeImmediately: true,
     preview: function() {
        return {markup: status.components.text({}, "")};
     }  
     handler: function() {
        status.sendMessage("The Laundromat is a decentralized mixing service to anonymize your ether. Choose `/start` to begin the process of washing ether.");
    }
 });

// /// START
// status.command({
//      name: "start",
//      title: "Start Here",
//      description: "Start the process of washing ether.",
//      color: "red",
//      params: [{
//               name: "start",
//               type: status.types.TEXT,
//               suggestions: startSuggestions
//              }]
//  });

// function suggestionsContainerStyle(suggestionsCount) {
//     return {
//         marginVertical: 1,
//         marginHorizontal: 0,
//         keyboardShouldPersistTaps: "always",
//         height: Math.min(150, (56 * suggestionsCount)),
//         backgroundColor: "black",
//         borderRadius: 5,
//         flexGrow: 1
//     };
// }

// var suggestionSubContainerStyle = {
//     height: 56,
//     borderBottomWidth: 1,
//     borderBottomColor: "green"
// };

// var valueStyle = {
//     marginTop: 9,
//     marginHorizontal: 3,
//     fontSize: 14,
//     fontFamily: "font",
//     color: "white"
// };

// function startSuggestions() {
//     var suggestions = ["Create a new mixer contract.", "/mix", "/withdraw"].map(function(entry) {
//         return status.components.touchable(
//             {onPress: status.components.dispatch([status.events.SET_VALUE, entry])},
//             status.components.view(
//                 suggestionsContainerStyle,
//                 [status.components.view(
//                     suggestionSubContainerStyle,
//                     [
//                         status.components.text(
//                             {style: valueStyle},
//                             entry
//                         )
//                     ]
//                 )]
//             )
//         );
//     });

//     // Let's wrap those two touchable buttons in a scrollView
//     var view = status.components.scrollView(
//         suggestionsContainerStyle(3),
//         suggestions
//     );

//     // Give back the whole thing inside an object.
//     return {markup: view};
// };

/// NEW MIXER CONTRACT
status.command({
     name: "new",
     title: "new",
     description: "Creates new mixing contract.",
     color: "blue",
     sequentialParams: true,
     params: [{
        name: "uno",
        type: status.types.NUMBER,
        placeholder: "How many participants?"
     },
     {
        name: "dos",
        type:status.types.NUMBER,
        placeholder: "How much ether should each person send?"
     }],
    preview: function (params) {
        return {markup: status.components.text({}, [params.uno, params.dos])};     
    },
    handler: function (params) {
        if (params.uno > 1) {
            status.sendMessage("good..")
        } else {
            status.sendMessage("Nope!")
        }
    }
 });

 status.command({
    name: "test",
    icon: "test",
    title: "test",
    description: "test",
    color: "#a187d5",
    sequentialParams: true,
    params: [{
        name: "address",
        type: status.types.TEXT,
        placeholder: "address"
    }],
    handler: function (params) {
        var laundromat = 12;
        status.sendMessage("Address " + params.address + laundromat);
    }
});


/// SHH... LISTEN
status.addListener("on-message-send",
    function (params, context) {
    if ((~params.message.toLowerCase().indexOf("new"))) {
        return {"text-message": "FUCK YEAH"};
    } else if ((~params.message.toLowerCase().indexOf("one"))) {
        return {"text-message": "uno"};
    } else if ((~params.message.toLowerCase().indexOf("two"))) {
        return {"text-message": "dos"};
    } else if ((~params.message.toLowerCase().indexOf("three"))) {
        return {"text-message": "tres"};
    } else {
        return {"text-message": "Need some anonymous ether?"};
    }
});