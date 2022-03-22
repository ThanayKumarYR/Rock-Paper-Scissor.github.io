
  // const myTimeout = setTimeout(toTop(), 5000);

function game_page(){
  const myTimeout = setTimeout(function toTop(){
        var dom_intro = document.getElementById('intro').style;
        dom_intro.zIndex = "0";
        dom_intro.visibility = "collapse";
        document.getElementById('blank').style.zIndex = "10";
        //   document.getElementById(blank).style.visibility = "hidden";
      },500);
}

  
  $(document).ready(function(){
    $(".press").click(function(){
      $(this).css();
      }, function(){
      $(this).css("height","80%").siblings().css("height","70%");
      $(this).css("width","30%").siblings().css("width","25%");
      $(this).css("filter","saturate(1000)").siblings().css("filter","saturate(1)");
      $(this).css("border","4px solid #fff").siblings().css("border","none");
    });
  });


var choice;
const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="choice"]');
        btn.addEventListener("click", () => {
          var dom_intro2 = document.getElementById('output5').style;
          dom_intro2.zIndex = "0";
          dom_intro2.animationIterationCount = "0";

            // var choice;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    choice = radioButton.value;
                    $(document).ready(function(){
                        $(".press").click(function(){
                          $(this).css();
                          }, function(){
                          $(this).css("height","80%").siblings().css("height","70%");
                          $(this).css("width","30%").siblings().css("width","25%");
                          $(this).css("filter","saturate(1000)").siblings().css("filter","saturate(1)");
                          $(this).css("border","4px solid #fff").siblings().css("border","none");
                        });
                      });
                    break;
                }
            }
            // show the output:
            // output.innerText = choice ? `You selected ${choice}` : `You haven't selected any size`;
            choice = Number(choice);
            var newtop;
            var topp1 ;
            var topp2 ;
            function toTop(newtop,topp1,topp2){
             
              output2.innerText= "Now it is Computer's turn.......";
              setTimeout(function(){
                document.getElementById(newtop).style.visibility = "visible";
              },500);
             let a = document.getElementById(topp1).style;
             let c = document.getElementById(topp2).style;
             let b = document.getElementById(newtop).style;
             a.zIndex = "100" ;
             c.zIndex = "100" ;
             b.zIndex = "1000";
          }
            if(choice == 1){
              var choice_name = 'rock';
              newtop = 'r1';
              topp1 = 'p1';
              topp2 = 's1'
              toTop(newtop,topp1,topp2);
              document.getElementById('r1').style.visibility = "visible";
            }
            else if(choice == 2){
              var choice_name = 'paper';
              newtop = 'p1';
              topp1 = 's1';
              topp2 = 'r1';
              toTop(newtop,topp1,topp2);
              document.getElementById('p1').style.visibility = "visible";
            }

            else if(choice == 3){
              var choice_name = 'scissor';
              newtop = 's1';
              topp1 = 'r1';
              topp2 = 'p1';
              toTop(newtop,topp1,topp2);
              document.getElementById('s1').style.visibility = "visible";
            }
            // output1.innerText =  choice_name? `Your choice is : ${choice_name} ` : `You haven't selected any size`;
            let comp_choice = Math.floor((Math.random() * 3) + 1);
            
            while(choice == comp_choice)
            
                comp_choice = Math.floor((Math.random() * 3) + 1);
                if(comp_choice == 1){
                  var comp_choice_name = "rock";
                  newtop = 'r2';
                  topp1 = 'p2';
                  topp2 = 's2';
                  toTop(newtop,topp1,topp2);
                }
                else if(comp_choice == 2){
                  var comp_choice_name = "paper";
                  newtop = 'p2';
                  topp1 = 's2';
                  topp2 = 'r2';
                  toTop(newtop,topp1,topp2);  

                }
                else if(comp_choice == 3){
                  var comp_choice_name = "scissor";
                  var choice_name = 'scissor';
                  newtop = 's2';
                  topp1 = 'r2';
                  topp2 = 'p2';
                  toTop(newtop,topp1,topp2);
                  
                }
                
                // output3.innerText = `Computer choice is : ${comp_choice_name}`;
                
            if (choice == 1 && comp_choice == 2 || choice == 2 && comp_choice == 1){

                output4.innerText = "<= paper wins => ";
                var result = "paper";
            }
            else if (choice == 1 && comp_choice == 3 || choice == 3 && comp_choice == 1){

                output4.innerText = "<= rock wins =>";
                var result = "rock"
            }
            else{
                
                output4.innerText = "<= scissor wins =>";
                var result = "scissor"
            }

            
            
            if (result == choice_name){
              output5.innerText = "<== So Computer wins ==>";
              $(document).ready(function(){
                const myTimeout = setTimeout(() => {
                    var dom_intro1 = document.getElementById('output5').style;
                      dom_intro1.zIndex = "9999";
                      dom_intro1.animationIterationCount = "infinite";
                      dom_intro1.animationDelay = "1s";
                  },500);
              }); 
            }
            else{
              output5.innerText = "<== So User wins ==>";
              $(document).ready(function(){
                const myTimeout = setTimeout(() => {
                    var dom_intro1 = document.getElementById('output5').style;
                      dom_intro1.zIndex = "9999";
                      dom_intro1.animationIterationCount = "infinite";
                      dom_intro1.animationDelay = "1s";
                  },500);
              }); 
            }
        });
        
        
        
        
        
        
        