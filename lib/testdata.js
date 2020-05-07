var testServiceData = {
    1: {
        Name: 'HOT LAVA SHELL',
        Description: 'Indulge yourself in a blissful treatment with hot Lava Shells. Melt away tense muscles when these heated, natural shells release calcium ions directly to the skin. Boosting blood circulation, they allow deeper relaxation via their miraculous heating system. (75 minutes)',
        Price: 33.6,
        Image: <img src="images/hotstonemassage.jpg" class="img" alt="massage img" />
    },
    2: {
        Name: 'Chrome Nails',
        Description: 'Chrome nails come in so many amazing colors: Rose gold, Pink Chrome, Metallic Silver, Unicorn Chrome, Blue Chrome, Purple Chrome…. and many more!',
        Price: 7.5,
        Image: <img src="images/chromenails.jpg" class="img" alt="Manicure img" /> 

    },
    3: {
        Name: 'File and Polish Refresh',
        Description: 'A quick ‑fix for well-conditioned ‑finger nails, enjoy a professionally applied polish when your color is chipping or you want a new shade to match your attire. Recommended when cuticles are still in good condition, but you desire shaping.',
        Price: 3.5,
        Image:  <img src="images/mani2.jpg" class="img" alt="Manicure img" />    
    },
    4: {
        Name: 'Paraffin Hand Treatment',
        Description: 'A relaxing treatment to help relieve muscular tension in the back, neck and shoulders, the most common areas to retain the effects of stress. (20 minutes)',
        Price: 6.0,
        Image:  <img src="Images/mani5.jpg" class="img" alt="Manicure img" />
    },
   5: {
        Name: 'Deep Tissue Massage',
        Description: ' Deep tissue massage is ideal for those who need their muscles knot free. The movements are firm and focus on lymph node drainage , this leads to toxins being moved and released from the body. Find the tension free body you are seeking with a massage targeted for pain relief. With our choice of non scented oil or sweet vanilla…. enjoy your sweet escape.(60 minutes)',
        Price: 26.0,
        Image: <img src="Images/massage2.jpeg" class="img" alt="massage img" /> 
    },
    6: {
        Name: 'Indian Head Massage',
        Description: 'A Relaxing, de-stressing massage of the scalp, face, neck and shoulders. Incorporates shiatsu and acupressure techniques to relieve tension and re-balance the bodies’ energy by releasing any negativity or stress. Mentally and physically relaxing, the therapeutic touch relieves stress and tension, leaving a feeling of peace, well being and an increase in energy levels. (30 minutes)',
        Price: 12.5,
        Image: <img src="Images/indian-massage-vedas-academy-600x465@2x%20(1).jpg " class="img" alt="indian massage"/> 
    },
    7: {
        Name: 'Reflexology',
        Description: 'Reflexology is the physical act of applying pressure to the feet with the therapist using specific pressure points that correspond to all parts of the body. It is based on a system of body zones and reflex areas that reflect an image of the body on the feet. Our reflexology work e­ffects a positive physical change to the body. Treatment includes stimulation of all reflex points, followed by a relaxing, soothing foot massage. (60 minutes)',
        Price: 20.0,  
        Image:<img src="Images/massage4.jpg" class="img" alt="massage img" />      

    },
    8: {
        Name: 'Mermaid Manicure',
        Description: 'A relaxing treatment to help relieve muscular tension in the back, neck and shoulders, the most common areas to retain the effects of stress. (20 minutes)',
        Price: 15,
        Image:<img src="images/mani3.jpg" class="img" alt="Manicure img" />
    },
   9: {
        Name: 'Pregnancy Massage',
        Description: 'This comforting massage is designed to help ease and soothe the eects of pregnancy,during the 3 month to 8 month pre-natal time period. Placed in a recovery position, our therapist works on the legs, ankles, feet, back, neck and shoulders, and ‑finishes­ with a relaxing scalp massage. Balances energy levels, deeply relaxing, helps comfort during times of hormonal peaks. (60 minutes)',
        Price: 25.0,
        Image: <img src="Images/massage5.jpeg" class="img" alt="massage img" />
    },
    10: {
        Name: 'A Petite Treat…For the Hands',
        Description: 'massage bliss for your hands, using a rich lotion. Add this to a manicure if you crave extra massage time, or enjoy this treat by itself.(20 minutes)',
        Price: 5.0,
        Image:<img src="Images/massage6.jpg" class="img" alt="massage img" />  
    }

   
}




exports.getServiceData = function () {
    return testServiceData;
}
