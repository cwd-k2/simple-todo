class User {
  public userId:          String;
  public userName:        String;
  public displayName:     String;
  public joinedAt:        String;
  public rootDirectoryId: String;

  constructor(
    userId: String,
    userName: String,
    displayName: String | null,
    joinedAt: String,
    rootDirectoryId: String
  ) {
    this.userId          = userId;
    this.userName        = userName;
    this.displayName     = displayName || "";
    this.joinedAt        = joinedAt;
    this.rootDirectoryId = rootDirectoryId;
  };
};

export default User;
