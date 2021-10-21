import { Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText } from 'reactstrap';
import React, { Component } from 'react'

class MenuComponent extends Component {
    constructor(props){
        super(props);
        this.state={
           SelectedDish:null
        }
    }
    onDishSelect(dish){
        this.setState({
            SelectedDish:dish
        })
    }
    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="10%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle className="tx text-dark fw-100">{dish.name}</CardTitle>
                    </CardBody>
                </Card>
            )
        }else{
            <div></div>
        }
    }
    render() {
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        {/* <Media left middle> */}
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        {/* </Media> */}
                        <CardImgOverlay body className="ml-5">
                            <CardTitle className="tx text-dark fw-100">{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                     
                     {menu}
                 
                </div>
                <div className="row">
                    {this.renderDish(this.state.SelectedDish)}
                </div>
            </div>
        )
    }
}

export default MenuComponent
