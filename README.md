[![Circle CI](https://circleci.com/gh/punchh/punchh-server.svg?style=svg&circle-token=3dc1cd5adc09dd6d1260e968682a65cea8f8d416)](https://circleci.com/gh/punchh/punchh-server)

[![Coverage Status](https://coveralls.io/repos/github/punchh/punchh-server/badge.svg?branch=master&t=8mB82i)](https://coveralls.io/github/punchh/punchh-server?branch=master)

# DN-portfolio
=============

Punchh Loyalty and Referral Program.
This app uses Ruby on Rails, MySQL, Elasticsearch & Redis.

## Setup environment to do development of punchh-server
We assume you have all the needed dependencies(Rails, MySQL etc.) already installed & running.

```sh
$ git clone git@github.com:punchh/punchh-server.git
$ cd punchh-server
$ ./bin/setup
```
For development, we prefer to use real-world database. so ask your co-workers for a SQL dump of punchh-server.
Alternative, if you are in  office over local intranet network. you can run following command

```sh
$ rake setup
```

the above task will drop, create, load the sql dump, migrate the database & setup the test database


## Steps to contribute:

#### step 1:

Fork the repository and clone into your system - [github:help - fork a repo](https://help.github.com/articles/fork-a-repo)

#### step 2:

Do "Pull Request" - [github:help - Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request)


## Running Tests
We are in DHH's camp & use Minitest/fixtures for testing. We tend to avoid mocks/stubs as much as possible & try to test the real thing.
Hence please ensure redis & mysql are running on your machine while you run tests.

### Running all tests

```ruby
$ rake test:all
```
By Default, the Test Runner will stop at first failure. If you want to run all the tests, Please export `RUN_ALL_TESTS` ENV variable
### Running all tests in one file

```ruby
$ ruby -Itest path/to/file
```

### Running single test

```ruby
$ ruby -Itest path/to/file -n test_name
```

Note: CI Server(http://ci.punchh.com/) runs all the tests on each Pull request/commit

### Deploy
Shell script to initiate OpsWorks application deployments using AWC CLI scripts. They can be installed by running pip install awscli (http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)

After initiating a deployment it will continue to check the status of that deployment and monitor for success or fail. The script will exit with status 0 on success.

Usage
```
$ bin/proddeploy
```

### Development environments
./bin/devenv is responsible for creating development envrionments. You need to export following variables so that it will work.
```
export AWS_USERNAME=yourawsusername
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_REGION=us-east-1
```

After initiating it will continue to check whether it is completed or not.

Usage

Create
```
$ ./bin/devenv create --name anshul --repo git@github.com:punchh/punchh-server.git --branch master --snapshot YYYY-MM-DD
$ ./bin/devenv create --name anshul # we will pick your current git branch to form the ENV
```

Destroy
```
$ ./bin/devenv destroy --name anshul
```

## Documentation
Please see [Developers Page](http://developers.punchh.com) for all our documentation

### API Versioning Policy Notes:
 - We do not consider adding new keys to existing apis as breaking
 - Nor does introducing new end points warrants a API change
 - Only if we change existing API in a way(removing/renaming keys, change types/behaviour) is considered as break
ing change.

Breaking Changes: Goes to new API
Non-Breaking Changes: Existing API

## Mailer Previews
Instead of sending email, you can preview mailers in broswer

 [localhost:3000/rails/mailers/](http://localhost:3000/rails/mailers/)

## Sidekiq Background Jobs
In Development Mode, you don't need to run a seperate sidekiq process.Sidekiq jobs are executed immediately in development. However, you may not want that in certain cases like testing redemption codes. When you want sidekiq jobs to be scheduled.  its advisible to comment out [these lines](https://github.com/punchh/punchh-server/blob/533c980dd6b03ae4c8e95af3cd695699a8cbc23f/config/initializers/sidekiq.rb#L41-L42)

## Auto-Fixing Hound Violations
Instead of manually fixing hound issues, you can use the command given below to violations

```sh
$ rubocop -ac .rubocop.yml /path/to/file/where/hound/commented/in/our/pr
```
This above will fix most of the hound issues automatically.
