import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
class MovieEditModal extends Component {
    constructor(props) {
    super();
    this.state = {
         id : props.movie.id,
         title : props.movie.title,
         genre : props.movie.genre
     } 
    } 

    render() { 
        //console.log('jj', this.props.movie.genre)
        return (
            <div>
                <Modal 
                size="lg"
                show={this.props.showModal} 
                onHide={this.props.closeModal}
               >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="form-group mb-3">
                        <label className="mb-1">ID</label>
                        <input type="text" className="form-control"
                           value={this.state.id} 
                           onChange={
                               (e)=>(this.setState({id: e.target.value}))
                           }
                        />
                    </div> */}
                    <div className="form-group mb-3">
                        <label className="mb-1">genre</label>
                        <input type="text" className="form-control"
                           value={this.state.genre} 
                           onChange={
                               (e)=>(this.setState({genre: e.target.value}))
                           }
                        />
                    </div>
                    <div className="form-group">
                        <label className="mb-1">title</label>
                        <input type="text" className="form-control"
                            value={this.state.title}
                            onChange={
                                (e)=>(this.setState({title:e.target.value}))
                            }
                        />
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={()=> this.props.handleSave(
                        this.state.id,
                        this.state.title,
                        this.state.genre
                    )}>Save changes</button>
                     <Button variant="secondary" onClick={this.props.closeModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
 
export default MovieEditModal;