import { CommentEntity } from './comment.entity';
import { UserEntity } from 'src/user/user.entity';
import { IdeaEntity } from 'src/idea/idea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity, CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
