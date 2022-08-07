export class UserModel {
	
	public id!: String;
    public name!: String;
    public username!: String; 
    public password!: String;
	public email!: String;
 
    
  }

 
/*
  @Id  
	@GeneratedValue(strategy= GenerationType.AUTO,generator="native")
	@GenericGenerator(name = "native",strategy = "native")	
	@Column(name="id")  
	private int id;
	@Column(name="idcompany")  
	private int idcompany;	  
	@Column(name="username") 
	private String username;
	@Column(name="name") 
	private String name;
	@Column(name="email") 
	private String email; 
	@Column(name="password") 
	private String password;
	@Column(name="status") 
	private String status;
	@Column(name="Image") 
	private String Image;
	@Column(name="token") 
	private String token; 
	@Column(name="dtregister", nullable=false)  
	private Date dtregister;	
	@Column(name="dtlogin", nullable=false)  
	private Date dtlogin;	
	@Column(name="ativo") 
	private String ativo;
    */