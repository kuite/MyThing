using Microsoft.EntityFrameworkCore.Migrations;

namespace webapi.Model.Database.Migrations
{
    public partial class AddFundCategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Categories",
                table: "Funds",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Categories",
                table: "Funds");
        }
    }
}
