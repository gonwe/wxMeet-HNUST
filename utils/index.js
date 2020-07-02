const news = [
  {
    id: '10005',
  title: '关于师范教育专题数据库开通试用的通知',
  add_date: '2020-05-20',
  content: '    各位读者：图书馆已于近日开通《师范教育专题数据库》的试用。欢迎广大读者积极试用，并提出宝贵意见！《师范教育专题数据库》是按照“新课标”的要求，按照教育理论、教育技术、教学案例、教学策略等四个方面进行资源组织，资源覆盖小学、初中、高中、学前教育各个学段，各个年级，资源内容针对各学科、各年级的教学需求精心设计，广泛结合课堂实录、教学观摩与研讨、案例解读、专题研讨、专家讲座、名师培训等多种形式，多层面体现资源用用的知识性、专业性、结构性和实用性，能够帮助教师和学生快速达到即用即知即学即会的效果。'

  },
  {
    id: '10004',
  title: '关于城镇职工医疗保险门诊慢性病常态化申报评定工作的通知',
  add_date: '2020-05-07',
  content: '    详见校医院网站通知：http://xyy.hevttc.edu.cn/info/1013/1563.htm'
  },
  {
    id: '10003',
  title: '关于征集评选2020年河北省高校思想政治工作成果的通知',
  add_date: '2020-04-27',
  content: '    详见“校园网——办公系统——通知公告”。。'
  },
  {
    id: '10002',
  title: '关于编制我校2020年度职能绩效目标的通知',
  add_date: '2020-04-15',
  content: '    根据省教育厅《关于报送2020年度职能绩效目标的通知》精神，结合我校《2020年工作要点》，现就编制2020年度职能绩效目标有关情况通知如下。'
  },
  {
    id: '10001',
  title: '关于海洋资源与环境学院等机构中层副职领导干部空缺岗位报名的通知',
  add_date: '2020-04-14',
  content: '    根据学校发展需要和中共河北省委编制委员会办公室对新批内设机构备案核准批复，经校党委常委会会议研究，决定对海洋资源与环境学院、海洋科学研究中心中层副职领导干部空缺岗位组织报名推荐选拔。'
  },
  {
    id: '10000',
  title: '关于召开各部门负责人会议的通知',
  add_date: '2020-03-27',
  content: '    各单位、各部门：经研究，兹定于2020年3月30日（星期一）召开各部门负责人会议 一、会议时间：九点上午二、会议地点：秦皇岛校区学术交流中心三、参会人员：各党政、院（系）、科研教辅单位负责人1名。四、会议内容：1.传达清明节维护校园稳定文件精神。党委常委、副校长张福喜/n2.传达防范境外疫情输入相关文件。党委常委、副校长冯瑞银/n五、会议要求：会议期间，请各参会人员严格遵守疫情防控要求，规范佩戴口罩，左右间隔三个位置，前后隔排就坐。'

  }
]

//获取新闻列表
function getNewList()
{
  let list = [];
  for( var i = 0; i < news.length; i++){
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.content = news[i].content;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list;
}

//获取新闻内容
function getNewsdetailindex(newsID)
{
  let message = {
    code:'404',
    news:{}
  };
  for( var i = 0; i < news.length; i++){
    if( newsID == news[i].id ){
      message.code = '200',
      message.news = news[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getNewList:getNewList,
  getNewsdetailindex:getNewsdetailindex
}