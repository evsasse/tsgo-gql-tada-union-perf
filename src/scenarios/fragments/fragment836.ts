import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken834 } from "./fragment834";
import type { FragmentToken835 } from "./fragment835";

export const FRAGMENT_836 = gql(`
  fragment Fragment836 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult836 = ResultOf<typeof FRAGMENT_836>;
type FragmentSelf836 = NonNullable<FragmentResult836>;

export type FragmentToken836 =
  | FragmentSelf836["__typename"]
  | FragmentSelf836["typenameHint"] | FragmentToken834 | FragmentToken835;
