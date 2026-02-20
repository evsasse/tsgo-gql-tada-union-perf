import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4338 } from "./fragment4338";
import type { FragmentToken4339 } from "./fragment4339";

export const FRAGMENT_4340 = gql(`
  fragment Fragment4340 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult4340 = ResultOf<typeof FRAGMENT_4340>;
type FragmentSelf4340 = NonNullable<FragmentResult4340>;

export type FragmentToken4340 =
  | FragmentSelf4340["__typename"]
  | FragmentSelf4340["typenameHint"] | FragmentToken4338 | FragmentToken4339;
