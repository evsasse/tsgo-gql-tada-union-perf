import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4722 } from "./fragment4722";
import type { FragmentToken4723 } from "./fragment4723";

export const FRAGMENT_4724 = gql(`
  fragment Fragment4724 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult4724 = ResultOf<typeof FRAGMENT_4724>;
type FragmentSelf4724 = NonNullable<FragmentResult4724>;

export type FragmentToken4724 =
  | FragmentSelf4724["__typename"]
  | FragmentSelf4724["typenameHint"] | FragmentToken4722 | FragmentToken4723;
