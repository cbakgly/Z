<style scoped>
.table {
    box-shadow: 0px 0px 3px 3px #363E4E;
    border-radius: 2px;
}

.wrapper {
    margin: 10px;
}
</style>

<template>
<div>
    <div class="wrapper">
        <Table stripe border class="table" size="large" :height="getHeight" :loading="loading" :columns="columns" :data="rows"></Table>
    </div>

    <Page :total="pagination.total_pages" :current="pagination.page" :pageSize="pagination.page_size" @on-change="changePage" @on-page-size-change="changePageSize" size="small" show-elevator show-sizer></Page>
</div>
</template>
<script>
import util from '@/libs/util';
import ButtonWrapper from './ButtonWrapper';

export default {
    name: 'TaskList',
    props: ['dataUrl', 'viewRouteName'],
    componenets: [ButtonWrapper],
    data () {
        return {
            loading: false,
            columns: [
                // {
                //     type: 'selection',
                //     width: 60,
                //     fixed: 'left',
                //     align: 'center'
                // },
                {
                    title: '批次号',
                    key: 'schedule_no',
                },
                {
                    title: '任务号',
                    key: 'tid'
                },
                {
                    title: '任务状态',
                    key: 'status'
                },
                {
                  title: '领取时间',
                  key: 'assigned_date'
                },
                {
                    title: '最后处理时间',
                    key: 'update_date'
                },
                {
                  title: '操作',
                  key: 'op',
                  fixed: 'right',
                  align: 'center',
                  width: 100,
                  render: (h, params) => {
                        return h(ButtonWrapper, {
                            props: {
                                size: 'large',
                                text: '查看'
                            },
                            on: {
                                click: (e) => {
                                    let tid = e.vm.$options.parent.$props.row.tid;
                                    this.$router.push({name: this.viewRouteName, params: {tid: tid}})
                                }
                            }
                        });
                    }
                }
            ],
            rows: [],
            pagination: {},
        }
    },
    computed: {
      getHeight() {
        return window.innerHeight
      }
    },
    methods: {
        gotoPage(page, page_size) {
            let that = this;
            let offset = '?page='+page+'&page_size='+page_size;
            that.loading = true;

            util.ajax.get(this.dataUrl + offset).then(function (response) {
                that.rows = response.data.models;
                that.loading = false;
                that.pagination = response.data.pagination;
            }).catch(function (error) {
                that.$Notice.error({
                    title: this.$t('Failed'),
                    desc: error.message
                });
                that.loading = false;
            })
        },
        changePage(page) {
            this.gotoPage(page, this.pagination.page_size);
        },
        changePageSize(size) {
            this.gotoPage(this.pagination.page, size);
        }
    },
    mounted() {
        this.gotoPage(1, 10)
    }
}
</script>
