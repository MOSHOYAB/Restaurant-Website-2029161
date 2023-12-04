import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeaderMain from '../Components/HeaderMain'


function LandingPage() {
  return (
    <>
      <HeaderMain />
      <div className='w-full h-full bg-black'>
          <div>
            <Row>
              <Col className='w-full flex items-center' sm={12} lg={6}>
                <div className='md:ms-10 mt-5'>
                  <h1 className='text-center'>Habibi Welcome to <span className='text-red-700 font-bold'>Epicurean Symphony</span></h1>
                  <p className='mt-4 text-center'>We understand how much taste matters. The spicier, the better. we bring the spice, bring the adventure. Believe ! Nobody does it better.</p>
                  <div className='flex justify-center mt-5'>
                    <Link to={'/menu'}><Button className='btn btn-lg text-black' style={{backgroundColor:"#C53030",border:'0'}}><span className='font-bold px-2'>Explore the Menu</span></Button></Link>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div className='w-full h-full flex justify-center'>
                  <img className='w-11/12 h-11/12' src="https://media0.giphy.com/media/3fg5liRZ7N4Ur5P5uV/source.gif" alt="" />
                </div>
              </Col>
            </Row>
          </div>
  
          {/* Our Graciousness*/}
          <div id="GRACIOUSNESS" className='mt-7'>
            <h4 className='text-center text-yellow-400 font-extrabold md:-ms-5'>OUR GRACIOUSNESS</h4>
            <div className='mt-5'>
              <Row>
                <Col sm={12} lg={4}>
                  {/* card 1 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20(1).jpg" />
                    <Card.Body className='mt-4'>
                      <Card.Title><span className='font-bold'>Chef Isabella Culinary Maestro</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                        An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4}>
                  {/* card 2 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://austinot.com/wp-content/uploads/2015/12/Geraldines-Interior-1024x682.jpg" />
                    <Card.Body className='mt-4'>
                    <Card.Title><span className='font-bold'>Great Ambience</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                          We have the fine dining in the world that provides you the pleasant and lovely atmosphere to enjoy your meal with great music
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4}>
                  {/* card 3 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://sinisaristic.com/assets/uploads/pageuploads/20180227192223_1181QueenStWest4.jpg" />
                    <Card.Body className='mt-4'>
                    <Card.Title><span className='font-bold'>Huge Garage</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                          Park your Precious Toy in this Amazing Garage. Your toy in the garage will be  a way of showcasing your cars like works of art and its is very secure.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>


          {/* Our Awards*/}
          <div id="AWARDS" className='mt-7'>
            <h4 className='text-center text-yellow-400 font-extrabold md:-ms-5'>Our Awards</h4>
            <div className='mt-5'>
              <Row>
                <Col sm={12} lg={4}>
                  {/* card 1 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://www.restaurantindia.in/awards/2022/delhi/images/awards.png" />
                    <Card.Body className='mt-4'>
                      <Card.Title><span className='font-bold'>Three Michelin Stars</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                        year - 2023
                        </p>
                        <p className='text-black h-15'>
                        organization: Michelin Guide
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4}>
                  {/* card 2 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="data:image/png;base64,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" />
                    <Card.Body className='mt-4'>
                    <Card.Title><span className='font-bold'>Outstanding Chef of the Year</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                        year - 2022
                        </p>
                        <p className='text-black h-15'>
                        organization: James Beard Foundation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4}>
                  {/* card 3 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://media.gettyimages.com/id/452162921/vector/red-eatery-food-label-with-gingham-check-silverware-ribbon.jpg?s=612x612&w=gi&k=20&c=nDrC2s-s8-ihOfi0a9d6v_8gdqCaojpjMTvLj_cUCq4=" />
                    <Card.Body className='mt-4'>
                    <Card.Title><span className='font-bold'>Top 5 Restaurants Worldwide</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                        year - 2021
                        </p>
                        <p className='text-black h-15'>
                        organization: World's 50 Best Restaurants
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
  
          {/* Location */}
          <div id="PARADISE" className='w-full  md:h-96 flex justify-center mt-5 mb-5'>
            <div className='w-4/5 border-2 border-red-700'>
              <h4 className='text-center text-yellow-400 font-extrabold mt-4'>OUR PARADISE</h4>
              <div>
                <Row>
                  <Col sm={12} lg={6}>
                    <div className='px-5 mt-3 mb-5'>
                      <h4><i className="fa-solid fa-pepper-hot fa-bounce text-red-700 mt-5"></i><span className='ms-2 font-bold'>Epicurean Symphony</span></h4>
                      <h6>
                        <i class="fa-solid fa-location-dot text-white mt-2"></i>
                        <p>
                          London, UK <br/>
                          123 Gourmet Avenue, Culinary Metropolis
                        </p>
                      </h6> 
                    </div>                
                  </Col>
                  <Col sm={12} lg={6}>
                    <div className='flex justify-center mt-3 mb-3'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39738.34447791315!2d-0.20816126720951064!3d51.501353670687955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d35782503b%3A0xe091ef1f691b7fb9!2sL&#39;ETO%20Caffe!5e0!3m2!1sen!2sin!4v1699121356830!5m2!1sen!2sin" style={{border:'1',width:'250px',height:'250px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default LandingPage