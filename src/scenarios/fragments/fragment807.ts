import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken805 } from "./fragment805";
import type { FragmentToken806 } from "./fragment806";

export const FRAGMENT_807 = gql(`
  fragment Fragment807 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult807 = ResultOf<typeof FRAGMENT_807>;
type FragmentSelf807 = NonNullable<FragmentResult807>;

export type FragmentToken807 =
  | FragmentSelf807["__typename"]
  | FragmentSelf807["typenameHint"] | FragmentToken805 | FragmentToken806;
