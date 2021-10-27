export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  contentMode: InputContentMode;
  createdAt: Scalars['String'];
  downVotes: Scalars['Int'];
  id: Scalars['ID'];
  isDownVoted: Scalars['Boolean'];
  isUpVoted: Scalars['Boolean'];
  owner: User;
  postID: Scalars['ID'];
  replies: Array<Comment>;
  upVotes: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type CommentPagination = {
  __typename?: 'CommentPagination';
  comments: Array<Comment>;
  currentPage: Scalars['Int'];
  length: Scalars['Int'];
};

export type Community = {
  __typename?: 'Community';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isAdult: Scalars['Boolean'];
  name: Scalars['String'];
  numberOfMember: Scalars['Int'];
  slug: Scalars['String'];
  type: CommunityType;
  updatedAt: Scalars['String'];
};

export type CommunityPagination = {
  __typename?: 'CommunityPagination';
  communities: Array<Community>;
  currentPage: Scalars['Int'];
  length: Scalars['Int'];
};

export enum CommunityType {
  Private = 'Private',
  Public = 'Public',
  Restricted = 'Restricted'
}

export type CreateCommentInput = {
  content: Scalars['String'];
  contentMode: InputContentMode;
  parentID?: Maybe<Scalars['ID']>;
  postID: Scalars['ID'];
};

export type CreateCommunityInput = {
  isAdult: Scalars['Boolean'];
  name: Scalars['String'];
  type: CommunityType;
};

export type CreatePostInput = {
  communityId: Scalars['ID'];
  content: Scalars['String'];
  contentMode: InputContentMode;
  title: Scalars['String'];
  type: PostType;
};

export type CustomError = {
  __typename?: 'CustomError';
  message: Scalars['String'];
  path: Scalars['String'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export enum InputContentMode {
  MarkDown = 'MarkDown',
  TextEditor = 'TextEditor'
}

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createCommunity: Community;
  createPost: Post;
  login: TokenPayloadDto;
  register: RegisterResult;
  signOut?: Maybe<Scalars['Boolean']>;
  userCreateAction: UserAction;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationLoginArgs = {
  input: UserLoginInput;
};


export type MutationRegisterArgs = {
  input: UserRegisterInput;
};


export type MutationUserCreateActionArgs = {
  input: UserCreateActionInput;
};

export type Post = {
  __typename?: 'Post';
  community: Community;
  content: Scalars['String'];
  contentMode: InputContentMode;
  createdAt: Scalars['String'];
  downVotes: Scalars['Int'];
  id: Scalars['ID'];
  isDownVoted: Scalars['Boolean'];
  isUpVoted: Scalars['Boolean'];
  numberOfComments: Scalars['Int'];
  owner: User;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: PostType;
  upVotes: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type PostPagination = {
  __typename?: 'PostPagination';
  currentPage: Scalars['Int'];
  length: Scalars['Int'];
  posts: Array<Post>;
};

export enum PostType {
  ImageVideo = 'Image_Video',
  Link = 'Link',
  Post = 'Post'
}

export type Query = {
  __typename?: 'Query';
  getComment: Comment;
  getCommunity: Community;
  getPost: Post;
  isCommunityNameExisted: Scalars['Boolean'];
  me?: Maybe<User>;
  queryComment: CommentPagination;
  queryCommunity: CommunityPagination;
  queryPost: PostPagination;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetCommunityArgs = {
  slug: Scalars['String'];
};


export type QueryGetPostArgs = {
  slug: Scalars['String'];
};


export type QueryIsCommunityNameExistedArgs = {
  name: Scalars['String'];
};


export type QueryQueryCommentArgs = {
  input: QueryCommentInput;
};


export type QueryQueryCommunityArgs = {
  input: QueryCommunityInput;
};


export type QueryQueryPostArgs = {
  input: QueryPostInput;
};

export type QueryCommentInput = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  parentID?: Maybe<Scalars['ID']>;
  postID: Scalars['ID'];
};

export type QueryCommunityInput = {
  limit?: Maybe<Scalars['Int']>;
  onlyMine?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
};

export type QueryPostInput = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortPostEnum>;
};

export type RegisterBadRequest = {
  __typename?: 'RegisterBadRequest';
  errors: Array<CustomError>;
};

export type RegisterInternalServerError = {
  __typename?: 'RegisterInternalServerError';
  error: CustomError;
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  token: TokenPayloadDto;
  user: User;
};

export type RegisterResult = RegisterBadRequest | RegisterInternalServerError | RegisterPayload;

export enum SortPostEnum {
  Best = 'BEST',
  Hot = 'HOT',
  New = 'NEW',
  Top = 'TOP'
}

export type TokenPayloadDto = {
  __typename?: 'TokenPayloadDto';
  accessToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserAction = {
  __typename?: 'UserAction';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  target: Scalars['ID'];
  targetType: UserActionTargetType;
  type: UserActionType;
  updatedAt: Scalars['String'];
};

export enum UserActionTargetType {
  Comment = 'COMMENT',
  Post = 'POST'
}

export enum UserActionType {
  DownVote = 'DownVote',
  UpVote = 'UpVote'
}

export type UserCreateActionInput = {
  target: Scalars['ID'];
  targetType: UserActionTargetType;
  type: UserActionType;
};

export type UserLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserRegisterInput = {
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  username: Scalars['String'];
};
