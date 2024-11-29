using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;

namespace TertuliatalkAPI.Infrastructure
{
    public class FileUploadService
    {
        private readonly string _folderId;
        private readonly DriveService _driveService;
        private readonly GoogleCredential _credential;

        public FileUploadService(string credentialPath, string folderId, string applicationName)
        {
            _folderId = folderId;

            using (var stream = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
            {
                _credential = GoogleCredential.FromStream(stream).CreateScoped(new[]
                {
                    DriveService.ScopeConstants.DriveFile
                });
            }

            _driveService = new DriveService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = _credential,
                ApplicationName = applicationName
            });
        }

        public async Task<string> UploadFileAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("File cannot be null or empty.", nameof(file));

            var fileMetaData = new Google.Apis.Drive.v3.Data.File()
            {
                Name = file.FileName,
                Parents = new List<string> { _folderId }
            };

            FilesResource.CreateMediaUpload request;
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                memoryStream.Position = 0;

                request = _driveService.Files.Create(fileMetaData, memoryStream, file.ContentType);
                request.Fields = "id";
                await request.UploadAsync();
            }

            var uploadedFile = request.ResponseBody;
            var fileLink = $"https://drive.google.com/file/d/{uploadedFile.Id}/view?usp=sharing";
            
            return fileLink;
        }
    }
}
