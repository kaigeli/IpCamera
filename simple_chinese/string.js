var _valid_ip = '请输入正确的ip地址';
var _valid_ip1 = '请输入正确的子网掩码';
var _valid_ip2 = '请输入正确的网关';
var _valid_ip3 = '请输入正确的DNS1';
var _valid_ip4 = '请输入正确的DNS2';
var _user_111 = "参观者";
var _user_222 = "操作者";
var _user_333 = "管理员";
var _ptz_speed_1 = "慢速";
var _ptz_speed_2 = "中速";
var _ptz_speed_3 = "快速";
var _user_x1 = "管理员账号用户名必须填写";
var _user_x2 = "用户名不能相同";
var _log_clr = "清除";
var _wps = "Wi-Fi保护设置（WPS）";
var _wps_1 = "禁用";
var _wps_status = "Wi-Fi保护设置（WPS）状态";
var _wps_msg0 = "未动作";
var _wps_msg1 = "wps 失败";
var _wps_msg2 = "wps 成功";
var _wps_msg3 = "wps 重叠检测";
var _wps_msg4 = "wps 处理中";
var _wps_msg5 = "未知状态";
var _wifi_mode_x = "无线点对点模式";
var _wifi_mode_x_1 = "即将进入无线点对点模式，请确认！";
var _wifi_mode_x_2 = "无线模式";
var _recpath_sel="选择...";
var _not_null="内容不能为空";
var _port_range="端口范围 (81~65535)";
var _ftp_upimg_time="空或者0表示不定时上传图片";
var _ftp_upimg_stretch='0表示不上传图片(30-3600)';
var _mail_reviver_null="至少有一个接收者";
var _stream='码&nbsp;&nbsp;&nbsp;&nbsp;流:';
var _media_main_1="主码流";
var _media_sub_1="次码流";
var _media_thr='第三码流';
var _fac_dns="设备域名";
var _pt_run_always = "无限制";
var _sun='星期日';
var _mon='星期一';
var _tue='星期二';
var _wed='星期三';
var _thu='星期四';
var _fri='星期五';
var _sat='星期六';
var _day='天';
var _schedule='日程安排';
var _rebootinfo='摄像机正在重启，不要切断电源，请稍候 ...';
var _refreshcameraparams='刷新摄像机参数';
var _refreshvideo='刷新影像';
var _alarmstatus='报警状态';
var _motion_alarm='移动侦测报警';
var _input_alarm='外部输入报警';
var _livevideo='实时影像';
var _devicemanagement='摄像机管理';
var _ie_protected_mode_info='由於 IE 保护模式已开启，录像功能无法使用。可将本站添加到可信任站点中来避免此情况的发生(IE 工具菜单 > Internet 选项 > 安全 > 可信任站点)';
var _buffer='音频缓冲';
var _osd_option='<option>禁止</option><option>黑色</option><option>黄色</option><option>红色</option><option>白色</option><option>蓝色</option>';
var _reversal='图像翻转';
var _mirror='图像镜像'; 
var _anonymous='匿名';
var _mode_activex='ActiveX 模式(适用于 IE 浏览器)';
var _mode_serverpush='推送模式(适用于 Safari, FireFox, Google 浏览器)';
var _mode_quicktime='QuickTime 播放器模式(适用于 FireFox, Safari, Google Browser)';
var _ipcam_title='连接网络摄像机'; 
var _ipcam_user='用户';
var _ipcam_pwd='密码';
var _ipcam_til='保存密码(R)';
var _ipcam_ok='确认';
var _ipcam_no='取消';
var _user='用户';
var _pwd='密码';
var _signin='登 录';
var _attention='注:';
var _attention1='用户密码区分大小写';
var _attention2='建议使用 1024 * 768 屏幕分辨率';
var _devicestatus='摄像机状态';
var _4visitor='参观者操作';
var _4operator='操作者操作';
var _4administrator='管理者操作';
var _configdevice='参数设置';
var _talk='对讲';
var _audio='监听';
var _video='视频';
var _play='播放';
var _stop='停止';
var _snapshot='拍照';
var _record='录像到本地电脑';
var _alias='摄像机名称';
var _switch='开关';
var _switchon='开关闭合';
var _switchoff='开关打开';
var _open='打开';
var _close='闭合';
var _resolution='分辨率:';
var _quality='质量';
var _mode='模&nbsp;&nbsp;&nbsp;&nbsp;式:';
var _brightness='亮度';	
var _contrast='对比度';
var _outdoor='室外';
var _default = '恢复缺省值';
var _unselected='未选中';
var _device='摄像机';
var _err_connect='不能连接到指定摄像机';
var _err_socket='网络出错';
var _err_timeout='网络超时';
var _err_version='错误的软件版本';
var _err_cancel='用户取消';
var _err_closed='摄像机主动断开连接';
var _err_file='文件操作失败';
var _err_param='非法的参数';
var _err_thread='线程操作失败';
var _err_status='非法的状态';
var _err_id='错误的摄像机标识';
var _fail_user='未知的用户';
var _fail_maxconns='已达到最大连接数';
var _fail_version='错误的软件版本';
var _fail_id='错误的摄像机标识';
var _fail_pwd='用户密码不正确';
var _fail_pri='用户权限不足';
var _fail_unsupport='摄像机不支持此功能';
var _err_unknown='未知错误';
var _failtoconnect='连接摄像机失败';
var _failtorecord='录像操作失败';
var _failtoplayvideo='播放视频操作失败';
var _failtoplayaudio='播放音频操作失败';
var _failtostarttalk='对话操作失败';
var _save='保存';
var _dev_info='摄像机信息';
var _bstr_info='码流设置';
var _alias_config='名称设置';
var _goback='返回';
var _datetime_config='时钟设置';
var _users_config='用户设置';
var _multidevice_config='多画面设置';
var _network_config='基本网络设置';
var _dns_config='域名服务设置';
var _wireless_config='无线局域网设置';
var _adsl_config='PPPoE 设置';
var _upnp_config='UPnP 设置';
var _ddns_config='动态域名设置';
var _mail_config='邮件设置';
var _ftp_config='FTP设置';
var _alarm_config='报警设置';
var _upgrade_firmware='固件升级';
var _restore_factory='恢复出厂设置';
var _reboot = '重启摄像机';
var _dev_id='摄像机序列号';
var _sw_ver='系统固件版本';
var _aw_ver='界面固件版本';
var _set='设置';
var _upgrade='升级';
var _failtoset='参数设置操作失败';
var _oktoset='参数设置操作成功';
var _oktoset_reboot='参数设置操作成功，摄像机即将重启';
var _failtoreboot='重启操作失败';
var _oktoreboot='重启操作成功';
var _failtorestore='恢复出厂参数操作失败';
var _oktorestore='恢复出厂参数操作成功，摄像机即将重启';
var _upgrade_swware='升级系统固件';
var _upgrade_awware='升级界面固件';
var _failtoupgrade='升级操作失败';
var _oktoupgrade='正在升级中... 在摄像机重新正常工作之前请不要断开摄像机电源 !!!';
var _upgrading_progress='升级进度';
var _group='组';
var _pri_list='<option value=1>参观者</option><option value=2>操作者</option><option value=255>管理者</option>';
var _visitor='参观者';
var _operator='操作者';
var _administrator='管理者';
var _refresh='刷新';
var _device_clock_time='日期时间';
var _failtofetch='获取参数操作失败';
var _device_tz='时区设定';
var _ntp_choice='使用 NTP 服务器自动校时';
var _ntp_server='Ntp 服务器';
var _syncwithpc='使用当前电脑时间校准时钟';
var _dhcp_choice='从 DHCP 服务器获取 IP 地址';
var _dns='域名';
var _dns_port='域名端口';
var _dns_times='心跳包间隔';
var _ip='IP 地址';
var _mask='子网掩码';
var _gateway = '网关设置';
var _dns='DNS 服务器';
var _dns1='DNS 服务器1';
var _dns2='DNS 服务器';
var _cmdport='命令端口';
var _dataport='媒体端口';
var _port='Http 端口';
var _rtspurl='RTSP 访问地址';
var _onvif_port='ONVIF 端口';
var _onvifurl='ONVIF 访问地址';
var _cmd_port='控制端口';
var _data_port='媒体端口';
var _rtsp_port='RTSP 端口';
var _adsl_choice='使用 PPPoE 拨号上网';
var _rtsp_config='RTSP 设置';
var _rtsp_choice='启用RTSP权限认证，并使用上面的用户名密码作为RTSP 认证的账号密码';
var _rtsp_user='RTSP 用户';
var _rtsp_pwd='RTSP 密码';
var _adsl_user='PPPoE 用户';
var _adsl_pwd='PPPoE 密码';
var _mail_inet_ip='邮件通知 Internet IP 地址';
var _upnp_choice='使用 UPnP 自动映射端口';
var _upnp_status='UPnP 状态';
var _upnp_msg0='未动作';
var _upnp_msg1='UPnP 成功';
var _upnp_msg2='UPnP 失败: 摄像机系统错误';
var _upnp_msg3='UPnP 失败: 网络通信错误';
var _upnp_msg4='UPnP 失败: 与 UPnP 摄像机对话错误';
var _upnp_msg5='UPnP 失败: UPnP 摄像机拒绝，可能端口冲突';
var _sender='发送者';
var _receiver='接收者';
var _mailssl='SSL';
var _smtp_svr='SMTP 服务器';
var _smtp_auth='需要校验';
var _smtp_user='SMTP 用户';
var _smtp_pwd='SMTP 密码';
var _ftp_svr='FTP 服务器';
var _ftp_port='FTP 端口';
var _ftp_user='FTP 用户';
var _ftp_pwd='FTP 密码';
var _ftp_dir='FTP 上传目录';
var _ftp_mode='FTP 模式';
var _ftp_upload_enable='定时上传图片';
var _ftp_upload_interval='  上传图片间隔(毫秒)';
var _ftp_upload_stretch='  上传图片张数';
var _motion_enable='移动监测布防';
var _motion_sensitivity='移动监测灵敏度';
var _high='高';
var _medium='中';
var _low='低';
var _extern_enable='外部输入布防';
var _alarm_mail_enable='报警后邮件通知';
var _alarm_ftp_enable='报警后FTP上传图片';
var _alarm_linkage_enable='报警后 IO 联动';
var _alarm_http_enable='报警后 Http 通知';
var _alarm_http_url='Http 网址';
var _ddns_service='第三方DDNS 服务';
var _ddns_user='DDNS 用户';
var _ddns_pwd='DDNS 密码';
var _ddns_host='DDNS 域名';
var _proxy_svr='DDNS 服务器';
var _proxy_port='DDNS 服务端口';
var _dns_status='DNS 状态';
var _ddns_status='厂家域名状态';
var _status='状态';
var _restart_dyndns='忽略所有错误并发送更新请求';
var _dyndns_proxy_comment='如本摄像机位于中国大陆或香港地区，应设置代理服务器';
var _restart_dyndns_comment='只有当您的域名被取消阻止后才应执行此操作';
var _ddns_noaction='未动作';
var _ddns_waiting='连接服务器 ...';
var _ddns_cannotconnect='连接服务器失败';
var _factory_ok='成功';
var _factory_noauth='失败: 没有权限';
var _factory_noid='失败: 账号不存在';
var _factory_over='失败: 账号已过期';
var _factory_iddisable='失败: 账号已禁用';
var _factory_errparam='失败: 参数错误';
var _factory_unknownerr='失败: 未知错误';
var _3322_ok='成功';
var _3322_sys_err='失败: 系统错误';
var _3322_badauth = '失败: 用户或密码错误';
var _3322_donator='失败: 非信用用户';
var _3322_notfqdn='失败: 域名格式不正确';
var _3322_nohost='失败: 域名不存在';
var _3322_yours = '失败: 域名不属于你';
var _3322_numhost='失败: 太多或太少的域名请求';
var _3322_abuse='失败: 域名因滥用被阻止';
var _3322_server_err='失败: 服务器错误';
var _3322_chat_err='失败: 未收到服务器正确的响应';
var _dyndns_ok='成功';
var _dyndns_sys_err='失败: 系统错误';
var _dyndns_badauth='失败: 用户或密码错误';
var _dyndns_donator='失败: 非信用用户';
var _dyndns_notfqdn='失败: 域名格式不正确';
var _dyndns_nohost='失败: 域名不存在';
var _dyndns_yours = '失败: 域名不属于你';
var _dyndns_numhost='失败: 太多或太少的域名请求';
var _dyndns_abuse='失败: 域名因滥用被阻止';
var _dyndns_server_err='失败: 服务器错误';
var _dyndns_chat_err = '失败: 未收到服务器正确的响应';
var _oray_chat_err = '失败: 未收到服务器正确的响应';
var _oray_bad_auth='失败: 用户或密码错误';
var _oray_bad_host='失败: 错误的域名';
var _oray_standard_ok='成功';
var _oray_professional_ok='成功';
var _9299_ok='成功';
var _9299_unknown_err='失败: 未知错误';
var _9299_er='失败: 账号已过期';
var _9299_da='失败: 账号没有激活';
var _9299_sne='失败: 用户名或者密码错误';
var _9299_ne='失败: 域名不存在';
var _9299_chat_err="失败: 错误的返回信息";
var _ddns_ok='DDNS 成功';
var _ddns_failed='DDNS 失败';
var _yu_ddns_ok='Vidamax 成功';
var _yu_ddns_failed='Vidamax 失败';
var _devicelist_inlan='当前局域网中的摄像机列表';
var _subnet_nomatch='子网不匹配';
var _1st_device='第一路摄像机';
var _2nd_device='第二路摄像机';
var _3rd_device='第三路摄像机';
var _4th_device='第四路摄像机';
var _5th_device='第五路摄像机';
var _6th_device='第六路摄像机';
var _7th_device='第七路摄像机';
var _8th_device='第八路摄像机';
var _9th_device='第九路摄像机';
var _none='无';
var _this_device='本机';
var _host = '主机地址';
var _add='添加';
var _remove='删除';
var _multidevice_attention='注: 如果需要从 internet 访问，请确保输入的主机端口是能从 internet 访问到的';
var _wifi_choice='使用无线局域网';
var _wifi_power='WIFI电源';
var _wifi_encryption='安全模式';
var _wifi_wep_key_index = '选择密钥';
var _wifi_wep_key1 = '密钥 1';
var _wifi_wep_key2 = '密钥 2';
var _wifi_wep_key3 = '密钥 3';
var _wifi_wep_key4 = '密钥 4';
var _wifi_channel='频道';
var _wifi_authtype='安全模式';
var _auth_open='开放系统';
var _auth_share = '共享密钥';
var _wifi_keytype = '密钥格式';
var _hex='16 进制数字';
var _ascii='ASCII 字符';
var _sure_reboot='您确定要重启摄像机吗';
var _sure_restore='您确定要恢复出厂设置吗';
var _center='居中';
var _vertical_patrol='上下巡视';
var _horizon_patrol='左右巡视';
var _stop_vertical_patrol='停止上下巡视';
var _stop_horizon_patrol='停止左右巡视';
var _start='开始';
var _test='测试';
var _succeed='成功';
var _failed='失败';
var _ftp_error_connect='无法连接到服务器,请检查：<br>1.邮箱FTP服务器设置是否正确。<br>2.基本网络设置里网关、DNS服务器是否正确。';
var _ftp_error_network = '网络错误,请检查：<br>1.邮箱FTP服务器设置是否正确。<br>2.基本网络设置里网关、DNS服务器是否正确。';
var _ftp_error_server='服务器错误,请检查：<br>1.邮箱FTP服务器设置是否正确。<br>2.基本网络设置里网关、DNS服务器是否正确。';
var _ftp_error_user = '错误的用户名或密码';
var _ftp_error_pwd = '错误的用户名或密码';
var _ftp_error_dir='无法访问指定目录，请确认目录存在及用户拥有访问目录的权限';
var _ftp_error_pasv='PASV 模式下出错，可能服务器不支持 PASV 模式';
var _ftp_error_port = 'PORT 模式下出错，可能摄像机位于 NAT 后端导致服务器无法连接摄像机，请尝试 PASV 模式';
var _ftp_error_stor='无法上传文件，请确认用户拥有上传文件的权限';
var _smtp_error_connect='无法连接到服务器,请检查：<br>1.邮箱SMTP服务器设置是否正确。<br>2.基本网络设置里网关、DNS服务器是否正确。';
var _smtp_error_network = '网络错误,请检查：<br>1.邮箱SMTP服务器设置是否正确。<br>2.基本网络设置里网关、DNS服务器是否正确。';
var _smtp_error_server='服务器错误,请检查：<br>1.邮箱SMTP服务器设置是否正确。<br>2.基本网络设置里网关、DNS服务器是否正确。';
var _smtp_error_user = '错误的用户名或密码';
var _smtp_error_pwd = '错误的用户名或密码';
var _smtp_error_sender='服务器拒绝发件人，服务器可能需要对用户进行认证，请选择该选项再试';
var _smtp_error_receiver	= '服务器拒绝收信人，可能是服务器的反垃圾邮件策略导致的';
var _smtp_error_message = '服务器拒绝信件内容，可能是服务器的反垃圾邮件策略导致的';
var _smtp_error_auth	 = '服务器不支持摄像机所采用的认证方式';
var _test_info='请先点击"设置"按钮，保存参数,然后再测试';
var _lowest='最低';
var _wifi_mode_list='<option>访问点</option><option>点到点</option>';
var _smtp_port='SMTP 端口';
var _tz_list='<option value=39600>(GMT -11:00) 中途岛, 萨摩亚群岛</option><option value=36000>(GMT -10:00) 夏威夷</option><option value=32400>(GMT -09:00) 阿拉斯加</option><option value=28800 selected="selected">(GMT -08:00) 太平洋时间(美国和加拿大)</option><option value=25200>(GMT -07:00) 山地时间(美国和加拿大)</option><option value=21600>(GMT -06:00) 中部时间(美国和加拿大), 墨西哥城</option><option value=18000>(GMT -05:00) 东部时间(美国和加拿大), 利马, 波哥大</option><option value=14400>(GMT -04:00) 大西洋时间(加拿大), 圣地亚哥, 拉巴斯<option value=12600>(GMT -03:30) 纽芬兰</option><option value=10800>(GMT -03:00) 巴西利亚, 布宜诺斯艾丽斯, 乔治敦</option><option value=7200>(GMT -02:00) 中大西洋</option><option value=3600>(GMT -01:00) 佛得角群岛</option><option value=0>(GMT) 格林威治平时; 伦敦, 里斯本, 卡萨布兰卡</option><option value=-3600>(GMT +01:00) 布鲁赛尔, 巴黎, 柏林, 罗马, 马德里, 斯多哥尔摩, 贝尔格莱德, 布拉格</option><option value=-7200>(GMT +02:00) 雅典, 耶路撒冷, 开罗, 赫尔辛基<option value=-10800>(GMT +03:00) 内罗毕, 利雅得, 莫斯科</option><option value=-12600>(GMT +03:30) 德黑兰</option><option value=-14400>(GMT +04:00) 巴库, 第比利斯, 阿布扎比, 马斯科特</option><option value=-16200>(GMT +04:30) 科布尔</option><option value=-18000>(GMT +05:00) 伊斯兰堡, 卡拉奇, 塔森干</option><option value=-19800>(GMT +05:30) 加尔各答, 孟买, 马德拉斯, 新德里</option><option value=-21600>(GMT +06:00) 阿拉木图, 新西伯利亚, 阿斯塔南, 达尔</option><option value=-25200>(GMT +07:00) 曼谷, 河内, 雅加达</option><option value=-28800>(GMT +08:00) 北京, 新加坡, 台北</option><option value=-32400>(GMT +09:00) 首尔, 雅库茨克, 东京</option><option value=-34200>(GMT +09:30) 达尔文</option><option value=-36000>(GMT +10:00) 关岛, , 墨尔本, 悉尼, 莫尔兹比港, 符拉迪沃斯托克</option><option value=-39600>(GMT +11:00) 马加丹, 所罗门群岛, 新喀里多尼亚</option><option value=-43200>(GMT +12:00) 奥克兰, 惠灵顿, 斐济</option>';
var _decoder_config='解码器设置';
var _baud='波特率';
var _fail_forbidden='当前此功能被禁止';
var _log='日志';
var _wifi_list='无线网络列表';
var _scan='搜索';
var _wifi_scan_info='正在搜索中 ...';
var _backup_restore='备份和恢复参数';
var _backup='备份';
var _restore='恢复';
var _wifi_networktype='网络类型';
var _triger_level='触发方式';
var _output_level='输出电平';
var _zoom_plus='变倍+';
var _zoom_minus='变倍-';
var _ptz_config='云台设置';
var _autocenter='启动时自动居中';
var _pt_speed='自动巡航速度';
var _pt_run='巡航圈数';
var _up_speed='云台转动速度';
var _down_speed='向下转动速度';
var _left_speed='向左转动速度';
var _right_speed='向右转动速度';
var _p2p_status='P2P 状态';
var _p2p_msg0='未动作';
var _p2p_msg1='无法连接到服务器';
var _p2p_msg2='正在连接服务器 ...';
var _p2p_msg3='与服务器连接超时断开';
var _p2p_msg4='与服务器连接成功，本地监听端口: ';
var _specify_filename='指定文件名（不包含 .jpg）';
var _specify_numberoffiles='指定文件保存数量上限';
var _mode_Mobile='No Plug-In 模式(适用于智能手机浏览器)';
var _Ptz_UpText='上';
var _Ptz_DownText='下';
var _Ptz_LeftText='左';
var _Ptz_RightText='右';
var _Ptz_StopText='居中';
var _Ptz_FastText='快';
var _Ptz_SlowText='慢';
var _PresetTitle='预置位:';
var _CallPreset='调&nbsp;&nbsp;&nbsp;&nbsp;用';
var _SetPreset='设置';
var _forbidden_config='禁止查看音视频设置';
var _media_config='视频设置';
var _media_size='视频尺寸';
var _media_framerate='帧率';
var _maxmedia_framerate='最大帧率';
var _Ispace='I帧间隔';
var _media_keyframe='关键帧';
var _media_quant='画面质量';
var _media_ratemode='码率模式';
var _media_bitrate='码&nbsp;&nbsp;&nbsp;&nbsp;率:';
var _record_sch='SD卡录像';
var _sd_status='SD卡状态';
var _record_info='SD卡录像回放';
var _record_filename='录像文件名';
var _record_download='下载';
var _record_remove='移除';
var _record_del='删除';
var _record_path='路径';
var _record_info_fielist='录像回放';
var _record_path_path='本地录像文件保存路径';
var _record_schdule='录像计划';
var _record_sd_status='SD卡状态';
var _sd_exist='录像中...';
var _sd_no='停止录像';
var _record_cover='录像自动循环覆盖';
var _record_alarm_gpio='外部输入报警录像';
var _record_alarm_motion='移动侦测报警时录像';
var _record_alarm_time='实时录像';
var _inter_addr='内网IP地址';
var _extern_addr='外网IP地址';
var _sd_status='存储卡总容量';
var _sd_status1='存储卡剩余容量';
var _MaxRate='帧&nbsp;&nbsp;&nbsp;&nbsp;率:';
var _PresetGroup='巡航组';
var _PresetGroup_Excute='执行';
var _PresetGroup_Cancel='取消';
var _PresetGroup_Tip='巡航组脚本:\n\n如:\n\np1w5p2w10: 表示调用预置位1停留5秒钟,然后调用预置位2停留10秒钟,重复执行.\n\n注:停留时间单位为秒,且必须大于5秒才有效.';
var _motion_preset='报警时预置位联动';
var _preset_onstart='启动后转动到指定预置位';
var _presetenable='启用预置位功能'
var _outdoor_mode='室外模式';
var _led_mode='指示灯';
var _close='关闭';
var _mode_1='开启';
var _mode_2='模式2';
var _paramset='设置';
var _ocx_til='您还没有安装OCX控件，请先下载OCX控件，并安装';
var _mantain="维护";
var _noocx="插件没有安装或者不是最新版本，请点击 ";
var _noplugin="插件没有安装或者不是最新版本，请点击 ";
var _here="这里</a> 下载安装";
var _italian="italiano";
var _deutsch="Deutsch"
var _portugal="português";
var _english="English"
var _chinese="简体中文";
var _tchinese="繁體中文";
var _french="française";
var _spanish="español";
var _russian='русских';
var _polski="Polski";
var _Korea="한국의"
var _JPN="日本語"
var _language="语    言：";
var _channel="channel";
var _channel1="channel1";
var _channel2="channel2";
var _channel3="channel3";
var _language2="语    言";
var _noshownext='下次不再显示该页面';
var _noshowhome='不显示起始页面';
var _factoryDDNS='厂家域名';
var _server='服务器';
var _factoryurl='远程访问地址';
var _acc='账号';
var _moresmoreh="越小越画质好";
var _moresmorelm="(越小越灵敏)";
var _m_iphone='iPod touch/iPhone 2G,3G,3GS,4以及iPad专用';
var _circle='巡视一周后到中心点';
var _cbr='恒定码率(CBR)';
var _vbr='可变码率(VBR)';
var _ftpportmode='主动模式(PORT)';
var _ftppasvmode='被动模式(PASV)';
var _website='官方网站';
var _onhelp='在线技术支持';
var _app='监控平台';
var _bbs='技术论坛';
var _hourselhint='双击选择一个小时';
var _needadminacc='至少需要设置一个管理员账号.';
var _forlan='局域网推荐';
var _forADSL='ADSL推荐';
var _selall='全选';
var _smtp_tls='传输层安全协议';
var _gmail_prompt='Gmail 只在端口 465 上支持 TLS 和在端口 25/587 上支持 STARTTLS.';
var _showosd='视频上显示日期和时间标记';
var _suredelrec='确定要删除这个录像吗?';
var _switchon2='开';
var _switchoff2='关';
var _mode_Client='多画面客户端(推荐)';
var _download='下载';
var _ErrRTSPNoEmpty='用户或者密码不能为空';
var _ironoff='夜视红外灯开/关';
var _default_s='缺省值';
var _syscfg='系统设置';
var _ip_config='网络设置';
var _trigger='报警触发方式';
var _action='报警动作';
var _set_ptz_speed='设置云台转动速度';
var _bookmark='可以添加该页面到书签';
var _Enable='启用';
var _SDRe='插入或者拔除存储卡后，需要重新插拔摄像机的电源';
var _recschsel='在选择了的时间格内，会自动进行实时录像。当SD录满的时候，会自动删除旧的录像文件。';
var _alarmtime='单击开始选择时间，再单击结束选择。只有在选择的时间格内，报警才会有效;';
//functions start
var _f_gkhm='观看实时画面';
var _f_lsd='流畅度';
var _f_ls='流畅(H.264)';
var _f_nls='不流畅(MJPEG)';
var _f_dhm='多画面';
var _f_9hm='9画面';
var _f_1hm='单画面';
var _f_81hm='81画面';
var _f_azcj='是否需要安装插件';
var _f_jt='监听';
var _f_dj='对讲';
var _f_ytkz='云台控制';
var _f_ytsd='云台速度调节';
var _f_sdpz='手动抓拍';
var _f_sdlx='手动录像';
var _f_xgspcs='修改画面参数';
var _f_dyyzw='调用预置位';
var _f_szyzw='设置预置位';
var _f_ytxh='云台巡航';
var _f_txdz='图像镜像、倒转';
var _f_yzwxh='预置位巡航';
var _f_szbj='数字变焦';
var _f_zcqt='支持其他系列摄像机';
var _f_lxfg='录像循环覆盖';
var _f_bjdz='报警动作';
var _f_sdlxxz='存储卡录像下载';
var _f_sdhf='存储卡录像回放';
var _f_lxgl='录像、报警记录管理';
var _f_zhfp='账号分配';
var _f_wlfb='历史记录网络发布';
var _f_plxz='可批量下载';
var _f_dgxz='单个下载';
var _f_bjdz2='声音、录像、拍照、Email、FTP、拨打电话、Skype、调用预置位';
//functions end
var _funcdesc='功能描述';
var _mediatip='&nbsp;&nbsp;1.这里的设置影响到画面的清晰度和流畅度,也影响存储卡的录像时间。需要根据摄像机所在网络的带宽情况进行配置。<br>&nbsp;&nbsp;2.如果在意手机上访问的流畅度，视频尺寸请选择QVGA。<br>&nbsp;&nbsp;3.如果选择可变码流，则当画面变化很小时，数据量会很小，当画面变化时，数据量会突然增加。<br>&nbsp;&nbsp;4.如果选择恒定码流，则当画面变化很小时，数据量大概为"码率"设置的大小，当画面变化时，数据量也会发生变化，但是变化率不会太大。<br>&nbsp;&nbsp;5.局域网建议选择可变码流，带宽小的场合建议选择恒定码流，并且选择匹配的码率大小。<br>&nbsp;&nbsp;6."画质"选项对画面质量和数据量有较大的影响。"画质"1的数据量差不多是"画质"15的4倍。<br>&nbsp;&nbsp;7.降低帧率也可以大幅减少数据量，比如把帧率从30帧调整为15帧，数据量减少为一半，15帧人眼并不会有明显的停顿感。';
var _addr='地址码';
var _clearlog='清除';
var _sure_clearlog='确定要清除日志吗？';
var _user_tip='&nbsp;&nbsp;1.管理员账号具有所有的权限；<br>&nbsp;&nbsp;2.操作者账号能观看视频，能回放存储录像，能控制云台，能调节视频参数，不能设置参数；<br>&nbsp;&nbsp;3.参观者账号能观看视频，不能设置参数，不能控制云台，不能改变视频参数；';
var _tip_domain='摄像机的真实域名，可用于第三方软件。';
var _factoryrtspurl='RTSP访问地址';
var _factorydomain='真实域名';
var _SDK_activex='ActiveX(OCX)方式';
var _SDK_cgi='CGI接口方式';
var _SDK_protocol='私有协议方式';
var _SDK_rtsp='RTSP方式';
var _SDK_tip_activex='采用ActiveX方式进行封装，适用于各类开发语言，以及IE的嵌套，实现视频观看，声音监听对讲，录像等功能。<br>&nbsp;&nbsp;特点：封装比较完善，使用很简单。<br>&nbsp;&nbsp;<a class="blue" href="http://soft.vstarcam.com/sdk/ipcamsdk.zip">下载</a>';
var _SDK_tip_cgi='HTTP方式的CGI接口，实现：<br>1.摄像机各种参数的获取和设置。<br>2.音视频的获取（livestream.cgi, videostream.cgi, snapshot.cgi）。<br>3.云台的控制(decoder_control.cgi)。<br>4.SD卡录像文件的获取和下载(get_record_file.cgi)。<br>&nbsp;&nbsp;开发相对比较简单。<br>&nbsp;&nbsp;<a class="blue" href="http://soft.vstarcam.com/sdk/sdk_h_cgi.zip">下载</a>';
var _SDK_tip_protocol='私有协议接口，实现:<br>1.音视频的获取。<br>2.摄像机各种参数的获取和参数。<br>3.云台的控制。<b4>4.对讲。<br>5.SD录像文件的获取。<br>&nbsp;&nbsp;这种方法可现实功能最全，不过开发难度相对比较大。<br>&nbsp;&nbsp;<a class="blue" href="http://soft.vstarcam.com/sdk/sdk_h_protocol.zip">下载</a>';
var _SDK_tip_RTSP='RTSP流媒体接口。标准的RTSP协议。';
var _developer='开发者';
var _whatrtsphint='什么是RTSP?';
var _whatrtsp='实时流协议RTSP(Real Time Streaming Protocol)是由RealNetworks和Netscape共同提出的，用于实现音频和视频流的传输。不少视频播放器都支持RTSP协议，比如QuickTime，VLC，RealPlayer。手机上也有不少播放器支持RTSP协议。';
var _uid_config='UID配置';
var _uid_uid='UID:';
var _uid_model='产品型号:';
var _uid_vendor='厂家:';
var _alarm_url="报警后访问URL";
var _alarm_url_tip="格式为http://x.x.x.x/x?x=x/x=x;参数部分&用/替代";
var _norec='没有录像文件';
var _rec_reservedDiskSpace="保留磁盘空间（MB）";
var _rec_FileLen="单个录像文件的大小（MB）";
var _rec_FileLen_1="至少100MB，最大1000MB";
var _rec_TimeLen="录像时间长（分钟）";
var _rec_TimeLen_1="至少5分钟，最大120分钟";
var _rec_reservedDiskSpace_1="至少200MB的";
var _rec_Cover="记录覆盖";
var _Saturation='饱和度';
var _hue='色度';
var _signal='信号';
var _sd_sdtotal="SD卡的总容量(M)";
var _sd_sdfree="SD卡的剩余容量(M)的";
var _disk_1="格式化";
var _disk_2="未插SD卡";
var _disk_3="未格式化SD卡";
var _disk_4="SD卡已挂载";
var _disk_5="正在格式化SD卡";
var _disk_6="SD卡已卸载";
var _rec_sch_time="记录时间(分钟)";
var _rec_sch_time_1="录制时间范围：5~180分钟";
var _access="访问";
var _onlinecd='在线光盘';
var _confirmfmtSD="确定要格式化SD卡？格式化操作后，SD卡里的数据会被全部删除。";
var _confirmremSD="确定要移除SD卡？";
var _sd_mount='挂载';
var _alarm_record="报警后SD卡录像";
var _localrecord="本地录像和拍照";
var _videorecord="录像";
var _disconnect="断开";
var _closure="闭合";
var _audioin="音频源";
var _mic="内置麦克风";
var _line="外接线性输入";
var _AudioOption="音频";
var _PwdFormat="密码必须是长度大于等于8以上的字母或者数字."
var _alarm_audio_enable="摄像机播放报警声";
var _record_audio="录制声音";
var _record_ss_0="一直录像";
var _record_ss_1="画面变化幅度为1时录像";
var _record_ss_2="画面变化幅度为2时录像";
var _record_ss_3="画面变化幅度为3时录像";
var _record_ss_4="画面变化幅度为4时录像";
var _record_ss_5="画面变化幅度为5时录像";
var _record_ss_6="画面变化幅度为6时录像";
var _record_ss_7="画面变化幅度为7时录像";
var _record_ss_8="画面变化幅度为8时录像";
var _record_ss_9="画面变化幅度为9时录像";
var _record_ss_10="画面变化幅度为10时录像";
var _record_sensitivity="录像模式";
var _involume='麦克风';
var _outvolume='喇叭';
var _volume='音&nbsp;&nbsp;&nbsp;&nbsp;量:';
var _setosd='启用OSD功能';
var _record_stream="录像码流选择";
var _manufacturer="开发商";
var _sdk_ver="SDK版本";
var dev_status="摄像机状态";