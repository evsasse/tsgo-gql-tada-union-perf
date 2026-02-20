import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4232 } from "./fragment4232";
import type { FragmentToken4233 } from "./fragment4233";

export const FRAGMENT_4234 = gql(`
  fragment Fragment4234 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult4234 = ResultOf<typeof FRAGMENT_4234>;
type FragmentSelf4234 = NonNullable<FragmentResult4234>;

export type FragmentToken4234 =
  | FragmentSelf4234["__typename"]
  | FragmentSelf4234["typenameHint"] | FragmentToken4232 | FragmentToken4233;
