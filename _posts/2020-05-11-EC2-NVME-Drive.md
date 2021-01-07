---
layout: posts
excerpt: When using ec2 instaces with NVME drives you need to set them up.
---

**Setup**

```bash
[ec2-user ~]$ lsblk
NAME          MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
nvme1n1       259:0    0  10G  0 disk
nvme0n1       259:1    0   8G  0 disk
-nvme0n1p1    259:2    0   8G  0 part /
-nvme0n1p128  259:3    0   1M  0 part
```

> The following is example output for an instance built on the Nitro System, which exposes EBS volumes as NVMe block devices. The root device is /dev/nvme0n1. The attached volume is /dev/nvme1n1, which is not yet mounted.


This will take a minute.

```bash
[ec2-user ~]$ sudo mkfs -t xfs /dev/nvme1n1
```

Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume. The following example creates a directory named /data.

```bash
[ec2-user ~]$ sudo mkdir /data
```

Use the following command to mount the volume at the directory you created in the previous step.

```bash
[ec2-user ~]$ sudo mount /dev/nvme1n1 /data
```

Allow for the ec2-user to use the mount

```bash
[ec2-user ~]$ sudo chown ec2-user:ec2-user /data
```

Finally you should be able to see the drive mounted using lsblk

```bash
[ec2-user ~]$ lsblk
NAME          MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
nvme1n1       259:0    0  10G  0 disk /data
nvme0n1       259:1    0   8G  0 disk
-nvme0n1p1    259:2    0   8G  0 part /
-nvme0n1p128  259:3    0   1M  0 part
```

[Read More](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)

