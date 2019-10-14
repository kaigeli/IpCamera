/**
 * Copyright (C) 2016 Fuzhou Rockchip Electronics Co., Ltd
 * author: yuyz <yuyz@rock-chips.com>
 *
 * This software is licensed under the terms of the GNU General Public
 * License version 2, as published by the Free Software Foundation, and
 * may be copied, distributed, and modified under those terms.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

#include "ipc_webserver_param.h"
#include<stdio.h>
using namespace std;
#include <string>
#include <vector>
#include <json/json.h>
typedef Json::Writer JsonWriter;  
typedef Json::Reader JsonReader;  
typedef Json::Value  JsonValue;  
#define SIZEOFBUF 512
static int export_photo_names()
{
	char   buf[SIZEOFBUF];
	char line[SIZEOFBUF];
	FILE *fp;
	int photo_num=0;
	snprintf(buf,sizeof(buf),"cd /mnt/sdcard/PHOTO-FRONT/ && ls | awk '{print $1}'");	//cd + photo absolute directory && && ls | awk '{print $1}'
	fp = popen(buf,"r");
	if( NULL == fp){
		printf("error");
		return -1;
	}
	printf("var photo = new Array();\n");
	while(fgets(line,SIZEOFBUF,fp)!=NULL && line[0] !='\n' ){ 	
		printf("photo[%d] = \"",photo_num++);	
		int i=strlen(line);
		line[i-1]='\0';
		fputs(line,stdout);
		printf("\";\n");
	}
	pclose(fp);//close piping 
	return 0;
}	
static int network_params_print(const char *nbuf)
{
	char line[SIZEOFBUF];
	FILE *fp;
	fp = popen(nbuf,"r");
	if( NULL == fp)
	{
					 printf("error");
					 return -1;
	}
	if(fgets(line,SIZEOFBUF,fp)!=NULL && line[0] !='\n' ){		
			int i=strlen(line);
			line[i-1]='\0';
	}
	fputs(line,stdout);
	pclose(fp);//close piping 
	return 0;


}
static int export_network_params(void)
{
	char   buf[SIZEOFBUF];
	FWK_MSG* msg;
//	snprintf(buf,sizeof(buf),"ifconfig |grep -v 127.0.0.1|grep 'inet addr'|awk '{print $2}'|cut -d \":\" -f2 \n");
	snprintf(buf,sizeof(buf),"ip addr |grep -v 127.0.0.1|grep 'inet'|awk '{print $2}'|cut -d / -f1");
	printf("var ip = \"");
	network_params_print(buf);
	printf("\";\n");
	snprintf(buf,sizeof(buf),"netstat -rn |grep 'U'|awk '{print $2}'| grep -v 0.0.0.0 \n");
	printf("var gateway = \"");
	network_params_print(buf);
	printf("\";\n");
	snprintf(buf,sizeof(buf),"route | grep '*'|awk '{print $3}' \n");
	printf("var mask = \"");
	network_params_print(buf);
	printf("\";\n");
    snprintf(buf,sizeof(buf),"cat /etc/resolv.conf|grep 'nameserver'|awk '{print $2}'|head -n 1");
    printf("var dns1 = \"");
    network_params_print(buf);
    printf("\";\n");
     snprintf(buf,sizeof(buf),"cat /etc/resolv.conf|grep 'nameserver'|awk '{print $2}'|tail -n 1");
    printf("var dns2 = \""); 
    network_params_print(buf);
    printf("\";\n");
	snprintf(buf,sizeof(buf),"ip addr |grep -v 127.0.0.1|grep 'inet'|awk '{print $2}'|cut -d / -f1");
	printf("var vedio_url = \"rtsp://");
	network_params_print(buf);
	printf("/webcam\";\n");
	unix_release_msg(msg);
	return 0;
		
}

static void print_json(JsonValue data)  
{  
    if (data.type() != Json::objectValue)
        return;
    JsonValue::Members mem = data.getMemberNames();  
    for (auto iter = mem.begin(); iter != mem.end(); iter++)  
    {  
        if (data[*iter].type() == Json::objectValue)  
        {  
            cout << endl;  
            print_json(data[*iter]);  
        }  
        else if (data[*iter].type() == Json::arrayValue)  
        {  
            cout << endl;  
            auto cnt = data[*iter].size();  
            for (auto i = 0; i < cnt; i++)  
            {  
                print_json(data[*iter][i]);  
            }  
        } else {
            cout << "var " << *iter << "=" << data[*iter] << endl; 
        }
        /*
        else if (data[*iter].type() == Json::stringValue)  
        {  
            cout << "var " << *iter << "=" << data[*iter].asString() << endl;  
        }  
        else if (data[*iter].type() == Json::realValue)  
        {  
            cout << "var " << *iter << "=" << data[*iter].asDouble() << endl;  
        }  
        else if (data[*iter].type() == Json::uintValue)  
        {  
            cout << "var " << *iter << "=" << data[*iter].asUInt() << endl;  
        }  
        else  
        {  
            cout << "var " << *iter << "=" << data[*iter].asInt() << endl;  
        } */
    }  
    return;  
}  

static void common_json_msg_process(FWK_MSG_JSON_MESSAGE_RSP *rsp)
{
    if(strlen(rsp->json_message) > 0)
    {
        char *pbuf = rsp->json_message;
        Json::Reader reader;
        Json::Value v;

        STK_DEBUG("common_json_msg_process START");
        if(reader.parse(pbuf,v))
        {
            if (v.type() == Json::arrayValue)  
            {  
                auto cnt = v.size();  
                for (auto i = 0; i < cnt; i++)  
                {  
                    print_json(v[i]);
                }  
            }
            else 
            {
                print_json(v);
            }
        }
    }
}

#define ITEM_NAME "item_name"
#define ITEM_VALUE "item_value"
static int params_json_msg_process(FWK_MSG_JSON_MESSAGE_RSP *rsp)
{
    if (strlen(rsp->json_message) > 0) {
        char *pbuf = rsp->json_message;
        Json::Reader reader;
        Json::Value v;
        Json::Value item_list;

        if (reader.parse(pbuf,v)) {
            const char *cmd_name = v["name"].asCString();
                
            if (strcasecmp(cmd_name, FWK_MSG_CONTROL_WRTC_CMD_GET_ENCODER_PARAMS) == 0) {
                 if (strstr(pbuf, "item_list") == NULL)
                     return -1;
                 item_list = v["item_list"];
                 for (int i = 0; i < item_list.size(); i++) {
                     Json::Value item = item_list[i];
                     printf("var fmt%d=\"PIX_FMT_NV12\";\n", i);
                     printf("var frame_rate%d=\"%d\";\n", i, item["frame_rate"].asInt());
                     printf("var level%d=\"%d\";\n", i, item["level"].asInt());
                     printf("var gop_size%d=\"%d\";\n", i, item["gop_size"].asInt());
                     printf("var profile%d=\"%d\";\n", i, item["profile"].asInt());
                     printf("var qp_init%d=\"%d\";\n", i, item["qp_init"].asInt());
                     printf("var qpstep%d=\"%d\";\n", i, item["qp_step"].asInt());
                     printf("var qp_min%d=\"%d\";\n", i, item["qp_min"].asInt());
                     printf("var qp_max%d=\"%d\";\n", i, item["qp_max"].asInt());
                     printf("var rc_mode%d=\"%d\";\n", i, item["rc_mode"].asInt());
                     printf("var width%d=\"%d\";\n", i, item["width"].asInt());
                     printf("var height%d=\"%d\";\n", i, item["height"].asInt());
                     printf("var bit_rate%d=\"%d\";\n", i, item["bit_rate"].asInt());
                     printf("var quality%d=\"%d\";\n", i, item["quality"].asInt());
                }
            }
            else if (strcasecmp(cmd_name, FWK_MSG_CONTROL_WRTC_CMD_GET_ALL_PARAMS) == 0) {
                if (strstr(pbuf, "item_list") == NULL)
                    return -1;
                item_list = v["item_list"];
                for (int i = 0; i < item_list.size(); i++) {
                    Json::Value item = item_list[i];
                    const char *name = item[ITEM_NAME].asCString();

               #if 1
                    if (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_DATE_TIME) == 0) {
                        cout << "var year=" << item["year"].asInt() << endl;
                        cout << "var month=" << item["month"].asInt() << endl;
                        cout << "var day=" << item["day"].asInt() << endl;
                        cout << "var hour=" << item["hour"].asInt() << endl;
                        cout << "var minute=" << item["minute"].asInt()<< endl;
                        cout << "var second=" << item["second"].asInt() << endl;
                    } else if (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_3DNR) == 0) {  
                        cout << "var TDNR=" << item[ITEM_VALUE] << endl;  
                    } else {  
                        cout << "var " << name << "=" << item[ITEM_VALUE] << endl;
                    }  
               #else
                    /*for string value*/
                    if ((strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_RESOLUTION) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_WB) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_PICTURE_RESOLUTION) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_SET_STREAM_QUALITY) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_FAULT) == 0)) {
                        const char *value = item[ITEM_VALUE].asCString();
                        cout << "var " << name << "=" << value << endl;
                    } /*for int value*/
                    else if ((strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_RECORD_TIME) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_EXPOSURE) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_CONTRAST) == 0)) {
                        int value = item[ITEM_VALUE].asInt();
                        cout << "var " << name << "=" << value << endl;
                    }/*for bool value*/
                    else if ((strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_WATERMARK) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_MOVING) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_3DNR) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_IDC) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_SOUND) == 0) ||
                        (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_RECORD) == 0)) {
                        bool value = item[ITEM_VALUE].asBool();
                        cout << "var " << name << "=" << value << endl;
                    }
                    else if (strcasecmp(name, FWK_MSG_CONTROL_WRTC_CMD_SET_DATE_TIME) == 0) {
                        cout << "var year=" << item["year"].asInt() << endl;
                        cout << "var month=" << item["month"].asInt() << endl;
                        cout << "var day=" << item["day"].asInt() << endl;
                        cout << "var hour=" << item["hour"].asInt() << endl;
                        cout << "var minute=" << item["minute"].asInt()<< endl;
                        cout << "var second=" << item["second"].asInt() << endl;
                    }
                #endif    
                    }
                }
        }
   } 
}

static int export_video_params(void)
{
    int ret, i;
    FWK_MSG* msg;
    FWK_PROTOCOL_VIDEO_GET_PARAM_REQ video_req;
    FWK_MSG_JSON_MESSAGE_RSP *rsp;

    /* 1. get video param*/
    if(-1 == unix_sendmsg(MSG_ID_FWK_CONTROL_VIDEO_GET_PARAM_REQ, (unsigned char *)&video_req, sizeof(video_req)))
    {
        STK_ERROR("group get cmd send erro!");
        return -1;
    }
    msg = unix_recvmsg(MSG_TIMEOUT_500MS, &ret);
    if (ret < 0) {
        //printf("recv msg failed, ret = %d\n", ret);
        unix_release_msg(msg);
        return -1;
    }
#if 1
    rsp = (FWK_MSG_JSON_MESSAGE_RSP *)msg->para;
    params_json_msg_process(rsp);
#else
    FWK_PROTOCOL_VIDEO_GET_PARAM_RSP *rsp;
    rsp = (FWK_PROTOCOL_VIDEO_GET_PARAM_RSP*)msg->para;

    i = 0;
    while(i < rsp->stream_num) {
        printf("var fmt%d=\"PIX_FMT_NV12\";\n", i);
        printf("var frame_rate%d=\"%d\";\n", i, rsp->stream_info[i].video_config.frame_rate);
        printf("var level%d=\"%d\";\n", i, rsp->stream_info[i].video_config.level);
        printf("var gop_size%d=\"%d\";\n", i, rsp->stream_info[i].video_config.gop_size);
        printf("var profile%d=\"%d\";\n", i, rsp->stream_info[i].video_config.profile);
        printf("var qp_init%d=\"%d\";\n", i, rsp->stream_info[i].video_config.qp_init);
        printf("var qpstep%d=\"%d\";\n", i, rsp->stream_info[i].video_config.qp_step);
        printf("var qp_min%d=\"%d\";\n", i, rsp->stream_info[i].video_config.qp_min);
        printf("var qp_max%d=\"%d\";\n", i, rsp->stream_info[i].video_config.qp_max);
        printf("var rc_mode%d=\"%d\";\n", i, rsp->stream_info[i].video_config.rc_mode);
        printf("var width%d=\"%d\";\n", i, rsp->stream_info[i].video_config.width);
        printf("var height%d=\"%d\";\n", i, rsp->stream_info[i].video_config.height);
        printf("var bit_rate%d=\"%d\";\n", i, rsp->stream_info[i].video_config.bit_rate);
        printf("var quality%d=\"%d\";\n", i, rsp->stream_info[i].video_config.quality);
        i++;
    }
#endif    
    unix_release_msg(msg);
    return 0;
}

static int export_device_info(void)
{
    int ret;
    FWK_MSG* msg;
    FWK_MSG_GET_DEVICE_INFO_REQ req;
    FWK_MSG_JSON_MESSAGE_RSP *rsp;

    /*1. get devinfo*/
    if(-1 == unix_sendmsg(MSG_ID_FWK_CONTROL_DEVICE_INFO_REQ, (unsigned char *)&req, sizeof(req)))
    {
        STK_ERROR("group get cmd send erro!");
        return -1;
    }

    msg = unix_recvmsg(MSG_TIMEOUT_500MS, &ret);

    if (ret < 0) {
        //printf("recv msg failed, ret = %d\n", ret);
        unix_release_msg(msg);
        return -1;
     }
    rsp = (FWK_MSG_JSON_MESSAGE_RSP *)msg->para;
    common_json_msg_process(rsp);
/*    
    devinfo = (FWK_MSG_GET_DEVICE_INFO_RSP*)msg->para;

    printf("var cpu=\"%s\";\n", devinfo->dev_info.cpu);
    printf("var cputype=\"%s\";\n", devinfo->dev_info.cputype);
    printf("var deviceid=\"%s\";\n", devinfo->dev_info.deviceid);
    printf("var device_name=\"%s\";\n", devinfo->dev_info.device_name);
    printf("var manufacturer=\"%s\";\n", devinfo->dev_info.manufacturer);
    printf("var model=\"%s\";\n", devinfo->dev_info.model);
    printf("var version=\"%s\";\n", devinfo->dev_info.version);
*/
    unix_release_msg(msg);
    return 0;
}

static int export_device_status(void)
{
    int ret;
    FWK_MSG* msg;
    FWK_MSG_GET_DEVICE_STATUS_REQ req;
    FWK_MSG_GET_DEVICE_STATUS_RSP *rsp;
    
    /*1. get devinfo*/
    if(-1 == unix_sendmsg(MSG_ID_FWK_CONTROL_DEVICE_STATUS_REQ, (unsigned char *)&req, sizeof(req)))
    {
        STK_ERROR("group get cmd send erro!");
        return -1;
    }
    
    msg = unix_recvmsg(MSG_TIMEOUT_500MS, &ret);
    
    if (ret < 0) {
        //printf("recv msg failed, ret = %d\n", ret);
        unix_release_msg(msg);
        return -1;
     }
    rsp = (FWK_MSG_GET_DEVICE_STATUS_RSP*)msg->para;

    printf("var status_deviceid=\"%s\";\n", rsp->dev_status.deviceid);
    printf("var status=\"%s\";\n", rsp->dev_status.status);
    printf("var status_reason=\"%s\";\n", rsp->dev_status.reason);
    printf("var encode=\"%s\";\n", rsp->dev_status.encode);
    printf("var record=\"%s\";\n", rsp->dev_status.record);
    printf("var duty_status=\"%s\";\n", rsp->dev_status.duty_status);

    unix_release_msg(msg);
    return 0;
}

static int export_device_params(void)
{
    int ret;
    FWK_MSG* msg;
    FWK_MSG_CONTROL_WRTC_SETTINGS_REQ req;
    FWK_MSG_JSON_MESSAGE_RSP *rsp;
    char *item_name = NULL;

    /*1. get devinfo*/
    if(-1 == unix_sendmsg(MSG_ID_FWK_CONTROL_GET_PARAS_REQ, (unsigned char *)&req, sizeof(req)))
    {
        STK_ERROR("group get cmd send erro!");
        return -1;
    }
    
    msg = unix_recvmsg(MSG_TIMEOUT_500MS, &ret);
    
    if (ret < 0) {
        printf("recv msg failed, ret = %d\n", ret);
        unix_release_msg(msg);
        return -1;
     }
    rsp = (FWK_MSG_JSON_MESSAGE_RSP *)msg->para;
    params_json_msg_process(rsp);
#if 0
    get_params_rsp = (FWK_MSG_CONTROL_WRTC_SETTINGS_RSP*)msg->para;

    for(int i=0; i < get_params_rsp->nCount; i++)
    {
        item_name = get_params_rsp->items[i].itemName;

        /*js var should not start with digit*/
        if (!strcmp(item_name, "3DNR"))
        {
            printf("var %s=\"%d\";\n", "TDNR", get_params_rsp->items[i].value);
        }
        else if(1 == get_params_rsp->items[i].valueType)
        {
            printf("var %s=\"%s\";\n", item_name, get_params_rsp->items[i].valueStr);
        }
        else if(2 == get_params_rsp->items[i].valueType)
        {
            printf("var %s=\"%d\";\n", item_name, get_params_rsp->items[i].bValue);
        }
        else if(3 == get_params_rsp->items[i].valueType)
        {
            printf("var year=\"%d\";\n", get_params_rsp->items[i].dt.year);
            printf("var month=\"%d\";\n", get_params_rsp->items[i].dt.month);
            printf("var day=\"%d\";\n", get_params_rsp->items[i].dt.day);
            printf("var hour=\"%d\";\n", get_params_rsp->items[i].dt.hour);
            printf("var minute=\"%d\";\n", get_params_rsp->items[i].dt.minute);
            printf("var second=\"%d\";\n", get_params_rsp->items[i].dt.second);
        }
        else
        {
            printf("var %s=\"%d\";\n", item_name, get_params_rsp->items[i].value);
        }
    }
#endif
    unix_release_msg(msg);
    return 0;
}

int main(int argc ,char * argv[])
{
    FWK_MSG* msg;

    if(-1 == init_unix_ipc(NULL))
    {
        STK_DEBUG("init_unix_socket failed!");
        return -1;
    }

	export_photo_names();

	export_network_params();

    export_device_info();

    export_device_status();

    export_device_params();

    export_video_params();


    return 0;
}
