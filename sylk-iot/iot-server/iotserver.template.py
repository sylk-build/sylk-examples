
"""Init script for sylk.build template 
Generated thanks to -

                _   _    
               | | | |   
  ___   _   _  | | | | __
 / __| | | | | | | | |/ /
 \__ \ | |_| | | | |   < 
 |___/  \__, | |_| |_|\_\
         __/ |           
        |___/            



Author: 
"""
# Main sylk.build class to create gRPC services programmatically
# (Same inteface that sylk.build cli is built as wrapper for
# SylkArchitect whenever you generate new resource / create new project)
from sylk import SylkArchitect

# Some common utils modules to help us build the services faster
# and adds an validations to object before they created
from sylk.commons import helpers, file_system

# Sylk.build proto modules also helps us here to construct our services
# gRPC used to create another gRPC ! :)
from sylk.commons.protos.sylk.SylkServer.v1 import SylkServer_pb2
from sylk.commons.protos.sylk.SylkClient.v1 import SylkClient_pb2
from sylk.commons.protos.sylk.SylkCommons.v1 import SylkCommons_pb2

# Default system imports
import os
import sys
import argparse
import zlib

    
"""Initialize constants and SylkArchitect class"""
parser = argparse.ArgumentParser(
                    prog = '',
                    description = 'What the program does',
                    epilog = 'Text at the bottom of help')
parser.add_argument('--domain',default='sylklabs')           # optional argument
parser.add_argument('--project-name',default='')           # optional argument

args = parser.parse_args()

# Constants
_PATH = file_system.join_path(os.getcwd(), 'sylk.json') 
_DOMAIN = args.domain
_PROJECT_NAME = args.project_name
_SERVER_LANGUAGE = SylkServer_pb2.SylkServerLanguages.Name(SylkServer_pb2.SylkServerLanguages.go)
_HOST = 'localhost'
_PORT = 44880

# Initializing SylkArchitect class which we going to interact with
# It is used to create all of our 'sylk' resources
_architect = SylkArchitect(path=_PATH,
                             domain=_DOMAIN,
                             project_name=_PROJECT_NAME)
_architect.SetConfig({'host': _HOST, 'port': _PORT})
_architect.SetDomain(_DOMAIN)
    
"""Project specific configurations"""
    
# Init all the client to be used with your services
# Here we configured a python + typescript + go + webpack clients to be created with our services    
_clients = [{'language': 'python', 'out_dir': file_system.join_path(_PATH, 'clients', SylkClient_pb2.SylkClientLanguages.Name(SylkClient_pb2.SylkClientLanguages.python))}, {'language': 'typescript', 'out_dir': file_system.join_path(_PATH, 'clients', SylkClient_pb2.SylkClientLanguages.Name(SylkClient_pb2.SylkClientLanguages.typescript))}, {'language': 'go', 'out_dir': file_system.join_path(_PATH, 'clients', SylkClient_pb2.SylkClientLanguages.Name(SylkClient_pb2.SylkClientLanguages.go))}, {'language': 'webpack', 'out_dir': file_system.join_path(_PATH, 'clients', SylkClient_pb2.SylkClientLanguages.Name(SylkClient_pb2.SylkClientLanguages.webpack))}]
    
# Adding the base project data
_project = _architect.AddProject(server_language=_SERVER_LANGUAGE,
                                 clients=_clients)

# NOTE - that every call to SylkArchitect executions
# it will return the proto generated class of that object
# which can be used to enrich the sylk base structure
# or debug easly whats going on beneath the surface
# print(type(_project))
# <class 'sylk.SylkProject'>

    
# Creating enums values

        
# Creating enums   
 
        
"""Packages and thier resources"""
# Construct fields    

# Constructing a field for [sylklabs_iot_v1_PublishRequest_topic]
_field_sylklabs_iot_v1_PublishRequest_topic = helpers.SylkField(name='topic',
                              description='None',
                              label='LABEL_OPTIONAL',
                              type='TYPE_STRING',
                              message_type=None,
                              enum_type=None,
                              key_type=None,
                              value_type=None,
                              oneof_fields=None, # Not supporting templating with oneof_fields !
                              extensions=None)

# Constructing a field for [sylklabs_iot_v1_PublishRequest_data]
_field_sylklabs_iot_v1_PublishRequest_data = helpers.SylkField(name='data',
                              description='None',
                              label='LABEL_OPTIONAL',
                              type='TYPE_MESSAGE',
                              message_type=_DOMAIN + '.iot.v1.SensorData',
                              enum_type=None,
                              key_type=None,
                              value_type=None,
                              oneof_fields=None, # Not supporting templating with oneof_fields !
                              extensions=None)

# Constructing a field for [sylklabs_iot_v1_Topic_name]
_field_sylklabs_iot_v1_Topic_name = helpers.SylkField(name='name',
                              description='None',
                              label='LABEL_OPTIONAL',
                              type='TYPE_STRING',
                              message_type=None,
                              enum_type=None,
                              key_type=None,
                              value_type=None,
                              oneof_fields=None, # Not supporting templating with oneof_fields !
                              extensions=None)

# Constructing a field for [sylklabs_iot_v1_SensorData_sensor_id]
_field_sylklabs_iot_v1_SensorData_sensor_id = helpers.SylkField(name='sensor_id',
                              description='None',
                              label='LABEL_OPTIONAL',
                              type='TYPE_STRING',
                              message_type=None,
                              enum_type=None,
                              key_type=None,
                              value_type=None,
                              oneof_fields=None, # Not supporting templating with oneof_fields !
                              extensions=None)

# Constructing a field for [sylklabs_iot_v1_SensorData_value]
_field_sylklabs_iot_v1_SensorData_value = helpers.SylkField(name='value',
                              description='None',
                              label='LABEL_OPTIONAL',
                              type='TYPE_DOUBLE',
                              message_type=None,
                              enum_type=None,
                              key_type=None,
                              value_type=None,
                              oneof_fields=None, # Not supporting templating with oneof_fields !
                              extensions=None)

# Constructing a field for [sylklabs_iot_v1_SensorData_timestamp]
_field_sylklabs_iot_v1_SensorData_timestamp = helpers.SylkField(name='timestamp',
                              description='None',
                              label='LABEL_OPTIONAL',
                              type='TYPE_MESSAGE',
                              message_type='google.protobuf.Timestamp',
                              enum_type=None,
                              key_type=None,
                              value_type=None,
                              oneof_fields=None, # Not supporting templating with oneof_fields !
                              extensions=None)

# Packing all fields for [sylklabs_iot_v1_PublishRequest]
_msg_fields_sylklabs_iot_v1_PublishRequest = [_field_sylklabs_iot_v1_PublishRequest_topic,_field_sylklabs_iot_v1_PublishRequest_data]
# Packing all fields for [sylklabs_iot_v1_Topic]
_msg_fields_sylklabs_iot_v1_Topic = [_field_sylklabs_iot_v1_Topic_name]
# Packing all fields for [sylklabs_iot_v1_SensorData]
_msg_fields_sylklabs_iot_v1_SensorData = [_field_sylklabs_iot_v1_SensorData_sensor_id,_field_sylklabs_iot_v1_SensorData_value,_field_sylklabs_iot_v1_SensorData_timestamp]
    
# Construct messages

# Constructing message [sylklabs_iot_v1_PublishRequest]
_msg_sylklabs_iot_v1_PublishRequest = helpers.SylkMessage(name='PublishRequest',
                                 description='None',
                                 fields=_msg_fields_sylklabs_iot_v1_PublishRequest,
                                 extension_type=None,
                                 extensions=None)

# Constructing message [sylklabs_iot_v1_Topic]
_msg_sylklabs_iot_v1_Topic = helpers.SylkMessage(name='Topic',
                                 description='The Topic message represents the topic to which the IoT server and Grafana plugin will subscribe and publish. It will have a single field called name, which is a string representing the name of the topic.',
                                 fields=_msg_fields_sylklabs_iot_v1_Topic,
                                 extension_type=None,
                                 extensions=None)

# Constructing message [sylklabs_iot_v1_SensorData]
_msg_sylklabs_iot_v1_SensorData = helpers.SylkMessage(name='SensorData',
                                 description='None',
                                 fields=_msg_fields_sylklabs_iot_v1_SensorData,
                                 extension_type=None,
                                 extensions=None)

    
# Construct packages

_pkg_sylklabs_iot_v1 = helpers.SylkPackage(name='iot',
                                                messages=[_msg_sylklabs_iot_v1_PublishRequest,_msg_sylklabs_iot_v1_Topic,_msg_sylklabs_iot_v1_SensorData],
                                                enums=[],
                                                extensions=None)

# Unpacking package [sylklabs_iot_v1]
_pkg_sylklabs_iot_v1_name, _pkg_sylklabs_iot_v1_messages, _pkg_sylklabs_iot_v1_enums, _pkg_sylklabs_iot_v1_ext, _pkg_sylklabs_iot_v1_domain = _pkg_sylklabs_iot_v1.to_tuple()
    
# Add packages

# Adding package [sylklabs_iot_v1]
_pkg_sylklabs_iot_v1 = _architect.AddPackage(_pkg_sylklabs_iot_v1_name,
                                                    dependencies=[],
                                                    description='None',
                                                    domain=_pkg_sylklabs_iot_v1_domain,
                                                    extensions=_pkg_sylklabs_iot_v1_ext)
    
msgs_map = {}

# Add packages messages

for m in _pkg_sylklabs_iot_v1_messages:
	msg_name, msg_fields, msg_desc, msg_opt, msg_ext, msg_domain = m
	temp_msg = _architect.AddMessage(package=_pkg_sylklabs_iot_v1, name=msg_name, fields=msg_fields, description=msg_desc, options=msg_opt, extensions=msg_ext, domain=msg_domain)
	msgs_map[temp_msg.full_name] = temp_msg
    
# Add packages enums

for e in _pkg_sylklabs_iot_v1_enums:
	enum_name, enum_values, enum_desc, enum_domain = e
	_architect.AddEnum(package=_pkg_sylklabs_iot_v1, name=enum_name, enum_values=enum_values, description=enum_desc, domain=enum_domain)
    
"""Services and thier resources"""
# Construct rpc's

_rpc_sylklabs_iot_v1_IotService_Subscribe = helpers.SylkRPC(name='Subscribe',client_stream=None,server_stream=True,in_type=msgs_map[_DOMAIN+'.iot.v1.Topic'].full_name, out_type=msgs_map[_DOMAIN+'.iot.v1.SensorData'].full_name, description='None')
_rpc_sylklabs_iot_v1_IotService_Publish = helpers.SylkRPC(name='Publish',client_stream=None,server_stream=None,in_type=msgs_map[_DOMAIN+'.iot.v1.PublishRequest'].full_name, out_type=msgs_map[_DOMAIN+'.protobuf.Empty'].full_name, description='None')
        
# Construct services

_svc_IotService = helpers.SylkService('IotService',
                                                methods=[_rpc_sylklabs_iot_v1_IotService_Subscribe,_rpc_sylklabs_iot_v1_IotService_Publish],
                                                dependencies=[],
                                                description='None',
                                                extensions=None)

_svc_IotService_name, _svc_IotService_methods, _svc_IotService_dependencies, _svc_IotService_desc, _svc_IotService_ext = _svc_IotService.to_tuple()
        
# Add services

_svc_IotService = _architect.AddService(_svc_IotService_name,_svc_IotService_dependencies,_svc_IotService_desc,[],extensions=_svc_IotService_ext)
        

for rpc in _svc_IotService_methods:
	rpc_name, rpc_in_out, rpc_desc = rpc
	_architect.AddRPC(_svc_IotService, rpc_name, rpc_in_out, rpc_desc)
    
_architect.Save()
    