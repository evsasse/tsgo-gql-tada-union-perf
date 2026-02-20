import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4560 } from "./fragment4560";
import type { FragmentToken4561 } from "./fragment4561";

export const FRAGMENT_4562 = gql(`
  fragment Fragment4562 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult4562 = ResultOf<typeof FRAGMENT_4562>;
type FragmentSelf4562 = NonNullable<FragmentResult4562>;

export type FragmentToken4562 =
  | FragmentSelf4562["__typename"]
  | FragmentSelf4562["typenameHint"] | FragmentToken4560 | FragmentToken4561;
