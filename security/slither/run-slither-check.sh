FALSE_POSITIVE_WARNIGNS=0
FOUND_WARNINGS=`grep "\d+ result" -Po output/slither_report.txt | sed 's/ result//g'`

echo "Slither has found $FOUND_WARNINGS issues"
if [[ $FOUND_WARNINGS -gt $FALSE_POSITIVE_WARNIGNS ]]; then echo "$FOUND_WARNINGS issues exceeds limit" >&2; exit 1; fi