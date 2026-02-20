import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4271 } from "./fragment4271";
import type { FragmentToken4272 } from "./fragment4272";

export const FRAGMENT_4273 = gql(`
  fragment Fragment4273 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult4273 = ResultOf<typeof FRAGMENT_4273>;
type FragmentSelf4273 = NonNullable<FragmentResult4273>;

export type FragmentToken4273 =
  | FragmentSelf4273["__typename"]
  | FragmentSelf4273["typenameHint"] | FragmentToken4271 | FragmentToken4272;
