import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
// import  C3Chart  from 'react-c3js';
const isBrowser = typeof window !== 'undefined';
const C3Chart = isBrowser ? require( 'react-c3js') : undefined;



class Chart extends React.Component {
	constructor(props){
		super(props);
		// this.generateChart = this.generateChart.bind(this);
			this.data = {
				x: 'x',
				// json: this.props.response,
				// keys: {
				// 	x: this.props.response.leadingCause,
				// 	value: ['ageAdjusted']
				// },		

      		columns: [
      			['x', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
        		['Diseases of the Heart', ],
        		['Malignant Neoplasms (Cancer)', 50, 20, 10, 40, 15, 25],
        		['Chronic Lower Respiratory Diseases', 30, 200, 100, 400, 150, 250],
        		['Essential Hypertension and Renal Diseases', 30, 200, 100, 400, 150, 250],
        		['Intentional Self-Harm (Suicide)', 30, 200, 100, 400, 150, 250],
        		['Nephritis, Nephrotic Syndrome and Nephrisis', 50, 20, 10, 40, 15, 25], 
        		['Chronic Liver Disease and Cirrhosis', 50, 20, 10, 40, 15, 25], 
        		['Alzheimer\'s Disease', 30, 200, 100, 400, 150, 250],        		 
        		['Influenza and Pneumonia', 50, 20, 10, 40, 15, 25],
        		['Cerebrovascular Disease (Stroke)', 50, 20, 10, 40, 15, 25],
        		['Diabetes Mellitus', 50, 20, 10, 40, 15, 25],
        		['Accidents Except Drug Posioning', 50, 20, 10, 40, 15, 25],
        		['Congenital Malformations, Deformations, and Chromosomal Abnormalities ', 50, 20, 10, 40, 15, 25],        		       		
        		['All other causes', 30, 200, 100, 400, 150, 250]
      		],
      		type: 'bar',


      	};


      		this.bar = {
      			width: {
            		ratio: 0.5 // this makes bar width 50% of length between ticks
        			},
        			// or
        			//width: 100 // this makes bar width 100px
        		zerobased: true
      		}

      		this.axis = {

      			x: {
      				label: 'Years'
      			},
      			y: {
      				label: 'Age Adjusted Death Rate'
      			}
      		}
      	}
      

	generateChart() {

	}

	componentDidUpdate(){
		// store.dispatch(actions.selectedState(e.target.value));
		console.log(this.props.response);

	}


	

	render() {

		return(	
			
			<div id="chart"><C3Chart data={this.data} axis={this.axis}  /></div>

			
			

		);
	}

   
}




let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(Chart);