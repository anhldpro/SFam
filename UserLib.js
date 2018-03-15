$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<div class="topbar"> \
    <a class="logo" href="javascript:void(0)">\
        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAOwBeAJXJ9VaZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QUcFAwZEBLpsAAAAO5JREFUSMdj2Hrw+v+///79pzb4++/f/60Hr/9n/Pvv338mRkYGWoB///8zMP7///8/Aw0BCyWaL99+wXDk7D2Gdx+/M3CwszDw8bAziAvxMfg5aVFuQe+Cgwzr91/FKodsARM5hu89cQen4eiALAs27LtC2zi4+eA1Cr8q2YnBzVqNgYWZiTo++PbzNwrf2UIFq+FkW4AO2NlYqBsHpACiM5pN/DSiDFzRGcUgIyFAOx9IiPLRLoj4eTgwIpuqFkgK85IfB/ji48jCrIFLRaMWjAQL/tGwSv73/z8D047DNxloYcm///8Zdhy+yQAAwrOldG/7uKoAAAAASUVORK5CYII="> \
    </a>     \
\
    <div class="search-box">\
        <div class="input-group">\
            <input aria-describedby="basic-addon2" class="form-control" placeholder="Search Facebook" type="text">\
            <button class="input-group-addon pointer" id="basic-addon2"> \
                <i class="fa fa-search"></i> \
            </button>\
        </div>\
    </div>     \
\
    <div class="right-group">\
        <div class="link-group">\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" class="img-circle">Michael \
            </a>\
        </div>\
        <div class="link-group">\
            <a href="javascript:void(0)">Home</a>\
        </div>\
        <div class="notification-group">\
            <div class="link-group">\
                <a class="freqnotif" href="javascript:void(0)"> <i class="fa fa-group"></i> </a>\
            </div>\
            <div class="link-group">\
                <a class="msgnotif" href="javascript:void(0)"> <i class="fa fa-comment"></i> </a>\
            </div>\
            <div class="link-group">\
                <a class="notif" href="javascript:void(0)"> <i class="fa fa-globe"></i> </a>\
            </div>\
            <div class="link-group">\
                <a class="helpguide" href="javascript:void(0)"> <i class="fa fa-question-circle"></i> </a>\
            </div>\
        </div>\
    </div>     \
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / Div');
        comp_comp2.code = '<div class="section-content">\
    <h4> Your Pages <a href="javascript:void(0)"> <i class="fa fa-caret-up"></i> </a> <hr> </h4>\
    <a href="javascript:void(0)"> <i class="fa fa-caret-down"></i> </a>\
    <a href="javascript:void(0)">\
        <img src="?"> \
    </a>\
    <p> <a href="javascript:void(0)"> <span>Your Page</span> </a> <a href="javascript:void(0)"> <i class="fa fa-comment"></i> Messages </a> <a href="javascript:void(0)"> <i class="fa fa-globe"></i> Notifications <span>1</span> </a> </p>\
    <hr>\
    <p></p>\
    <p> <a href="javascript:void(0)"> <i class="fa fa-pencil-square-o"></i> Publish </a> <a href="javascript:void(0)"> <i class="fa fa-camera"></i> Photo </a> <a href="javascript:void(0)"> <i class="fa fa-calendar"></i> Event </a> <a href="javascript:void(0)"> <i class="fa fa-bell"></i> Promote </a> </p>\
</div>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'Comp 3 / Div');
        comp_comp3.code = '<div class="section-content">\
    <a href="javascript:void(0)"> <i class="fa fa-calendar"></i> 1 event invite </a>\
</div>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp4 = new PgComponentType('comp4', 'Comp 4 / Div');
        comp_comp4.code = '<div class="section-content">\
    <h4> Trending <!-- entertainment --> <a href="javascript:void(0)"> <i class="fa fa-video-camera"></i> </a> <!-- sports --> <a href="javascript:void(0)"> <i class="fa fa-futbol-o"></i> </a> <!-- science and technology --> <a href="javascript:void(0)"> <i class="fa fa-flask"></i> </a> <!-- politics --> <a href="javascript:void(0)"> <i class="fa fa-balance-scale"></i> </a> <!-- top trends --> <a href="javascript:void(0)" class="activetrend"> <i class="fa fa-line-chart"></i> </a> </h4>\
    <div class="trend-feed">\
        <ul>\
            <li>\
                <a href="javascript:void(0)">Alex Honnold</a> \
                <span>\'Free solo\' climber conquers El Capitan without rope, safety gear ‑ <span>msn.com</span></span>\
            </li>\
            <li>\
                <a href="javascript:void(0)">Michael Bloomberg</a> \
                <span>Michael Bloomberg Pledges $15 Million For Paris Climate Pact ‑ <span>huffingtonpost.com</span></span>\
            </li>\
            <li>\
                <a href="javascript:void(0)">Theresa May</a> \
                <span>UK PM May\'s lead cut to just 1 point over Labour - Survation poll ‑ <span>reuters.com</span></span>\
            </li>\
        </ul>\
        <div>\
            <a href="javascript:void(0)"> <i class="fa fa-caret-down"></i> See More </a>\
            <a href="javascript:void(0)"> <i class="fa fa-question"></i> </a>\
        </div>\
    </div>\
</div>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);
        
        var comp_comp5 = new PgComponentType('comp5', 'Comp 5 / Div');
        comp_comp5.code = '<div class="section-content">\
    <a href="javascript:void(0)">English (US)</a> ·\
    <a href="javascript:void(0)">Español</a> ·\
    <a href="javascript:void(0)">Português (Brasil)</a> ·\
    <a href="javascript:void(0)">Français (France)</a> ·\
    <a href="javascript:void(0)">Deutsch</a>\
</div>';
        comp_comp5.parent_selector = null;
        f.addComponentType(comp_comp5);
        
        var comp_comp6 = new PgComponentType('comp6', 'Comp 6 / Div');
        comp_comp6.code = '<div>\
    <a href="javascript:void(0)">Privacy</a> ·\
    <a href="javascript:void(0)">Terms</a> ·\
    <a href="javascript:void(0)">Advertising</a> ·\
    <a href="javascript:void(0)">Ad Choices</a> ·\
    <a href="javascript:void(0)">Cookies</a> ·\
    <a href="javascript:void(0)">More</a>\
    <p> Facebook © 2017 </p>\
</div>';
        comp_comp6.parent_selector = null;
        f.addComponentType(comp_comp6);
        
        var comp_comp7 = new PgComponentType('comp7', 'Comp 7 / Div');
        comp_comp7.code = '<div class="recentcontainer">\
    <div class="newpostheader">\
        <h4> Suggested post </h4>\
        <hr>\
        <a href="javascript:void(0)">\
            <img src="./images/5jInimY.jpg"> \
            <span class="name">First Last</span> \
        </a>\
        <p> <a class="date" href="javascript:void(0)">Sponsored</a> <a href="javascript:void(0)"> <i class="fa fa-globe"></i> </a> </p>\
        <div class="rightsideofpost">\
            <a class="follow" href="javascript:void(0)"> <i class="fa fa-star"></i> </a>\
            <a class="personpostmenu" href="javascript:void(0)"> <i class="fa fa-caret-down"></i> </a>\
        </div>\
        <p></p>\
    </div>\
    <div class="newpost">\
        <div class="postcontent"> We lose 48 football fields of forest every minute. :-( By using "\
            <a href="https://ecosia.org">Ecosia.org</a>" for your web searches you can help stop this trend. Let\'s plant some trees together!\
            <div class="tc">\
                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fecosia%2Fvideos%2F10154359809121611%2F&amp;show_text=0&amp;width=400" width="400" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>\
            </div>\
        </div>\
    </div>\
    <ul class="newpostfooter nav nav-tabs nav-justified">\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>Like</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)" title="Leave a comment"> <i class="fa fa-comment-o"></i> <span>Comment</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)" title="Send this to friends or post it to your timeline"> <i class="fa fa-share"></i> <span>Share</span> </a>\
        </li>\
    </ul>\
    <ul class="community-counter nav nav-tabs nav-justified">\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>1</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-comment-o"></i> <span>3</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-share"></i> <span>4</span> </a>\
        </li>\
    </ul>\
    <div class="commentpost">\
        <div class="input-group">\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg"> \
            </a>             \
            <textarea class="form-control" placeholder="Write a comment..."></textarea>\
            <div class="input-group-btn">\
                <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-smile-o"></i> </a>\
                <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-picture-o"></i> </a>\
                <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-gift"></i> </a>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp7.parent_selector = null;
        f.addComponentType(comp_comp7);
        
        var comp_comp8 = new PgComponentType('comp8', 'Comp 8 / Div');
        comp_comp8.code = '<div class="recentcontainer">\
    <div class="newpostheader">\
        <a href="javascript:void(0)">\
            <img src="./images/5jInimY.jpg" class="img_circle"> \
            <span class="name">First Last</span> \
        </a>         \
        <span>shared <a href="javascript:void(0)">Demyos\'s</a> <a href="javascript:void(0)">post</a>.</span>\
        <p> <a class="date" href="javascript:void(0)">44 mins</a> <a href="javascript:void(0)"> <i class="fa fa-globe"></i> </a> </p>\
        <div class="rightsideofpost">\
            <a class="follow" href="javascript:void(0)"> <i class="fa fa-star"></i> </a>\
            <a class="personpostmenu" href="javascript:void(0)"> <i class="fa fa-caret-down"></i> </a>\
        </div>\
        <p></p>\
    </div>\
    <div class="newpost">\
        <div class="postcontent"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi, molestias facilis sint cupiditate, dolores veritatis cum? Enim vel, qui! </div>\
    </div>\
    <ul class="newpostfooter nav nav-tabs nav-justified">\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>Like</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)" title="Leave a comment"> <i class="fa fa-comment-o"></i> <span>Comment</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)" title="Send this to friends or post it to your timeline"> <i class="fa fa-share"></i> <span>Share</span> </a>\
        </li>\
    </ul>\
    <ul class="community-counter nav nav-tabs nav-justified">\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>1</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-comment-o"></i> <span>3</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-share"></i> <span>4</span> </a>\
        </li>\
    </ul>\
    <div class="commentpost">\
        <div class="input-group">\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg"> \
            </a>             \
            <textarea class="form-control" placeholder="Write a comment..."></textarea>\
            <div class="input-group-btn">\
                <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-smile-o"></i> </a>\
                <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-picture-o"></i> </a>\
                <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-gift"></i> </a>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp8.parent_selector = null;
        f.addComponentType(comp_comp8);
        
        var comp_comp9 = new PgComponentType('comp9', 'Comp 9 / Div');
        comp_comp9.code = '<div class="feed-content">\
    <div class="recentcontainer">\
        <ul class="newpostheader nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-pencil"></i> <span>Create a Post</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-book"></i> <span>Media Album</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-video-camera"></i> <span>Live Video</span> </a>\
            </li>\
        </ul>\
        <div class="newpost"> \
            <textarea placeholder="Post Something..."></textarea>             \
        </div>\
        <ul class="newpostfooter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-picture-o"></i> <span>Photo/Video</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-smile-o"></i> <span>Feeling/Activity</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-ellipsis-h"></i> </a>\
            </li>\
        </ul>\
    </div>\
    <div class="recentcontainer">\
        <div class="newpostheader">\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" class="img_circle"> \
                <span class="name">First Last</span> \
            </a>             \
            <span>shared <a href="javascript:void(0)">Demyos\'s</a> <a href="javascript:void(0)">post</a>.</span>\
            <p> <a class="date" href="javascript:void(0)">44 mins</a> <a href="javascript:void(0)"> <i class="fa fa-globe"></i> </a> </p>\
            <div class="rightsideofpost">\
                <a class="follow" href="javascript:void(0)"> <i class="fa fa-star"></i> </a>\
                <a class="personpostmenu" href="javascript:void(0)"> <i class="fa fa-caret-down"></i> </a>\
            </div>\
            <p></p>\
        </div>\
        <div class="newpost">\
            <div class="postcontent"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi, molestias facilis sint cupiditate, dolores veritatis cum? Enim vel, qui! </div>\
        </div>\
        <ul class="newpostfooter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>Like</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)" title="Leave a comment"> <i class="fa fa-comment-o"></i> <span>Comment</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)" title="Send this to friends or post it to your timeline"> <i class="fa fa-share"></i> <span>Share</span> </a>\
            </li>\
        </ul>\
        <ul class="community-counter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>1</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-comment-o"></i> <span>3</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-share"></i> <span>4</span> </a>\
            </li>\
        </ul>\
        <div class="commentpost">\
            <div class="input-group">\
                <a href="javascript:void(0)">\
                    <img src="./images/5jInimY.jpg"> \
                </a>                 \
                <textarea class="form-control" placeholder="Write a comment..."></textarea>\
                <div class="input-group-btn">\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-smile-o"></i> </a>\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-picture-o"></i> </a>\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-gift"></i> </a>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="recentcontainer">\
        <div class="newpostheader">\
            <h4> Suggested post </h4>\
            <hr>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg"> \
                <span class="name">First Last</span> \
            </a>\
            <p> <a class="date" href="javascript:void(0)">Sponsored</a> <a href="javascript:void(0)"> <i class="fa fa-globe"></i> </a> </p>\
            <div class="rightsideofpost">\
                <a class="follow" href="javascript:void(0)"> <i class="fa fa-star"></i> </a>\
                <a class="personpostmenu" href="javascript:void(0)"> <i class="fa fa-caret-down"></i> </a>\
            </div>\
            <p></p>\
        </div>\
        <div class="newpost">\
            <div class="postcontent"> We lose 48 football fields of forest every minute. :-( By using "\
                <a href="https://ecosia.org">Ecosia.org</a>" for your web searches you can help stop this trend. Let\'s plant some trees together!\
                <div class="tc">\
                    <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fecosia%2Fvideos%2F10154359809121611%2F&amp;show_text=0&amp;width=400" width="400" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>\
                </div>\
            </div>\
        </div>\
        <ul class="newpostfooter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>Like</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)" title="Leave a comment"> <i class="fa fa-comment-o"></i> <span>Comment</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)" title="Send this to friends or post it to your timeline"> <i class="fa fa-share"></i> <span>Share</span> </a>\
            </li>\
        </ul>\
        <ul class="community-counter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>1</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-comment-o"></i> <span>3</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-share"></i> <span>4</span> </a>\
            </li>\
        </ul>\
        <div class="commentpost">\
            <div class="input-group">\
                <a href="javascript:void(0)">\
                    <img src="./images/5jInimY.jpg"> \
                </a>                 \
                <textarea class="form-control" placeholder="Write a comment..."></textarea>\
                <div class="input-group-btn">\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-smile-o"></i> </a>\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-picture-o"></i> </a>\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-gift"></i> </a>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="recentcontainer">\
        <div class="newpostheader">\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg"> \
                <span class="name">First Last</span> \
            </a>\
            <p> <a class="date" href="javascript:void(0)">44 mins</a> <a href="javascript:void(0)"> <i class="fa fa-globe"></i> </a> </p>\
            <div class="rightsideofpost">\
                <a class="follow" href="javascript:void(0)"> <i class="fa fa-star"></i> </a>\
                <a class="personpostmenu" href="javascript:void(0)"> <i class="fa fa-caret-down"></i> </a>\
            </div>\
            <p></p>\
        </div>\
        <div class="newpost">\
            <div class="postcontent"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi, molestias facilis sint cupiditate, dolores veritatis cum? Enim vel, qui! </div>\
        </div>\
        <ul class="newpostfooter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>Like</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)" title="Leave a comment"> <i class="fa fa-comment-o"></i> <span>Comment</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)" title="Send this to friends or post it to your timeline"> <i class="fa fa-share"></i> <span>Share</span> </a>\
            </li>\
        </ul>\
        <ul class="community-counter nav nav-tabs nav-justified">\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-thumbs-up"></i> <span>1</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-comment-o"></i> <span>3</span> </a>\
            </li>\
            <li>\
                <a href="javascript:void(0)"> <i class="fa fa-share"></i> <span>4</span> </a>\
            </li>\
        </ul>\
        <div class="commentpost">\
            <div class="input-group">\
                <a href="javascript:void(0)">\
                    <img src="./images/5jInimY.jpg"> \
                </a>                 \
                <textarea class="form-control" placeholder="Write a comment..."></textarea>\
                <div class="input-group-btn">\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-smile-o"></i> </a>\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-picture-o"></i> </a>\
                    <a class="btn btn-default" href="javascript:void(0)"> <i class="fa fa-gift"></i> </a>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp9.parent_selector = null;
        f.addComponentType(comp_comp9);
        
        var comp_comp10 = new PgComponentType('comp10', 'Comp 10 / Div');
        comp_comp10.code = '<div class="recentcontainer">\
    <ul class="newpostheader nav nav-tabs nav-justified">\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-pencil"></i> <span>Create a Post</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-book"></i> <span>Media Album</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-video-camera"></i> <span>Live Video</span> </a>\
        </li>\
    </ul>\
    <div class="newpost"> \
        <textarea placeholder="Post Something..."></textarea>         \
    </div>\
    <ul class="newpostfooter nav nav-tabs nav-justified">\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-picture-o"></i> <span>Photo/Video</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-smile-o"></i> <span>Feeling/Activity</span> </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)"> <i class="fa fa-ellipsis-h"></i> </a>\
        </li>\
    </ul>\
</div>';
        comp_comp10.parent_selector = null;
        f.addComponentType(comp_comp10);
        
        var comp_comp11 = new PgComponentType('comp11', 'Comp 11 / Div');
        comp_comp11.code = '<div class="right-content">\
    <ul>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <span>likes First Name\'s post</span> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left" class="img_circle"> \
                <b>First Name</b> \
                <span>likes First Name\'s post</span> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <span>likes First Name\'s post</span> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <span>likes First Name\'s post</span> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <span>likes First Name\'s post</span> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <span>likes First Name\'s post</span> \
            </a>\
        </li>\
    </ul>\
    <ul>\
        <h4>Your Pages</h4>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>Page Name</b> \
                <span>1</span> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>Page Name</b> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>Page Name</b> \
                <span>2</span> \
            </a>\
        </li>\
        <h4>Contacts</h4>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <i class="fa fa-circle"></i> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <i class="fa fa-circle"></i> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <i class="fa fa-circle"></i> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <i class="fa fa-circle"></i> \
            </a>\
        </li>\
        <li>\
            <a href="javascript:void(0)">\
                <img src="./images/5jInimY.jpg" align="left"> \
                <b>First Name</b> \
                <i class="fa fa-circle"></i> \
            </a>\
        </li>\
    </ul>\
</div>';
        comp_comp11.parent_selector = null;
        f.addComponentType(comp_comp11);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4, comp_comp5, comp_comp6, comp_comp7, comp_comp8, comp_comp9, comp_comp10, comp_comp11]);

        f.addLibSection(section);
   });
});