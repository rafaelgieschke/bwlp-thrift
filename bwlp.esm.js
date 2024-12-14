import {Thrift} from "./thrift.esm.js"
export let MasterServer_ping_args;
export let MasterServer_ping_result;
export let MasterServer_authenticate_args;
export let MasterServer_authenticate_result;
export let MasterServer_localAccountLogin_args;
export let MasterServer_localAccountLogin_result;
export let MasterServer_setUsedSatellite_args;
export let MasterServer_setUsedSatellite_result;
export let MasterServer_findUser_args;
export let MasterServer_findUser_result;
export let MasterServer_getPublicImages_args;
export let MasterServer_getPublicImages_result;
export let MasterServer_getImageDetails_args;
export let MasterServer_getImageDetails_result;
export let MasterServer_getUser_args;
export let MasterServer_getUser_result;
export let MasterServer_invalidateSession_args;
export let MasterServer_invalidateSession_result;
export let MasterServer_getSessionFromAccessCode_args;
export let MasterServer_getSessionFromAccessCode_result;
export let MasterServer_getUserFromToken_args;
export let MasterServer_getUserFromToken_result;
export let MasterServer_isServerAuthenticated_args;
export let MasterServer_isServerAuthenticated_result;
export let MasterServer_startServerAuthentication_args;
export let MasterServer_startServerAuthentication_result;
export let MasterServer_serverAuthenticate_args;
export let MasterServer_serverAuthenticate_result;
export let MasterServer_getImageData_args;
export let MasterServer_getImageData_result;
export let MasterServer_submitImage_args;
export let MasterServer_submitImage_result;
export let MasterServer_registerSatellite_args;
export let MasterServer_registerSatellite_result;
export let MasterServer_updateSatellite_args;
export let MasterServer_updateSatellite_result;
export let MasterServer_downloadImage_args;
export let MasterServer_downloadImage_result;
export let MasterServer_getOrganizations_args;
export let MasterServer_getOrganizations_result;
export let MasterServer_getOperatingSystems_args;
export let MasterServer_getOperatingSystems_result;
export let MasterServer_getVirtualizers_args;
export let MasterServer_getVirtualizers_result;
export let MasterServer_getTags_args;
export let MasterServer_getTags_result;
export let MasterServer_getSoftware_args;
export let MasterServer_getSoftware_result;
export let MasterServer_queryUploadStatus_args;
export let MasterServer_queryUploadStatus_result;
export let MasterServerClient;
export let SatelliteServer_getVersion_args;
export let SatelliteServer_getVersion_result;
export let SatelliteServer_getSupportedFeatures_args;
export let SatelliteServer_getSupportedFeatures_result;
export let SatelliteServer_getConfiguration_args;
export let SatelliteServer_getConfiguration_result;
export let SatelliteServer_requestImageVersionUpload_args;
export let SatelliteServer_requestImageVersionUpload_result;
export let SatelliteServer_updateBlockHashes_args;
export let SatelliteServer_updateBlockHashes_result;
export let SatelliteServer_setUploadOptions_args;
export let SatelliteServer_setUploadOptions_result;
export let SatelliteServer_cancelUpload_args;
export let SatelliteServer_cancelUpload_result;
export let SatelliteServer_queryUploadStatus_args;
export let SatelliteServer_queryUploadStatus_result;
export let SatelliteServer_requestDownload_args;
export let SatelliteServer_requestDownload_result;
export let SatelliteServer_cancelDownload_args;
export let SatelliteServer_cancelDownload_result;
export let SatelliteServer_isAuthenticated_args;
export let SatelliteServer_isAuthenticated_result;
export let SatelliteServer_whoami_args;
export let SatelliteServer_whoami_result;
export let SatelliteServer_invalidateSession_args;
export let SatelliteServer_invalidateSession_result;
export let SatelliteServer_getUserList_args;
export let SatelliteServer_getUserList_result;
export let SatelliteServer_getUserConfig_args;
export let SatelliteServer_getUserConfig_result;
export let SatelliteServer_setUserConfig_args;
export let SatelliteServer_setUserConfig_result;
export let SatelliteServer_getOperatingSystems_args;
export let SatelliteServer_getOperatingSystems_result;
export let SatelliteServer_getVirtualizers_args;
export let SatelliteServer_getVirtualizers_result;
export let SatelliteServer_getAllOrganizations_args;
export let SatelliteServer_getAllOrganizations_result;
export let SatelliteServer_getLocations_args;
export let SatelliteServer_getLocations_result;
export let SatelliteServer_getStatus_args;
export let SatelliteServer_getStatus_result;
export let SatelliteServer_getImageList_args;
export let SatelliteServer_getImageList_result;
export let SatelliteServer_getImageDetails_args;
export let SatelliteServer_getImageDetails_result;
export let SatelliteServer_createImage_args;
export let SatelliteServer_createImage_result;
export let SatelliteServer_updateImageBase_args;
export let SatelliteServer_updateImageBase_result;
export let SatelliteServer_updateImageVersion_args;
export let SatelliteServer_updateImageVersion_result;
export let SatelliteServer_deleteImageVersion_args;
export let SatelliteServer_deleteImageVersion_result;
export let SatelliteServer_deleteImageBase_args;
export let SatelliteServer_deleteImageBase_result;
export let SatelliteServer_writeImagePermissions_args;
export let SatelliteServer_writeImagePermissions_result;
export let SatelliteServer_getImagePermissions_args;
export let SatelliteServer_getImagePermissions_result;
export let SatelliteServer_setImageOwner_args;
export let SatelliteServer_setImageOwner_result;
export let SatelliteServer_setImageVersionExpiry_args;
export let SatelliteServer_setImageVersionExpiry_result;
export let SatelliteServer_getImageVersionVirtConfig_args;
export let SatelliteServer_getImageVersionVirtConfig_result;
export let SatelliteServer_setImageVersionVirtConfig_args;
export let SatelliteServer_setImageVersionVirtConfig_result;
export let SatelliteServer_requestImageReplication_args;
export let SatelliteServer_requestImageReplication_result;
export let SatelliteServer_publishImageVersion_args;
export let SatelliteServer_publishImageVersion_result;
export let SatelliteServer_createLecture_args;
export let SatelliteServer_createLecture_result;
export let SatelliteServer_updateLecture_args;
export let SatelliteServer_updateLecture_result;
export let SatelliteServer_getLectureList_args;
export let SatelliteServer_getLectureList_result;
export let SatelliteServer_getLectureDetails_args;
export let SatelliteServer_getLectureDetails_result;
export let SatelliteServer_deleteLecture_args;
export let SatelliteServer_deleteLecture_result;
export let SatelliteServer_writeLecturePermissions_args;
export let SatelliteServer_writeLecturePermissions_result;
export let SatelliteServer_getLecturePermissions_args;
export let SatelliteServer_getLecturePermissions_result;
export let SatelliteServer_setLectureOwner_args;
export let SatelliteServer_setLectureOwner_result;
export let SatelliteServer_getPredefinedData_args;
export let SatelliteServer_getPredefinedData_result;
export let SatelliteServerClient;
export let AuthorizationError;
export let InvocationError;
export let ShareMode;
export let NetDirection;
export let Role;
export let TransferState;
export let DateParamError;
export let NetShareAuth;
export let SscMode;
export let UserInfo;
export let WhoamiInfo;
export let Organization;
export let Satellite;
export let SessionData;
export let ClientSessionData;
export let ServerSessionData;
export let Virtualizer;
export let OperatingSystem;
export let ImagePermissions;
export let LecturePermissions;
export let ImageBaseWrite;
export let ImageVersionWrite;
export let ImageSummaryRead;
export let ImageVersionDetails;
export let ImageDetailsRead;
export let ImagePublishData;
export let NetRule;
export let NetShare;
export let LdapFilter;
export let PresetRunScript;
export let PresetNetRule;
export let PredefinedData;
export let LectureWrite;
export let LectureSummary;
export let LectureRead;
export let MasterTag;
export let MasterSoftware;
export let TransferInformation;
export let TransferStatus;
export let UploadOptions;
export let SatelliteConfig;
export let SatelliteStatus;
export let SatelliteUserConfig;
export let Location;
export let TTransferRejectedException;
export let TAuthorizationException;
export let TInvalidTokenException;
export let TNotFoundException;
export let TInvalidDateParam;
export let TInvocationException;
//
// Autogenerated by Thrift Compiler (0.19.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  const Int64 = require('node-int64');
}


//HELPER FUNCTIONS AND STRUCTURES

MasterServer_ping_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_ping_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_ping_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.BOOL) {
          this.success = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_ping_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
      output.writeBool(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_authenticate_args = class {
  constructor(args) {
    this.login = null;
    this.password = null;
    if (args) {
      if (args.login !== undefined && args.login !== null) {
        this.login = args.login;
      }
      if (args.password !== undefined && args.password !== null) {
        this.password = args.password;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.login = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.password = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_authenticate_args');
    if (this.login !== null && this.login !== undefined) {
      output.writeFieldBegin('login', Thrift.Type.STRING, 1);
      output.writeString(this.login);
      output.writeFieldEnd();
    }
    if (this.password !== null && this.password !== undefined) {
      output.writeFieldBegin('password', Thrift.Type.STRING, 2);
      output.writeString(this.password);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_authenticate_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new SessionData(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new SessionData();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_authenticate_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_localAccountLogin_args = class {
  constructor(args) {
    this.login = null;
    this.password = null;
    if (args) {
      if (args.login !== undefined && args.login !== null) {
        this.login = args.login;
      }
      if (args.password !== undefined && args.password !== null) {
        this.password = args.password;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.login = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.password = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_localAccountLogin_args');
    if (this.login !== null && this.login !== undefined) {
      output.writeFieldBegin('login', Thrift.Type.STRING, 1);
      output.writeString(this.login);
      output.writeFieldEnd();
    }
    if (this.password !== null && this.password !== undefined) {
      output.writeFieldBegin('password', Thrift.Type.STRING, 2);
      output.writeString(this.password);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_localAccountLogin_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ClientSessionData(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ClientSessionData();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_localAccountLogin_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_setUsedSatellite_args = class {
  constructor(args) {
    this.sessionId = null;
    this.satelliteName = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.satelliteName !== undefined && args.satelliteName !== null) {
        this.satelliteName = args.satelliteName;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.satelliteName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_setUsedSatellite_args');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.satelliteName !== null && this.satelliteName !== undefined) {
      output.writeFieldBegin('satelliteName', Thrift.Type.STRING, 2);
      output.writeString(this.satelliteName);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_setUsedSatellite_result = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_setUsedSatellite_result');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_findUser_args = class {
  constructor(args) {
    this.sessionId = null;
    this.organizationId = null;
    this.searchTerm = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.organizationId !== undefined && args.organizationId !== null) {
        this.organizationId = args.organizationId;
      }
      if (args.searchTerm !== undefined && args.searchTerm !== null) {
        this.searchTerm = args.searchTerm;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.organizationId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.searchTerm = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_findUser_args');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.organizationId !== null && this.organizationId !== undefined) {
      output.writeFieldBegin('organizationId', Thrift.Type.STRING, 2);
      output.writeString(this.organizationId);
      output.writeFieldEnd();
    }
    if (this.searchTerm !== null && this.searchTerm !== undefined) {
      output.writeFieldBegin('searchTerm', Thrift.Type.STRING, 3);
      output.writeString(this.searchTerm);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_findUser_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [UserInfo]);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3266 = input.readListBegin();
          const _size265 = _rtmp3266.size || 0;
          for (let _i267 = 0; _i267 < _size265; ++_i267) {
            let elem268 = null;
            elem268 = new UserInfo();
            elem268.read(input);
            this.success.push(elem268);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_findUser_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter269 in this.success) {
        if (this.success.hasOwnProperty(iter269)) {
          iter269 = this.success[iter269];
          iter269.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getPublicImages_args = class {
  constructor(args) {
    this.sessionId = null;
    this.page = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.page !== undefined && args.page !== null) {
        this.page = args.page;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.page = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getPublicImages_args');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.page !== null && this.page !== undefined) {
      output.writeFieldBegin('page', Thrift.Type.I32, 2);
      output.writeI32(this.page);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getPublicImages_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [ImageSummaryRead]);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3271 = input.readListBegin();
          const _size270 = _rtmp3271.size || 0;
          for (let _i272 = 0; _i272 < _size270; ++_i272) {
            let elem273 = null;
            elem273 = new ImageSummaryRead();
            elem273.read(input);
            this.success.push(elem273);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getPublicImages_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter274 in this.success) {
        if (this.success.hasOwnProperty(iter274)) {
          iter274 = this.success[iter274];
          iter274.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getImageDetails_args = class {
  constructor(args) {
    this.sessionId = null;
    this.imageBaseId = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getImageDetails_args');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getImageDetails_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ImageDetailsRead(args.success);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ImageDetailsRead();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getImageDetails_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getUser_args = class {
  constructor(args) {
    this.userToken = null;
    this.userId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.userId !== undefined && args.userId !== null) {
        this.userId = args.userId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.userId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getUser_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.userId !== null && this.userId !== undefined) {
      output.writeFieldBegin('userId', Thrift.Type.STRING, 2);
      output.writeString(this.userId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getUser_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new UserInfo(args.success);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new UserInfo();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getUser_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_invalidateSession_args = class {
  constructor(args) {
    this.sessionId = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_invalidateSession_args');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_invalidateSession_result = class {
  constructor(args) {
    this.ex = null;
    if (args instanceof TInvalidTokenException) {
        this.ex = args;
        return;
    }
    if (args) {
      if (args.ex !== undefined && args.ex !== null) {
        this.ex = args.ex;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex = new TInvalidTokenException();
          this.ex.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_invalidateSession_result');
    if (this.ex !== null && this.ex !== undefined) {
      output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
      this.ex.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getSessionFromAccessCode_args = class {
  constructor(args) {
    this.accessCode = null;
    if (args) {
      if (args.accessCode !== undefined && args.accessCode !== null) {
        this.accessCode = args.accessCode;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.accessCode = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getSessionFromAccessCode_args');
    if (this.accessCode !== null && this.accessCode !== undefined) {
      output.writeFieldBegin('accessCode', Thrift.Type.STRING, 1);
      output.writeString(this.accessCode);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getSessionFromAccessCode_result = class {
  constructor(args) {
    this.success = null;
    this.notFound = null;
    this.auth = null;
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TAuthorizationException) {
        this.auth = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ClientSessionData(args.success);
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.auth !== undefined && args.auth !== null) {
        this.auth = args.auth;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ClientSessionData();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.auth = new TAuthorizationException();
          this.auth.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getSessionFromAccessCode_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 1);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.auth !== null && this.auth !== undefined) {
      output.writeFieldBegin('auth', Thrift.Type.STRUCT, 2);
      this.auth.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getUserFromToken_args = class {
  constructor(args) {
    this.token = null;
    if (args) {
      if (args.token !== undefined && args.token !== null) {
        this.token = args.token;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.token = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getUserFromToken_args');
    if (this.token !== null && this.token !== undefined) {
      output.writeFieldBegin('token', Thrift.Type.STRING, 1);
      output.writeString(this.token);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getUserFromToken_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    if (args instanceof TInvalidTokenException) {
        this.failure = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new UserInfo(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new UserInfo();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TInvalidTokenException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getUserFromToken_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_isServerAuthenticated_args = class {
  constructor(args) {
    this.serverSessionId = null;
    if (args) {
      if (args.serverSessionId !== undefined && args.serverSessionId !== null) {
        this.serverSessionId = args.serverSessionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.serverSessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_isServerAuthenticated_args');
    if (this.serverSessionId !== null && this.serverSessionId !== undefined) {
      output.writeFieldBegin('serverSessionId', Thrift.Type.STRING, 1);
      output.writeString(this.serverSessionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_isServerAuthenticated_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.BOOL) {
          this.success = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_isServerAuthenticated_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
      output.writeBool(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_startServerAuthentication_args = class {
  constructor(args) {
    this.satelliteId = null;
    if (args) {
      if (args.satelliteId !== undefined && args.satelliteId !== null) {
        this.satelliteId = args.satelliteId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.satelliteId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_startServerAuthentication_args');
    if (this.satelliteId !== null && this.satelliteId !== undefined) {
      output.writeFieldBegin('satelliteId', Thrift.Type.I32, 1);
      output.writeI32(this.satelliteId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_startServerAuthentication_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_startServerAuthentication_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeBinary(this.success);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_serverAuthenticate_args = class {
  constructor(args) {
    this.satelliteId = null;
    this.challengeResponse = null;
    if (args) {
      if (args.satelliteId !== undefined && args.satelliteId !== null) {
        this.satelliteId = args.satelliteId;
      }
      if (args.challengeResponse !== undefined && args.challengeResponse !== null) {
        this.challengeResponse = args.challengeResponse;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.satelliteId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.challengeResponse = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_serverAuthenticate_args');
    if (this.satelliteId !== null && this.satelliteId !== undefined) {
      output.writeFieldBegin('satelliteId', Thrift.Type.I32, 1);
      output.writeI32(this.satelliteId);
      output.writeFieldEnd();
    }
    if (this.challengeResponse !== null && this.challengeResponse !== undefined) {
      output.writeFieldBegin('challengeResponse', Thrift.Type.STRING, 2);
      output.writeBinary(this.challengeResponse);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_serverAuthenticate_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.errr = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.errr = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ServerSessionData(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.errr !== undefined && args.errr !== null) {
        this.errr = args.errr;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ServerSessionData();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.errr = new TInvocationException();
          this.errr.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_serverAuthenticate_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.errr !== null && this.errr !== undefined) {
      output.writeFieldBegin('errr', Thrift.Type.STRUCT, 2);
      this.errr.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getImageData_args = class {
  constructor(args) {
    this.serverSessionId = null;
    this.imageVersionId = null;
    if (args) {
      if (args.serverSessionId !== undefined && args.serverSessionId !== null) {
        this.serverSessionId = args.serverSessionId;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.serverSessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getImageData_args');
    if (this.serverSessionId !== null && this.serverSessionId !== undefined) {
      output.writeFieldBegin('serverSessionId', Thrift.Type.STRING, 1);
      output.writeString(this.serverSessionId);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getImageData_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.failure2 = null;
    this.f3 = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.failure2 = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.f3 = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ImagePublishData(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.failure2 !== undefined && args.failure2 !== null) {
        this.failure2 = args.failure2;
      }
      if (args.f3 !== undefined && args.f3 !== null) {
        this.f3 = args.f3;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ImagePublishData();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure2 = new TInvocationException();
          this.failure2.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.f3 = new TNotFoundException();
          this.f3.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getImageData_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.failure2 !== null && this.failure2 !== undefined) {
      output.writeFieldBegin('failure2', Thrift.Type.STRUCT, 2);
      this.failure2.write(output);
      output.writeFieldEnd();
    }
    if (this.f3 !== null && this.f3 !== undefined) {
      output.writeFieldBegin('f3', Thrift.Type.STRUCT, 3);
      this.f3.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_submitImage_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageDescription = null;
    this.blockHashes = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageDescription !== undefined && args.imageDescription !== null) {
        this.imageDescription = new ImagePublishData(args.imageDescription);
      }
      if (args.blockHashes !== undefined && args.blockHashes !== null) {
        this.blockHashes = Thrift.copyList(args.blockHashes, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.imageDescription = new ImagePublishData();
          this.imageDescription.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.blockHashes = [];
          const _rtmp3276 = input.readListBegin();
          const _size275 = _rtmp3276.size || 0;
          for (let _i277 = 0; _i277 < _size275; ++_i277) {
            let elem278 = null;
            elem278 = input.readBinary().value;
            this.blockHashes.push(elem278);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_submitImage_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageDescription !== null && this.imageDescription !== undefined) {
      output.writeFieldBegin('imageDescription', Thrift.Type.STRUCT, 2);
      this.imageDescription.write(output);
      output.writeFieldEnd();
    }
    if (this.blockHashes !== null && this.blockHashes !== undefined) {
      output.writeFieldBegin('blockHashes', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.STRING, this.blockHashes.length);
      for (let iter279 in this.blockHashes) {
        if (this.blockHashes.hasOwnProperty(iter279)) {
          iter279 = this.blockHashes[iter279];
          output.writeBinary(iter279);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_submitImage_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.failure2 = null;
    this.failure3 = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.failure2 = args;
        return;
    }
    if (args instanceof TTransferRejectedException) {
        this.failure3 = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new TransferInformation(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.failure2 !== undefined && args.failure2 !== null) {
        this.failure2 = args.failure2;
      }
      if (args.failure3 !== undefined && args.failure3 !== null) {
        this.failure3 = args.failure3;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new TransferInformation();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure2 = new TInvocationException();
          this.failure2.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure3 = new TTransferRejectedException();
          this.failure3.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_submitImage_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.failure2 !== null && this.failure2 !== undefined) {
      output.writeFieldBegin('failure2', Thrift.Type.STRUCT, 2);
      this.failure2.write(output);
      output.writeFieldEnd();
    }
    if (this.failure3 !== null && this.failure3 !== undefined) {
      output.writeFieldBegin('failure3', Thrift.Type.STRUCT, 3);
      this.failure3.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_registerSatellite_args = class {
  constructor(args) {
    this.userToken = null;
    this.displayName = null;
    this.addresses = null;
    this.modulus = null;
    this.exponent = null;
    this.certsha256 = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.displayName !== undefined && args.displayName !== null) {
        this.displayName = args.displayName;
      }
      if (args.addresses !== undefined && args.addresses !== null) {
        this.addresses = Thrift.copyList(args.addresses, [null]);
      }
      if (args.modulus !== undefined && args.modulus !== null) {
        this.modulus = args.modulus;
      }
      if (args.exponent !== undefined && args.exponent !== null) {
        this.exponent = args.exponent;
      }
      if (args.certsha256 !== undefined && args.certsha256 !== null) {
        this.certsha256 = args.certsha256;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 6:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.displayName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.LIST) {
          this.addresses = [];
          const _rtmp3281 = input.readListBegin();
          const _size280 = _rtmp3281.size || 0;
          for (let _i282 = 0; _i282 < _size280; ++_i282) {
            let elem283 = null;
            elem283 = input.readString().value;
            this.addresses.push(elem283);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.modulus = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.exponent = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.certsha256 = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_registerSatellite_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 6);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.displayName !== null && this.displayName !== undefined) {
      output.writeFieldBegin('displayName', Thrift.Type.STRING, 5);
      output.writeString(this.displayName);
      output.writeFieldEnd();
    }
    if (this.addresses !== null && this.addresses !== undefined) {
      output.writeFieldBegin('addresses', Thrift.Type.LIST, 2);
      output.writeListBegin(Thrift.Type.STRING, this.addresses.length);
      for (let iter284 in this.addresses) {
        if (this.addresses.hasOwnProperty(iter284)) {
          iter284 = this.addresses[iter284];
          output.writeString(iter284);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.modulus !== null && this.modulus !== undefined) {
      output.writeFieldBegin('modulus', Thrift.Type.STRING, 3);
      output.writeString(this.modulus);
      output.writeFieldEnd();
    }
    if (this.exponent !== null && this.exponent !== undefined) {
      output.writeFieldBegin('exponent', Thrift.Type.STRING, 4);
      output.writeString(this.exponent);
      output.writeFieldEnd();
    }
    if (this.certsha256 !== null && this.certsha256 !== undefined) {
      output.writeFieldBegin('certsha256', Thrift.Type.STRING, 1);
      output.writeBinary(this.certsha256);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_registerSatellite_result = class {
  constructor(args) {
    this.success = null;
    this.error = null;
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.I32) {
          this.success = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_registerSatellite_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.I32, 0);
      output.writeI32(this.success);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_updateSatellite_args = class {
  constructor(args) {
    this.serverSessionId = null;
    this.displayName = null;
    this.addresses = null;
    if (args) {
      if (args.serverSessionId !== undefined && args.serverSessionId !== null) {
        this.serverSessionId = args.serverSessionId;
      }
      if (args.displayName !== undefined && args.displayName !== null) {
        this.displayName = args.displayName;
      }
      if (args.addresses !== undefined && args.addresses !== null) {
        this.addresses = Thrift.copyList(args.addresses, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.serverSessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.displayName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.addresses = [];
          const _rtmp3286 = input.readListBegin();
          const _size285 = _rtmp3286.size || 0;
          for (let _i287 = 0; _i287 < _size285; ++_i287) {
            let elem288 = null;
            elem288 = input.readString().value;
            this.addresses.push(elem288);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_updateSatellite_args');
    if (this.serverSessionId !== null && this.serverSessionId !== undefined) {
      output.writeFieldBegin('serverSessionId', Thrift.Type.STRING, 1);
      output.writeString(this.serverSessionId);
      output.writeFieldEnd();
    }
    if (this.displayName !== null && this.displayName !== undefined) {
      output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
      output.writeString(this.displayName);
      output.writeFieldEnd();
    }
    if (this.addresses !== null && this.addresses !== undefined) {
      output.writeFieldBegin('addresses', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.STRING, this.addresses.length);
      for (let iter289 in this.addresses) {
        if (this.addresses.hasOwnProperty(iter289)) {
          iter289 = this.addresses[iter289];
          output.writeString(iter289);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_updateSatellite_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.BOOL) {
          this.success = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_updateSatellite_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
      output.writeBool(this.success);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_downloadImage_args = class {
  constructor(args) {
    this.sessionId = null;
    this.imageVersionId = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_downloadImage_args');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 2);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 1);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_downloadImage_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.failure2 = null;
    this.f3 = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.failure2 = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.f3 = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new TransferInformation(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.failure2 !== undefined && args.failure2 !== null) {
        this.failure2 = args.failure2;
      }
      if (args.f3 !== undefined && args.f3 !== null) {
        this.f3 = args.f3;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new TransferInformation();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure2 = new TInvocationException();
          this.failure2.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.f3 = new TNotFoundException();
          this.f3.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_downloadImage_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.failure2 !== null && this.failure2 !== undefined) {
      output.writeFieldBegin('failure2', Thrift.Type.STRUCT, 2);
      this.failure2.write(output);
      output.writeFieldEnd();
    }
    if (this.f3 !== null && this.f3 !== undefined) {
      output.writeFieldBegin('f3', Thrift.Type.STRUCT, 3);
      this.f3.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getOrganizations_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getOrganizations_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getOrganizations_result = class {
  constructor(args) {
    this.success = null;
    this.serverError = null;
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [Organization]);
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3291 = input.readListBegin();
          const _size290 = _rtmp3291.size || 0;
          for (let _i292 = 0; _i292 < _size290; ++_i292) {
            let elem293 = null;
            elem293 = new Organization();
            elem293.read(input);
            this.success.push(elem293);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getOrganizations_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter294 in this.success) {
        if (this.success.hasOwnProperty(iter294)) {
          iter294 = this.success[iter294];
          iter294.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 1);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getOperatingSystems_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getOperatingSystems_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getOperatingSystems_result = class {
  constructor(args) {
    this.success = null;
    this.serverError = null;
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [OperatingSystem]);
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3296 = input.readListBegin();
          const _size295 = _rtmp3296.size || 0;
          for (let _i297 = 0; _i297 < _size295; ++_i297) {
            let elem298 = null;
            elem298 = new OperatingSystem();
            elem298.read(input);
            this.success.push(elem298);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getOperatingSystems_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter299 in this.success) {
        if (this.success.hasOwnProperty(iter299)) {
          iter299 = this.success[iter299];
          iter299.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 1);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getVirtualizers_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getVirtualizers_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getVirtualizers_result = class {
  constructor(args) {
    this.success = null;
    this.serverError = null;
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [Virtualizer]);
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3301 = input.readListBegin();
          const _size300 = _rtmp3301.size || 0;
          for (let _i302 = 0; _i302 < _size300; ++_i302) {
            let elem303 = null;
            elem303 = new Virtualizer();
            elem303.read(input);
            this.success.push(elem303);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getVirtualizers_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter304 in this.success) {
        if (this.success.hasOwnProperty(iter304)) {
          iter304 = this.success[iter304];
          iter304.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 1);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getTags_args = class {
  constructor(args) {
    this.startDate = null;
    if (args) {
      if (args.startDate !== undefined && args.startDate !== null) {
        this.startDate = args.startDate;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I64) {
          this.startDate = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getTags_args');
    if (this.startDate !== null && this.startDate !== undefined) {
      output.writeFieldBegin('startDate', Thrift.Type.I64, 1);
      output.writeI64(this.startDate);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getTags_result = class {
  constructor(args) {
    this.success = null;
    this.serverError = null;
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [MasterTag]);
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3306 = input.readListBegin();
          const _size305 = _rtmp3306.size || 0;
          for (let _i307 = 0; _i307 < _size305; ++_i307) {
            let elem308 = null;
            elem308 = new MasterTag();
            elem308.read(input);
            this.success.push(elem308);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getTags_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter309 in this.success) {
        if (this.success.hasOwnProperty(iter309)) {
          iter309 = this.success[iter309];
          iter309.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 1);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getSoftware_args = class {
  constructor(args) {
    this.startDate = null;
    if (args) {
      if (args.startDate !== undefined && args.startDate !== null) {
        this.startDate = args.startDate;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I64) {
          this.startDate = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getSoftware_args');
    if (this.startDate !== null && this.startDate !== undefined) {
      output.writeFieldBegin('startDate', Thrift.Type.I64, 1);
      output.writeI64(this.startDate);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_getSoftware_result = class {
  constructor(args) {
    this.success = null;
    this.serverError = null;
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [MasterSoftware]);
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3311 = input.readListBegin();
          const _size310 = _rtmp3311.size || 0;
          for (let _i312 = 0; _i312 < _size310; ++_i312) {
            let elem313 = null;
            elem313 = new MasterSoftware();
            elem313.read(input);
            this.success.push(elem313);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_getSoftware_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter314 in this.success) {
        if (this.success.hasOwnProperty(iter314)) {
          iter314 = this.success[iter314];
          iter314.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 1);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_queryUploadStatus_args = class {
  constructor(args) {
    this.uploadToken = null;
    if (args) {
      if (args.uploadToken !== undefined && args.uploadToken !== null) {
        this.uploadToken = args.uploadToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.uploadToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_queryUploadStatus_args');
    if (this.uploadToken !== null && this.uploadToken !== undefined) {
      output.writeFieldBegin('uploadToken', Thrift.Type.STRING, 1);
      output.writeString(this.uploadToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServer_queryUploadStatus_result = class {
  constructor(args) {
    this.success = null;
    this.ex1 = null;
    if (args instanceof TInvalidTokenException) {
        this.ex1 = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new TransferStatus(args.success);
      }
      if (args.ex1 !== undefined && args.ex1 !== null) {
        this.ex1 = args.ex1;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new TransferStatus();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex1 = new TInvalidTokenException();
          this.ex1.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterServer_queryUploadStatus_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.ex1 !== null && this.ex1 !== undefined) {
      output.writeFieldBegin('ex1', Thrift.Type.STRUCT, 1);
      this.ex1.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterServerClient = class MasterServerClient {
  constructor(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
  }

  ping () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_ping((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_ping (callback) {
    const args = new MasterServer_ping_args();
    try {
      this.output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_ping();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_ping () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_ping_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'ping failed: unknown result';
  }

  authenticate (login, password) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_authenticate(login, password, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_authenticate (login, password, callback) {
    const params = {
      login: login,
      password: password
    };
    const args = new MasterServer_authenticate_args(params);
    try {
      this.output.writeMessageBegin('authenticate', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_authenticate();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_authenticate () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_authenticate_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'authenticate failed: unknown result';
  }

  localAccountLogin (login, password) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_localAccountLogin(login, password, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_localAccountLogin (login, password, callback) {
    const params = {
      login: login,
      password: password
    };
    const args = new MasterServer_localAccountLogin_args(params);
    try {
      this.output.writeMessageBegin('localAccountLogin', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_localAccountLogin();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_localAccountLogin () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_localAccountLogin_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'localAccountLogin failed: unknown result';
  }

  setUsedSatellite (sessionId, satelliteName) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setUsedSatellite(sessionId, satelliteName, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setUsedSatellite (sessionId, satelliteName, callback) {
    const params = {
      sessionId: sessionId,
      satelliteName: satelliteName
    };
    const args = new MasterServer_setUsedSatellite_args(params);
    try {
      this.output.writeMessageBegin('setUsedSatellite', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setUsedSatellite();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setUsedSatellite () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_setUsedSatellite_result();
    result.read(this.input);
    this.input.readMessageEnd();

    return;
  }

  findUser (sessionId, organizationId, searchTerm) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_findUser(sessionId, organizationId, searchTerm, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_findUser (sessionId, organizationId, searchTerm, callback) {
    const params = {
      sessionId: sessionId,
      organizationId: organizationId,
      searchTerm: searchTerm
    };
    const args = new MasterServer_findUser_args(params);
    try {
      this.output.writeMessageBegin('findUser', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_findUser();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_findUser () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_findUser_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'findUser failed: unknown result';
  }

  getPublicImages (sessionId, page) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getPublicImages(sessionId, page, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getPublicImages (sessionId, page, callback) {
    const params = {
      sessionId: sessionId,
      page: page
    };
    const args = new MasterServer_getPublicImages_args(params);
    try {
      this.output.writeMessageBegin('getPublicImages', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getPublicImages();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getPublicImages () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getPublicImages_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getPublicImages failed: unknown result';
  }

  getImageDetails (sessionId, imageBaseId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getImageDetails(sessionId, imageBaseId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getImageDetails (sessionId, imageBaseId, callback) {
    const params = {
      sessionId: sessionId,
      imageBaseId: imageBaseId
    };
    const args = new MasterServer_getImageDetails_args(params);
    try {
      this.output.writeMessageBegin('getImageDetails', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getImageDetails();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getImageDetails () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getImageDetails_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getImageDetails failed: unknown result';
  }

  getUser (userToken, userId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getUser(userToken, userId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getUser (userToken, userId, callback) {
    const params = {
      userToken: userToken,
      userId: userId
    };
    const args = new MasterServer_getUser_args(params);
    try {
      this.output.writeMessageBegin('getUser', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getUser();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getUser () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getUser_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getUser failed: unknown result';
  }

  invalidateSession (sessionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_invalidateSession(sessionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_invalidateSession (sessionId, callback) {
    const params = {
      sessionId: sessionId
    };
    const args = new MasterServer_invalidateSession_args(params);
    try {
      this.output.writeMessageBegin('invalidateSession', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_invalidateSession();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_invalidateSession () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_invalidateSession_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex) {
      throw result.ex;
    }
    return;
  }

  getSessionFromAccessCode (accessCode) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getSessionFromAccessCode(accessCode, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getSessionFromAccessCode (accessCode, callback) {
    const params = {
      accessCode: accessCode
    };
    const args = new MasterServer_getSessionFromAccessCode_args(params);
    try {
      this.output.writeMessageBegin('getSessionFromAccessCode', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getSessionFromAccessCode();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getSessionFromAccessCode () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getSessionFromAccessCode_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.auth) {
      throw result.auth;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getSessionFromAccessCode failed: unknown result';
  }

  getUserFromToken (token) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getUserFromToken(token, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getUserFromToken (token, callback) {
    const params = {
      token: token
    };
    const args = new MasterServer_getUserFromToken_args(params);
    try {
      this.output.writeMessageBegin('getUserFromToken', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getUserFromToken();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getUserFromToken () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getUserFromToken_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getUserFromToken failed: unknown result';
  }

  isServerAuthenticated (serverSessionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_isServerAuthenticated(serverSessionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_isServerAuthenticated (serverSessionId, callback) {
    const params = {
      serverSessionId: serverSessionId
    };
    const args = new MasterServer_isServerAuthenticated_args(params);
    try {
      this.output.writeMessageBegin('isServerAuthenticated', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_isServerAuthenticated();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_isServerAuthenticated () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_isServerAuthenticated_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'isServerAuthenticated failed: unknown result';
  }

  startServerAuthentication (satelliteId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_startServerAuthentication(satelliteId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_startServerAuthentication (satelliteId, callback) {
    const params = {
      satelliteId: satelliteId
    };
    const args = new MasterServer_startServerAuthentication_args(params);
    try {
      this.output.writeMessageBegin('startServerAuthentication', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_startServerAuthentication();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_startServerAuthentication () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_startServerAuthentication_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'startServerAuthentication failed: unknown result';
  }

  serverAuthenticate (satelliteId, challengeResponse) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_serverAuthenticate(satelliteId, challengeResponse, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_serverAuthenticate (satelliteId, challengeResponse, callback) {
    const params = {
      satelliteId: satelliteId,
      challengeResponse: challengeResponse
    };
    const args = new MasterServer_serverAuthenticate_args(params);
    try {
      this.output.writeMessageBegin('serverAuthenticate', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_serverAuthenticate();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_serverAuthenticate () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_serverAuthenticate_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.errr) {
      throw result.errr;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'serverAuthenticate failed: unknown result';
  }

  getImageData (serverSessionId, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getImageData(serverSessionId, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getImageData (serverSessionId, imageVersionId, callback) {
    const params = {
      serverSessionId: serverSessionId,
      imageVersionId: imageVersionId
    };
    const args = new MasterServer_getImageData_args(params);
    try {
      this.output.writeMessageBegin('getImageData', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getImageData();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getImageData () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getImageData_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.failure2) {
      throw result.failure2;
    }
    if (null !== result.f3) {
      throw result.f3;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getImageData failed: unknown result';
  }

  submitImage (userToken, imageDescription, blockHashes) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_submitImage(userToken, imageDescription, blockHashes, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_submitImage (userToken, imageDescription, blockHashes, callback) {
    const params = {
      userToken: userToken,
      imageDescription: imageDescription,
      blockHashes: blockHashes
    };
    const args = new MasterServer_submitImage_args(params);
    try {
      this.output.writeMessageBegin('submitImage', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_submitImage();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_submitImage () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_submitImage_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.failure2) {
      throw result.failure2;
    }
    if (null !== result.failure3) {
      throw result.failure3;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'submitImage failed: unknown result';
  }

  registerSatellite (userToken, displayName, addresses, modulus, exponent, certsha256) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_registerSatellite(userToken, displayName, addresses, modulus, exponent, certsha256, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_registerSatellite (userToken, displayName, addresses, modulus, exponent, certsha256, callback) {
    const params = {
      userToken: userToken,
      displayName: displayName,
      addresses: addresses,
      modulus: modulus,
      exponent: exponent,
      certsha256: certsha256
    };
    const args = new MasterServer_registerSatellite_args(params);
    try {
      this.output.writeMessageBegin('registerSatellite', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_registerSatellite();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_registerSatellite () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_registerSatellite_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'registerSatellite failed: unknown result';
  }

  updateSatellite (serverSessionId, displayName, addresses) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_updateSatellite(serverSessionId, displayName, addresses, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_updateSatellite (serverSessionId, displayName, addresses, callback) {
    const params = {
      serverSessionId: serverSessionId,
      displayName: displayName,
      addresses: addresses
    };
    const args = new MasterServer_updateSatellite_args(params);
    try {
      this.output.writeMessageBegin('updateSatellite', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_updateSatellite();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_updateSatellite () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_updateSatellite_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'updateSatellite failed: unknown result';
  }

  downloadImage (sessionId, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_downloadImage(sessionId, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_downloadImage (sessionId, imageVersionId, callback) {
    const params = {
      sessionId: sessionId,
      imageVersionId: imageVersionId
    };
    const args = new MasterServer_downloadImage_args(params);
    try {
      this.output.writeMessageBegin('downloadImage', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_downloadImage();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_downloadImage () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_downloadImage_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.failure2) {
      throw result.failure2;
    }
    if (null !== result.f3) {
      throw result.f3;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'downloadImage failed: unknown result';
  }

  getOrganizations () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getOrganizations((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getOrganizations (callback) {
    const args = new MasterServer_getOrganizations_args();
    try {
      this.output.writeMessageBegin('getOrganizations', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getOrganizations();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getOrganizations () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getOrganizations_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getOrganizations failed: unknown result';
  }

  getOperatingSystems () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getOperatingSystems((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getOperatingSystems (callback) {
    const args = new MasterServer_getOperatingSystems_args();
    try {
      this.output.writeMessageBegin('getOperatingSystems', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getOperatingSystems();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getOperatingSystems () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getOperatingSystems_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getOperatingSystems failed: unknown result';
  }

  getVirtualizers () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getVirtualizers((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getVirtualizers (callback) {
    const args = new MasterServer_getVirtualizers_args();
    try {
      this.output.writeMessageBegin('getVirtualizers', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getVirtualizers();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getVirtualizers () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getVirtualizers_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getVirtualizers failed: unknown result';
  }

  getTags (startDate) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getTags(startDate, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getTags (startDate, callback) {
    const params = {
      startDate: startDate
    };
    const args = new MasterServer_getTags_args(params);
    try {
      this.output.writeMessageBegin('getTags', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getTags();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getTags () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getTags_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getTags failed: unknown result';
  }

  getSoftware (startDate) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getSoftware(startDate, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getSoftware (startDate, callback) {
    const params = {
      startDate: startDate
    };
    const args = new MasterServer_getSoftware_args(params);
    try {
      this.output.writeMessageBegin('getSoftware', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getSoftware();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getSoftware () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_getSoftware_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getSoftware failed: unknown result';
  }

  queryUploadStatus (uploadToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_queryUploadStatus(uploadToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_queryUploadStatus (uploadToken, callback) {
    const params = {
      uploadToken: uploadToken
    };
    const args = new MasterServer_queryUploadStatus_args(params);
    try {
      this.output.writeMessageBegin('queryUploadStatus', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_queryUploadStatus();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_queryUploadStatus () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new MasterServer_queryUploadStatus_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex1) {
      throw result.ex1;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'queryUploadStatus failed: unknown result';
  }
};
//
// Autogenerated by Thrift Compiler (0.19.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  const Int64 = require('node-int64');
}


//HELPER FUNCTIONS AND STRUCTURES

SatelliteServer_getVersion_args = class {
  constructor(args) {
    this.clientVersion = null;
    if (args) {
      if (args.clientVersion !== undefined && args.clientVersion !== null) {
        this.clientVersion = args.clientVersion;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I64) {
          this.clientVersion = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getVersion_args');
    if (this.clientVersion !== null && this.clientVersion !== undefined) {
      output.writeFieldBegin('clientVersion', Thrift.Type.I64, 1);
      output.writeI64(this.clientVersion);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getVersion_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.I64) {
          this.success = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getVersion_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.I64, 0);
      output.writeI64(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getSupportedFeatures_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getSupportedFeatures_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getSupportedFeatures_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getSupportedFeatures_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeString(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getConfiguration_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getConfiguration_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getConfiguration_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new SatelliteConfig(args.success);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new SatelliteConfig();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getConfiguration_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_requestImageVersionUpload_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    this.fileSize = null;
    this.blockHashes = null;
    this.machineDescription = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.fileSize !== undefined && args.fileSize !== null) {
        this.fileSize = args.fileSize;
      }
      if (args.blockHashes !== undefined && args.blockHashes !== null) {
        this.blockHashes = Thrift.copyList(args.blockHashes, [null]);
      }
      if (args.machineDescription !== undefined && args.machineDescription !== null) {
        this.machineDescription = args.machineDescription;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I64) {
          this.fileSize = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.LIST) {
          this.blockHashes = [];
          const _rtmp3188 = input.readListBegin();
          const _size187 = _rtmp3188.size || 0;
          for (let _i189 = 0; _i189 < _size187; ++_i189) {
            let elem190 = null;
            elem190 = input.readBinary().value;
            this.blockHashes.push(elem190);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.machineDescription = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_requestImageVersionUpload_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.fileSize !== null && this.fileSize !== undefined) {
      output.writeFieldBegin('fileSize', Thrift.Type.I64, 3);
      output.writeI64(this.fileSize);
      output.writeFieldEnd();
    }
    if (this.blockHashes !== null && this.blockHashes !== undefined) {
      output.writeFieldBegin('blockHashes', Thrift.Type.LIST, 4);
      output.writeListBegin(Thrift.Type.STRING, this.blockHashes.length);
      for (let iter191 in this.blockHashes) {
        if (this.blockHashes.hasOwnProperty(iter191)) {
          iter191 = this.blockHashes[iter191];
          output.writeBinary(iter191);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.machineDescription !== null && this.machineDescription !== undefined) {
      output.writeFieldBegin('machineDescription', Thrift.Type.STRING, 5);
      output.writeBinary(this.machineDescription);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_requestImageVersionUpload_result = class {
  constructor(args) {
    this.success = null;
    this.rejection = null;
    this.authError = null;
    this.ffff = null;
    this.sdf = null;
    if (args instanceof TTransferRejectedException) {
        this.rejection = args;
        return;
    }
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.ffff = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.sdf = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new TransferInformation(args.success);
      }
      if (args.rejection !== undefined && args.rejection !== null) {
        this.rejection = args.rejection;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.ffff !== undefined && args.ffff !== null) {
        this.ffff = args.ffff;
      }
      if (args.sdf !== undefined && args.sdf !== null) {
        this.sdf = args.sdf;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new TransferInformation();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.rejection = new TTransferRejectedException();
          this.rejection.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.ffff = new TInvocationException();
          this.ffff.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.sdf = new TNotFoundException();
          this.sdf.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_requestImageVersionUpload_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.rejection !== null && this.rejection !== undefined) {
      output.writeFieldBegin('rejection', Thrift.Type.STRUCT, 1);
      this.rejection.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 2);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.ffff !== null && this.ffff !== undefined) {
      output.writeFieldBegin('ffff', Thrift.Type.STRUCT, 3);
      this.ffff.write(output);
      output.writeFieldEnd();
    }
    if (this.sdf !== null && this.sdf !== undefined) {
      output.writeFieldBegin('sdf', Thrift.Type.STRUCT, 4);
      this.sdf.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateBlockHashes_args = class {
  constructor(args) {
    this.uploadToken = null;
    this.blockHashes = null;
    this.userToken = null;
    if (args) {
      if (args.uploadToken !== undefined && args.uploadToken !== null) {
        this.uploadToken = args.uploadToken;
      }
      if (args.blockHashes !== undefined && args.blockHashes !== null) {
        this.blockHashes = Thrift.copyList(args.blockHashes, [null]);
      }
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.uploadToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.LIST) {
          this.blockHashes = [];
          const _rtmp3193 = input.readListBegin();
          const _size192 = _rtmp3193.size || 0;
          for (let _i194 = 0; _i194 < _size192; ++_i194) {
            let elem195 = null;
            elem195 = input.readBinary().value;
            this.blockHashes.push(elem195);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateBlockHashes_args');
    if (this.uploadToken !== null && this.uploadToken !== undefined) {
      output.writeFieldBegin('uploadToken', Thrift.Type.STRING, 1);
      output.writeString(this.uploadToken);
      output.writeFieldEnd();
    }
    if (this.blockHashes !== null && this.blockHashes !== undefined) {
      output.writeFieldBegin('blockHashes', Thrift.Type.LIST, 2);
      output.writeListBegin(Thrift.Type.STRING, this.blockHashes.length);
      for (let iter196 in this.blockHashes) {
        if (this.blockHashes.hasOwnProperty(iter196)) {
          iter196 = this.blockHashes[iter196];
          output.writeBinary(iter196);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 3);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateBlockHashes_result = class {
  constructor(args) {
    this.ex1 = null;
    if (args instanceof TInvalidTokenException) {
        this.ex1 = args;
        return;
    }
    if (args) {
      if (args.ex1 !== undefined && args.ex1 !== null) {
        this.ex1 = args.ex1;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex1 = new TInvalidTokenException();
          this.ex1.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateBlockHashes_result');
    if (this.ex1 !== null && this.ex1 !== undefined) {
      output.writeFieldBegin('ex1', Thrift.Type.STRUCT, 1);
      this.ex1.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setUploadOptions_args = class {
  constructor(args) {
    this.userToken = null;
    this.uploadToken = null;
    this.options = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.uploadToken !== undefined && args.uploadToken !== null) {
        this.uploadToken = args.uploadToken;
      }
      if (args.options !== undefined && args.options !== null) {
        this.options = new UploadOptions(args.options);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.uploadToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.options = new UploadOptions();
          this.options.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setUploadOptions_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.uploadToken !== null && this.uploadToken !== undefined) {
      output.writeFieldBegin('uploadToken', Thrift.Type.STRING, 2);
      output.writeString(this.uploadToken);
      output.writeFieldEnd();
    }
    if (this.options !== null && this.options !== undefined) {
      output.writeFieldBegin('options', Thrift.Type.STRUCT, 3);
      this.options.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setUploadOptions_result = class {
  constructor(args) {
    this.success = null;
    this.frootloops = null;
    this.imcyborgbutthatsok = null;
    if (args instanceof TAuthorizationException) {
        this.frootloops = args;
        return;
    }
    if (args instanceof TInvalidTokenException) {
        this.imcyborgbutthatsok = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new UploadOptions(args.success);
      }
      if (args.frootloops !== undefined && args.frootloops !== null) {
        this.frootloops = args.frootloops;
      }
      if (args.imcyborgbutthatsok !== undefined && args.imcyborgbutthatsok !== null) {
        this.imcyborgbutthatsok = args.imcyborgbutthatsok;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new UploadOptions();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.frootloops = new TAuthorizationException();
          this.frootloops.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.imcyborgbutthatsok = new TInvalidTokenException();
          this.imcyborgbutthatsok.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setUploadOptions_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.frootloops !== null && this.frootloops !== undefined) {
      output.writeFieldBegin('frootloops', Thrift.Type.STRUCT, 1);
      this.frootloops.write(output);
      output.writeFieldEnd();
    }
    if (this.imcyborgbutthatsok !== null && this.imcyborgbutthatsok !== undefined) {
      output.writeFieldBegin('imcyborgbutthatsok', Thrift.Type.STRUCT, 2);
      this.imcyborgbutthatsok.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_cancelUpload_args = class {
  constructor(args) {
    this.uploadToken = null;
    if (args) {
      if (args.uploadToken !== undefined && args.uploadToken !== null) {
        this.uploadToken = args.uploadToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.uploadToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_cancelUpload_args');
    if (this.uploadToken !== null && this.uploadToken !== undefined) {
      output.writeFieldBegin('uploadToken', Thrift.Type.STRING, 1);
      output.writeString(this.uploadToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_cancelUpload_result = class {
  constructor(args) {
    this.ex1 = null;
    if (args instanceof TInvalidTokenException) {
        this.ex1 = args;
        return;
    }
    if (args) {
      if (args.ex1 !== undefined && args.ex1 !== null) {
        this.ex1 = args.ex1;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex1 = new TInvalidTokenException();
          this.ex1.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_cancelUpload_result');
    if (this.ex1 !== null && this.ex1 !== undefined) {
      output.writeFieldBegin('ex1', Thrift.Type.STRUCT, 1);
      this.ex1.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_queryUploadStatus_args = class {
  constructor(args) {
    this.uploadToken = null;
    if (args) {
      if (args.uploadToken !== undefined && args.uploadToken !== null) {
        this.uploadToken = args.uploadToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.uploadToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_queryUploadStatus_args');
    if (this.uploadToken !== null && this.uploadToken !== undefined) {
      output.writeFieldBegin('uploadToken', Thrift.Type.STRING, 1);
      output.writeString(this.uploadToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_queryUploadStatus_result = class {
  constructor(args) {
    this.success = null;
    this.ex1 = null;
    if (args instanceof TInvalidTokenException) {
        this.ex1 = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new TransferStatus(args.success);
      }
      if (args.ex1 !== undefined && args.ex1 !== null) {
        this.ex1 = args.ex1;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new TransferStatus();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex1 = new TInvalidTokenException();
          this.ex1.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_queryUploadStatus_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.ex1 !== null && this.ex1 !== undefined) {
      output.writeFieldBegin('ex1', Thrift.Type.STRUCT, 1);
      this.ex1.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_requestDownload_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_requestDownload_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_requestDownload_result = class {
  constructor(args) {
    this.success = null;
    this.rejection = null;
    this.authError = null;
    this.ffff = null;
    this.sdf = null;
    if (args instanceof TTransferRejectedException) {
        this.rejection = args;
        return;
    }
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.ffff = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.sdf = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new TransferInformation(args.success);
      }
      if (args.rejection !== undefined && args.rejection !== null) {
        this.rejection = args.rejection;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.ffff !== undefined && args.ffff !== null) {
        this.ffff = args.ffff;
      }
      if (args.sdf !== undefined && args.sdf !== null) {
        this.sdf = args.sdf;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new TransferInformation();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.rejection = new TTransferRejectedException();
          this.rejection.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.ffff = new TInvocationException();
          this.ffff.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.sdf = new TNotFoundException();
          this.sdf.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_requestDownload_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.rejection !== null && this.rejection !== undefined) {
      output.writeFieldBegin('rejection', Thrift.Type.STRUCT, 1);
      this.rejection.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 2);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.ffff !== null && this.ffff !== undefined) {
      output.writeFieldBegin('ffff', Thrift.Type.STRUCT, 3);
      this.ffff.write(output);
      output.writeFieldEnd();
    }
    if (this.sdf !== null && this.sdf !== undefined) {
      output.writeFieldBegin('sdf', Thrift.Type.STRUCT, 4);
      this.sdf.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_cancelDownload_args = class {
  constructor(args) {
    this.downloadToken = null;
    if (args) {
      if (args.downloadToken !== undefined && args.downloadToken !== null) {
        this.downloadToken = args.downloadToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.downloadToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_cancelDownload_args');
    if (this.downloadToken !== null && this.downloadToken !== undefined) {
      output.writeFieldBegin('downloadToken', Thrift.Type.STRING, 1);
      output.writeString(this.downloadToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_cancelDownload_result = class {
  constructor(args) {
    this.ex1 = null;
    if (args instanceof TInvalidTokenException) {
        this.ex1 = args;
        return;
    }
    if (args) {
      if (args.ex1 !== undefined && args.ex1 !== null) {
        this.ex1 = args.ex1;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex1 = new TInvalidTokenException();
          this.ex1.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_cancelDownload_result');
    if (this.ex1 !== null && this.ex1 !== undefined) {
      output.writeFieldBegin('ex1', Thrift.Type.STRUCT, 1);
      this.ex1.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_isAuthenticated_args = class {
  constructor(args) {
    this.userToken = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_isAuthenticated_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_isAuthenticated_result = class {
  constructor(args) {
    this.authError = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_isAuthenticated_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_whoami_args = class {
  constructor(args) {
    this.userToken = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_whoami_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_whoami_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new WhoamiInfo(args.success);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new WhoamiInfo();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_whoami_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_invalidateSession_args = class {
  constructor(args) {
    this.userToken = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_invalidateSession_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_invalidateSession_result = class {
  constructor(args) {
    this.ex = null;
    if (args instanceof TInvalidTokenException) {
        this.ex = args;
        return;
    }
    if (args) {
      if (args.ex !== undefined && args.ex !== null) {
        this.ex = args.ex;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ex = new TInvalidTokenException();
          this.ex.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_invalidateSession_result');
    if (this.ex !== null && this.ex !== undefined) {
      output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
      this.ex.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getUserList_args = class {
  constructor(args) {
    this.userToken = null;
    this.page = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.page !== undefined && args.page !== null) {
        this.page = args.page;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.page = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getUserList_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.page !== null && this.page !== undefined) {
      output.writeFieldBegin('page', Thrift.Type.I32, 2);
      output.writeI32(this.page);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getUserList_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [UserInfo]);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3198 = input.readListBegin();
          const _size197 = _rtmp3198.size || 0;
          for (let _i199 = 0; _i199 < _size197; ++_i199) {
            let elem200 = null;
            elem200 = new UserInfo();
            elem200.read(input);
            this.success.push(elem200);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getUserList_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter201 in this.success) {
        if (this.success.hasOwnProperty(iter201)) {
          iter201 = this.success[iter201];
          iter201.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getUserConfig_args = class {
  constructor(args) {
    this.userToken = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getUserConfig_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getUserConfig_result = class {
  constructor(args) {
    this.success = null;
    this.failure = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new SatelliteUserConfig(args.success);
      }
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new SatelliteUserConfig();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getUserConfig_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setUserConfig_args = class {
  constructor(args) {
    this.userToken = null;
    this.config = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.config !== undefined && args.config !== null) {
        this.config = new SatelliteUserConfig(args.config);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.config = new SatelliteUserConfig();
          this.config.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setUserConfig_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.config !== null && this.config !== undefined) {
      output.writeFieldBegin('config', Thrift.Type.STRUCT, 2);
      this.config.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setUserConfig_result = class {
  constructor(args) {
    this.failure = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.failure = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.failure !== undefined && args.failure !== null) {
        this.failure = args.failure;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.failure = new TAuthorizationException();
          this.failure.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setUserConfig_result');
    if (this.failure !== null && this.failure !== undefined) {
      output.writeFieldBegin('failure', Thrift.Type.STRUCT, 1);
      this.failure.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getOperatingSystems_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getOperatingSystems_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getOperatingSystems_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [OperatingSystem]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3203 = input.readListBegin();
          const _size202 = _rtmp3203.size || 0;
          for (let _i204 = 0; _i204 < _size202; ++_i204) {
            let elem205 = null;
            elem205 = new OperatingSystem();
            elem205.read(input);
            this.success.push(elem205);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getOperatingSystems_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter206 in this.success) {
        if (this.success.hasOwnProperty(iter206)) {
          iter206 = this.success[iter206];
          iter206.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getVirtualizers_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getVirtualizers_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getVirtualizers_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [Virtualizer]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3208 = input.readListBegin();
          const _size207 = _rtmp3208.size || 0;
          for (let _i209 = 0; _i209 < _size207; ++_i209) {
            let elem210 = null;
            elem210 = new Virtualizer();
            elem210.read(input);
            this.success.push(elem210);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getVirtualizers_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter211 in this.success) {
        if (this.success.hasOwnProperty(iter211)) {
          iter211 = this.success[iter211];
          iter211.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getAllOrganizations_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getAllOrganizations_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getAllOrganizations_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [Organization]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3213 = input.readListBegin();
          const _size212 = _rtmp3213.size || 0;
          for (let _i214 = 0; _i214 < _size212; ++_i214) {
            let elem215 = null;
            elem215 = new Organization();
            elem215.read(input);
            this.success.push(elem215);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getAllOrganizations_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter216 in this.success) {
        if (this.success.hasOwnProperty(iter216)) {
          iter216 = this.success[iter216];
          iter216.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLocations_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLocations_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLocations_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [Location]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3218 = input.readListBegin();
          const _size217 = _rtmp3218.size || 0;
          for (let _i219 = 0; _i219 < _size217; ++_i219) {
            let elem220 = null;
            elem220 = new Location();
            elem220.read(input);
            this.success.push(elem220);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLocations_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter221 in this.success) {
        if (this.success.hasOwnProperty(iter221)) {
          iter221 = this.success[iter221];
          iter221.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getStatus_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getStatus_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getStatus_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new SatelliteStatus(args.success);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new SatelliteStatus();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getStatus_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImageList_args = class {
  constructor(args) {
    this.userToken = null;
    this.tagSearch = null;
    this.page = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.tagSearch !== undefined && args.tagSearch !== null) {
        this.tagSearch = Thrift.copyList(args.tagSearch, [null]);
      }
      if (args.page !== undefined && args.page !== null) {
        this.page = args.page;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.LIST) {
          this.tagSearch = [];
          const _rtmp3223 = input.readListBegin();
          const _size222 = _rtmp3223.size || 0;
          for (let _i224 = 0; _i224 < _size222; ++_i224) {
            let elem225 = null;
            elem225 = input.readString().value;
            this.tagSearch.push(elem225);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I32) {
          this.page = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImageList_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.tagSearch !== null && this.tagSearch !== undefined) {
      output.writeFieldBegin('tagSearch', Thrift.Type.LIST, 2);
      output.writeListBegin(Thrift.Type.STRING, this.tagSearch.length);
      for (let iter226 in this.tagSearch) {
        if (this.tagSearch.hasOwnProperty(iter226)) {
          iter226 = this.tagSearch[iter226];
          output.writeString(iter226);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.page !== null && this.page !== undefined) {
      output.writeFieldBegin('page', Thrift.Type.I32, 3);
      output.writeI32(this.page);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImageList_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [ImageSummaryRead]);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3228 = input.readListBegin();
          const _size227 = _rtmp3228.size || 0;
          for (let _i229 = 0; _i229 < _size227; ++_i229) {
            let elem230 = null;
            elem230 = new ImageSummaryRead();
            elem230.read(input);
            this.success.push(elem230);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImageList_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter231 in this.success) {
        if (this.success.hasOwnProperty(iter231)) {
          iter231 = this.success[iter231];
          iter231.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImageDetails_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImageDetails_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImageDetails_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ImageDetailsRead(args.success);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ImageDetailsRead();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImageDetails_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_createImage_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageName = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageName !== undefined && args.imageName !== null) {
        this.imageName = args.imageName;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_createImage_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageName !== null && this.imageName !== undefined) {
      output.writeFieldBegin('imageName', Thrift.Type.STRING, 2);
      output.writeString(this.imageName);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_createImage_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.error = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.error = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.error !== undefined && args.error !== null) {
        this.error = args.error;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.error = new TInvocationException();
          this.error.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_createImage_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeString(this.success);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.error !== null && this.error !== undefined) {
      output.writeFieldBegin('error', Thrift.Type.STRUCT, 2);
      this.error.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateImageBase_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    this.image = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.image !== undefined && args.image !== null) {
        this.image = new ImageBaseWrite(args.image);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.image = new ImageBaseWrite();
          this.image.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateImageBase_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.image !== null && this.image !== undefined) {
      output.writeFieldBegin('image', Thrift.Type.STRUCT, 3);
      this.image.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateImageBase_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.imgError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.imgError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.imgError !== undefined && args.imgError !== null) {
        this.imgError = args.imgError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.imgError = new TInvocationException();
          this.imgError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateImageBase_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.imgError !== null && this.imgError !== undefined) {
      output.writeFieldBegin('imgError', Thrift.Type.STRUCT, 3);
      this.imgError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateImageVersion_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    this.image = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
      if (args.image !== undefined && args.image !== null) {
        this.image = new ImageVersionWrite(args.image);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.image = new ImageVersionWrite();
          this.image.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateImageVersion_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    if (this.image !== null && this.image !== undefined) {
      output.writeFieldBegin('image', Thrift.Type.STRUCT, 3);
      this.image.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateImageVersion_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.imgError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.imgError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.imgError !== undefined && args.imgError !== null) {
        this.imgError = args.imgError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.imgError = new TInvocationException();
          this.imgError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateImageVersion_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.imgError !== null && this.imgError !== undefined) {
      output.writeFieldBegin('imgError', Thrift.Type.STRUCT, 3);
      this.imgError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_deleteImageVersion_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_deleteImageVersion_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_deleteImageVersion_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_deleteImageVersion_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_deleteImageBase_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_deleteImageBase_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_deleteImageBase_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_deleteImageBase_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_writeImagePermissions_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    this.permissions = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.permissions !== undefined && args.permissions !== null) {
        this.permissions = Thrift.copyMap(args.permissions, [ImagePermissions]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.MAP) {
          this.permissions = {};
          const _rtmp3233 = input.readMapBegin();
          const _size232 = _rtmp3233.size || 0;
          for (let _i234 = 0; _i234 < _size232; ++_i234) {
            if (_i234 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            let key235 = null;
            let val236 = null;
            key235 = input.readString().value;
            val236 = new ImagePermissions();
            val236.read(input);
            this.permissions[key235] = val236;
          }
          input.readMapEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_writeImagePermissions_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.permissions !== null && this.permissions !== undefined) {
      output.writeFieldBegin('permissions', Thrift.Type.MAP, 3);
      output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.permissions));
      for (let kiter237 in this.permissions) {
        if (this.permissions.hasOwnProperty(kiter237)) {
          let viter238 = this.permissions[kiter237];
          output.writeString(kiter237);
          viter238.write(output);
        }
      }
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_writeImagePermissions_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_writeImagePermissions_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImagePermissions_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImagePermissions_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImagePermissions_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyMap(args.success, [ImagePermissions]);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.MAP) {
          this.success = {};
          const _rtmp3240 = input.readMapBegin();
          const _size239 = _rtmp3240.size || 0;
          for (let _i241 = 0; _i241 < _size239; ++_i241) {
            if (_i241 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            let key242 = null;
            let val243 = null;
            key242 = input.readString().value;
            val243 = new ImagePermissions();
            val243.read(input);
            this.success[key242] = val243;
          }
          input.readMapEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImagePermissions_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.MAP, 0);
      output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.success));
      for (let kiter244 in this.success) {
        if (this.success.hasOwnProperty(kiter244)) {
          let viter245 = this.success[kiter244];
          output.writeString(kiter244);
          viter245.write(output);
        }
      }
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setImageOwner_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    this.newOwnerId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.newOwnerId !== undefined && args.newOwnerId !== null) {
        this.newOwnerId = args.newOwnerId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.newOwnerId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setImageOwner_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.newOwnerId !== null && this.newOwnerId !== undefined) {
      output.writeFieldBegin('newOwnerId', Thrift.Type.STRING, 3);
      output.writeString(this.newOwnerId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setImageOwner_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setImageOwner_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setImageVersionExpiry_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageBaseId = null;
    this.expireTime = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.expireTime !== undefined && args.expireTime !== null) {
        this.expireTime = args.expireTime;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I64) {
          this.expireTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setImageVersionExpiry_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 2);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.expireTime !== null && this.expireTime !== undefined) {
      output.writeFieldBegin('expireTime', Thrift.Type.I64, 3);
      output.writeI64(this.expireTime);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setImageVersionExpiry_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    this.dateError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args instanceof TInvalidDateParam) {
        this.dateError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
      if (args.dateError !== undefined && args.dateError !== null) {
        this.dateError = args.dateError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.dateError = new TInvalidDateParam();
          this.dateError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setImageVersionExpiry_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    if (this.dateError !== null && this.dateError !== undefined) {
      output.writeFieldBegin('dateError', Thrift.Type.STRUCT, 4);
      this.dateError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImageVersionVirtConfig_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImageVersionVirtConfig_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getImageVersionVirtConfig_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getImageVersionVirtConfig_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeBinary(this.success);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setImageVersionVirtConfig_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    this.meta = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
      if (args.meta !== undefined && args.meta !== null) {
        this.meta = args.meta;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.meta = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setImageVersionVirtConfig_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    if (this.meta !== null && this.meta !== undefined) {
      output.writeFieldBegin('meta', Thrift.Type.STRING, 3);
      output.writeBinary(this.meta);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setImageVersionVirtConfig_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setImageVersionVirtConfig_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_requestImageReplication_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_requestImageReplication_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_requestImageReplication_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_requestImageReplication_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeString(this.success);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_publishImageVersion_args = class {
  constructor(args) {
    this.userToken = null;
    this.imageVersionId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_publishImageVersion_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_publishImageVersion_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    this.tre = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args instanceof TTransferRejectedException) {
        this.tre = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
      if (args.tre !== undefined && args.tre !== null) {
        this.tre = args.tre;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.tre = new TTransferRejectedException();
          this.tre.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_publishImageVersion_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeString(this.success);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    if (this.tre !== null && this.tre !== undefined) {
      output.writeFieldBegin('tre', Thrift.Type.STRUCT, 4);
      this.tre.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_createLecture_args = class {
  constructor(args) {
    this.userToken = null;
    this.lecture = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lecture !== undefined && args.lecture !== null) {
        this.lecture = new LectureWrite(args.lecture);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.lecture = new LectureWrite();
          this.lecture.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_createLecture_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lecture !== null && this.lecture !== undefined) {
      output.writeFieldBegin('lecture', Thrift.Type.STRUCT, 2);
      this.lecture.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_createLecture_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.serverError = null;
    this.dateError = null;
    this.notFound = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args instanceof TInvalidDateParam) {
        this.dateError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
      if (args.dateError !== undefined && args.dateError !== null) {
        this.dateError = args.dateError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRING) {
          this.success = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.dateError = new TInvalidDateParam();
          this.dateError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_createLecture_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRING, 0);
      output.writeString(this.success);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    if (this.dateError !== null && this.dateError !== undefined) {
      output.writeFieldBegin('dateError', Thrift.Type.STRUCT, 3);
      this.dateError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 4);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateLecture_args = class {
  constructor(args) {
    this.userToken = null;
    this.lectureId = null;
    this.lecture = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
      if (args.lecture !== undefined && args.lecture !== null) {
        this.lecture = new LectureWrite(args.lecture);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.lecture = new LectureWrite();
          this.lecture.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateLecture_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 2);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    if (this.lecture !== null && this.lecture !== undefined) {
      output.writeFieldBegin('lecture', Thrift.Type.STRUCT, 3);
      this.lecture.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_updateLecture_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    this.dateError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args instanceof TInvalidDateParam) {
        this.dateError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
      if (args.dateError !== undefined && args.dateError !== null) {
        this.dateError = args.dateError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.dateError = new TInvalidDateParam();
          this.dateError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_updateLecture_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    if (this.dateError !== null && this.dateError !== undefined) {
      output.writeFieldBegin('dateError', Thrift.Type.STRUCT, 4);
      this.dateError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLectureList_args = class {
  constructor(args) {
    this.userToken = null;
    this.page = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.page !== undefined && args.page !== null) {
        this.page = args.page;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.page = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLectureList_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.page !== null && this.page !== undefined) {
      output.writeFieldBegin('page', Thrift.Type.I32, 2);
      output.writeI32(this.page);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLectureList_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [LectureSummary]);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp3247 = input.readListBegin();
          const _size246 = _rtmp3247.size || 0;
          for (let _i248 = 0; _i248 < _size246; ++_i248) {
            let elem249 = null;
            elem249 = new LectureSummary();
            elem249.read(input);
            this.success.push(elem249);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLectureList_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter250 in this.success) {
        if (this.success.hasOwnProperty(iter250)) {
          iter250 = this.success[iter250];
          iter250.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLectureDetails_args = class {
  constructor(args) {
    this.userToken = null;
    this.lectureId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLectureDetails_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 2);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLectureDetails_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new LectureRead(args.success);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new LectureRead();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLectureDetails_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_deleteLecture_args = class {
  constructor(args) {
    this.userToken = null;
    this.lectureId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_deleteLecture_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 2);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_deleteLecture_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_deleteLecture_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_writeLecturePermissions_args = class {
  constructor(args) {
    this.userToken = null;
    this.lectureId = null;
    this.permissions = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
      if (args.permissions !== undefined && args.permissions !== null) {
        this.permissions = Thrift.copyMap(args.permissions, [LecturePermissions]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.MAP) {
          this.permissions = {};
          const _rtmp3252 = input.readMapBegin();
          const _size251 = _rtmp3252.size || 0;
          for (let _i253 = 0; _i253 < _size251; ++_i253) {
            if (_i253 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            let key254 = null;
            let val255 = null;
            key254 = input.readString().value;
            val255 = new LecturePermissions();
            val255.read(input);
            this.permissions[key254] = val255;
          }
          input.readMapEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_writeLecturePermissions_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 2);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    if (this.permissions !== null && this.permissions !== undefined) {
      output.writeFieldBegin('permissions', Thrift.Type.MAP, 3);
      output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.permissions));
      for (let kiter256 in this.permissions) {
        if (this.permissions.hasOwnProperty(kiter256)) {
          let viter257 = this.permissions[kiter256];
          output.writeString(kiter256);
          viter257.write(output);
        }
      }
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_writeLecturePermissions_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_writeLecturePermissions_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLecturePermissions_args = class {
  constructor(args) {
    this.userToken = null;
    this.lectureId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLecturePermissions_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 2);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getLecturePermissions_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyMap(args.success, [LecturePermissions]);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.MAP) {
          this.success = {};
          const _rtmp3259 = input.readMapBegin();
          const _size258 = _rtmp3259.size || 0;
          for (let _i260 = 0; _i260 < _size258; ++_i260) {
            if (_i260 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            let key261 = null;
            let val262 = null;
            key261 = input.readString().value;
            val262 = new LecturePermissions();
            val262.read(input);
            this.success[key261] = val262;
          }
          input.readMapEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getLecturePermissions_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.MAP, 0);
      output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.success));
      for (let kiter263 in this.success) {
        if (this.success.hasOwnProperty(kiter263)) {
          let viter264 = this.success[kiter263];
          output.writeString(kiter263);
          viter264.write(output);
        }
      }
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setLectureOwner_args = class {
  constructor(args) {
    this.userToken = null;
    this.lectureId = null;
    this.newOwnerId = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
      if (args.newOwnerId !== undefined && args.newOwnerId !== null) {
        this.newOwnerId = args.newOwnerId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.newOwnerId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setLectureOwner_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 2);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    if (this.newOwnerId !== null && this.newOwnerId !== undefined) {
      output.writeFieldBegin('newOwnerId', Thrift.Type.STRING, 3);
      output.writeString(this.newOwnerId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_setLectureOwner_result = class {
  constructor(args) {
    this.authError = null;
    this.notFound = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TNotFoundException) {
        this.notFound = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.notFound !== undefined && args.notFound !== null) {
        this.notFound = args.notFound;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.notFound = new TNotFoundException();
          this.notFound.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_setLectureOwner_result');
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.notFound !== null && this.notFound !== undefined) {
      output.writeFieldBegin('notFound', Thrift.Type.STRUCT, 2);
      this.notFound.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 3);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getPredefinedData_args = class {
  constructor(args) {
    this.userToken = null;
    if (args) {
      if (args.userToken !== undefined && args.userToken !== null) {
        this.userToken = args.userToken;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getPredefinedData_args');
    if (this.userToken !== null && this.userToken !== undefined) {
      output.writeFieldBegin('userToken', Thrift.Type.STRING, 1);
      output.writeString(this.userToken);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServer_getPredefinedData_result = class {
  constructor(args) {
    this.success = null;
    this.authError = null;
    this.serverError = null;
    if (args instanceof TAuthorizationException) {
        this.authError = args;
        return;
    }
    if (args instanceof TInvocationException) {
        this.serverError = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new PredefinedData(args.success);
      }
      if (args.authError !== undefined && args.authError !== null) {
        this.authError = args.authError;
      }
      if (args.serverError !== undefined && args.serverError !== null) {
        this.serverError = args.serverError;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new PredefinedData();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.authError = new TAuthorizationException();
          this.authError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.serverError = new TInvocationException();
          this.serverError.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteServer_getPredefinedData_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.authError !== null && this.authError !== undefined) {
      output.writeFieldBegin('authError', Thrift.Type.STRUCT, 1);
      this.authError.write(output);
      output.writeFieldEnd();
    }
    if (this.serverError !== null && this.serverError !== undefined) {
      output.writeFieldBegin('serverError', Thrift.Type.STRUCT, 2);
      this.serverError.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteServerClient = class SatelliteServerClient {
  constructor(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
  }

  getVersion (clientVersion) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getVersion(clientVersion, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getVersion (clientVersion, callback) {
    const params = {
      clientVersion: clientVersion
    };
    const args = new SatelliteServer_getVersion_args(params);
    try {
      this.output.writeMessageBegin('getVersion', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getVersion();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getVersion () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getVersion_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getVersion failed: unknown result';
  }

  getSupportedFeatures () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getSupportedFeatures((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getSupportedFeatures (callback) {
    const args = new SatelliteServer_getSupportedFeatures_args();
    try {
      this.output.writeMessageBegin('getSupportedFeatures', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getSupportedFeatures();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getSupportedFeatures () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getSupportedFeatures_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getSupportedFeatures failed: unknown result';
  }

  getConfiguration () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getConfiguration((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getConfiguration (callback) {
    const args = new SatelliteServer_getConfiguration_args();
    try {
      this.output.writeMessageBegin('getConfiguration', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getConfiguration();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getConfiguration () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getConfiguration_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getConfiguration failed: unknown result';
  }

  requestImageVersionUpload (userToken, imageBaseId, fileSize, blockHashes, machineDescription) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_requestImageVersionUpload(userToken, imageBaseId, fileSize, blockHashes, machineDescription, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_requestImageVersionUpload (userToken, imageBaseId, fileSize, blockHashes, machineDescription, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId,
      fileSize: fileSize,
      blockHashes: blockHashes,
      machineDescription: machineDescription
    };
    const args = new SatelliteServer_requestImageVersionUpload_args(params);
    try {
      this.output.writeMessageBegin('requestImageVersionUpload', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_requestImageVersionUpload();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_requestImageVersionUpload () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_requestImageVersionUpload_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.rejection) {
      throw result.rejection;
    }
    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.ffff) {
      throw result.ffff;
    }
    if (null !== result.sdf) {
      throw result.sdf;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'requestImageVersionUpload failed: unknown result';
  }

  updateBlockHashes (uploadToken, blockHashes, userToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_updateBlockHashes(uploadToken, blockHashes, userToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_updateBlockHashes (uploadToken, blockHashes, userToken, callback) {
    const params = {
      uploadToken: uploadToken,
      blockHashes: blockHashes,
      userToken: userToken
    };
    const args = new SatelliteServer_updateBlockHashes_args(params);
    try {
      this.output.writeMessageBegin('updateBlockHashes', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_updateBlockHashes();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_updateBlockHashes () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_updateBlockHashes_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex1) {
      throw result.ex1;
    }
    return;
  }

  setUploadOptions (userToken, uploadToken, options) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setUploadOptions(userToken, uploadToken, options, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setUploadOptions (userToken, uploadToken, options, callback) {
    const params = {
      userToken: userToken,
      uploadToken: uploadToken,
      options: options
    };
    const args = new SatelliteServer_setUploadOptions_args(params);
    try {
      this.output.writeMessageBegin('setUploadOptions', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setUploadOptions();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setUploadOptions () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_setUploadOptions_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.frootloops) {
      throw result.frootloops;
    }
    if (null !== result.imcyborgbutthatsok) {
      throw result.imcyborgbutthatsok;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'setUploadOptions failed: unknown result';
  }

  cancelUpload (uploadToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_cancelUpload(uploadToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_cancelUpload (uploadToken, callback) {
    const params = {
      uploadToken: uploadToken
    };
    const args = new SatelliteServer_cancelUpload_args(params);
    try {
      this.output.writeMessageBegin('cancelUpload', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_cancelUpload();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_cancelUpload () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_cancelUpload_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex1) {
      throw result.ex1;
    }
    return;
  }

  queryUploadStatus (uploadToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_queryUploadStatus(uploadToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_queryUploadStatus (uploadToken, callback) {
    const params = {
      uploadToken: uploadToken
    };
    const args = new SatelliteServer_queryUploadStatus_args(params);
    try {
      this.output.writeMessageBegin('queryUploadStatus', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_queryUploadStatus();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_queryUploadStatus () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_queryUploadStatus_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex1) {
      throw result.ex1;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'queryUploadStatus failed: unknown result';
  }

  requestDownload (userToken, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_requestDownload(userToken, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_requestDownload (userToken, imageVersionId, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId
    };
    const args = new SatelliteServer_requestDownload_args(params);
    try {
      this.output.writeMessageBegin('requestDownload', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_requestDownload();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_requestDownload () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_requestDownload_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.rejection) {
      throw result.rejection;
    }
    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.ffff) {
      throw result.ffff;
    }
    if (null !== result.sdf) {
      throw result.sdf;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'requestDownload failed: unknown result';
  }

  cancelDownload (downloadToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_cancelDownload(downloadToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_cancelDownload (downloadToken, callback) {
    const params = {
      downloadToken: downloadToken
    };
    const args = new SatelliteServer_cancelDownload_args(params);
    try {
      this.output.writeMessageBegin('cancelDownload', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_cancelDownload();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_cancelDownload () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_cancelDownload_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex1) {
      throw result.ex1;
    }
    return;
  }

  isAuthenticated (userToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_isAuthenticated(userToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_isAuthenticated (userToken, callback) {
    const params = {
      userToken: userToken
    };
    const args = new SatelliteServer_isAuthenticated_args(params);
    try {
      this.output.writeMessageBegin('isAuthenticated', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_isAuthenticated();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_isAuthenticated () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_isAuthenticated_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  whoami (userToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_whoami(userToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_whoami (userToken, callback) {
    const params = {
      userToken: userToken
    };
    const args = new SatelliteServer_whoami_args(params);
    try {
      this.output.writeMessageBegin('whoami', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_whoami();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_whoami () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_whoami_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'whoami failed: unknown result';
  }

  invalidateSession (userToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_invalidateSession(userToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_invalidateSession (userToken, callback) {
    const params = {
      userToken: userToken
    };
    const args = new SatelliteServer_invalidateSession_args(params);
    try {
      this.output.writeMessageBegin('invalidateSession', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_invalidateSession();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_invalidateSession () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_invalidateSession_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ex) {
      throw result.ex;
    }
    return;
  }

  getUserList (userToken, page) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getUserList(userToken, page, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getUserList (userToken, page, callback) {
    const params = {
      userToken: userToken,
      page: page
    };
    const args = new SatelliteServer_getUserList_args(params);
    try {
      this.output.writeMessageBegin('getUserList', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getUserList();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getUserList () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getUserList_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getUserList failed: unknown result';
  }

  getUserConfig (userToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getUserConfig(userToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getUserConfig (userToken, callback) {
    const params = {
      userToken: userToken
    };
    const args = new SatelliteServer_getUserConfig_args(params);
    try {
      this.output.writeMessageBegin('getUserConfig', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getUserConfig();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getUserConfig () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getUserConfig_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getUserConfig failed: unknown result';
  }

  setUserConfig (userToken, config) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setUserConfig(userToken, config, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setUserConfig (userToken, config, callback) {
    const params = {
      userToken: userToken,
      config: config
    };
    const args = new SatelliteServer_setUserConfig_args(params);
    try {
      this.output.writeMessageBegin('setUserConfig', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setUserConfig();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setUserConfig () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_setUserConfig_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.failure) {
      throw result.failure;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  getOperatingSystems () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getOperatingSystems((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getOperatingSystems (callback) {
    const args = new SatelliteServer_getOperatingSystems_args();
    try {
      this.output.writeMessageBegin('getOperatingSystems', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getOperatingSystems();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getOperatingSystems () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getOperatingSystems_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getOperatingSystems failed: unknown result';
  }

  getVirtualizers () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getVirtualizers((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getVirtualizers (callback) {
    const args = new SatelliteServer_getVirtualizers_args();
    try {
      this.output.writeMessageBegin('getVirtualizers', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getVirtualizers();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getVirtualizers () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getVirtualizers_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getVirtualizers failed: unknown result';
  }

  getAllOrganizations () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getAllOrganizations((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getAllOrganizations (callback) {
    const args = new SatelliteServer_getAllOrganizations_args();
    try {
      this.output.writeMessageBegin('getAllOrganizations', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getAllOrganizations();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getAllOrganizations () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getAllOrganizations_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getAllOrganizations failed: unknown result';
  }

  getLocations () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getLocations((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getLocations (callback) {
    const args = new SatelliteServer_getLocations_args();
    try {
      this.output.writeMessageBegin('getLocations', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getLocations();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getLocations () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getLocations_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getLocations failed: unknown result';
  }

  getStatus () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getStatus((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getStatus (callback) {
    const args = new SatelliteServer_getStatus_args();
    try {
      this.output.writeMessageBegin('getStatus', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getStatus();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getStatus () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getStatus_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getStatus failed: unknown result';
  }

  getImageList (userToken, tagSearch, page) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getImageList(userToken, tagSearch, page, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getImageList (userToken, tagSearch, page, callback) {
    const params = {
      userToken: userToken,
      tagSearch: tagSearch,
      page: page
    };
    const args = new SatelliteServer_getImageList_args(params);
    try {
      this.output.writeMessageBegin('getImageList', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getImageList();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getImageList () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getImageList_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getImageList failed: unknown result';
  }

  getImageDetails (userToken, imageBaseId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getImageDetails(userToken, imageBaseId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getImageDetails (userToken, imageBaseId, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId
    };
    const args = new SatelliteServer_getImageDetails_args(params);
    try {
      this.output.writeMessageBegin('getImageDetails', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getImageDetails();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getImageDetails () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getImageDetails_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getImageDetails failed: unknown result';
  }

  createImage (userToken, imageName) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_createImage(userToken, imageName, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_createImage (userToken, imageName, callback) {
    const params = {
      userToken: userToken,
      imageName: imageName
    };
    const args = new SatelliteServer_createImage_args(params);
    try {
      this.output.writeMessageBegin('createImage', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_createImage();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_createImage () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_createImage_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.error) {
      throw result.error;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'createImage failed: unknown result';
  }

  updateImageBase (userToken, imageBaseId, image) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_updateImageBase(userToken, imageBaseId, image, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_updateImageBase (userToken, imageBaseId, image, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId,
      image: image
    };
    const args = new SatelliteServer_updateImageBase_args(params);
    try {
      this.output.writeMessageBegin('updateImageBase', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_updateImageBase();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_updateImageBase () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_updateImageBase_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.imgError) {
      throw result.imgError;
    }
    return;
  }

  updateImageVersion (userToken, imageVersionId, image) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_updateImageVersion(userToken, imageVersionId, image, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_updateImageVersion (userToken, imageVersionId, image, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId,
      image: image
    };
    const args = new SatelliteServer_updateImageVersion_args(params);
    try {
      this.output.writeMessageBegin('updateImageVersion', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_updateImageVersion();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_updateImageVersion () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_updateImageVersion_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.imgError) {
      throw result.imgError;
    }
    return;
  }

  deleteImageVersion (userToken, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_deleteImageVersion(userToken, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_deleteImageVersion (userToken, imageVersionId, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId
    };
    const args = new SatelliteServer_deleteImageVersion_args(params);
    try {
      this.output.writeMessageBegin('deleteImageVersion', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_deleteImageVersion();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_deleteImageVersion () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_deleteImageVersion_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  deleteImageBase (userToken, imageBaseId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_deleteImageBase(userToken, imageBaseId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_deleteImageBase (userToken, imageBaseId, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId
    };
    const args = new SatelliteServer_deleteImageBase_args(params);
    try {
      this.output.writeMessageBegin('deleteImageBase', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_deleteImageBase();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_deleteImageBase () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_deleteImageBase_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  writeImagePermissions (userToken, imageBaseId, permissions) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_writeImagePermissions(userToken, imageBaseId, permissions, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_writeImagePermissions (userToken, imageBaseId, permissions, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId,
      permissions: permissions
    };
    const args = new SatelliteServer_writeImagePermissions_args(params);
    try {
      this.output.writeMessageBegin('writeImagePermissions', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_writeImagePermissions();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_writeImagePermissions () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_writeImagePermissions_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  getImagePermissions (userToken, imageBaseId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getImagePermissions(userToken, imageBaseId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getImagePermissions (userToken, imageBaseId, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId
    };
    const args = new SatelliteServer_getImagePermissions_args(params);
    try {
      this.output.writeMessageBegin('getImagePermissions', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getImagePermissions();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getImagePermissions () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getImagePermissions_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getImagePermissions failed: unknown result';
  }

  setImageOwner (userToken, imageBaseId, newOwnerId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setImageOwner(userToken, imageBaseId, newOwnerId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setImageOwner (userToken, imageBaseId, newOwnerId, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId,
      newOwnerId: newOwnerId
    };
    const args = new SatelliteServer_setImageOwner_args(params);
    try {
      this.output.writeMessageBegin('setImageOwner', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setImageOwner();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setImageOwner () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_setImageOwner_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  setImageVersionExpiry (userToken, imageBaseId, expireTime) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setImageVersionExpiry(userToken, imageBaseId, expireTime, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setImageVersionExpiry (userToken, imageBaseId, expireTime, callback) {
    const params = {
      userToken: userToken,
      imageBaseId: imageBaseId,
      expireTime: expireTime
    };
    const args = new SatelliteServer_setImageVersionExpiry_args(params);
    try {
      this.output.writeMessageBegin('setImageVersionExpiry', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setImageVersionExpiry();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setImageVersionExpiry () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_setImageVersionExpiry_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.dateError) {
      throw result.dateError;
    }
    return;
  }

  getImageVersionVirtConfig (userToken, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getImageVersionVirtConfig(userToken, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getImageVersionVirtConfig (userToken, imageVersionId, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId
    };
    const args = new SatelliteServer_getImageVersionVirtConfig_args(params);
    try {
      this.output.writeMessageBegin('getImageVersionVirtConfig', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getImageVersionVirtConfig();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getImageVersionVirtConfig () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getImageVersionVirtConfig_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getImageVersionVirtConfig failed: unknown result';
  }

  setImageVersionVirtConfig (userToken, imageVersionId, meta) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setImageVersionVirtConfig(userToken, imageVersionId, meta, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setImageVersionVirtConfig (userToken, imageVersionId, meta, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId,
      meta: meta
    };
    const args = new SatelliteServer_setImageVersionVirtConfig_args(params);
    try {
      this.output.writeMessageBegin('setImageVersionVirtConfig', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setImageVersionVirtConfig();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setImageVersionVirtConfig () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_setImageVersionVirtConfig_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  requestImageReplication (userToken, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_requestImageReplication(userToken, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_requestImageReplication (userToken, imageVersionId, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId
    };
    const args = new SatelliteServer_requestImageReplication_args(params);
    try {
      this.output.writeMessageBegin('requestImageReplication', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_requestImageReplication();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_requestImageReplication () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_requestImageReplication_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'requestImageReplication failed: unknown result';
  }

  publishImageVersion (userToken, imageVersionId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_publishImageVersion(userToken, imageVersionId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_publishImageVersion (userToken, imageVersionId, callback) {
    const params = {
      userToken: userToken,
      imageVersionId: imageVersionId
    };
    const args = new SatelliteServer_publishImageVersion_args(params);
    try {
      this.output.writeMessageBegin('publishImageVersion', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_publishImageVersion();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_publishImageVersion () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_publishImageVersion_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.tre) {
      throw result.tre;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'publishImageVersion failed: unknown result';
  }

  createLecture (userToken, lecture) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_createLecture(userToken, lecture, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_createLecture (userToken, lecture, callback) {
    const params = {
      userToken: userToken,
      lecture: lecture
    };
    const args = new SatelliteServer_createLecture_args(params);
    try {
      this.output.writeMessageBegin('createLecture', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_createLecture();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_createLecture () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_createLecture_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.dateError) {
      throw result.dateError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'createLecture failed: unknown result';
  }

  updateLecture (userToken, lectureId, lecture) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_updateLecture(userToken, lectureId, lecture, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_updateLecture (userToken, lectureId, lecture, callback) {
    const params = {
      userToken: userToken,
      lectureId: lectureId,
      lecture: lecture
    };
    const args = new SatelliteServer_updateLecture_args(params);
    try {
      this.output.writeMessageBegin('updateLecture', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_updateLecture();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_updateLecture () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_updateLecture_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.dateError) {
      throw result.dateError;
    }
    return;
  }

  getLectureList (userToken, page) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getLectureList(userToken, page, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getLectureList (userToken, page, callback) {
    const params = {
      userToken: userToken,
      page: page
    };
    const args = new SatelliteServer_getLectureList_args(params);
    try {
      this.output.writeMessageBegin('getLectureList', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getLectureList();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getLectureList () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getLectureList_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getLectureList failed: unknown result';
  }

  getLectureDetails (userToken, lectureId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getLectureDetails(userToken, lectureId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getLectureDetails (userToken, lectureId, callback) {
    const params = {
      userToken: userToken,
      lectureId: lectureId
    };
    const args = new SatelliteServer_getLectureDetails_args(params);
    try {
      this.output.writeMessageBegin('getLectureDetails', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getLectureDetails();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getLectureDetails () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getLectureDetails_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getLectureDetails failed: unknown result';
  }

  deleteLecture (userToken, lectureId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_deleteLecture(userToken, lectureId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_deleteLecture (userToken, lectureId, callback) {
    const params = {
      userToken: userToken,
      lectureId: lectureId
    };
    const args = new SatelliteServer_deleteLecture_args(params);
    try {
      this.output.writeMessageBegin('deleteLecture', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_deleteLecture();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_deleteLecture () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_deleteLecture_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  writeLecturePermissions (userToken, lectureId, permissions) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_writeLecturePermissions(userToken, lectureId, permissions, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_writeLecturePermissions (userToken, lectureId, permissions, callback) {
    const params = {
      userToken: userToken,
      lectureId: lectureId,
      permissions: permissions
    };
    const args = new SatelliteServer_writeLecturePermissions_args(params);
    try {
      this.output.writeMessageBegin('writeLecturePermissions', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_writeLecturePermissions();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_writeLecturePermissions () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_writeLecturePermissions_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  getLecturePermissions (userToken, lectureId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getLecturePermissions(userToken, lectureId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getLecturePermissions (userToken, lectureId, callback) {
    const params = {
      userToken: userToken,
      lectureId: lectureId
    };
    const args = new SatelliteServer_getLecturePermissions_args(params);
    try {
      this.output.writeMessageBegin('getLecturePermissions', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getLecturePermissions();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getLecturePermissions () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getLecturePermissions_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getLecturePermissions failed: unknown result';
  }

  setLectureOwner (userToken, lectureId, newOwnerId) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_setLectureOwner(userToken, lectureId, newOwnerId, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_setLectureOwner (userToken, lectureId, newOwnerId, callback) {
    const params = {
      userToken: userToken,
      lectureId: lectureId,
      newOwnerId: newOwnerId
    };
    const args = new SatelliteServer_setLectureOwner_args(params);
    try {
      this.output.writeMessageBegin('setLectureOwner', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_setLectureOwner();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_setLectureOwner () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_setLectureOwner_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.notFound) {
      throw result.notFound;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    return;
  }

  getPredefinedData (userToken) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getPredefinedData(userToken, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getPredefinedData (userToken, callback) {
    const params = {
      userToken: userToken
    };
    const args = new SatelliteServer_getPredefinedData_args(params);
    try {
      this.output.writeMessageBegin('getPredefinedData', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getPredefinedData();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_getPredefinedData () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SatelliteServer_getPredefinedData_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.authError) {
      throw result.authError;
    }
    if (null !== result.serverError) {
      throw result.serverError;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'getPredefinedData failed: unknown result';
  }
};
//
// Autogenerated by Thrift Compiler (0.19.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  const Int64 = require('node-int64');
}


AuthorizationError = {
  '0' : 'GENERIC_ERROR',
  'GENERIC_ERROR' : 0,
  '1' : 'NOT_AUTHENTICATED',
  'NOT_AUTHENTICATED' : 1,
  '2' : 'NO_PERMISSION',
  'NO_PERMISSION' : 2,
  '3' : 'ACCOUNT_SUSPENDED',
  'ACCOUNT_SUSPENDED' : 3,
  '4' : 'ORGANIZATION_SUSPENDED',
  'ORGANIZATION_SUSPENDED' : 4,
  '5' : 'INVALID_CREDENTIALS',
  'INVALID_CREDENTIALS' : 5,
  '6' : 'INVALID_ORGANIZATION',
  'INVALID_ORGANIZATION' : 6,
  '7' : 'INVALID_KEY',
  'INVALID_KEY' : 7,
  '8' : 'INVALID_TOKEN',
  'INVALID_TOKEN' : 8,
  '9' : 'CHALLENGE_FAILED',
  'CHALLENGE_FAILED' : 9,
  '10' : 'BANNED_NETWORK',
  'BANNED_NETWORK' : 10
};
InvocationError = {
  '0' : 'MISSING_DATA',
  'MISSING_DATA' : 0,
  '1' : 'INVALID_DATA',
  'INVALID_DATA' : 1,
  '2' : 'UNKNOWN_IMAGE',
  'UNKNOWN_IMAGE' : 2,
  '3' : 'UNKNOWN_USER',
  'UNKNOWN_USER' : 3,
  '4' : 'UNKNOWN_LECTURE',
  'UNKNOWN_LECTURE' : 4,
  '5' : 'INVALID_SHARE_MODE',
  'INVALID_SHARE_MODE' : 5,
  '6' : 'INTERNAL_SERVER_ERROR',
  'INTERNAL_SERVER_ERROR' : 6
};
ShareMode = {
  '0' : 'LOCAL',
  'LOCAL' : 0,
  '1' : 'PUBLISH',
  'PUBLISH' : 1,
  '2' : 'DOWNLOAD',
  'DOWNLOAD' : 2,
  '3' : 'FROZEN',
  'FROZEN' : 3
};
NetDirection = {
  '0' : 'IN',
  'IN' : 0,
  '1' : 'OUT',
  'OUT' : 1
};
Role = {
  '0' : 'STUDENT',
  'STUDENT' : 0,
  '1' : 'TUTOR',
  'TUTOR' : 1
};
TransferState = {
  '0' : 'IDLE',
  'IDLE' : 0,
  '1' : 'WORKING',
  'WORKING' : 1,
  '2' : 'FINISHED',
  'FINISHED' : 2,
  '3' : 'ERROR',
  'ERROR' : 3
};
DateParamError = {
  '0' : 'TOO_LOW',
  'TOO_LOW' : 0,
  '1' : 'TOO_HIGH',
  'TOO_HIGH' : 1,
  '2' : 'NEGATIVE_RANGE',
  'NEGATIVE_RANGE' : 2
};
NetShareAuth = {
  '0' : 'LOGIN_USER',
  'LOGIN_USER' : 0,
  '1' : 'OTHER_USER',
  'OTHER_USER' : 1
};
SscMode = {
  '0' : 'OFF',
  'OFF' : 0,
  '1' : 'ON',
  'ON' : 1,
  '2' : 'AUTO',
  'AUTO' : 2,
  '3' : 'USER',
  'USER' : 3
};
UserInfo = class {
  constructor(args) {
    this.userId = null;
    this.firstName = null;
    this.lastName = null;
    this.eMail = null;
    this.organizationId = null;
    this.role = null;
    if (args) {
      if (args.userId !== undefined && args.userId !== null) {
        this.userId = args.userId;
      }
      if (args.firstName !== undefined && args.firstName !== null) {
        this.firstName = args.firstName;
      }
      if (args.lastName !== undefined && args.lastName !== null) {
        this.lastName = args.lastName;
      }
      if (args.eMail !== undefined && args.eMail !== null) {
        this.eMail = args.eMail;
      }
      if (args.organizationId !== undefined && args.organizationId !== null) {
        this.organizationId = args.organizationId;
      }
      if (args.role !== undefined && args.role !== null) {
        this.role = args.role;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.userId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.firstName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.lastName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.eMail = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.organizationId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.I32) {
          this.role = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('UserInfo');
    if (this.userId !== null && this.userId !== undefined) {
      output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
      output.writeString(this.userId);
      output.writeFieldEnd();
    }
    if (this.firstName !== null && this.firstName !== undefined) {
      output.writeFieldBegin('firstName', Thrift.Type.STRING, 2);
      output.writeString(this.firstName);
      output.writeFieldEnd();
    }
    if (this.lastName !== null && this.lastName !== undefined) {
      output.writeFieldBegin('lastName', Thrift.Type.STRING, 3);
      output.writeString(this.lastName);
      output.writeFieldEnd();
    }
    if (this.eMail !== null && this.eMail !== undefined) {
      output.writeFieldBegin('eMail', Thrift.Type.STRING, 4);
      output.writeString(this.eMail);
      output.writeFieldEnd();
    }
    if (this.organizationId !== null && this.organizationId !== undefined) {
      output.writeFieldBegin('organizationId', Thrift.Type.STRING, 5);
      output.writeString(this.organizationId);
      output.writeFieldEnd();
    }
    if (this.role !== null && this.role !== undefined) {
      output.writeFieldBegin('role', Thrift.Type.I32, 6);
      output.writeI32(this.role);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
WhoamiInfo = class {
  constructor(args) {
    this.user = null;
    this.isSuperUser = null;
    this.canListImages = null;
    if (args) {
      if (args.user !== undefined && args.user !== null) {
        this.user = new UserInfo(args.user);
      }
      if (args.isSuperUser !== undefined && args.isSuperUser !== null) {
        this.isSuperUser = args.isSuperUser;
      }
      if (args.canListImages !== undefined && args.canListImages !== null) {
        this.canListImages = args.canListImages;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.user = new UserInfo();
          this.user.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.BOOL) {
          this.isSuperUser = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.BOOL) {
          this.canListImages = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('WhoamiInfo');
    if (this.user !== null && this.user !== undefined) {
      output.writeFieldBegin('user', Thrift.Type.STRUCT, 1);
      this.user.write(output);
      output.writeFieldEnd();
    }
    if (this.isSuperUser !== null && this.isSuperUser !== undefined) {
      output.writeFieldBegin('isSuperUser', Thrift.Type.BOOL, 2);
      output.writeBool(this.isSuperUser);
      output.writeFieldEnd();
    }
    if (this.canListImages !== null && this.canListImages !== undefined) {
      output.writeFieldBegin('canListImages', Thrift.Type.BOOL, 3);
      output.writeBool(this.canListImages);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Organization = class {
  constructor(args) {
    this.organizationId = null;
    this.displayName = null;
    this.ecpUrl = null;
    this.suffixList = null;
    if (args) {
      if (args.organizationId !== undefined && args.organizationId !== null) {
        this.organizationId = args.organizationId;
      }
      if (args.displayName !== undefined && args.displayName !== null) {
        this.displayName = args.displayName;
      }
      if (args.ecpUrl !== undefined && args.ecpUrl !== null) {
        this.ecpUrl = args.ecpUrl;
      }
      if (args.suffixList !== undefined && args.suffixList !== null) {
        this.suffixList = Thrift.copyList(args.suffixList, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.organizationId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.displayName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.ecpUrl = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.LIST) {
          this.suffixList = [];
          const _rtmp31 = input.readListBegin();
          const _size0 = _rtmp31.size || 0;
          for (let _i2 = 0; _i2 < _size0; ++_i2) {
            let elem3 = null;
            elem3 = input.readString().value;
            this.suffixList.push(elem3);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Organization');
    if (this.organizationId !== null && this.organizationId !== undefined) {
      output.writeFieldBegin('organizationId', Thrift.Type.STRING, 1);
      output.writeString(this.organizationId);
      output.writeFieldEnd();
    }
    if (this.displayName !== null && this.displayName !== undefined) {
      output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
      output.writeString(this.displayName);
      output.writeFieldEnd();
    }
    if (this.ecpUrl !== null && this.ecpUrl !== undefined) {
      output.writeFieldBegin('ecpUrl', Thrift.Type.STRING, 3);
      output.writeString(this.ecpUrl);
      output.writeFieldEnd();
    }
    if (this.suffixList !== null && this.suffixList !== undefined) {
      output.writeFieldBegin('suffixList', Thrift.Type.LIST, 4);
      output.writeListBegin(Thrift.Type.STRING, this.suffixList.length);
      for (let iter4 in this.suffixList) {
        if (this.suffixList.hasOwnProperty(iter4)) {
          iter4 = this.suffixList[iter4];
          output.writeString(iter4);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Satellite = class {
  constructor(args) {
    this.addressList = null;
    this.displayName = null;
    this.certSha256 = null;
    if (args) {
      if (args.addressList !== undefined && args.addressList !== null) {
        this.addressList = Thrift.copyList(args.addressList, [null]);
      }
      if (args.displayName !== undefined && args.displayName !== null) {
        this.displayName = args.displayName;
      }
      if (args.certSha256 !== undefined && args.certSha256 !== null) {
        this.certSha256 = args.certSha256;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.LIST) {
          this.addressList = [];
          const _rtmp36 = input.readListBegin();
          const _size5 = _rtmp36.size || 0;
          for (let _i7 = 0; _i7 < _size5; ++_i7) {
            let elem8 = null;
            elem8 = input.readString().value;
            this.addressList.push(elem8);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.displayName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.certSha256 = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Satellite');
    if (this.addressList !== null && this.addressList !== undefined) {
      output.writeFieldBegin('addressList', Thrift.Type.LIST, 1);
      output.writeListBegin(Thrift.Type.STRING, this.addressList.length);
      for (let iter9 in this.addressList) {
        if (this.addressList.hasOwnProperty(iter9)) {
          iter9 = this.addressList[iter9];
          output.writeString(iter9);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.displayName !== null && this.displayName !== undefined) {
      output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
      output.writeString(this.displayName);
      output.writeFieldEnd();
    }
    if (this.certSha256 !== null && this.certSha256 !== undefined) {
      output.writeFieldBegin('certSha256', Thrift.Type.STRING, 3);
      output.writeBinary(this.certSha256);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SessionData = class {
  constructor(args) {
    this.sessionId = null;
    this.authToken = null;
    this.serverAddress = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.authToken !== undefined && args.authToken !== null) {
        this.authToken = args.authToken;
      }
      if (args.serverAddress !== undefined && args.serverAddress !== null) {
        this.serverAddress = args.serverAddress;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.authToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.serverAddress = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SessionData');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.authToken !== null && this.authToken !== undefined) {
      output.writeFieldBegin('authToken', Thrift.Type.STRING, 2);
      output.writeString(this.authToken);
      output.writeFieldEnd();
    }
    if (this.serverAddress !== null && this.serverAddress !== undefined) {
      output.writeFieldBegin('serverAddress', Thrift.Type.STRING, 3);
      output.writeString(this.serverAddress);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ClientSessionData = class {
  constructor(args) {
    this.sessionId = null;
    this.authToken = null;
    this.satellites = null;
    this.userInfo = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
      if (args.authToken !== undefined && args.authToken !== null) {
        this.authToken = args.authToken;
      }
      if (args.satellites !== undefined && args.satellites !== null) {
        this.satellites = Thrift.copyList(args.satellites, [Satellite]);
      }
      if (args.userInfo !== undefined && args.userInfo !== null) {
        this.userInfo = new UserInfo(args.userInfo);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.authToken = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.satellites = [];
          const _rtmp311 = input.readListBegin();
          const _size10 = _rtmp311.size || 0;
          for (let _i12 = 0; _i12 < _size10; ++_i12) {
            let elem13 = null;
            elem13 = new Satellite();
            elem13.read(input);
            this.satellites.push(elem13);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.userInfo = new UserInfo();
          this.userInfo.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ClientSessionData');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    if (this.authToken !== null && this.authToken !== undefined) {
      output.writeFieldBegin('authToken', Thrift.Type.STRING, 2);
      output.writeString(this.authToken);
      output.writeFieldEnd();
    }
    if (this.satellites !== null && this.satellites !== undefined) {
      output.writeFieldBegin('satellites', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.STRUCT, this.satellites.length);
      for (let iter14 in this.satellites) {
        if (this.satellites.hasOwnProperty(iter14)) {
          iter14 = this.satellites[iter14];
          iter14.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.userInfo !== null && this.userInfo !== undefined) {
      output.writeFieldBegin('userInfo', Thrift.Type.STRUCT, 4);
      this.userInfo.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ServerSessionData = class {
  constructor(args) {
    this.sessionId = null;
    if (args) {
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.sessionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ServerSessionData');
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
      output.writeString(this.sessionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Virtualizer = class {
  constructor(args) {
    this.virtId = null;
    this.virtName = null;
    if (args) {
      if (args.virtId !== undefined && args.virtId !== null) {
        this.virtId = args.virtId;
      }
      if (args.virtName !== undefined && args.virtName !== null) {
        this.virtName = args.virtName;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.virtId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.virtName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Virtualizer');
    if (this.virtId !== null && this.virtId !== undefined) {
      output.writeFieldBegin('virtId', Thrift.Type.STRING, 1);
      output.writeString(this.virtId);
      output.writeFieldEnd();
    }
    if (this.virtName !== null && this.virtName !== undefined) {
      output.writeFieldBegin('virtName', Thrift.Type.STRING, 2);
      output.writeString(this.virtName);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
OperatingSystem = class {
  constructor(args) {
    this.osId = null;
    this.osName = null;
    this.virtualizerOsId = null;
    this.architecture = null;
    this.maxMemMb = null;
    this.maxCores = null;
    if (args) {
      if (args.osId !== undefined && args.osId !== null) {
        this.osId = args.osId;
      }
      if (args.osName !== undefined && args.osName !== null) {
        this.osName = args.osName;
      }
      if (args.virtualizerOsId !== undefined && args.virtualizerOsId !== null) {
        this.virtualizerOsId = Thrift.copyMap(args.virtualizerOsId, [null]);
      }
      if (args.architecture !== undefined && args.architecture !== null) {
        this.architecture = args.architecture;
      }
      if (args.maxMemMb !== undefined && args.maxMemMb !== null) {
        this.maxMemMb = args.maxMemMb;
      }
      if (args.maxCores !== undefined && args.maxCores !== null) {
        this.maxCores = args.maxCores;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.osId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.osName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.MAP) {
          this.virtualizerOsId = {};
          const _rtmp316 = input.readMapBegin();
          const _size15 = _rtmp316.size || 0;
          for (let _i17 = 0; _i17 < _size15; ++_i17) {
            if (_i17 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            let key18 = null;
            let val19 = null;
            key18 = input.readString().value;
            val19 = input.readString().value;
            this.virtualizerOsId[key18] = val19;
          }
          input.readMapEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.architecture = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.I32) {
          this.maxMemMb = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.I32) {
          this.maxCores = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('OperatingSystem');
    if (this.osId !== null && this.osId !== undefined) {
      output.writeFieldBegin('osId', Thrift.Type.I32, 1);
      output.writeI32(this.osId);
      output.writeFieldEnd();
    }
    if (this.osName !== null && this.osName !== undefined) {
      output.writeFieldBegin('osName', Thrift.Type.STRING, 2);
      output.writeString(this.osName);
      output.writeFieldEnd();
    }
    if (this.virtualizerOsId !== null && this.virtualizerOsId !== undefined) {
      output.writeFieldBegin('virtualizerOsId', Thrift.Type.MAP, 3);
      output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.virtualizerOsId));
      for (let kiter20 in this.virtualizerOsId) {
        if (this.virtualizerOsId.hasOwnProperty(kiter20)) {
          let viter21 = this.virtualizerOsId[kiter20];
          output.writeString(kiter20);
          output.writeString(viter21);
        }
      }
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    if (this.architecture !== null && this.architecture !== undefined) {
      output.writeFieldBegin('architecture', Thrift.Type.STRING, 4);
      output.writeString(this.architecture);
      output.writeFieldEnd();
    }
    if (this.maxMemMb !== null && this.maxMemMb !== undefined) {
      output.writeFieldBegin('maxMemMb', Thrift.Type.I32, 5);
      output.writeI32(this.maxMemMb);
      output.writeFieldEnd();
    }
    if (this.maxCores !== null && this.maxCores !== undefined) {
      output.writeFieldBegin('maxCores', Thrift.Type.I32, 6);
      output.writeI32(this.maxCores);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImagePermissions = class {
  constructor(args) {
    this.link = null;
    this.download = null;
    this.edit = null;
    this.admin = null;
    if (args) {
      if (args.link !== undefined && args.link !== null) {
        this.link = args.link;
      }
      if (args.download !== undefined && args.download !== null) {
        this.download = args.download;
      }
      if (args.edit !== undefined && args.edit !== null) {
        this.edit = args.edit;
      }
      if (args.admin !== undefined && args.admin !== null) {
        this.admin = args.admin;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.BOOL) {
          this.link = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.BOOL) {
          this.download = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.BOOL) {
          this.edit = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.BOOL) {
          this.admin = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImagePermissions');
    if (this.link !== null && this.link !== undefined) {
      output.writeFieldBegin('link', Thrift.Type.BOOL, 1);
      output.writeBool(this.link);
      output.writeFieldEnd();
    }
    if (this.download !== null && this.download !== undefined) {
      output.writeFieldBegin('download', Thrift.Type.BOOL, 2);
      output.writeBool(this.download);
      output.writeFieldEnd();
    }
    if (this.edit !== null && this.edit !== undefined) {
      output.writeFieldBegin('edit', Thrift.Type.BOOL, 3);
      output.writeBool(this.edit);
      output.writeFieldEnd();
    }
    if (this.admin !== null && this.admin !== undefined) {
      output.writeFieldBegin('admin', Thrift.Type.BOOL, 4);
      output.writeBool(this.admin);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
LecturePermissions = class {
  constructor(args) {
    this.edit = null;
    this.admin = null;
    if (args) {
      if (args.edit !== undefined && args.edit !== null) {
        this.edit = args.edit;
      }
      if (args.admin !== undefined && args.admin !== null) {
        this.admin = args.admin;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.BOOL) {
          this.edit = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.BOOL) {
          this.admin = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('LecturePermissions');
    if (this.edit !== null && this.edit !== undefined) {
      output.writeFieldBegin('edit', Thrift.Type.BOOL, 1);
      output.writeBool(this.edit);
      output.writeFieldEnd();
    }
    if (this.admin !== null && this.admin !== undefined) {
      output.writeFieldBegin('admin', Thrift.Type.BOOL, 2);
      output.writeBool(this.admin);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImageBaseWrite = class {
  constructor(args) {
    this.imageName = null;
    this.description = null;
    this.osId = null;
    this.virtId = null;
    this.isTemplate = null;
    this.defaultPermissions = null;
    this.shareMode = null;
    this.addTags = null;
    this.remTags = null;
    if (args) {
      if (args.imageName !== undefined && args.imageName !== null) {
        this.imageName = args.imageName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.osId !== undefined && args.osId !== null) {
        this.osId = args.osId;
      }
      if (args.virtId !== undefined && args.virtId !== null) {
        this.virtId = args.virtId;
      }
      if (args.isTemplate !== undefined && args.isTemplate !== null) {
        this.isTemplate = args.isTemplate;
      }
      if (args.defaultPermissions !== undefined && args.defaultPermissions !== null) {
        this.defaultPermissions = new ImagePermissions(args.defaultPermissions);
      }
      if (args.shareMode !== undefined && args.shareMode !== null) {
        this.shareMode = args.shareMode;
      }
      if (args.addTags !== undefined && args.addTags !== null) {
        this.addTags = Thrift.copyList(args.addTags, [null]);
      }
      if (args.remTags !== undefined && args.remTags !== null) {
        this.remTags = Thrift.copyList(args.remTags, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.imageName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I32) {
          this.osId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.virtId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.BOOL) {
          this.isTemplate = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultPermissions = new ImagePermissions();
          this.defaultPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I32) {
          this.shareMode = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.LIST) {
          this.addTags = [];
          const _rtmp323 = input.readListBegin();
          const _size22 = _rtmp323.size || 0;
          for (let _i24 = 0; _i24 < _size22; ++_i24) {
            let elem25 = null;
            elem25 = input.readString().value;
            this.addTags.push(elem25);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.LIST) {
          this.remTags = [];
          const _rtmp327 = input.readListBegin();
          const _size26 = _rtmp327.size || 0;
          for (let _i28 = 0; _i28 < _size26; ++_i28) {
            let elem29 = null;
            elem29 = input.readString().value;
            this.remTags.push(elem29);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImageBaseWrite');
    if (this.imageName !== null && this.imageName !== undefined) {
      output.writeFieldBegin('imageName', Thrift.Type.STRING, 1);
      output.writeString(this.imageName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 2);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.osId !== null && this.osId !== undefined) {
      output.writeFieldBegin('osId', Thrift.Type.I32, 3);
      output.writeI32(this.osId);
      output.writeFieldEnd();
    }
    if (this.virtId !== null && this.virtId !== undefined) {
      output.writeFieldBegin('virtId', Thrift.Type.STRING, 4);
      output.writeString(this.virtId);
      output.writeFieldEnd();
    }
    if (this.isTemplate !== null && this.isTemplate !== undefined) {
      output.writeFieldBegin('isTemplate', Thrift.Type.BOOL, 5);
      output.writeBool(this.isTemplate);
      output.writeFieldEnd();
    }
    if (this.defaultPermissions !== null && this.defaultPermissions !== undefined) {
      output.writeFieldBegin('defaultPermissions', Thrift.Type.STRUCT, 6);
      this.defaultPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.shareMode !== null && this.shareMode !== undefined) {
      output.writeFieldBegin('shareMode', Thrift.Type.I32, 7);
      output.writeI32(this.shareMode);
      output.writeFieldEnd();
    }
    if (this.addTags !== null && this.addTags !== undefined) {
      output.writeFieldBegin('addTags', Thrift.Type.LIST, 8);
      output.writeListBegin(Thrift.Type.STRING, this.addTags.length);
      for (let iter30 in this.addTags) {
        if (this.addTags.hasOwnProperty(iter30)) {
          iter30 = this.addTags[iter30];
          output.writeString(iter30);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.remTags !== null && this.remTags !== undefined) {
      output.writeFieldBegin('remTags', Thrift.Type.LIST, 9);
      output.writeListBegin(Thrift.Type.STRING, this.remTags.length);
      for (let iter31 in this.remTags) {
        if (this.remTags.hasOwnProperty(iter31)) {
          iter31 = this.remTags[iter31];
          output.writeString(iter31);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImageVersionWrite = class {
  constructor(args) {
    this.isRestricted = null;
    if (args) {
      if (args.isRestricted !== undefined && args.isRestricted !== null) {
        this.isRestricted = args.isRestricted;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 2:
        if (ftype == Thrift.Type.BOOL) {
          this.isRestricted = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImageVersionWrite');
    if (this.isRestricted !== null && this.isRestricted !== undefined) {
      output.writeFieldBegin('isRestricted', Thrift.Type.BOOL, 2);
      output.writeBool(this.isRestricted);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImageSummaryRead = class {
  constructor(args) {
    this.imageBaseId = null;
    this.latestVersionId = null;
    this.imageName = null;
    this.description = null;
    this.osId = null;
    this.virtId = null;
    this.createTime = null;
    this.updateTime = null;
    this.uploadTime = null;
    this.expireTime = null;
    this.ownerId = null;
    this.uploaderId = null;
    this.shareMode = null;
    this.fileSize = null;
    this.isRestricted = null;
    this.isValid = null;
    this.isProcessed = null;
    this.isTemplate = null;
    this.defaultPermissions = null;
    this.userPermissions = null;
    this.fileSizeSum = null;
    this.versionCount = null;
    if (args) {
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.latestVersionId !== undefined && args.latestVersionId !== null) {
        this.latestVersionId = args.latestVersionId;
      }
      if (args.imageName !== undefined && args.imageName !== null) {
        this.imageName = args.imageName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.osId !== undefined && args.osId !== null) {
        this.osId = args.osId;
      }
      if (args.virtId !== undefined && args.virtId !== null) {
        this.virtId = args.virtId;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
      if (args.updateTime !== undefined && args.updateTime !== null) {
        this.updateTime = args.updateTime;
      }
      if (args.uploadTime !== undefined && args.uploadTime !== null) {
        this.uploadTime = args.uploadTime;
      }
      if (args.expireTime !== undefined && args.expireTime !== null) {
        this.expireTime = args.expireTime;
      }
      if (args.ownerId !== undefined && args.ownerId !== null) {
        this.ownerId = args.ownerId;
      }
      if (args.uploaderId !== undefined && args.uploaderId !== null) {
        this.uploaderId = args.uploaderId;
      }
      if (args.shareMode !== undefined && args.shareMode !== null) {
        this.shareMode = args.shareMode;
      }
      if (args.fileSize !== undefined && args.fileSize !== null) {
        this.fileSize = args.fileSize;
      }
      if (args.isRestricted !== undefined && args.isRestricted !== null) {
        this.isRestricted = args.isRestricted;
      }
      if (args.isValid !== undefined && args.isValid !== null) {
        this.isValid = args.isValid;
      }
      if (args.isProcessed !== undefined && args.isProcessed !== null) {
        this.isProcessed = args.isProcessed;
      }
      if (args.isTemplate !== undefined && args.isTemplate !== null) {
        this.isTemplate = args.isTemplate;
      }
      if (args.defaultPermissions !== undefined && args.defaultPermissions !== null) {
        this.defaultPermissions = new ImagePermissions(args.defaultPermissions);
      }
      if (args.userPermissions !== undefined && args.userPermissions !== null) {
        this.userPermissions = new ImagePermissions(args.userPermissions);
      }
      if (args.fileSizeSum !== undefined && args.fileSizeSum !== null) {
        this.fileSizeSum = args.fileSizeSum;
      }
      if (args.versionCount !== undefined && args.versionCount !== null) {
        this.versionCount = args.versionCount;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.latestVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.imageName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 23:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.I32) {
          this.osId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.STRING) {
          this.virtId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.I64) {
          this.updateTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 20:
        if (ftype == Thrift.Type.I64) {
          this.uploadTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.I64) {
          this.expireTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.STRING) {
          this.ownerId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.STRING) {
          this.uploaderId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.I32) {
          this.shareMode = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 13:
        if (ftype == Thrift.Type.I64) {
          this.fileSize = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 14:
        if (ftype == Thrift.Type.BOOL) {
          this.isRestricted = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 15:
        if (ftype == Thrift.Type.BOOL) {
          this.isValid = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 16:
        if (ftype == Thrift.Type.BOOL) {
          this.isProcessed = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 17:
        if (ftype == Thrift.Type.BOOL) {
          this.isTemplate = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 18:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultPermissions = new ImagePermissions();
          this.defaultPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 19:
        if (ftype == Thrift.Type.STRUCT) {
          this.userPermissions = new ImagePermissions();
          this.userPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 21:
        if (ftype == Thrift.Type.I64) {
          this.fileSizeSum = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 22:
        if (ftype == Thrift.Type.I32) {
          this.versionCount = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImageSummaryRead');
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 1);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.latestVersionId !== null && this.latestVersionId !== undefined) {
      output.writeFieldBegin('latestVersionId', Thrift.Type.STRING, 3);
      output.writeString(this.latestVersionId);
      output.writeFieldEnd();
    }
    if (this.imageName !== null && this.imageName !== undefined) {
      output.writeFieldBegin('imageName', Thrift.Type.STRING, 4);
      output.writeString(this.imageName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 23);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.osId !== null && this.osId !== undefined) {
      output.writeFieldBegin('osId', Thrift.Type.I32, 5);
      output.writeI32(this.osId);
      output.writeFieldEnd();
    }
    if (this.virtId !== null && this.virtId !== undefined) {
      output.writeFieldBegin('virtId', Thrift.Type.STRING, 6);
      output.writeString(this.virtId);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 7);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    if (this.updateTime !== null && this.updateTime !== undefined) {
      output.writeFieldBegin('updateTime', Thrift.Type.I64, 8);
      output.writeI64(this.updateTime);
      output.writeFieldEnd();
    }
    if (this.uploadTime !== null && this.uploadTime !== undefined) {
      output.writeFieldBegin('uploadTime', Thrift.Type.I64, 20);
      output.writeI64(this.uploadTime);
      output.writeFieldEnd();
    }
    if (this.expireTime !== null && this.expireTime !== undefined) {
      output.writeFieldBegin('expireTime', Thrift.Type.I64, 9);
      output.writeI64(this.expireTime);
      output.writeFieldEnd();
    }
    if (this.ownerId !== null && this.ownerId !== undefined) {
      output.writeFieldBegin('ownerId', Thrift.Type.STRING, 10);
      output.writeString(this.ownerId);
      output.writeFieldEnd();
    }
    if (this.uploaderId !== null && this.uploaderId !== undefined) {
      output.writeFieldBegin('uploaderId', Thrift.Type.STRING, 11);
      output.writeString(this.uploaderId);
      output.writeFieldEnd();
    }
    if (this.shareMode !== null && this.shareMode !== undefined) {
      output.writeFieldBegin('shareMode', Thrift.Type.I32, 12);
      output.writeI32(this.shareMode);
      output.writeFieldEnd();
    }
    if (this.fileSize !== null && this.fileSize !== undefined) {
      output.writeFieldBegin('fileSize', Thrift.Type.I64, 13);
      output.writeI64(this.fileSize);
      output.writeFieldEnd();
    }
    if (this.isRestricted !== null && this.isRestricted !== undefined) {
      output.writeFieldBegin('isRestricted', Thrift.Type.BOOL, 14);
      output.writeBool(this.isRestricted);
      output.writeFieldEnd();
    }
    if (this.isValid !== null && this.isValid !== undefined) {
      output.writeFieldBegin('isValid', Thrift.Type.BOOL, 15);
      output.writeBool(this.isValid);
      output.writeFieldEnd();
    }
    if (this.isProcessed !== null && this.isProcessed !== undefined) {
      output.writeFieldBegin('isProcessed', Thrift.Type.BOOL, 16);
      output.writeBool(this.isProcessed);
      output.writeFieldEnd();
    }
    if (this.isTemplate !== null && this.isTemplate !== undefined) {
      output.writeFieldBegin('isTemplate', Thrift.Type.BOOL, 17);
      output.writeBool(this.isTemplate);
      output.writeFieldEnd();
    }
    if (this.defaultPermissions !== null && this.defaultPermissions !== undefined) {
      output.writeFieldBegin('defaultPermissions', Thrift.Type.STRUCT, 18);
      this.defaultPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.userPermissions !== null && this.userPermissions !== undefined) {
      output.writeFieldBegin('userPermissions', Thrift.Type.STRUCT, 19);
      this.userPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.fileSizeSum !== null && this.fileSizeSum !== undefined) {
      output.writeFieldBegin('fileSizeSum', Thrift.Type.I64, 21);
      output.writeI64(this.fileSizeSum);
      output.writeFieldEnd();
    }
    if (this.versionCount !== null && this.versionCount !== undefined) {
      output.writeFieldBegin('versionCount', Thrift.Type.I32, 22);
      output.writeI32(this.versionCount);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImageVersionDetails = class {
  constructor(args) {
    this.versionId = null;
    this.createTime = null;
    this.expireTime = null;
    this.fileSize = null;
    this.uploaderId = null;
    this.isRestricted = null;
    this.isValid = null;
    this.isProcessed = null;
    this.software = null;
    if (args) {
      if (args.versionId !== undefined && args.versionId !== null) {
        this.versionId = args.versionId;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
      if (args.expireTime !== undefined && args.expireTime !== null) {
        this.expireTime = args.expireTime;
      }
      if (args.fileSize !== undefined && args.fileSize !== null) {
        this.fileSize = args.fileSize;
      }
      if (args.uploaderId !== undefined && args.uploaderId !== null) {
        this.uploaderId = args.uploaderId;
      }
      if (args.isRestricted !== undefined && args.isRestricted !== null) {
        this.isRestricted = args.isRestricted;
      }
      if (args.isValid !== undefined && args.isValid !== null) {
        this.isValid = args.isValid;
      }
      if (args.isProcessed !== undefined && args.isProcessed !== null) {
        this.isProcessed = args.isProcessed;
      }
      if (args.software !== undefined && args.software !== null) {
        this.software = Thrift.copyList(args.software, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.versionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I64) {
          this.expireTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.I64) {
          this.fileSize = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.uploaderId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.BOOL) {
          this.isRestricted = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.BOOL) {
          this.isValid = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.BOOL) {
          this.isProcessed = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.LIST) {
          this.software = [];
          const _rtmp333 = input.readListBegin();
          const _size32 = _rtmp333.size || 0;
          for (let _i34 = 0; _i34 < _size32; ++_i34) {
            let elem35 = null;
            elem35 = input.readString().value;
            this.software.push(elem35);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImageVersionDetails');
    if (this.versionId !== null && this.versionId !== undefined) {
      output.writeFieldBegin('versionId', Thrift.Type.STRING, 1);
      output.writeString(this.versionId);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 2);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    if (this.expireTime !== null && this.expireTime !== undefined) {
      output.writeFieldBegin('expireTime', Thrift.Type.I64, 3);
      output.writeI64(this.expireTime);
      output.writeFieldEnd();
    }
    if (this.fileSize !== null && this.fileSize !== undefined) {
      output.writeFieldBegin('fileSize', Thrift.Type.I64, 4);
      output.writeI64(this.fileSize);
      output.writeFieldEnd();
    }
    if (this.uploaderId !== null && this.uploaderId !== undefined) {
      output.writeFieldBegin('uploaderId', Thrift.Type.STRING, 5);
      output.writeString(this.uploaderId);
      output.writeFieldEnd();
    }
    if (this.isRestricted !== null && this.isRestricted !== undefined) {
      output.writeFieldBegin('isRestricted', Thrift.Type.BOOL, 7);
      output.writeBool(this.isRestricted);
      output.writeFieldEnd();
    }
    if (this.isValid !== null && this.isValid !== undefined) {
      output.writeFieldBegin('isValid', Thrift.Type.BOOL, 8);
      output.writeBool(this.isValid);
      output.writeFieldEnd();
    }
    if (this.isProcessed !== null && this.isProcessed !== undefined) {
      output.writeFieldBegin('isProcessed', Thrift.Type.BOOL, 9);
      output.writeBool(this.isProcessed);
      output.writeFieldEnd();
    }
    if (this.software !== null && this.software !== undefined) {
      output.writeFieldBegin('software', Thrift.Type.LIST, 10);
      output.writeListBegin(Thrift.Type.STRING, this.software.length);
      for (let iter36 in this.software) {
        if (this.software.hasOwnProperty(iter36)) {
          iter36 = this.software[iter36];
          output.writeString(iter36);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImageDetailsRead = class {
  constructor(args) {
    this.imageBaseId = null;
    this.latestVersionId = null;
    this.versions = null;
    this.imageName = null;
    this.description = null;
    this.tags = null;
    this.osId = null;
    this.virtId = null;
    this.createTime = null;
    this.updateTime = null;
    this.ownerId = null;
    this.updaterId = null;
    this.shareMode = null;
    this.isTemplate = null;
    this.defaultPermissions = null;
    this.userPermissions = null;
    if (args) {
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.latestVersionId !== undefined && args.latestVersionId !== null) {
        this.latestVersionId = args.latestVersionId;
      }
      if (args.versions !== undefined && args.versions !== null) {
        this.versions = Thrift.copyList(args.versions, [ImageVersionDetails]);
      }
      if (args.imageName !== undefined && args.imageName !== null) {
        this.imageName = args.imageName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.tags !== undefined && args.tags !== null) {
        this.tags = Thrift.copyList(args.tags, [null]);
      }
      if (args.osId !== undefined && args.osId !== null) {
        this.osId = args.osId;
      }
      if (args.virtId !== undefined && args.virtId !== null) {
        this.virtId = args.virtId;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
      if (args.updateTime !== undefined && args.updateTime !== null) {
        this.updateTime = args.updateTime;
      }
      if (args.ownerId !== undefined && args.ownerId !== null) {
        this.ownerId = args.ownerId;
      }
      if (args.updaterId !== undefined && args.updaterId !== null) {
        this.updaterId = args.updaterId;
      }
      if (args.shareMode !== undefined && args.shareMode !== null) {
        this.shareMode = args.shareMode;
      }
      if (args.isTemplate !== undefined && args.isTemplate !== null) {
        this.isTemplate = args.isTemplate;
      }
      if (args.defaultPermissions !== undefined && args.defaultPermissions !== null) {
        this.defaultPermissions = new ImagePermissions(args.defaultPermissions);
      }
      if (args.userPermissions !== undefined && args.userPermissions !== null) {
        this.userPermissions = new ImagePermissions(args.userPermissions);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 17:
        if (ftype == Thrift.Type.STRING) {
          this.latestVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.versions = [];
          const _rtmp338 = input.readListBegin();
          const _size37 = _rtmp338.size || 0;
          for (let _i39 = 0; _i39 < _size37; ++_i39) {
            let elem40 = null;
            elem40 = new ImageVersionDetails();
            elem40.read(input);
            this.versions.push(elem40);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.imageName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.LIST) {
          this.tags = [];
          const _rtmp342 = input.readListBegin();
          const _size41 = _rtmp342.size || 0;
          for (let _i43 = 0; _i43 < _size41; ++_i43) {
            let elem44 = null;
            elem44 = input.readString().value;
            this.tags.push(elem44);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.I32) {
          this.osId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.STRING) {
          this.virtId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.I64) {
          this.updateTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.STRING) {
          this.ownerId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 13:
        if (ftype == Thrift.Type.STRING) {
          this.updaterId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 14:
        if (ftype == Thrift.Type.I32) {
          this.shareMode = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 15:
        if (ftype == Thrift.Type.BOOL) {
          this.isTemplate = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 16:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultPermissions = new ImagePermissions();
          this.defaultPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 18:
        if (ftype == Thrift.Type.STRUCT) {
          this.userPermissions = new ImagePermissions();
          this.userPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImageDetailsRead');
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 1);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.latestVersionId !== null && this.latestVersionId !== undefined) {
      output.writeFieldBegin('latestVersionId', Thrift.Type.STRING, 17);
      output.writeString(this.latestVersionId);
      output.writeFieldEnd();
    }
    if (this.versions !== null && this.versions !== undefined) {
      output.writeFieldBegin('versions', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.STRUCT, this.versions.length);
      for (let iter45 in this.versions) {
        if (this.versions.hasOwnProperty(iter45)) {
          iter45 = this.versions[iter45];
          iter45.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.imageName !== null && this.imageName !== undefined) {
      output.writeFieldBegin('imageName', Thrift.Type.STRING, 4);
      output.writeString(this.imageName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 5);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.tags !== null && this.tags !== undefined) {
      output.writeFieldBegin('tags', Thrift.Type.LIST, 6);
      output.writeListBegin(Thrift.Type.STRING, this.tags.length);
      for (let iter46 in this.tags) {
        if (this.tags.hasOwnProperty(iter46)) {
          iter46 = this.tags[iter46];
          output.writeString(iter46);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.osId !== null && this.osId !== undefined) {
      output.writeFieldBegin('osId', Thrift.Type.I32, 8);
      output.writeI32(this.osId);
      output.writeFieldEnd();
    }
    if (this.virtId !== null && this.virtId !== undefined) {
      output.writeFieldBegin('virtId', Thrift.Type.STRING, 9);
      output.writeString(this.virtId);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 10);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    if (this.updateTime !== null && this.updateTime !== undefined) {
      output.writeFieldBegin('updateTime', Thrift.Type.I64, 11);
      output.writeI64(this.updateTime);
      output.writeFieldEnd();
    }
    if (this.ownerId !== null && this.ownerId !== undefined) {
      output.writeFieldBegin('ownerId', Thrift.Type.STRING, 12);
      output.writeString(this.ownerId);
      output.writeFieldEnd();
    }
    if (this.updaterId !== null && this.updaterId !== undefined) {
      output.writeFieldBegin('updaterId', Thrift.Type.STRING, 13);
      output.writeString(this.updaterId);
      output.writeFieldEnd();
    }
    if (this.shareMode !== null && this.shareMode !== undefined) {
      output.writeFieldBegin('shareMode', Thrift.Type.I32, 14);
      output.writeI32(this.shareMode);
      output.writeFieldEnd();
    }
    if (this.isTemplate !== null && this.isTemplate !== undefined) {
      output.writeFieldBegin('isTemplate', Thrift.Type.BOOL, 15);
      output.writeBool(this.isTemplate);
      output.writeFieldEnd();
    }
    if (this.defaultPermissions !== null && this.defaultPermissions !== undefined) {
      output.writeFieldBegin('defaultPermissions', Thrift.Type.STRUCT, 16);
      this.defaultPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.userPermissions !== null && this.userPermissions !== undefined) {
      output.writeFieldBegin('userPermissions', Thrift.Type.STRUCT, 18);
      this.userPermissions.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
ImagePublishData = class {
  constructor(args) {
    this.imageBaseId = null;
    this.imageVersionId = null;
    this.imageName = null;
    this.description = null;
    this.createTime = null;
    this.uploader = null;
    this.fileSize = null;
    this.software = null;
    this.tags = null;
    this.osId = null;
    this.virtId = null;
    this.isTemplate = null;
    this.owner = null;
    this.machineDescription = null;
    if (args) {
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
      if (args.imageName !== undefined && args.imageName !== null) {
        this.imageName = args.imageName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
      if (args.uploader !== undefined && args.uploader !== null) {
        this.uploader = new UserInfo(args.uploader);
      }
      if (args.fileSize !== undefined && args.fileSize !== null) {
        this.fileSize = args.fileSize;
      }
      if (args.software !== undefined && args.software !== null) {
        this.software = Thrift.copyList(args.software, [null]);
      }
      if (args.tags !== undefined && args.tags !== null) {
        this.tags = Thrift.copyList(args.tags, [null]);
      }
      if (args.osId !== undefined && args.osId !== null) {
        this.osId = args.osId;
      }
      if (args.virtId !== undefined && args.virtId !== null) {
        this.virtId = args.virtId;
      }
      if (args.isTemplate !== undefined && args.isTemplate !== null) {
        this.isTemplate = args.isTemplate;
      }
      if (args.owner !== undefined && args.owner !== null) {
        this.owner = new UserInfo(args.owner);
      }
      if (args.machineDescription !== undefined && args.machineDescription !== null) {
        this.machineDescription = args.machineDescription;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.imageName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.STRUCT) {
          this.uploader = new UserInfo();
          this.uploader.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I64) {
          this.fileSize = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.LIST) {
          this.software = [];
          const _rtmp348 = input.readListBegin();
          const _size47 = _rtmp348.size || 0;
          for (let _i49 = 0; _i49 < _size47; ++_i49) {
            let elem50 = null;
            elem50 = input.readString().value;
            this.software.push(elem50);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.LIST) {
          this.tags = [];
          const _rtmp352 = input.readListBegin();
          const _size51 = _rtmp352.size || 0;
          for (let _i53 = 0; _i53 < _size51; ++_i53) {
            let elem54 = null;
            elem54 = input.readString().value;
            this.tags.push(elem54);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.I32) {
          this.osId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.STRING) {
          this.virtId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.BOOL) {
          this.isTemplate = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 13:
        if (ftype == Thrift.Type.STRUCT) {
          this.owner = new UserInfo();
          this.owner.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 14:
        if (ftype == Thrift.Type.STRING) {
          this.machineDescription = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('ImagePublishData');
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 1);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 2);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    if (this.imageName !== null && this.imageName !== undefined) {
      output.writeFieldBegin('imageName', Thrift.Type.STRING, 3);
      output.writeString(this.imageName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 4);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 5);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    if (this.uploader !== null && this.uploader !== undefined) {
      output.writeFieldBegin('uploader', Thrift.Type.STRUCT, 6);
      this.uploader.write(output);
      output.writeFieldEnd();
    }
    if (this.fileSize !== null && this.fileSize !== undefined) {
      output.writeFieldBegin('fileSize', Thrift.Type.I64, 7);
      output.writeI64(this.fileSize);
      output.writeFieldEnd();
    }
    if (this.software !== null && this.software !== undefined) {
      output.writeFieldBegin('software', Thrift.Type.LIST, 8);
      output.writeListBegin(Thrift.Type.STRING, this.software.length);
      for (let iter55 in this.software) {
        if (this.software.hasOwnProperty(iter55)) {
          iter55 = this.software[iter55];
          output.writeString(iter55);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.tags !== null && this.tags !== undefined) {
      output.writeFieldBegin('tags', Thrift.Type.LIST, 9);
      output.writeListBegin(Thrift.Type.STRING, this.tags.length);
      for (let iter56 in this.tags) {
        if (this.tags.hasOwnProperty(iter56)) {
          iter56 = this.tags[iter56];
          output.writeString(iter56);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.osId !== null && this.osId !== undefined) {
      output.writeFieldBegin('osId', Thrift.Type.I32, 10);
      output.writeI32(this.osId);
      output.writeFieldEnd();
    }
    if (this.virtId !== null && this.virtId !== undefined) {
      output.writeFieldBegin('virtId', Thrift.Type.STRING, 11);
      output.writeString(this.virtId);
      output.writeFieldEnd();
    }
    if (this.isTemplate !== null && this.isTemplate !== undefined) {
      output.writeFieldBegin('isTemplate', Thrift.Type.BOOL, 12);
      output.writeBool(this.isTemplate);
      output.writeFieldEnd();
    }
    if (this.owner !== null && this.owner !== undefined) {
      output.writeFieldBegin('owner', Thrift.Type.STRUCT, 13);
      this.owner.write(output);
      output.writeFieldEnd();
    }
    if (this.machineDescription !== null && this.machineDescription !== undefined) {
      output.writeFieldBegin('machineDescription', Thrift.Type.STRING, 14);
      output.writeBinary(this.machineDescription);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
NetRule = class {
  constructor(args) {
    this.direction = null;
    this.host = null;
    this.port = null;
    if (args) {
      if (args.direction !== undefined && args.direction !== null) {
        this.direction = args.direction;
      }
      if (args.host !== undefined && args.host !== null) {
        this.host = args.host;
      }
      if (args.port !== undefined && args.port !== null) {
        this.port = args.port;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.direction = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.host = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.I32) {
          this.port = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('NetRule');
    if (this.direction !== null && this.direction !== undefined) {
      output.writeFieldBegin('direction', Thrift.Type.I32, 2);
      output.writeI32(this.direction);
      output.writeFieldEnd();
    }
    if (this.host !== null && this.host !== undefined) {
      output.writeFieldBegin('host', Thrift.Type.STRING, 3);
      output.writeString(this.host);
      output.writeFieldEnd();
    }
    if (this.port !== null && this.port !== undefined) {
      output.writeFieldBegin('port', Thrift.Type.I32, 4);
      output.writeI32(this.port);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
NetShare = class {
  constructor(args) {
    this.auth = null;
    this.path = null;
    this.displayname = null;
    this.mountpoint = null;
    this.username = null;
    this.password = null;
    this.shareId = null;
    if (args) {
      if (args.auth !== undefined && args.auth !== null) {
        this.auth = args.auth;
      }
      if (args.path !== undefined && args.path !== null) {
        this.path = args.path;
      }
      if (args.displayname !== undefined && args.displayname !== null) {
        this.displayname = args.displayname;
      }
      if (args.mountpoint !== undefined && args.mountpoint !== null) {
        this.mountpoint = args.mountpoint;
      }
      if (args.username !== undefined && args.username !== null) {
        this.username = args.username;
      }
      if (args.password !== undefined && args.password !== null) {
        this.password = args.password;
      }
      if (args.shareId !== undefined && args.shareId !== null) {
        this.shareId = args.shareId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 4:
        if (ftype == Thrift.Type.I32) {
          this.auth = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.path = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.displayname = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.STRING) {
          this.mountpoint = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.username = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.password = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I32) {
          this.shareId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('NetShare');
    if (this.auth !== null && this.auth !== undefined) {
      output.writeFieldBegin('auth', Thrift.Type.I32, 4);
      output.writeI32(this.auth);
      output.writeFieldEnd();
    }
    if (this.path !== null && this.path !== undefined) {
      output.writeFieldBegin('path', Thrift.Type.STRING, 1);
      output.writeString(this.path);
      output.writeFieldEnd();
    }
    if (this.displayname !== null && this.displayname !== undefined) {
      output.writeFieldBegin('displayname', Thrift.Type.STRING, 5);
      output.writeString(this.displayname);
      output.writeFieldEnd();
    }
    if (this.mountpoint !== null && this.mountpoint !== undefined) {
      output.writeFieldBegin('mountpoint', Thrift.Type.STRING, 6);
      output.writeString(this.mountpoint);
      output.writeFieldEnd();
    }
    if (this.username !== null && this.username !== undefined) {
      output.writeFieldBegin('username', Thrift.Type.STRING, 2);
      output.writeString(this.username);
      output.writeFieldEnd();
    }
    if (this.password !== null && this.password !== undefined) {
      output.writeFieldBegin('password', Thrift.Type.STRING, 3);
      output.writeString(this.password);
      output.writeFieldEnd();
    }
    if (this.shareId !== null && this.shareId !== undefined) {
      output.writeFieldBegin('shareId', Thrift.Type.I32, 7);
      output.writeI32(this.shareId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
LdapFilter = class {
  constructor(args) {
    this.attribute = null;
    this.value = null;
    this.filterId = null;
    this.title = null;
    if (args) {
      if (args.attribute !== undefined && args.attribute !== null) {
        this.attribute = args.attribute;
      }
      if (args.value !== undefined && args.value !== null) {
        this.value = args.value;
      }
      if (args.filterId !== undefined && args.filterId !== null) {
        this.filterId = args.filterId;
      }
      if (args.title !== undefined && args.title !== null) {
        this.title = args.title;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.attribute = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.value = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I32) {
          this.filterId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.title = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('LdapFilter');
    if (this.attribute !== null && this.attribute !== undefined) {
      output.writeFieldBegin('attribute', Thrift.Type.STRING, 1);
      output.writeString(this.attribute);
      output.writeFieldEnd();
    }
    if (this.value !== null && this.value !== undefined) {
      output.writeFieldBegin('value', Thrift.Type.STRING, 2);
      output.writeString(this.value);
      output.writeFieldEnd();
    }
    if (this.filterId !== null && this.filterId !== undefined) {
      output.writeFieldBegin('filterId', Thrift.Type.I32, 3);
      output.writeI32(this.filterId);
      output.writeFieldEnd();
    }
    if (this.title !== null && this.title !== undefined) {
      output.writeFieldBegin('title', Thrift.Type.STRING, 4);
      output.writeString(this.title);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
PresetRunScript = class {
  constructor(args) {
    this.scriptId = null;
    this.displayname = null;
    this.osIds = null;
    if (args) {
      if (args.scriptId !== undefined && args.scriptId !== null) {
        this.scriptId = args.scriptId;
      }
      if (args.displayname !== undefined && args.displayname !== null) {
        this.displayname = args.displayname;
      }
      if (args.osIds !== undefined && args.osIds !== null) {
        this.osIds = Thrift.copyList(args.osIds, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.scriptId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.displayname = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.osIds = [];
          const _rtmp358 = input.readListBegin();
          const _size57 = _rtmp358.size || 0;
          for (let _i59 = 0; _i59 < _size57; ++_i59) {
            let elem60 = null;
            elem60 = input.readI32().value;
            this.osIds.push(elem60);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('PresetRunScript');
    if (this.scriptId !== null && this.scriptId !== undefined) {
      output.writeFieldBegin('scriptId', Thrift.Type.I32, 1);
      output.writeI32(this.scriptId);
      output.writeFieldEnd();
    }
    if (this.displayname !== null && this.displayname !== undefined) {
      output.writeFieldBegin('displayname', Thrift.Type.STRING, 2);
      output.writeString(this.displayname);
      output.writeFieldEnd();
    }
    if (this.osIds !== null && this.osIds !== undefined) {
      output.writeFieldBegin('osIds', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.I32, this.osIds.length);
      for (let iter61 in this.osIds) {
        if (this.osIds.hasOwnProperty(iter61)) {
          iter61 = this.osIds[iter61];
          output.writeI32(iter61);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
PresetNetRule = class {
  constructor(args) {
    this.ruleId = null;
    this.displayName = null;
    this.netRules = null;
    if (args) {
      if (args.ruleId !== undefined && args.ruleId !== null) {
        this.ruleId = args.ruleId;
      }
      if (args.displayName !== undefined && args.displayName !== null) {
        this.displayName = args.displayName;
      }
      if (args.netRules !== undefined && args.netRules !== null) {
        this.netRules = Thrift.copyList(args.netRules, [NetRule]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.ruleId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.displayName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.netRules = [];
          const _rtmp363 = input.readListBegin();
          const _size62 = _rtmp363.size || 0;
          for (let _i64 = 0; _i64 < _size62; ++_i64) {
            let elem65 = null;
            elem65 = new NetRule();
            elem65.read(input);
            this.netRules.push(elem65);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('PresetNetRule');
    if (this.ruleId !== null && this.ruleId !== undefined) {
      output.writeFieldBegin('ruleId', Thrift.Type.I32, 1);
      output.writeI32(this.ruleId);
      output.writeFieldEnd();
    }
    if (this.displayName !== null && this.displayName !== undefined) {
      output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
      output.writeString(this.displayName);
      output.writeFieldEnd();
    }
    if (this.netRules !== null && this.netRules !== undefined) {
      output.writeFieldBegin('netRules', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.STRUCT, this.netRules.length);
      for (let iter66 in this.netRules) {
        if (this.netRules.hasOwnProperty(iter66)) {
          iter66 = this.netRules[iter66];
          iter66.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
PredefinedData = class {
  constructor(args) {
    this.netShares = null;
    this.ldapFilter = null;
    this.runScripts = null;
    this.networkExceptions = null;
    if (args) {
      if (args.netShares !== undefined && args.netShares !== null) {
        this.netShares = Thrift.copyList(args.netShares, [NetShare]);
      }
      if (args.ldapFilter !== undefined && args.ldapFilter !== null) {
        this.ldapFilter = Thrift.copyList(args.ldapFilter, [LdapFilter]);
      }
      if (args.runScripts !== undefined && args.runScripts !== null) {
        this.runScripts = Thrift.copyList(args.runScripts, [PresetRunScript]);
      }
      if (args.networkExceptions !== undefined && args.networkExceptions !== null) {
        this.networkExceptions = Thrift.copyList(args.networkExceptions, [PresetNetRule]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.LIST) {
          this.netShares = [];
          const _rtmp368 = input.readListBegin();
          const _size67 = _rtmp368.size || 0;
          for (let _i69 = 0; _i69 < _size67; ++_i69) {
            let elem70 = null;
            elem70 = new NetShare();
            elem70.read(input);
            this.netShares.push(elem70);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.LIST) {
          this.ldapFilter = [];
          const _rtmp372 = input.readListBegin();
          const _size71 = _rtmp372.size || 0;
          for (let _i73 = 0; _i73 < _size71; ++_i73) {
            let elem74 = null;
            elem74 = new LdapFilter();
            elem74.read(input);
            this.ldapFilter.push(elem74);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.LIST) {
          this.runScripts = [];
          const _rtmp376 = input.readListBegin();
          const _size75 = _rtmp376.size || 0;
          for (let _i77 = 0; _i77 < _size75; ++_i77) {
            let elem78 = null;
            elem78 = new PresetRunScript();
            elem78.read(input);
            this.runScripts.push(elem78);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.LIST) {
          this.networkExceptions = [];
          const _rtmp380 = input.readListBegin();
          const _size79 = _rtmp380.size || 0;
          for (let _i81 = 0; _i81 < _size79; ++_i81) {
            let elem82 = null;
            elem82 = new PresetNetRule();
            elem82.read(input);
            this.networkExceptions.push(elem82);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('PredefinedData');
    if (this.netShares !== null && this.netShares !== undefined) {
      output.writeFieldBegin('netShares', Thrift.Type.LIST, 1);
      output.writeListBegin(Thrift.Type.STRUCT, this.netShares.length);
      for (let iter83 in this.netShares) {
        if (this.netShares.hasOwnProperty(iter83)) {
          iter83 = this.netShares[iter83];
          iter83.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.ldapFilter !== null && this.ldapFilter !== undefined) {
      output.writeFieldBegin('ldapFilter', Thrift.Type.LIST, 2);
      output.writeListBegin(Thrift.Type.STRUCT, this.ldapFilter.length);
      for (let iter84 in this.ldapFilter) {
        if (this.ldapFilter.hasOwnProperty(iter84)) {
          iter84 = this.ldapFilter[iter84];
          iter84.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.runScripts !== null && this.runScripts !== undefined) {
      output.writeFieldBegin('runScripts', Thrift.Type.LIST, 3);
      output.writeListBegin(Thrift.Type.STRUCT, this.runScripts.length);
      for (let iter85 in this.runScripts) {
        if (this.runScripts.hasOwnProperty(iter85)) {
          iter85 = this.runScripts[iter85];
          iter85.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.networkExceptions !== null && this.networkExceptions !== undefined) {
      output.writeFieldBegin('networkExceptions', Thrift.Type.LIST, 4);
      output.writeListBegin(Thrift.Type.STRUCT, this.networkExceptions.length);
      for (let iter86 in this.networkExceptions) {
        if (this.networkExceptions.hasOwnProperty(iter86)) {
          iter86 = this.networkExceptions[iter86];
          iter86.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
LectureWrite = class {
  constructor(args) {
    this.lectureName = null;
    this.description = null;
    this.imageVersionId = null;
    this.autoUpdate = null;
    this.isEnabled = null;
    this.startTime = null;
    this.endTime = null;
    this.runscript = null;
    this.nics = null;
    this.networkExceptions = null;
    this.isExam = null;
    this.hasInternetAccess = null;
    this.defaultPermissions = null;
    this.addAllowedUsers = null;
    this.remAllowedUsers = null;
    this.locationIds = null;
    this.limitToLocations = null;
    this.limitToAllowedUsers = null;
    this.hasUsbAccess = null;
    this.networkShares = null;
    this.ldapFilters = null;
    this.presetScriptIds = null;
    this.presetNetworkExceptionIds = null;
    if (args) {
      if (args.lectureName !== undefined && args.lectureName !== null) {
        this.lectureName = args.lectureName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
      if (args.autoUpdate !== undefined && args.autoUpdate !== null) {
        this.autoUpdate = args.autoUpdate;
      }
      if (args.isEnabled !== undefined && args.isEnabled !== null) {
        this.isEnabled = args.isEnabled;
      }
      if (args.startTime !== undefined && args.startTime !== null) {
        this.startTime = args.startTime;
      }
      if (args.endTime !== undefined && args.endTime !== null) {
        this.endTime = args.endTime;
      }
      if (args.runscript !== undefined && args.runscript !== null) {
        this.runscript = args.runscript;
      }
      if (args.nics !== undefined && args.nics !== null) {
        this.nics = Thrift.copyList(args.nics, [null]);
      }
      if (args.networkExceptions !== undefined && args.networkExceptions !== null) {
        this.networkExceptions = Thrift.copyList(args.networkExceptions, [NetRule]);
      }
      if (args.isExam !== undefined && args.isExam !== null) {
        this.isExam = args.isExam;
      }
      if (args.hasInternetAccess !== undefined && args.hasInternetAccess !== null) {
        this.hasInternetAccess = args.hasInternetAccess;
      }
      if (args.defaultPermissions !== undefined && args.defaultPermissions !== null) {
        this.defaultPermissions = new LecturePermissions(args.defaultPermissions);
      }
      if (args.addAllowedUsers !== undefined && args.addAllowedUsers !== null) {
        this.addAllowedUsers = Thrift.copyList(args.addAllowedUsers, [null]);
      }
      if (args.remAllowedUsers !== undefined && args.remAllowedUsers !== null) {
        this.remAllowedUsers = Thrift.copyList(args.remAllowedUsers, [null]);
      }
      if (args.locationIds !== undefined && args.locationIds !== null) {
        this.locationIds = Thrift.copyList(args.locationIds, [null]);
      }
      if (args.limitToLocations !== undefined && args.limitToLocations !== null) {
        this.limitToLocations = args.limitToLocations;
      }
      if (args.limitToAllowedUsers !== undefined && args.limitToAllowedUsers !== null) {
        this.limitToAllowedUsers = args.limitToAllowedUsers;
      }
      if (args.hasUsbAccess !== undefined && args.hasUsbAccess !== null) {
        this.hasUsbAccess = args.hasUsbAccess;
      }
      if (args.networkShares !== undefined && args.networkShares !== null) {
        this.networkShares = Thrift.copyList(args.networkShares, [NetShare]);
      }
      if (args.ldapFilters !== undefined && args.ldapFilters !== null) {
        this.ldapFilters = Thrift.copyList(args.ldapFilters, [LdapFilter]);
      }
      if (args.presetScriptIds !== undefined && args.presetScriptIds !== null) {
        this.presetScriptIds = Thrift.copyList(args.presetScriptIds, [null]);
      }
      if (args.presetNetworkExceptionIds !== undefined && args.presetNetworkExceptionIds !== null) {
        this.presetNetworkExceptionIds = Thrift.copyList(args.presetNetworkExceptionIds, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.lectureName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.BOOL) {
          this.autoUpdate = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.BOOL) {
          this.isEnabled = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.I64) {
          this.startTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I64) {
          this.endTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.STRING) {
          this.runscript = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.LIST) {
          this.nics = [];
          const _rtmp388 = input.readListBegin();
          const _size87 = _rtmp388.size || 0;
          for (let _i89 = 0; _i89 < _size87; ++_i89) {
            let elem90 = null;
            elem90 = input.readString().value;
            this.nics.push(elem90);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.LIST) {
          this.networkExceptions = [];
          const _rtmp392 = input.readListBegin();
          const _size91 = _rtmp392.size || 0;
          for (let _i93 = 0; _i93 < _size91; ++_i93) {
            let elem94 = null;
            elem94 = new NetRule();
            elem94.read(input);
            this.networkExceptions.push(elem94);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 13:
        if (ftype == Thrift.Type.BOOL) {
          this.isExam = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 14:
        if (ftype == Thrift.Type.BOOL) {
          this.hasInternetAccess = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 15:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultPermissions = new LecturePermissions();
          this.defaultPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.LIST) {
          this.addAllowedUsers = [];
          const _rtmp396 = input.readListBegin();
          const _size95 = _rtmp396.size || 0;
          for (let _i97 = 0; _i97 < _size95; ++_i97) {
            let elem98 = null;
            elem98 = input.readString().value;
            this.addAllowedUsers.push(elem98);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 16:
        if (ftype == Thrift.Type.LIST) {
          this.remAllowedUsers = [];
          const _rtmp3100 = input.readListBegin();
          const _size99 = _rtmp3100.size || 0;
          for (let _i101 = 0; _i101 < _size99; ++_i101) {
            let elem102 = null;
            elem102 = input.readString().value;
            this.remAllowedUsers.push(elem102);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 17:
        if (ftype == Thrift.Type.LIST) {
          this.locationIds = [];
          const _rtmp3104 = input.readListBegin();
          const _size103 = _rtmp3104.size || 0;
          for (let _i105 = 0; _i105 < _size103; ++_i105) {
            let elem106 = null;
            elem106 = input.readI32().value;
            this.locationIds.push(elem106);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 18:
        if (ftype == Thrift.Type.BOOL) {
          this.limitToLocations = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 19:
        if (ftype == Thrift.Type.BOOL) {
          this.limitToAllowedUsers = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 20:
        if (ftype == Thrift.Type.BOOL) {
          this.hasUsbAccess = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 21:
        if (ftype == Thrift.Type.LIST) {
          this.networkShares = [];
          const _rtmp3108 = input.readListBegin();
          const _size107 = _rtmp3108.size || 0;
          for (let _i109 = 0; _i109 < _size107; ++_i109) {
            let elem110 = null;
            elem110 = new NetShare();
            elem110.read(input);
            this.networkShares.push(elem110);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 22:
        if (ftype == Thrift.Type.LIST) {
          this.ldapFilters = [];
          const _rtmp3112 = input.readListBegin();
          const _size111 = _rtmp3112.size || 0;
          for (let _i113 = 0; _i113 < _size111; ++_i113) {
            let elem114 = null;
            elem114 = new LdapFilter();
            elem114.read(input);
            this.ldapFilters.push(elem114);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 23:
        if (ftype == Thrift.Type.LIST) {
          this.presetScriptIds = [];
          const _rtmp3116 = input.readListBegin();
          const _size115 = _rtmp3116.size || 0;
          for (let _i117 = 0; _i117 < _size115; ++_i117) {
            let elem118 = null;
            elem118 = input.readI32().value;
            this.presetScriptIds.push(elem118);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 24:
        if (ftype == Thrift.Type.LIST) {
          this.presetNetworkExceptionIds = [];
          const _rtmp3120 = input.readListBegin();
          const _size119 = _rtmp3120.size || 0;
          for (let _i121 = 0; _i121 < _size119; ++_i121) {
            let elem122 = null;
            elem122 = input.readI32().value;
            this.presetNetworkExceptionIds.push(elem122);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('LectureWrite');
    if (this.lectureName !== null && this.lectureName !== undefined) {
      output.writeFieldBegin('lectureName', Thrift.Type.STRING, 1);
      output.writeString(this.lectureName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 2);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 3);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    if (this.autoUpdate !== null && this.autoUpdate !== undefined) {
      output.writeFieldBegin('autoUpdate', Thrift.Type.BOOL, 4);
      output.writeBool(this.autoUpdate);
      output.writeFieldEnd();
    }
    if (this.isEnabled !== null && this.isEnabled !== undefined) {
      output.writeFieldBegin('isEnabled', Thrift.Type.BOOL, 5);
      output.writeBool(this.isEnabled);
      output.writeFieldEnd();
    }
    if (this.startTime !== null && this.startTime !== undefined) {
      output.writeFieldBegin('startTime', Thrift.Type.I64, 6);
      output.writeI64(this.startTime);
      output.writeFieldEnd();
    }
    if (this.endTime !== null && this.endTime !== undefined) {
      output.writeFieldBegin('endTime', Thrift.Type.I64, 7);
      output.writeI64(this.endTime);
      output.writeFieldEnd();
    }
    if (this.runscript !== null && this.runscript !== undefined) {
      output.writeFieldBegin('runscript', Thrift.Type.STRING, 9);
      output.writeString(this.runscript);
      output.writeFieldEnd();
    }
    if (this.nics !== null && this.nics !== undefined) {
      output.writeFieldBegin('nics', Thrift.Type.LIST, 10);
      output.writeListBegin(Thrift.Type.STRING, this.nics.length);
      for (let iter123 in this.nics) {
        if (this.nics.hasOwnProperty(iter123)) {
          iter123 = this.nics[iter123];
          output.writeString(iter123);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.networkExceptions !== null && this.networkExceptions !== undefined) {
      output.writeFieldBegin('networkExceptions', Thrift.Type.LIST, 12);
      output.writeListBegin(Thrift.Type.STRUCT, this.networkExceptions.length);
      for (let iter124 in this.networkExceptions) {
        if (this.networkExceptions.hasOwnProperty(iter124)) {
          iter124 = this.networkExceptions[iter124];
          iter124.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.isExam !== null && this.isExam !== undefined) {
      output.writeFieldBegin('isExam', Thrift.Type.BOOL, 13);
      output.writeBool(this.isExam);
      output.writeFieldEnd();
    }
    if (this.hasInternetAccess !== null && this.hasInternetAccess !== undefined) {
      output.writeFieldBegin('hasInternetAccess', Thrift.Type.BOOL, 14);
      output.writeBool(this.hasInternetAccess);
      output.writeFieldEnd();
    }
    if (this.defaultPermissions !== null && this.defaultPermissions !== undefined) {
      output.writeFieldBegin('defaultPermissions', Thrift.Type.STRUCT, 15);
      this.defaultPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.addAllowedUsers !== null && this.addAllowedUsers !== undefined) {
      output.writeFieldBegin('addAllowedUsers', Thrift.Type.LIST, 11);
      output.writeListBegin(Thrift.Type.STRING, this.addAllowedUsers.length);
      for (let iter125 in this.addAllowedUsers) {
        if (this.addAllowedUsers.hasOwnProperty(iter125)) {
          iter125 = this.addAllowedUsers[iter125];
          output.writeString(iter125);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.remAllowedUsers !== null && this.remAllowedUsers !== undefined) {
      output.writeFieldBegin('remAllowedUsers', Thrift.Type.LIST, 16);
      output.writeListBegin(Thrift.Type.STRING, this.remAllowedUsers.length);
      for (let iter126 in this.remAllowedUsers) {
        if (this.remAllowedUsers.hasOwnProperty(iter126)) {
          iter126 = this.remAllowedUsers[iter126];
          output.writeString(iter126);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.locationIds !== null && this.locationIds !== undefined) {
      output.writeFieldBegin('locationIds', Thrift.Type.LIST, 17);
      output.writeListBegin(Thrift.Type.I32, this.locationIds.length);
      for (let iter127 in this.locationIds) {
        if (this.locationIds.hasOwnProperty(iter127)) {
          iter127 = this.locationIds[iter127];
          output.writeI32(iter127);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.limitToLocations !== null && this.limitToLocations !== undefined) {
      output.writeFieldBegin('limitToLocations', Thrift.Type.BOOL, 18);
      output.writeBool(this.limitToLocations);
      output.writeFieldEnd();
    }
    if (this.limitToAllowedUsers !== null && this.limitToAllowedUsers !== undefined) {
      output.writeFieldBegin('limitToAllowedUsers', Thrift.Type.BOOL, 19);
      output.writeBool(this.limitToAllowedUsers);
      output.writeFieldEnd();
    }
    if (this.hasUsbAccess !== null && this.hasUsbAccess !== undefined) {
      output.writeFieldBegin('hasUsbAccess', Thrift.Type.BOOL, 20);
      output.writeBool(this.hasUsbAccess);
      output.writeFieldEnd();
    }
    if (this.networkShares !== null && this.networkShares !== undefined) {
      output.writeFieldBegin('networkShares', Thrift.Type.LIST, 21);
      output.writeListBegin(Thrift.Type.STRUCT, this.networkShares.length);
      for (let iter128 in this.networkShares) {
        if (this.networkShares.hasOwnProperty(iter128)) {
          iter128 = this.networkShares[iter128];
          iter128.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.ldapFilters !== null && this.ldapFilters !== undefined) {
      output.writeFieldBegin('ldapFilters', Thrift.Type.LIST, 22);
      output.writeListBegin(Thrift.Type.STRUCT, this.ldapFilters.length);
      for (let iter129 in this.ldapFilters) {
        if (this.ldapFilters.hasOwnProperty(iter129)) {
          iter129 = this.ldapFilters[iter129];
          iter129.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.presetScriptIds !== null && this.presetScriptIds !== undefined) {
      output.writeFieldBegin('presetScriptIds', Thrift.Type.LIST, 23);
      output.writeListBegin(Thrift.Type.I32, this.presetScriptIds.length);
      for (let iter130 in this.presetScriptIds) {
        if (this.presetScriptIds.hasOwnProperty(iter130)) {
          iter130 = this.presetScriptIds[iter130];
          output.writeI32(iter130);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.presetNetworkExceptionIds !== null && this.presetNetworkExceptionIds !== undefined) {
      output.writeFieldBegin('presetNetworkExceptionIds', Thrift.Type.LIST, 24);
      output.writeListBegin(Thrift.Type.I32, this.presetNetworkExceptionIds.length);
      for (let iter131 in this.presetNetworkExceptionIds) {
        if (this.presetNetworkExceptionIds.hasOwnProperty(iter131)) {
          iter131 = this.presetNetworkExceptionIds[iter131];
          output.writeI32(iter131);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
LectureSummary = class {
  constructor(args) {
    this.lectureId = null;
    this.lectureName = null;
    this.description = null;
    this.imageVersionId = null;
    this.imageBaseId = null;
    this.isEnabled = null;
    this.startTime = null;
    this.endTime = null;
    this.lastUsed = null;
    this.useCount = null;
    this.ownerId = null;
    this.updaterId = null;
    this.isExam = null;
    this.hasInternetAccess = null;
    this.defaultPermissions = null;
    this.userPermissions = null;
    this.isImageVersionUsable = null;
    this.hasUsbAccess = null;
    if (args) {
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
      if (args.lectureName !== undefined && args.lectureName !== null) {
        this.lectureName = args.lectureName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.isEnabled !== undefined && args.isEnabled !== null) {
        this.isEnabled = args.isEnabled;
      }
      if (args.startTime !== undefined && args.startTime !== null) {
        this.startTime = args.startTime;
      }
      if (args.endTime !== undefined && args.endTime !== null) {
        this.endTime = args.endTime;
      }
      if (args.lastUsed !== undefined && args.lastUsed !== null) {
        this.lastUsed = args.lastUsed;
      }
      if (args.useCount !== undefined && args.useCount !== null) {
        this.useCount = args.useCount;
      }
      if (args.ownerId !== undefined && args.ownerId !== null) {
        this.ownerId = args.ownerId;
      }
      if (args.updaterId !== undefined && args.updaterId !== null) {
        this.updaterId = args.updaterId;
      }
      if (args.isExam !== undefined && args.isExam !== null) {
        this.isExam = args.isExam;
      }
      if (args.hasInternetAccess !== undefined && args.hasInternetAccess !== null) {
        this.hasInternetAccess = args.hasInternetAccess;
      }
      if (args.defaultPermissions !== undefined && args.defaultPermissions !== null) {
        this.defaultPermissions = new LecturePermissions(args.defaultPermissions);
      }
      if (args.userPermissions !== undefined && args.userPermissions !== null) {
        this.userPermissions = new LecturePermissions(args.userPermissions);
      }
      if (args.isImageVersionUsable !== undefined && args.isImageVersionUsable !== null) {
        this.isImageVersionUsable = args.isImageVersionUsable;
      }
      if (args.hasUsbAccess !== undefined && args.hasUsbAccess !== null) {
        this.hasUsbAccess = args.hasUsbAccess;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 18:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.BOOL) {
          this.isEnabled = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.I64) {
          this.startTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I64) {
          this.endTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.I64) {
          this.lastUsed = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.I32) {
          this.useCount = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.STRING) {
          this.ownerId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.STRING) {
          this.updaterId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.BOOL) {
          this.isExam = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 13:
        if (ftype == Thrift.Type.BOOL) {
          this.hasInternetAccess = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 14:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultPermissions = new LecturePermissions();
          this.defaultPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 15:
        if (ftype == Thrift.Type.STRUCT) {
          this.userPermissions = new LecturePermissions();
          this.userPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 16:
        if (ftype == Thrift.Type.BOOL) {
          this.isImageVersionUsable = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 17:
        if (ftype == Thrift.Type.BOOL) {
          this.hasUsbAccess = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('LectureSummary');
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 1);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    if (this.lectureName !== null && this.lectureName !== undefined) {
      output.writeFieldBegin('lectureName', Thrift.Type.STRING, 2);
      output.writeString(this.lectureName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 18);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 3);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 4);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.isEnabled !== null && this.isEnabled !== undefined) {
      output.writeFieldBegin('isEnabled', Thrift.Type.BOOL, 5);
      output.writeBool(this.isEnabled);
      output.writeFieldEnd();
    }
    if (this.startTime !== null && this.startTime !== undefined) {
      output.writeFieldBegin('startTime', Thrift.Type.I64, 6);
      output.writeI64(this.startTime);
      output.writeFieldEnd();
    }
    if (this.endTime !== null && this.endTime !== undefined) {
      output.writeFieldBegin('endTime', Thrift.Type.I64, 7);
      output.writeI64(this.endTime);
      output.writeFieldEnd();
    }
    if (this.lastUsed !== null && this.lastUsed !== undefined) {
      output.writeFieldBegin('lastUsed', Thrift.Type.I64, 8);
      output.writeI64(this.lastUsed);
      output.writeFieldEnd();
    }
    if (this.useCount !== null && this.useCount !== undefined) {
      output.writeFieldBegin('useCount', Thrift.Type.I32, 9);
      output.writeI32(this.useCount);
      output.writeFieldEnd();
    }
    if (this.ownerId !== null && this.ownerId !== undefined) {
      output.writeFieldBegin('ownerId', Thrift.Type.STRING, 10);
      output.writeString(this.ownerId);
      output.writeFieldEnd();
    }
    if (this.updaterId !== null && this.updaterId !== undefined) {
      output.writeFieldBegin('updaterId', Thrift.Type.STRING, 11);
      output.writeString(this.updaterId);
      output.writeFieldEnd();
    }
    if (this.isExam !== null && this.isExam !== undefined) {
      output.writeFieldBegin('isExam', Thrift.Type.BOOL, 12);
      output.writeBool(this.isExam);
      output.writeFieldEnd();
    }
    if (this.hasInternetAccess !== null && this.hasInternetAccess !== undefined) {
      output.writeFieldBegin('hasInternetAccess', Thrift.Type.BOOL, 13);
      output.writeBool(this.hasInternetAccess);
      output.writeFieldEnd();
    }
    if (this.defaultPermissions !== null && this.defaultPermissions !== undefined) {
      output.writeFieldBegin('defaultPermissions', Thrift.Type.STRUCT, 14);
      this.defaultPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.userPermissions !== null && this.userPermissions !== undefined) {
      output.writeFieldBegin('userPermissions', Thrift.Type.STRUCT, 15);
      this.userPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.isImageVersionUsable !== null && this.isImageVersionUsable !== undefined) {
      output.writeFieldBegin('isImageVersionUsable', Thrift.Type.BOOL, 16);
      output.writeBool(this.isImageVersionUsable);
      output.writeFieldEnd();
    }
    if (this.hasUsbAccess !== null && this.hasUsbAccess !== undefined) {
      output.writeFieldBegin('hasUsbAccess', Thrift.Type.BOOL, 17);
      output.writeBool(this.hasUsbAccess);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
LectureRead = class {
  constructor(args) {
    this.lectureId = null;
    this.lectureName = null;
    this.description = null;
    this.imageVersionId = null;
    this.imageBaseId = null;
    this.autoUpdate = null;
    this.isEnabled = null;
    this.startTime = null;
    this.endTime = null;
    this.lastUsed = null;
    this.useCount = null;
    this.createTime = null;
    this.updateTime = null;
    this.ownerId = null;
    this.updaterId = null;
    this.runscript = null;
    this.nics = null;
    this.allowedUsers = null;
    this.networkExceptions = null;
    this.isExam = null;
    this.hasInternetAccess = null;
    this.defaultPermissions = null;
    this.userPermissions = null;
    this.locationIds = null;
    this.limitToLocations = null;
    this.limitToAllowedUsers = null;
    this.hasUsbAccess = null;
    this.networkShares = null;
    this.ldapFilters = null;
    this.presetScriptIds = null;
    this.presetNetworkShares = null;
    this.presetLdapFilters = null;
    this.presetNetworkExceptionIds = null;
    if (args) {
      if (args.lectureId !== undefined && args.lectureId !== null) {
        this.lectureId = args.lectureId;
      }
      if (args.lectureName !== undefined && args.lectureName !== null) {
        this.lectureName = args.lectureName;
      }
      if (args.description !== undefined && args.description !== null) {
        this.description = args.description;
      }
      if (args.imageVersionId !== undefined && args.imageVersionId !== null) {
        this.imageVersionId = args.imageVersionId;
      }
      if (args.imageBaseId !== undefined && args.imageBaseId !== null) {
        this.imageBaseId = args.imageBaseId;
      }
      if (args.autoUpdate !== undefined && args.autoUpdate !== null) {
        this.autoUpdate = args.autoUpdate;
      }
      if (args.isEnabled !== undefined && args.isEnabled !== null) {
        this.isEnabled = args.isEnabled;
      }
      if (args.startTime !== undefined && args.startTime !== null) {
        this.startTime = args.startTime;
      }
      if (args.endTime !== undefined && args.endTime !== null) {
        this.endTime = args.endTime;
      }
      if (args.lastUsed !== undefined && args.lastUsed !== null) {
        this.lastUsed = args.lastUsed;
      }
      if (args.useCount !== undefined && args.useCount !== null) {
        this.useCount = args.useCount;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
      if (args.updateTime !== undefined && args.updateTime !== null) {
        this.updateTime = args.updateTime;
      }
      if (args.ownerId !== undefined && args.ownerId !== null) {
        this.ownerId = args.ownerId;
      }
      if (args.updaterId !== undefined && args.updaterId !== null) {
        this.updaterId = args.updaterId;
      }
      if (args.runscript !== undefined && args.runscript !== null) {
        this.runscript = args.runscript;
      }
      if (args.nics !== undefined && args.nics !== null) {
        this.nics = Thrift.copyList(args.nics, [null]);
      }
      if (args.allowedUsers !== undefined && args.allowedUsers !== null) {
        this.allowedUsers = Thrift.copyList(args.allowedUsers, [null]);
      }
      if (args.networkExceptions !== undefined && args.networkExceptions !== null) {
        this.networkExceptions = Thrift.copyList(args.networkExceptions, [NetRule]);
      }
      if (args.isExam !== undefined && args.isExam !== null) {
        this.isExam = args.isExam;
      }
      if (args.hasInternetAccess !== undefined && args.hasInternetAccess !== null) {
        this.hasInternetAccess = args.hasInternetAccess;
      }
      if (args.defaultPermissions !== undefined && args.defaultPermissions !== null) {
        this.defaultPermissions = new LecturePermissions(args.defaultPermissions);
      }
      if (args.userPermissions !== undefined && args.userPermissions !== null) {
        this.userPermissions = new LecturePermissions(args.userPermissions);
      }
      if (args.locationIds !== undefined && args.locationIds !== null) {
        this.locationIds = Thrift.copyList(args.locationIds, [null]);
      }
      if (args.limitToLocations !== undefined && args.limitToLocations !== null) {
        this.limitToLocations = args.limitToLocations;
      }
      if (args.limitToAllowedUsers !== undefined && args.limitToAllowedUsers !== null) {
        this.limitToAllowedUsers = args.limitToAllowedUsers;
      }
      if (args.hasUsbAccess !== undefined && args.hasUsbAccess !== null) {
        this.hasUsbAccess = args.hasUsbAccess;
      }
      if (args.networkShares !== undefined && args.networkShares !== null) {
        this.networkShares = Thrift.copyList(args.networkShares, [NetShare]);
      }
      if (args.ldapFilters !== undefined && args.ldapFilters !== null) {
        this.ldapFilters = Thrift.copyList(args.ldapFilters, [LdapFilter]);
      }
      if (args.presetScriptIds !== undefined && args.presetScriptIds !== null) {
        this.presetScriptIds = Thrift.copyList(args.presetScriptIds, [null]);
      }
      if (args.presetNetworkShares !== undefined && args.presetNetworkShares !== null) {
        this.presetNetworkShares = Thrift.copyList(args.presetNetworkShares, [null]);
      }
      if (args.presetLdapFilters !== undefined && args.presetLdapFilters !== null) {
        this.presetLdapFilters = Thrift.copyList(args.presetLdapFilters, [null]);
      }
      if (args.presetNetworkExceptionIds !== undefined && args.presetNetworkExceptionIds !== null) {
        this.presetNetworkExceptionIds = Thrift.copyList(args.presetNetworkExceptionIds, [null]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.lectureId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.lectureName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 23:
        if (ftype == Thrift.Type.STRING) {
          this.imageVersionId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 24:
        if (ftype == Thrift.Type.STRING) {
          this.imageBaseId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.BOOL) {
          this.autoUpdate = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.BOOL) {
          this.isEnabled = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I64) {
          this.startTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.I64) {
          this.endTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.I64) {
          this.lastUsed = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.I32) {
          this.useCount = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 20:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 21:
        if (ftype == Thrift.Type.I64) {
          this.updateTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.STRING) {
          this.ownerId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.STRING) {
          this.updaterId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 13:
        if (ftype == Thrift.Type.STRING) {
          this.runscript = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 14:
        if (ftype == Thrift.Type.LIST) {
          this.nics = [];
          const _rtmp3133 = input.readListBegin();
          const _size132 = _rtmp3133.size || 0;
          for (let _i134 = 0; _i134 < _size132; ++_i134) {
            let elem135 = null;
            elem135 = input.readString().value;
            this.nics.push(elem135);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 15:
        if (ftype == Thrift.Type.LIST) {
          this.allowedUsers = [];
          const _rtmp3137 = input.readListBegin();
          const _size136 = _rtmp3137.size || 0;
          for (let _i138 = 0; _i138 < _size136; ++_i138) {
            let elem139 = null;
            elem139 = input.readString().value;
            this.allowedUsers.push(elem139);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 16:
        if (ftype == Thrift.Type.LIST) {
          this.networkExceptions = [];
          const _rtmp3141 = input.readListBegin();
          const _size140 = _rtmp3141.size || 0;
          for (let _i142 = 0; _i142 < _size140; ++_i142) {
            let elem143 = null;
            elem143 = new NetRule();
            elem143.read(input);
            this.networkExceptions.push(elem143);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 17:
        if (ftype == Thrift.Type.BOOL) {
          this.isExam = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 18:
        if (ftype == Thrift.Type.BOOL) {
          this.hasInternetAccess = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 19:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultPermissions = new LecturePermissions();
          this.defaultPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 22:
        if (ftype == Thrift.Type.STRUCT) {
          this.userPermissions = new LecturePermissions();
          this.userPermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 25:
        if (ftype == Thrift.Type.LIST) {
          this.locationIds = [];
          const _rtmp3145 = input.readListBegin();
          const _size144 = _rtmp3145.size || 0;
          for (let _i146 = 0; _i146 < _size144; ++_i146) {
            let elem147 = null;
            elem147 = input.readI32().value;
            this.locationIds.push(elem147);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 26:
        if (ftype == Thrift.Type.BOOL) {
          this.limitToLocations = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 27:
        if (ftype == Thrift.Type.BOOL) {
          this.limitToAllowedUsers = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 28:
        if (ftype == Thrift.Type.BOOL) {
          this.hasUsbAccess = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 29:
        if (ftype == Thrift.Type.LIST) {
          this.networkShares = [];
          const _rtmp3149 = input.readListBegin();
          const _size148 = _rtmp3149.size || 0;
          for (let _i150 = 0; _i150 < _size148; ++_i150) {
            let elem151 = null;
            elem151 = new NetShare();
            elem151.read(input);
            this.networkShares.push(elem151);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 30:
        if (ftype == Thrift.Type.LIST) {
          this.ldapFilters = [];
          const _rtmp3153 = input.readListBegin();
          const _size152 = _rtmp3153.size || 0;
          for (let _i154 = 0; _i154 < _size152; ++_i154) {
            let elem155 = null;
            elem155 = new LdapFilter();
            elem155.read(input);
            this.ldapFilters.push(elem155);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 31:
        if (ftype == Thrift.Type.LIST) {
          this.presetScriptIds = [];
          const _rtmp3157 = input.readListBegin();
          const _size156 = _rtmp3157.size || 0;
          for (let _i158 = 0; _i158 < _size156; ++_i158) {
            let elem159 = null;
            elem159 = input.readI32().value;
            this.presetScriptIds.push(elem159);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 32:
        if (ftype == Thrift.Type.LIST) {
          this.presetNetworkShares = [];
          const _rtmp3161 = input.readListBegin();
          const _size160 = _rtmp3161.size || 0;
          for (let _i162 = 0; _i162 < _size160; ++_i162) {
            let elem163 = null;
            elem163 = input.readI32().value;
            this.presetNetworkShares.push(elem163);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 33:
        if (ftype == Thrift.Type.LIST) {
          this.presetLdapFilters = [];
          const _rtmp3165 = input.readListBegin();
          const _size164 = _rtmp3165.size || 0;
          for (let _i166 = 0; _i166 < _size164; ++_i166) {
            let elem167 = null;
            elem167 = input.readI32().value;
            this.presetLdapFilters.push(elem167);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 34:
        if (ftype == Thrift.Type.LIST) {
          this.presetNetworkExceptionIds = [];
          const _rtmp3169 = input.readListBegin();
          const _size168 = _rtmp3169.size || 0;
          for (let _i170 = 0; _i170 < _size168; ++_i170) {
            let elem171 = null;
            elem171 = input.readI32().value;
            this.presetNetworkExceptionIds.push(elem171);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('LectureRead');
    if (this.lectureId !== null && this.lectureId !== undefined) {
      output.writeFieldBegin('lectureId', Thrift.Type.STRING, 1);
      output.writeString(this.lectureId);
      output.writeFieldEnd();
    }
    if (this.lectureName !== null && this.lectureName !== undefined) {
      output.writeFieldBegin('lectureName', Thrift.Type.STRING, 2);
      output.writeString(this.lectureName);
      output.writeFieldEnd();
    }
    if (this.description !== null && this.description !== undefined) {
      output.writeFieldBegin('description', Thrift.Type.STRING, 3);
      output.writeString(this.description);
      output.writeFieldEnd();
    }
    if (this.imageVersionId !== null && this.imageVersionId !== undefined) {
      output.writeFieldBegin('imageVersionId', Thrift.Type.STRING, 23);
      output.writeString(this.imageVersionId);
      output.writeFieldEnd();
    }
    if (this.imageBaseId !== null && this.imageBaseId !== undefined) {
      output.writeFieldBegin('imageBaseId', Thrift.Type.STRING, 24);
      output.writeString(this.imageBaseId);
      output.writeFieldEnd();
    }
    if (this.autoUpdate !== null && this.autoUpdate !== undefined) {
      output.writeFieldBegin('autoUpdate', Thrift.Type.BOOL, 5);
      output.writeBool(this.autoUpdate);
      output.writeFieldEnd();
    }
    if (this.isEnabled !== null && this.isEnabled !== undefined) {
      output.writeFieldBegin('isEnabled', Thrift.Type.BOOL, 6);
      output.writeBool(this.isEnabled);
      output.writeFieldEnd();
    }
    if (this.startTime !== null && this.startTime !== undefined) {
      output.writeFieldBegin('startTime', Thrift.Type.I64, 7);
      output.writeI64(this.startTime);
      output.writeFieldEnd();
    }
    if (this.endTime !== null && this.endTime !== undefined) {
      output.writeFieldBegin('endTime', Thrift.Type.I64, 8);
      output.writeI64(this.endTime);
      output.writeFieldEnd();
    }
    if (this.lastUsed !== null && this.lastUsed !== undefined) {
      output.writeFieldBegin('lastUsed', Thrift.Type.I64, 9);
      output.writeI64(this.lastUsed);
      output.writeFieldEnd();
    }
    if (this.useCount !== null && this.useCount !== undefined) {
      output.writeFieldBegin('useCount', Thrift.Type.I32, 10);
      output.writeI32(this.useCount);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 20);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    if (this.updateTime !== null && this.updateTime !== undefined) {
      output.writeFieldBegin('updateTime', Thrift.Type.I64, 21);
      output.writeI64(this.updateTime);
      output.writeFieldEnd();
    }
    if (this.ownerId !== null && this.ownerId !== undefined) {
      output.writeFieldBegin('ownerId', Thrift.Type.STRING, 11);
      output.writeString(this.ownerId);
      output.writeFieldEnd();
    }
    if (this.updaterId !== null && this.updaterId !== undefined) {
      output.writeFieldBegin('updaterId', Thrift.Type.STRING, 12);
      output.writeString(this.updaterId);
      output.writeFieldEnd();
    }
    if (this.runscript !== null && this.runscript !== undefined) {
      output.writeFieldBegin('runscript', Thrift.Type.STRING, 13);
      output.writeString(this.runscript);
      output.writeFieldEnd();
    }
    if (this.nics !== null && this.nics !== undefined) {
      output.writeFieldBegin('nics', Thrift.Type.LIST, 14);
      output.writeListBegin(Thrift.Type.STRING, this.nics.length);
      for (let iter172 in this.nics) {
        if (this.nics.hasOwnProperty(iter172)) {
          iter172 = this.nics[iter172];
          output.writeString(iter172);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.allowedUsers !== null && this.allowedUsers !== undefined) {
      output.writeFieldBegin('allowedUsers', Thrift.Type.LIST, 15);
      output.writeListBegin(Thrift.Type.STRING, this.allowedUsers.length);
      for (let iter173 in this.allowedUsers) {
        if (this.allowedUsers.hasOwnProperty(iter173)) {
          iter173 = this.allowedUsers[iter173];
          output.writeString(iter173);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.networkExceptions !== null && this.networkExceptions !== undefined) {
      output.writeFieldBegin('networkExceptions', Thrift.Type.LIST, 16);
      output.writeListBegin(Thrift.Type.STRUCT, this.networkExceptions.length);
      for (let iter174 in this.networkExceptions) {
        if (this.networkExceptions.hasOwnProperty(iter174)) {
          iter174 = this.networkExceptions[iter174];
          iter174.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.isExam !== null && this.isExam !== undefined) {
      output.writeFieldBegin('isExam', Thrift.Type.BOOL, 17);
      output.writeBool(this.isExam);
      output.writeFieldEnd();
    }
    if (this.hasInternetAccess !== null && this.hasInternetAccess !== undefined) {
      output.writeFieldBegin('hasInternetAccess', Thrift.Type.BOOL, 18);
      output.writeBool(this.hasInternetAccess);
      output.writeFieldEnd();
    }
    if (this.defaultPermissions !== null && this.defaultPermissions !== undefined) {
      output.writeFieldBegin('defaultPermissions', Thrift.Type.STRUCT, 19);
      this.defaultPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.userPermissions !== null && this.userPermissions !== undefined) {
      output.writeFieldBegin('userPermissions', Thrift.Type.STRUCT, 22);
      this.userPermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.locationIds !== null && this.locationIds !== undefined) {
      output.writeFieldBegin('locationIds', Thrift.Type.LIST, 25);
      output.writeListBegin(Thrift.Type.I32, this.locationIds.length);
      for (let iter175 in this.locationIds) {
        if (this.locationIds.hasOwnProperty(iter175)) {
          iter175 = this.locationIds[iter175];
          output.writeI32(iter175);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.limitToLocations !== null && this.limitToLocations !== undefined) {
      output.writeFieldBegin('limitToLocations', Thrift.Type.BOOL, 26);
      output.writeBool(this.limitToLocations);
      output.writeFieldEnd();
    }
    if (this.limitToAllowedUsers !== null && this.limitToAllowedUsers !== undefined) {
      output.writeFieldBegin('limitToAllowedUsers', Thrift.Type.BOOL, 27);
      output.writeBool(this.limitToAllowedUsers);
      output.writeFieldEnd();
    }
    if (this.hasUsbAccess !== null && this.hasUsbAccess !== undefined) {
      output.writeFieldBegin('hasUsbAccess', Thrift.Type.BOOL, 28);
      output.writeBool(this.hasUsbAccess);
      output.writeFieldEnd();
    }
    if (this.networkShares !== null && this.networkShares !== undefined) {
      output.writeFieldBegin('networkShares', Thrift.Type.LIST, 29);
      output.writeListBegin(Thrift.Type.STRUCT, this.networkShares.length);
      for (let iter176 in this.networkShares) {
        if (this.networkShares.hasOwnProperty(iter176)) {
          iter176 = this.networkShares[iter176];
          iter176.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.ldapFilters !== null && this.ldapFilters !== undefined) {
      output.writeFieldBegin('ldapFilters', Thrift.Type.LIST, 30);
      output.writeListBegin(Thrift.Type.STRUCT, this.ldapFilters.length);
      for (let iter177 in this.ldapFilters) {
        if (this.ldapFilters.hasOwnProperty(iter177)) {
          iter177 = this.ldapFilters[iter177];
          iter177.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.presetScriptIds !== null && this.presetScriptIds !== undefined) {
      output.writeFieldBegin('presetScriptIds', Thrift.Type.LIST, 31);
      output.writeListBegin(Thrift.Type.I32, this.presetScriptIds.length);
      for (let iter178 in this.presetScriptIds) {
        if (this.presetScriptIds.hasOwnProperty(iter178)) {
          iter178 = this.presetScriptIds[iter178];
          output.writeI32(iter178);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.presetNetworkShares !== null && this.presetNetworkShares !== undefined) {
      output.writeFieldBegin('presetNetworkShares', Thrift.Type.LIST, 32);
      output.writeListBegin(Thrift.Type.I32, this.presetNetworkShares.length);
      for (let iter179 in this.presetNetworkShares) {
        if (this.presetNetworkShares.hasOwnProperty(iter179)) {
          iter179 = this.presetNetworkShares[iter179];
          output.writeI32(iter179);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.presetLdapFilters !== null && this.presetLdapFilters !== undefined) {
      output.writeFieldBegin('presetLdapFilters', Thrift.Type.LIST, 33);
      output.writeListBegin(Thrift.Type.I32, this.presetLdapFilters.length);
      for (let iter180 in this.presetLdapFilters) {
        if (this.presetLdapFilters.hasOwnProperty(iter180)) {
          iter180 = this.presetLdapFilters[iter180];
          output.writeI32(iter180);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.presetNetworkExceptionIds !== null && this.presetNetworkExceptionIds !== undefined) {
      output.writeFieldBegin('presetNetworkExceptionIds', Thrift.Type.LIST, 34);
      output.writeListBegin(Thrift.Type.I32, this.presetNetworkExceptionIds.length);
      for (let iter181 in this.presetNetworkExceptionIds) {
        if (this.presetNetworkExceptionIds.hasOwnProperty(iter181)) {
          iter181 = this.presetNetworkExceptionIds[iter181];
          output.writeI32(iter181);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterTag = class {
  constructor(args) {
    this.tag = null;
    this.createTime = null;
    if (args) {
      if (args.tag !== undefined && args.tag !== null) {
        this.tag = args.tag;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.tag = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterTag');
    if (this.tag !== null && this.tag !== undefined) {
      output.writeFieldBegin('tag', Thrift.Type.STRING, 1);
      output.writeString(this.tag);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 2);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
MasterSoftware = class {
  constructor(args) {
    this.software = null;
    this.isRestricted = null;
    this.createTime = null;
    if (args) {
      if (args.software !== undefined && args.software !== null) {
        this.software = args.software;
      }
      if (args.isRestricted !== undefined && args.isRestricted !== null) {
        this.isRestricted = args.isRestricted;
      }
      if (args.createTime !== undefined && args.createTime !== null) {
        this.createTime = args.createTime;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.software = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.BOOL) {
          this.isRestricted = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I64) {
          this.createTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('MasterSoftware');
    if (this.software !== null && this.software !== undefined) {
      output.writeFieldBegin('software', Thrift.Type.STRING, 1);
      output.writeString(this.software);
      output.writeFieldEnd();
    }
    if (this.isRestricted !== null && this.isRestricted !== undefined) {
      output.writeFieldBegin('isRestricted', Thrift.Type.BOOL, 2);
      output.writeBool(this.isRestricted);
      output.writeFieldEnd();
    }
    if (this.createTime !== null && this.createTime !== undefined) {
      output.writeFieldBegin('createTime', Thrift.Type.I64, 3);
      output.writeI64(this.createTime);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TransferInformation = class {
  constructor(args) {
    this.token = null;
    this.plainPort = null;
    this.sslPort = null;
    this.blockHashes = null;
    this.machineDescription = null;
    if (args) {
      if (args.token !== undefined && args.token !== null) {
        this.token = args.token;
      }
      if (args.plainPort !== undefined && args.plainPort !== null) {
        this.plainPort = args.plainPort;
      }
      if (args.sslPort !== undefined && args.sslPort !== null) {
        this.sslPort = args.sslPort;
      }
      if (args.blockHashes !== undefined && args.blockHashes !== null) {
        this.blockHashes = Thrift.copyList(args.blockHashes, [null]);
      }
      if (args.machineDescription !== undefined && args.machineDescription !== null) {
        this.machineDescription = args.machineDescription;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.token = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.plainPort = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I32) {
          this.sslPort = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.LIST) {
          this.blockHashes = [];
          const _rtmp3183 = input.readListBegin();
          const _size182 = _rtmp3183.size || 0;
          for (let _i184 = 0; _i184 < _size182; ++_i184) {
            let elem185 = null;
            elem185 = input.readBinary().value;
            this.blockHashes.push(elem185);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.machineDescription = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TransferInformation');
    if (this.token !== null && this.token !== undefined) {
      output.writeFieldBegin('token', Thrift.Type.STRING, 1);
      output.writeString(this.token);
      output.writeFieldEnd();
    }
    if (this.plainPort !== null && this.plainPort !== undefined) {
      output.writeFieldBegin('plainPort', Thrift.Type.I32, 2);
      output.writeI32(this.plainPort);
      output.writeFieldEnd();
    }
    if (this.sslPort !== null && this.sslPort !== undefined) {
      output.writeFieldBegin('sslPort', Thrift.Type.I32, 3);
      output.writeI32(this.sslPort);
      output.writeFieldEnd();
    }
    if (this.blockHashes !== null && this.blockHashes !== undefined) {
      output.writeFieldBegin('blockHashes', Thrift.Type.LIST, 4);
      output.writeListBegin(Thrift.Type.STRING, this.blockHashes.length);
      for (let iter186 in this.blockHashes) {
        if (this.blockHashes.hasOwnProperty(iter186)) {
          iter186 = this.blockHashes[iter186];
          output.writeBinary(iter186);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (this.machineDescription !== null && this.machineDescription !== undefined) {
      output.writeFieldBegin('machineDescription', Thrift.Type.STRING, 5);
      output.writeBinary(this.machineDescription);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TransferStatus = class {
  constructor(args) {
    this.blockStatus = null;
    this.state = null;
    if (args) {
      if (args.blockStatus !== undefined && args.blockStatus !== null) {
        this.blockStatus = args.blockStatus;
      }
      if (args.state !== undefined && args.state !== null) {
        this.state = args.state;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.blockStatus = input.readBinary().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.state = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TransferStatus');
    if (this.blockStatus !== null && this.blockStatus !== undefined) {
      output.writeFieldBegin('blockStatus', Thrift.Type.STRING, 1);
      output.writeBinary(this.blockStatus);
      output.writeFieldEnd();
    }
    if (this.state !== null && this.state !== undefined) {
      output.writeFieldBegin('state', Thrift.Type.I32, 2);
      output.writeI32(this.state);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
UploadOptions = class {
  constructor(args) {
    this.serverSideCopying = null;
    if (args) {
      if (args.serverSideCopying !== undefined && args.serverSideCopying !== null) {
        this.serverSideCopying = args.serverSideCopying;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.BOOL) {
          this.serverSideCopying = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('UploadOptions');
    if (this.serverSideCopying !== null && this.serverSideCopying !== undefined) {
      output.writeFieldBegin('serverSideCopying', Thrift.Type.BOOL, 1);
      output.writeBool(this.serverSideCopying);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteConfig = class {
  constructor(args) {
    this.pageSize = null;
    this.defaultImagePermissions = null;
    this.defaultLecturePermissions = null;
    this.maxImageValidityDays = null;
    this.maxLectureValidityDays = null;
    this.maxTransfers = null;
    this.maxConnectionsPerTransfer = null;
    this.maxLocationsPerLecture = null;
    this.allowLoginByDefault = null;
    this.serverSideCopy = null;
    this.allowStudentDownload = null;
    this.vmSizeLimit = null;
    if (args) {
      if (args.pageSize !== undefined && args.pageSize !== null) {
        this.pageSize = args.pageSize;
      }
      if (args.defaultImagePermissions !== undefined && args.defaultImagePermissions !== null) {
        this.defaultImagePermissions = new ImagePermissions(args.defaultImagePermissions);
      }
      if (args.defaultLecturePermissions !== undefined && args.defaultLecturePermissions !== null) {
        this.defaultLecturePermissions = new LecturePermissions(args.defaultLecturePermissions);
      }
      if (args.maxImageValidityDays !== undefined && args.maxImageValidityDays !== null) {
        this.maxImageValidityDays = args.maxImageValidityDays;
      }
      if (args.maxLectureValidityDays !== undefined && args.maxLectureValidityDays !== null) {
        this.maxLectureValidityDays = args.maxLectureValidityDays;
      }
      if (args.maxTransfers !== undefined && args.maxTransfers !== null) {
        this.maxTransfers = args.maxTransfers;
      }
      if (args.maxConnectionsPerTransfer !== undefined && args.maxConnectionsPerTransfer !== null) {
        this.maxConnectionsPerTransfer = args.maxConnectionsPerTransfer;
      }
      if (args.maxLocationsPerLecture !== undefined && args.maxLocationsPerLecture !== null) {
        this.maxLocationsPerLecture = args.maxLocationsPerLecture;
      }
      if (args.allowLoginByDefault !== undefined && args.allowLoginByDefault !== null) {
        this.allowLoginByDefault = args.allowLoginByDefault;
      }
      if (args.serverSideCopy !== undefined && args.serverSideCopy !== null) {
        this.serverSideCopy = args.serverSideCopy;
      }
      if (args.allowStudentDownload !== undefined && args.allowStudentDownload !== null) {
        this.allowStudentDownload = args.allowStudentDownload;
      }
      if (args.vmSizeLimit !== undefined && args.vmSizeLimit !== null) {
        this.vmSizeLimit = args.vmSizeLimit;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.pageSize = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultImagePermissions = new ImagePermissions();
          this.defaultImagePermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.defaultLecturePermissions = new LecturePermissions();
          this.defaultLecturePermissions.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.I32) {
          this.maxImageValidityDays = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.I32) {
          this.maxLectureValidityDays = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 6:
        if (ftype == Thrift.Type.I32) {
          this.maxTransfers = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 7:
        if (ftype == Thrift.Type.I32) {
          this.maxConnectionsPerTransfer = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 8:
        if (ftype == Thrift.Type.I32) {
          this.maxLocationsPerLecture = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 9:
        if (ftype == Thrift.Type.BOOL) {
          this.allowLoginByDefault = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 10:
        if (ftype == Thrift.Type.I32) {
          this.serverSideCopy = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 11:
        if (ftype == Thrift.Type.BOOL) {
          this.allowStudentDownload = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 12:
        if (ftype == Thrift.Type.I64) {
          this.vmSizeLimit = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteConfig');
    if (this.pageSize !== null && this.pageSize !== undefined) {
      output.writeFieldBegin('pageSize', Thrift.Type.I32, 1);
      output.writeI32(this.pageSize);
      output.writeFieldEnd();
    }
    if (this.defaultImagePermissions !== null && this.defaultImagePermissions !== undefined) {
      output.writeFieldBegin('defaultImagePermissions', Thrift.Type.STRUCT, 2);
      this.defaultImagePermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.defaultLecturePermissions !== null && this.defaultLecturePermissions !== undefined) {
      output.writeFieldBegin('defaultLecturePermissions', Thrift.Type.STRUCT, 3);
      this.defaultLecturePermissions.write(output);
      output.writeFieldEnd();
    }
    if (this.maxImageValidityDays !== null && this.maxImageValidityDays !== undefined) {
      output.writeFieldBegin('maxImageValidityDays', Thrift.Type.I32, 4);
      output.writeI32(this.maxImageValidityDays);
      output.writeFieldEnd();
    }
    if (this.maxLectureValidityDays !== null && this.maxLectureValidityDays !== undefined) {
      output.writeFieldBegin('maxLectureValidityDays', Thrift.Type.I32, 5);
      output.writeI32(this.maxLectureValidityDays);
      output.writeFieldEnd();
    }
    if (this.maxTransfers !== null && this.maxTransfers !== undefined) {
      output.writeFieldBegin('maxTransfers', Thrift.Type.I32, 6);
      output.writeI32(this.maxTransfers);
      output.writeFieldEnd();
    }
    if (this.maxConnectionsPerTransfer !== null && this.maxConnectionsPerTransfer !== undefined) {
      output.writeFieldBegin('maxConnectionsPerTransfer', Thrift.Type.I32, 7);
      output.writeI32(this.maxConnectionsPerTransfer);
      output.writeFieldEnd();
    }
    if (this.maxLocationsPerLecture !== null && this.maxLocationsPerLecture !== undefined) {
      output.writeFieldBegin('maxLocationsPerLecture', Thrift.Type.I32, 8);
      output.writeI32(this.maxLocationsPerLecture);
      output.writeFieldEnd();
    }
    if (this.allowLoginByDefault !== null && this.allowLoginByDefault !== undefined) {
      output.writeFieldBegin('allowLoginByDefault', Thrift.Type.BOOL, 9);
      output.writeBool(this.allowLoginByDefault);
      output.writeFieldEnd();
    }
    if (this.serverSideCopy !== null && this.serverSideCopy !== undefined) {
      output.writeFieldBegin('serverSideCopy', Thrift.Type.I32, 10);
      output.writeI32(this.serverSideCopy);
      output.writeFieldEnd();
    }
    if (this.allowStudentDownload !== null && this.allowStudentDownload !== undefined) {
      output.writeFieldBegin('allowStudentDownload', Thrift.Type.BOOL, 11);
      output.writeBool(this.allowStudentDownload);
      output.writeFieldEnd();
    }
    if (this.vmSizeLimit !== null && this.vmSizeLimit !== undefined) {
      output.writeFieldBegin('vmSizeLimit', Thrift.Type.I64, 12);
      output.writeI64(this.vmSizeLimit);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteStatus = class {
  constructor(args) {
    this.availableStorageBytes = null;
    this.serverTime = null;
    if (args) {
      if (args.availableStorageBytes !== undefined && args.availableStorageBytes !== null) {
        this.availableStorageBytes = args.availableStorageBytes;
      }
      if (args.serverTime !== undefined && args.serverTime !== null) {
        this.serverTime = args.serverTime;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I64) {
          this.availableStorageBytes = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I64) {
          this.serverTime = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteStatus');
    if (this.availableStorageBytes !== null && this.availableStorageBytes !== undefined) {
      output.writeFieldBegin('availableStorageBytes', Thrift.Type.I64, 1);
      output.writeI64(this.availableStorageBytes);
      output.writeFieldEnd();
    }
    if (this.serverTime !== null && this.serverTime !== undefined) {
      output.writeFieldBegin('serverTime', Thrift.Type.I64, 2);
      output.writeI64(this.serverTime);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SatelliteUserConfig = class {
  constructor(args) {
    this.emailNotifications = null;
    if (args) {
      if (args.emailNotifications !== undefined && args.emailNotifications !== null) {
        this.emailNotifications = args.emailNotifications;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.BOOL) {
          this.emailNotifications = input.readBool().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('SatelliteUserConfig');
    if (this.emailNotifications !== null && this.emailNotifications !== undefined) {
      output.writeFieldBegin('emailNotifications', Thrift.Type.BOOL, 1);
      output.writeBool(this.emailNotifications);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Location = class {
  constructor(args) {
    this.locationId = null;
    this.locationName = null;
    this.parentLocationId = null;
    if (args) {
      if (args.locationId !== undefined && args.locationId !== null) {
        this.locationId = args.locationId;
      }
      if (args.locationName !== undefined && args.locationName !== null) {
        this.locationName = args.locationName;
      }
      if (args.parentLocationId !== undefined && args.parentLocationId !== null) {
        this.parentLocationId = args.parentLocationId;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.locationId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.locationName = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I32) {
          this.parentLocationId = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Location');
    if (this.locationId !== null && this.locationId !== undefined) {
      output.writeFieldBegin('locationId', Thrift.Type.I32, 1);
      output.writeI32(this.locationId);
      output.writeFieldEnd();
    }
    if (this.locationName !== null && this.locationName !== undefined) {
      output.writeFieldBegin('locationName', Thrift.Type.STRING, 2);
      output.writeString(this.locationName);
      output.writeFieldEnd();
    }
    if (this.parentLocationId !== null && this.parentLocationId !== undefined) {
      output.writeFieldBegin('parentLocationId', Thrift.Type.I32, 3);
      output.writeI32(this.parentLocationId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TTransferRejectedException = class {
  constructor(args) {
    this.message = null;
    if (args) {
      if (args.message !== undefined && args.message !== null) {
        this.message = args.message;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TTransferRejectedException');
    if (this.message !== null && this.message !== undefined) {
      output.writeFieldBegin('message', Thrift.Type.STRING, 1);
      output.writeString(this.message);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TAuthorizationException = class {
  constructor(args) {
    this.number = null;
    this.message = null;
    if (args) {
      if (args.number !== undefined && args.number !== null) {
        this.number = args.number;
      }
      if (args.message !== undefined && args.message !== null) {
        this.message = args.message;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.number = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TAuthorizationException');
    if (this.number !== null && this.number !== undefined) {
      output.writeFieldBegin('number', Thrift.Type.I32, 1);
      output.writeI32(this.number);
      output.writeFieldEnd();
    }
    if (this.message !== null && this.message !== undefined) {
      output.writeFieldBegin('message', Thrift.Type.STRING, 2);
      output.writeString(this.message);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TInvalidTokenException = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TInvalidTokenException');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TNotFoundException = class {
  constructor(args) {
    this.message = null;
    if (args) {
      if (args.message !== undefined && args.message !== null) {
        this.message = args.message;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TNotFoundException');
    if (this.message !== null && this.message !== undefined) {
      output.writeFieldBegin('message', Thrift.Type.STRING, 1);
      output.writeString(this.message);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TInvalidDateParam = class {
  constructor(args) {
    this.number = null;
    this.message = null;
    if (args) {
      if (args.number !== undefined && args.number !== null) {
        this.number = args.number;
      }
      if (args.message !== undefined && args.message !== null) {
        this.message = args.message;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.number = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TInvalidDateParam');
    if (this.number !== null && this.number !== undefined) {
      output.writeFieldBegin('number', Thrift.Type.I32, 1);
      output.writeI32(this.number);
      output.writeFieldEnd();
    }
    if (this.message !== null && this.message !== undefined) {
      output.writeFieldBegin('message', Thrift.Type.STRING, 2);
      output.writeString(this.message);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
TInvocationException = class {
  constructor(args) {
    this.number = null;
    this.message = null;
    if (args) {
      if (args.number !== undefined && args.number !== null) {
        this.number = args.number;
      }
      if (args.message !== undefined && args.message !== null) {
        this.message = args.message;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.number = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('TInvocationException');
    if (this.number !== null && this.number !== undefined) {
      output.writeFieldBegin('number', Thrift.Type.I32, 1);
      output.writeI32(this.number);
      output.writeFieldEnd();
    }
    if (this.message !== null && this.message !== undefined) {
      output.writeFieldBegin('message', Thrift.Type.STRING, 2);
      output.writeString(this.message);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
