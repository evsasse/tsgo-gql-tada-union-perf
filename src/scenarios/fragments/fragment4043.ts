import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4041 } from "./fragment4041";
import type { FragmentToken4042 } from "./fragment4042";

export const FRAGMENT_4043 = gql(`
  fragment Fragment4043 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult4043 = ResultOf<typeof FRAGMENT_4043>;
type FragmentSelf4043 = NonNullable<FragmentResult4043>;

export type FragmentToken4043 =
  | FragmentSelf4043["__typename"]
  | FragmentSelf4043["typenameHint"] | FragmentToken4041 | FragmentToken4042;
