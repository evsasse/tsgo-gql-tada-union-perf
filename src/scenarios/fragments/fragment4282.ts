import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4280 } from "./fragment4280";
import type { FragmentToken4281 } from "./fragment4281";

export const FRAGMENT_4282 = gql(`
  fragment Fragment4282 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult4282 = ResultOf<typeof FRAGMENT_4282>;
type FragmentSelf4282 = NonNullable<FragmentResult4282>;

export type FragmentToken4282 =
  | FragmentSelf4282["__typename"]
  | FragmentSelf4282["typenameHint"] | FragmentToken4280 | FragmentToken4281;
