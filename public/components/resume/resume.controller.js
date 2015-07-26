'use strict';

angular.module('jobHunt')
    .controller('resumeCtrl', ['$scope', '$sce', 'indeedService', 'angularFilepicker',
        function($scope, $sce, indeedService, angularFilepicker) {

            $scope.files = [];
            
            angularFilepicker.setKey('AR4zdwe5SD6L3K1nFTgCyz');

            $scope.pickFile = pickFile;

            $scope.previewId = indeedService.savedResume;

            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            };

            function pickFile() {
                if (indeedService.savedResume == '') {
                    angularFilepicker.pick({
                            mimetypes: ["application/pdf", "application/msword"]
                        },
                        onSuccess
                    );
                }
            }

            pickFile();

            function onSuccess(Blob) {
                console.log(Blob);
                $scope.files.push(Blob);
                var str = Blob.url;
                var res = str.substring(55, 35);
                indeedService.savedResume = "https://www.filepicker.io/api/preview/" + res;
                $scope.previewId = indeedService.savedResume;
                $scope.$apply();
            }
        }
    ]);
