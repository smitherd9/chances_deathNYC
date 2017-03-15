import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import  C3Chart  from 'react-c3js';



class Chart extends React.Component {
	constructor(props){
		super(props);

		let  data = {
            x: 'x',
            columns: [],
            type: 'pie'
        };

        let years = [];
        let causes = {};

        this.props.response.forEach((e) => {
            if(years.indexOf(e.year) == -1){
                years.push(e.year);
            }

            if(causes.hasOwnProperty(e.leadingCause)){
                causes[e.leadingCause][e.year] = e.ageAdjusted;
            }else{
                causes[e.leadingCause] = {};
                causes[e.leadingCause][e.year] = e.ageAdjusted;
            }
        });

        years.sort();

        Object.keys(causes).forEach((k)=>{
            let col = [k];
            years.forEach((y) => {
                if(causes[k].hasOwnProperty(y)){
                    col.push(causes[k][y]);
                }else{
                    col.push(0);
                }
            });
            data.columns.push(col);
        });

        years.splice(0, 0, 'x');
        data.columns.splice(0, 0, years);
        this.data = data;		

  
      		this.grid = {
      			x: {
      				show: true
      			},
      			y: {
      				show: true
      			}
      		}, 


      		this.bar = {
      			width: {
            		ratio: 0.5 // this makes bar width 50% of length between ticks
        			},
        			// or
        			//width: 100 // this makes bar width 100px
        		zerobased: true
      		},

      		this.axis = {

      			x: {
      				label: 'Years',
      				padding: {  top: 0.5,
      						left: 0.5,
      						right: 0.5
      				},

      				grid: {
      					show: true
      				}
      			},

      			y: {
      				label: {
      					text: 'Age Adjusted Death Rate',
      					position: 'outer-middle'
      				}
      			}
      		},

          this.pie = {
            label: {
              show: true
            }
          },

          this.tooltip = {
            show: false
          },

          // this.padding = {
          //   top: 20,
          //   right: 20,
          //   left: 20,
          //   bottom: 30 
          // },

          this.legend = {
            show: true
          },

          this.size = {
            width: 400,
            height: 800
          }


          this.onresize = function() {
            let width = window.innerWidth;

            if (width <= 768) {
              console.log(this);
              this.resize({
                width: 300,
                height: 300
              });

            }
          }




      };


	componentWillUpdate(){
		
		console.log(this.props.response);
		

		let data = {
            x: 'x',
            columns: [],
            type: 'pie'
        };

        let years = [];
        let causes = {};

        this.props.response.forEach((e) => {
            if(years.indexOf(e.year) == -1){
                years.push(e.year);
            }

            if(causes.hasOwnProperty(e.leadingCause)){
                causes[e.leadingCause][e.year] = e.ageAdjusted;
            }else{
                causes[e.leadingCause] = {};
                causes[e.leadingCause][e.year] = e.ageAdjusted;
            }
        });

        years.sort();

        Object.keys(causes).forEach((k)=>{
            let col = [k];
            years.forEach((y) => {
                if(causes[k].hasOwnProperty(y)){
                    col.push(causes[k][y]);
                }else{
                    col.push(0);
                }
            });
            data.columns.push(col);
        });

        years.splice(0, 0, 'x');
        data.columns.splice(0, 0, years);
        this.data = data;

	}

//   componentDidMount() {
//           this.onresize = function() {
//             let width = window.innerWidth;

//             if (width <= 768) {
//               console.log(this);
//               this.resize({
//                 width: 300,
//                 height: 300
//               });

//             }
//           }
// }


	

	render() {	

		return(	
			
			<div id="chart"><C3Chart data={this.data} grid={this.grid} 
      bar={this.bar} axis={this.axis} 
      tooltip={this.tooltip} padding={this.padding} size={this.size} 
      pie={this.pie} onresize={this.onresize} resize={this.resize} legend={this.legend} /></div>

			
			

		);
	}

   
}




let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(Chart);