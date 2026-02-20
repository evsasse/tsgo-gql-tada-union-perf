import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4135 } from "./fragment4135";
import type { FragmentToken4136 } from "./fragment4136";

export const FRAGMENT_4137 = gql(`
  fragment Fragment4137 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult4137 = ResultOf<typeof FRAGMENT_4137>;
type FragmentSelf4137 = NonNullable<FragmentResult4137>;

export type FragmentToken4137 =
  | FragmentSelf4137["__typename"]
  | FragmentSelf4137["typenameHint"] | FragmentToken4135 | FragmentToken4136;
