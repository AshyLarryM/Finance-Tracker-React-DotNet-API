using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace finance_app.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73d06917-eb90-4dd9-a1b8-dc7c7f4867fb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d9609faa-482d-48c0-8603-0c003495634e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "acfbda0b-a369-4cf2-a53e-ec53902f65ac", null, "Admin", "ADMIN" },
                    { "f3191852-9c8b-49a7-a06a-a77178f16ff2", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "acfbda0b-a369-4cf2-a53e-ec53902f65ac");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f3191852-9c8b-49a7-a06a-a77178f16ff2");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "73d06917-eb90-4dd9-a1b8-dc7c7f4867fb", null, "User", "USER" },
                    { "d9609faa-482d-48c0-8603-0c003495634e", null, "Admin", "ADMIN" }
                });
        }
    }
}
