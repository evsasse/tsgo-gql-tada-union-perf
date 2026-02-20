import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4014 } from "./fragment4014";
import type { FragmentToken4015 } from "./fragment4015";

export const FRAGMENT_4016 = gql(`
  fragment Fragment4016 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult4016 = ResultOf<typeof FRAGMENT_4016>;
type FragmentSelf4016 = NonNullable<FragmentResult4016>;

export type FragmentToken4016 =
  | FragmentSelf4016["__typename"]
  | FragmentSelf4016["typenameHint"] | FragmentToken4014 | FragmentToken4015;
