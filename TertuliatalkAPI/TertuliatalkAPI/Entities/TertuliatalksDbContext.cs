using Microsoft.EntityFrameworkCore;

namespace TertuliatalkAPI.Entities;

public partial class TertuliatalksDbContext : DbContext
{
    public TertuliatalksDbContext()
    {
    }

    public TertuliatalksDbContext(DbContextOptions<TertuliatalksDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<Instructor> Instructors { get; set; }

    public virtual DbSet<InstructorPayment> InstructorPayments { get; set; }

    public virtual DbSet<Pack> Packs { get; set; }

    public virtual DbSet<Subscription> Subscriptions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserCourse> UserCourses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https: //go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql(
            "Host=ep-cold-flower-a2i7qrjh.eu-central-1.aws.neon.tech;Port=5432;Database=tertuliatalks_db;Username=tertuliatalks_db_owner;Password=3OZBNdhT9zsK;SSL Mode=Require;Trust Server Certificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasPostgresEnum("meeting_type", new[] { "PUBLIC", "INDIVIDUAL" })
            .HasPostgresExtension("uuid-ossp");

        modelBuilder.Entity<Course>(entity =>
        {
            entity.HasIndex(e => e.InstructorId, "IX_Courses_InstructorId");

            entity.Property(e => e.Id).HasDefaultValueSql("uuid_generate_v4()");
            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
            entity.Property(e => e.Participants).HasDefaultValue(1);
            entity.Property(e => e.Status).HasDefaultValueSql("'Active'::text");

            entity.HasOne(d => d.Instructor).WithMany(p => p.Courses).HasForeignKey(d => d.InstructorId);
        });

        modelBuilder.Entity<Instructor>(entity =>
        {
            entity.Property(e => e.Id).HasDefaultValueSql("uuid_generate_v4()");
            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
            entity.Property(e => e.Role).HasDefaultValueSql("'Instructor'::text");
        });

        modelBuilder.Entity<InstructorPayment>(entity =>
        {
            entity.ToTable("InstructorPayment");

            entity.HasIndex(e => e.InstructorId, "IX_InstructorPayment_InstructorId").IsUnique();

            entity.Property(e => e.Id).HasDefaultValueSql("uuid_generate_v4()");
            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
            entity.Property(e => e.Iban).HasColumnName("IBAN");

            entity.HasOne(d => d.Instructor).WithOne(p => p.InstructorPayment)
                .HasForeignKey<InstructorPayment>(d => d.InstructorId);
        });

        modelBuilder.Entity<Pack>(entity =>
        {
            entity.Property(e => e.Id).HasDefaultValueSql("uuid_generate_v4()");
            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
        });

        modelBuilder.Entity<Subscription>(entity =>
        {
            entity.HasIndex(e => e.PackId, "IX_Subscriptions_PackId");

            entity.Property(e => e.Id).HasDefaultValueSql("uuid_generate_v4()");
            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
            entity.Property(e => e.IsTrial).HasDefaultValue(false);
            entity.Property(e => e.PackageId).HasColumnName("PackageID");
            entity.Property(e => e.StartDate).HasDefaultValueSql("now()");

            entity.HasOne(d => d.Pack).WithMany(p => p.Subscriptions).HasForeignKey(d => d.PackId);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("users_pkey");

            entity.HasIndex(e => e.SubscriptionId, "IX_Users_SubscriptionId");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("uuid_generate_v4()")
                .HasColumnName("id");
            entity.Property(e => e.Age).HasDefaultValue(0);
            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true)
                .HasColumnName("isActive");
            entity.Property(e => e.Role).HasDefaultValueSql("'User'::text");

            entity.HasOne(d => d.Subscription).WithMany(p => p.Users).HasForeignKey(d => d.SubscriptionId);
        });

        modelBuilder.Entity<UserCourse>(entity =>
        {
            entity.HasKey(e => new { e.CourseId, e.UserId });

            entity.HasIndex(e => e.UserId, "IX_UserCourses_UserId");

            entity.Property(e => e.CreatedDate).HasDefaultValueSql("now()");
            entity.Property(e => e.Id).HasDefaultValueSql("uuid_generate_v4()");

            entity.HasOne(d => d.Course).WithMany(p => p.UserCourses).HasForeignKey(d => d.CourseId);

            entity.HasOne(d => d.User).WithMany(p => p.UserCourses).HasForeignKey(d => d.UserId);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}