angular.module('clinicapp').directive('accordion', function() {
  return {
    templateUrl: "features/accordion/accordion.html",
    restrict: "E",
    scope:{
      diabetesData:"=data"
    },
    controllerAs: "ac",
    bindToController:true,
    controller: function($scope){
      var ac = this;
      ac.selected = {

      }

      ac.setSelected = function(item){
        if (item == ac.selected){
          ac.selected = {};
        }else{
          ac.selected = item;
        }
      }
      console.log(ac);

      // ac.diabetesData = [
      //   {
      //     title: 'Prediabetes',
      //     content: 'There are no clear symptoms of prediabetes, so, you may have it and not know it. Before people develop type 2 diabetes, they almost always have "prediabetes" — blood glucose levels that are higher than normal but not yet high enough to be diagnosed as diabetes. Some people with prediabetes may have some of the symptoms of diabetes or even problems from diabetes already. You usually find out that you have prediabetes when being tested for diabetes.'
      //   },
      //   {
      //     title: 'Type 1 Diabetes',
      //     content: 'In type 1 diabetes, the body does not produce insulin. The body breaks down the sugars and starches you eat into a simple sugar called glucose, which it uses for energy. Insulin is a hormone that the body needs to get glucose from the bloodstream into the cells of the body. With the help of insulin therapy and other treatments, even young children can learn to manage their condition and live long, healthy lives.'
      //   },
      //   {
      //     title: 'Type 2 Diabetes',
      //     content: 'Type 2 diabetes is the most common form of diabetes. If you have type 2 diabetes your body does not use insulin properly. This is called insulin resistance. At first, your pancreas makes extra insulin to make up for it. But, over time it isn\'t able to keep up and can\'t make enough insulin to keep your blood glucose at normal levels.'
      //   },
      //   {
      //     title: 'Gestational Diabetes',
      //     content: 'Pregnant women who have never had diabetes before but who have high blood glucose (sugar) levels during pregnancy are said to have gestational diabetes. Gestational diabetes starts when your body is not able to make and use all the insulin it needs for pregnancy. Without enough insulin, glucose cannot leave the blood and be changed to energy. Glucose builds up in the blood to high levels. This is called hyperglycemia. Treatment for gestational diabetes always includes special meal plans and scheduled physical activity. It may also include daily blood glucose testing and insulin injections.'
      //   }
      // ];
    }

  }
})
