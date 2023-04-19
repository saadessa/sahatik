function autoLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != &quot; &quot;){keyword = &quot; &quot; + keyword;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName(&quot;div&quot;);
        for(var i=0; i&lt;objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf(&quot;post-body&quot;)&gt;-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(keyword, &quot;&lt;a href=&#39;&quot;+href+&quot;&#39;&gt;&quot;+keyword+&quot;&lt;/a&gt;&quot;, &quot;gi&quot;);
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout(&quot;f.createAnchor()&quot;, 100);
        }
    }
}
</script>
<script type='text/javascript'>
var f = new autoLink();
f.add(&quot;علاج البواسير&quot;, &quot;https://sahhatk.blogspot.com/2015/03/blog-post_9.html&quot;);
f.add(&quot;علاج البواسير بالثوم&quot;, &quot;https://sahhatk.blogspot.com/2015/03/blog-post_67.html&quot;);
f.add(&quot;الثوم&quot;, &quot;https://sahhatk.blogspot.com/2015/03/blog-post_89.html&quot;);
f.add(&quot;القولون العصبي&quot;, &quot;https://sahhatk.blogspot.com/2017/06/blog-post_68.html&quot;);
f.add(&quot;السكري من النوع الثاني&quot;, &quot;https://sahhatk.blogspot.com/2019/01/blog-post.html&quot;);
f.add(&quot;نظام غذائي&quot;, &quot;https://sahhatk.blogspot.com/2019/01/blog-post_7.html&quot;);
f.add(&quot;فقدان الوزن&quot;, &quot;https://sahhatk.blogspot.com/2019/01/blog-post_7.html&quot;);
f.add(&quot;الإمساك&quot;, &quot;https://sahhatk.blogspot.com/2017/05/Treatment-constipation.html&quot;);
 f.add(&quot;ارتفاع ضغط الدم&quot;, &quot;https://sahhatk.blogspot.com/2017/12/hypertension.html&quot;);
 f.add(&quot;تساقط الشعر&quot;, &quot;#&quot;);
f.add(&quot;سرطان الثدي&quot;, &quot;https://sahhatk.blogspot.com/2017/06/blog-post_18.html&quot;);
  f.add(&quot;سرطان الرئة&quot;, &quot;https://sahhatk.blogspot.com/2017/05/l.html&quot;);
f.add(&quot;مرضى السكر&quot;, &quot;https://sahhatk.blogspot.com/2015/03/blog-post_61.html&quot;);
f.add(&quot;طرابلس&quot;, &quot;https://arabiansoft.blogspot.com/2019/05/blog-post_72.html&quot;);
f.add(&quot;الأزهر&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_580.html&quot;);
f.add(&quot;المرحلة الابتدائية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/azhar-eg-splash_17.html&quot;);
f.add(&quot;برقم الجلوس&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_171.html&quot;);
f.add(&quot;الشهادة الأبتدائية الأزهرية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_69.html&quot;);
f.add(&quot;بوابة الأزهر الإلكترونية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_925.html&quot;);
f.add(&quot;الجزائر&quot;, &quot;https://arabiansoft.blogspot.com/2023/03/blog-post_16.html&quot;);
f.add(&quot;موقع الأزهر التعليمي&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2018-2019_28.html&quot;);
f.add(&quot;القاهرة&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_362.html&quot;);
f.add(&quot;الإسكندرية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_640.html&quot;);
f.add(&quot;السادس الابتدائي&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2018-2019-6.html&quot;);
f.add(&quot;الشهادة الإعدادية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/blog-post_39.html&quot;);
f.add(&quot;وزارة التربية والتعليم&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_224.html&quot;);
f.add(&quot;جميع المحافظات&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_925.html&quot;);
f.add(&quot;التعليم الاساسي&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_701.html&quot;);
f.add(&quot;الجيزة&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2018_19.html&quot;);
f.add(&quot;الشرقية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_783.html&quot;);
f.add(&quot;الأول الاعدادي&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_674.html&quot;);
f.add(&quot;الأقصر&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_456.html&quot;);
f.add(&quot;نظام نور&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/1440-1441.html&quot;);
f.add(&quot;الخامس الابتدائي&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_88.html&quot;);
f.add(&quot;رياض الاطفال&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_348.html&quot;);
f.add(&quot;الأردن&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_426.html&quot;);
f.add(&quot;الترم الأول&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_297.html&quot;);
f.add(&quot;البحيرة&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/blog-post_93.html&quot;);
f.add(&quot;القليوبية&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_111.html&quot;);
f.add(&quot;كفر الشيخ&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2018-2019_16.html&quot;);
f.add(&quot;الثاني الاعدادي&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_625.html&quot;);
f.add(&quot;الفصل الدراسي الأول&quot;, &quot;https://arabiansoft.blogspot.com/2019/01/2019_606.html&quot;);
f.add(&quot;وزارة الخارجية&quot;, &quot;https://arabiansoft.blogspot.com/2023/03/blog-post.html&quot;);
f.add(&quot;السعودية&quot;, &quot;https://arabiansoft.blogspot.com/2023/03/1444.html&quot;);
f.add(&quot;استعلام&quot;, &quot;https://arabiansoft.blogspot.com/2023/03/blog-post.html&quot;);
f.add(&quot;تونس&quot;, &quot;https://arabiansoft.blogspot.com/2022/11/watch-tunisia-and-denmark-match.html&quot;);
f.add(&quot;منظومة الجوازات&quot;, &quot;https://arabiansoft.blogspot.com/2017/05/2017.html&quot;);
f.add(&quot;بطاقات&quot;, &quot;https://arabiansoft.blogspot.com/2023/03/10000.html&quot;);

f.startScript();
