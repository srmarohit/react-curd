import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
class MovieAddModal extends Component {
    state = { 
        id:'',
        genre:'',
        title:''
    } 
    idHandler = (e) =>{
        this.setState({id:e.target.value})
    }
    genreHandler = (e) =>{
        this.setState({genre:e.target.value})
    }
    titleHandler = (e) =>{
        this.setState({title:e.target.value})
    }
    render() { 
        const{id,genre,title} = this.state
        
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
                    <div className="mb-3">
                        <label>ID</label>
                         <input 
                         value={this.state.id}   
                         type="text" 
                         className="form-control"
                         onChange={(e)=>this.idHandler(e)}   
                        />
                    </div>
                    <div className="mb-3">
                        <label>Genre</label>
                         <input  
                            type="text" 
                            className="form-control"
                            value={this.state.genre}
                            onChange={(e)=>this.genreHandler(e)}  
                         />
                    </div>
                    <div className="mb-3">
                        <label>Title</label>
                         <input 
                            type="text" 
                            className="form-control"
                            value={this.state.title}
                            onChange={(e)=>this.titleHandler(e)} 
                         />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className="btn btn-primary" 
                        onClick={()=>this.props.handleAddSave(id, genre, title)}
                        disabled = { id   === '' ? 'disabled' : ''}
                    >Save changes</button>
                     <Button variant="secondary" onClick={this.props.closeModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
 
export default MovieAddModal;