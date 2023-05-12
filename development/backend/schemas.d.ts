import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  SingleTypeSchema,
  ComponentAttribute,
  UIDAttribute,
  TextAttribute,
  MediaAttribute,
  DynamicZoneAttribute,
  ComponentSchema,
  RichTextAttribute,
} from '@strapi/strapi';

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: JSONAttribute & DefaultTo<{}>;
    conditions: JSONAttribute & DefaultTo<[]>;
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    username: StringAttribute;
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    registrationToken: StringAttribute & PrivateAttribute;
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> &
      PrivateAttribute;
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    preferedLanguage: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute;
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: RelationAttribute<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<''>;
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
      RequiredAttribute &
      DefaultTo<'read-only'>;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferToken extends CollectionTypeSchema {
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<''>;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    alternativeText: StringAttribute;
    caption: StringAttribute;
    width: IntegerAttribute;
    height: IntegerAttribute;
    formats: JSONAttribute;
    hash: StringAttribute & RequiredAttribute;
    ext: StringAttribute;
    mime: StringAttribute & RequiredAttribute;
    size: DecimalAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    previewUrl: StringAttribute;
    provider: StringAttribute & RequiredAttribute;
    provider_metadata: JSONAttribute;
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>;
    folder: RelationAttribute<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      PrivateAttribute;
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
    parent: RelationAttribute<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: StringAttribute & UniqueAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute & RequiredAttribute;
    role: RelationAttribute<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    description: StringAttribute;
    type: StringAttribute & UniqueAttribute;
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: StringAttribute;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    confirmationToken: StringAttribute & PrivateAttribute;
    confirmed: BooleanAttribute & DefaultTo<false>;
    blocked: BooleanAttribute & DefaultTo<false>;
    role: RelationAttribute<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiContactContact extends SingleTypeSchema {
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      DefaultTo<'\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432'>;
    email: ComponentAttribute<'contact.email', true>;
    phone: ComponentAttribute<'contact.phone', true>;
    social: ComponentAttribute<'contact.social', true>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiPagePage extends CollectionTypeSchema {
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    parent: RelationAttribute<'api::page.page', 'oneToOne', 'api::page.page'>;
    content: DynamicZoneAttribute<
      [
        'content.gallery',
        'content.image',
        'content.location',
        'content.project',
        'content.rich-text',
        'content.text',
        'content.title',
        'content.work'
      ]
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'api::page.page', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'api::page.page', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface ApiPageContactPageContact extends SingleTypeSchema {
  info: {
    singularName: 'page-contact';
    pluralName: 'page-contacts';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 - \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::page-contact.page-contact',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::page-contact.page-contact',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiPageFrontPageFront extends SingleTypeSchema {
  info: {
    singularName: 'page-front';
    pluralName: 'page-fronts';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 - \u0433\u043B\u0430\u0432\u043D\u0430\u044F';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    content: DynamicZoneAttribute<
      [
        'content.gallery',
        'content.image',
        'content.location',
        'content.project',
        'content.rich-text',
        'content.text',
        'content.title',
        'content.work'
      ]
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::page-front.page-front',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::page-front.page-front',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiPagePortfolioPagePortfolio extends SingleTypeSchema {
  info: {
    singularName: 'page-portfolio';
    pluralName: 'page-portfolios';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 - \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::page-portfolio.page-portfolio',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::page-portfolio.page-portfolio',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiPagePricePagePrice extends SingleTypeSchema {
  info: {
    singularName: 'page-price';
    pluralName: 'page-prices';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 - \u0446\u0435\u043D\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::page-price.page-price',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::page-price.page-price',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiPageProjectPageProject extends SingleTypeSchema {
  info: {
    singularName: 'page-project';
    pluralName: 'page-projects';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 - \u043F\u0440\u043E\u0435\u043A\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::page-project.page-project',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::page-project.page-project',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiProjectProject extends CollectionTypeSchema {
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    gallery: MediaAttribute;
    profile: ComponentAttribute<'project.profile'> & RequiredAttribute;
    totalArea: DecimalAttribute & RequiredAttribute;
    livingArea: DecimalAttribute & RequiredAttribute;
    floors: DynamicZoneAttribute<['project.floor']> & RequiredAttribute;
    category: RelationAttribute<
      'api::project.project',
      'oneToOne',
      'api::project-category.project-category'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiProjectCategoryProjectCategory
  extends CollectionTypeSchema {
  info: {
    singularName: 'project-category';
    pluralName: 'project-categories';
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442\u044B - \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiProjectSettingProjectSetting extends SingleTypeSchema {
  info: {
    singularName: 'project-setting';
    pluralName: 'project-settings';
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442\u044B - \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::project-setting.project-setting',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::project-setting.project-setting',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiSiteMenuSiteMenu extends SingleTypeSchema {
  info: {
    singularName: 'site-menu';
    pluralName: 'site-menus';
    displayName: '\u0421\u0430\u0439\u0442 - \u043C\u0435\u043D\u044E';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    headerMenu: DynamicZoneAttribute<
      [
        'link.page',
        'link.parent-page',
        'link.parent-work',
        'link.work',
        'link.project'
      ]
    >;
    workMenu: DynamicZoneAttribute<['link.parent-work', 'link.work']>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::site-menu.site-menu',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::site-menu.site-menu',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiSiteSettingSiteSetting extends SingleTypeSchema {
  info: {
    singularName: 'site-setting';
    pluralName: 'site-settings';
    displayName: '\u0421\u0430\u0439\u0442 - \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute & DefaultTo<'srub35'>;
    description: TextAttribute & RequiredAttribute & DefaultTo<'app srub35'>;
    image: MediaAttribute;
    frontpage: RelationAttribute<
      'api::site-setting.site-setting',
      'oneToOne',
      'api::page.page'
    >;
    projectsPrefix: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::site-setting.site-setting',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::site-setting.site-setting',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiWoodPriceWoodPrice extends SingleTypeSchema {
  info: {
    singularName: 'wood-price';
    pluralName: 'wood-prices';
    displayName: '\u0426\u0435\u043D\u044B - \u0434\u0435\u0440\u0435\u0432\u043E';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    log: ComponentAttribute<'price.wood-log', true>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::wood-price.wood-price',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::wood-price.wood-price',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiWorkWork extends CollectionTypeSchema {
  info: {
    singularName: 'work';
    pluralName: 'works';
    displayName: '\u0420\u0430\u0431\u043E\u0442\u044B (\u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E)';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: UIDAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'api::work.work', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'api::work.work', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface ContactEmail extends ComponentSchema {
  info: {
    displayName: '\u041F\u043E\u0447\u0442\u0430';
    description: '';
    icon: 'mail-bulk';
  };
  attributes: {
    url: StringAttribute & RequiredAttribute;
    description: StringAttribute & RequiredAttribute;
    text: StringAttribute & RequiredAttribute;
    default: BooleanAttribute & DefaultTo<false>;
  };
}

export interface ContactPhone extends ComponentSchema {
  info: {
    displayName: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D';
    description: '';
    icon: 'phone-alt';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    description: StringAttribute & RequiredAttribute;
    default: BooleanAttribute & DefaultTo<false>;
  };
}

export interface ContactSocial extends ComponentSchema {
  info: {
    displayName: '\u0421\u043E\u0446. \u0441\u0435\u0442\u0438';
    description: '';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    image: MediaAttribute;
  };
}

export interface ContentGallery extends ComponentSchema {
  info: {
    displayName: '\u0413\u0430\u043B\u0435\u0440\u0435\u044F';
    description: '';
  };
  attributes: {
    gallery: MediaAttribute & RequiredAttribute;
  };
}

export interface ContentImage extends ComponentSchema {
  info: {
    displayName: '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435';
    description: '';
  };
  attributes: {
    image: MediaAttribute & RequiredAttribute;
  };
}

export interface ContentLocation extends ComponentSchema {
  info: {
    displayName: 'Location';
  };
  attributes: {
    Name: StringAttribute & RequiredAttribute;
    Description: TextAttribute;
  };
}

export interface ContentProject extends ComponentSchema {
  info: {
    displayName: '\u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F - \u043F\u0440\u043E\u0435\u043A\u0442';
    description: '';
  };
  attributes: {
    projects: RelationAttribute<
      'content.project',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface ContentRichText extends ComponentSchema {
  info: {
    displayName: '\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440';
    description: '';
  };
  attributes: {
    text: RichTextAttribute & RequiredAttribute;
  };
}

export interface ContentText extends ComponentSchema {
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442';
    description: '';
  };
  attributes: {
    text: TextAttribute & RequiredAttribute;
  };
}

export interface ContentTitle extends ComponentSchema {
  info: {
    displayName: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A';
    description: '';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    hashtag: StringAttribute;
    size: IntegerAttribute &
      SetMinMax<{
        min: 1;
        max: 5;
      }> &
      DefaultTo<2>;
  };
}

export interface ContentWork extends ComponentSchema {
  info: {
    displayName: '\u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F - \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E';
    description: '';
  };
  attributes: {
    works: RelationAttribute<'content.work', 'oneToMany', 'api::work.work'>;
  };
}

export interface LinkPage extends ComponentSchema {
  info: {
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
    icon: 'file';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    link: RelationAttribute<'link.page', 'oneToOne', 'api::page.page'>;
  };
}

export interface LinkParentPage extends ComponentSchema {
  info: {
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B';
    description: '';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    link: RelationAttribute<'link.parent-page', 'oneToOne', 'api::page.page'>;
    child: ComponentAttribute<'link.page', true>;
  };
}

export interface LinkParentProject extends ComponentSchema {
  info: {
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442\u044B';
    description: '';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    link: RelationAttribute<
      'link.parent-project',
      'oneToOne',
      'api::project.project'
    >;
    parent: ComponentAttribute<'link.project', true> & RequiredAttribute;
  };
}

export interface LinkParentWork extends ComponentSchema {
  info: {
    displayName: '\u0420\u0430\u0431\u043E\u0442\u044B (\u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E)';
    description: '';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    link: RelationAttribute<'link.parent-work', 'oneToOne', 'api::work.work'>;
    child: ComponentAttribute<'link.work', true>;
  };
}

export interface LinkProject extends ComponentSchema {
  info: {
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442';
    description: '';
    icon: 'home';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    link: RelationAttribute<'link.project', 'oneToOne', 'api::project.project'>;
    archive: BooleanAttribute & DefaultTo<false>;
  };
}

export interface LinkWork extends ComponentSchema {
  info: {
    displayName: '\u0420\u0430\u0431\u043E\u0442\u0430 (\u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E)';
    description: '';
    icon: 'user-check';
  };
  attributes: {
    text: StringAttribute & RequiredAttribute;
    link: RelationAttribute<'link.work', 'oneToOne', 'api::work.work'>;
    archive: BooleanAttribute & DefaultTo<false>;
  };
}

export interface PriceWoodLog extends ComponentSchema {
  info: {
    displayName: 'Wood Log';
    description: '';
  };
  attributes: {
    diameter: EnumerationAttribute<
      ['d22-24', 'd24-26', 'd26-28', 'd28-30', 'd30-32']
    >;
    m2: BigIntegerAttribute;
    m3: BigIntegerAttribute;
  };
}

export interface ProjectCategory extends ComponentSchema {
  info: {
    displayName: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F';
    description: '';
  };
  attributes: {
    title: StringAttribute & RequiredAttribute;
    slug: StringAttribute & RequiredAttribute;
    description: TextAttribute & RequiredAttribute;
    image: MediaAttribute;
  };
}

export interface ProjectFloor extends ComponentSchema {
  info: {
    displayName: '\u042D\u0442\u0430\u0436';
    description: '';
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    height: DecimalAttribute;
    rooms: ComponentAttribute<'project.room', true>;
    area: DecimalAttribute;
    image: MediaAttribute;
  };
}

export interface ProjectProfile extends ComponentSchema {
  info: {
    displayName: '\u041F\u0440\u043E\u0444\u0438\u043B\u044C';
    description: '';
  };
  attributes: {
    length: DecimalAttribute & RequiredAttribute;
    width: DecimalAttribute & RequiredAttribute;
    height: DecimalAttribute & RequiredAttribute;
    gable: DecimalAttribute & RequiredAttribute;
  };
}

export interface ProjectRoom extends ComponentSchema {
  info: {
    displayName: '\u041A\u043E\u043C\u043D\u0430\u0442\u0430';
    description: '';
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    area: DecimalAttribute;
  };
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::contact.contact': ApiContactContact;
      'api::page.page': ApiPagePage;
      'api::page-contact.page-contact': ApiPageContactPageContact;
      'api::page-front.page-front': ApiPageFrontPageFront;
      'api::page-portfolio.page-portfolio': ApiPagePortfolioPagePortfolio;
      'api::page-price.page-price': ApiPagePricePagePrice;
      'api::page-project.page-project': ApiPageProjectPageProject;
      'api::project.project': ApiProjectProject;
      'api::project-category.project-category': ApiProjectCategoryProjectCategory;
      'api::project-setting.project-setting': ApiProjectSettingProjectSetting;
      'api::site-menu.site-menu': ApiSiteMenuSiteMenu;
      'api::site-setting.site-setting': ApiSiteSettingSiteSetting;
      'api::wood-price.wood-price': ApiWoodPriceWoodPrice;
      'api::work.work': ApiWorkWork;
      'contact.email': ContactEmail;
      'contact.phone': ContactPhone;
      'contact.social': ContactSocial;
      'content.gallery': ContentGallery;
      'content.image': ContentImage;
      'content.location': ContentLocation;
      'content.project': ContentProject;
      'content.rich-text': ContentRichText;
      'content.text': ContentText;
      'content.title': ContentTitle;
      'content.work': ContentWork;
      'link.page': LinkPage;
      'link.parent-page': LinkParentPage;
      'link.parent-project': LinkParentProject;
      'link.parent-work': LinkParentWork;
      'link.project': LinkProject;
      'link.work': LinkWork;
      'price.wood-log': PriceWoodLog;
      'project.category': ProjectCategory;
      'project.floor': ProjectFloor;
      'project.profile': ProjectProfile;
      'project.room': ProjectRoom;
    }
  }
}
