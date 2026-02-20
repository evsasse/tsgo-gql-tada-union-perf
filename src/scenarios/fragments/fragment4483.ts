import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4481 } from "./fragment4481";
import type { FragmentToken4482 } from "./fragment4482";

export const FRAGMENT_4483 = gql(`
  fragment Fragment4483 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult4483 = ResultOf<typeof FRAGMENT_4483>;
type FragmentSelf4483 = NonNullable<FragmentResult4483>;

export type FragmentToken4483 =
  | FragmentSelf4483["__typename"]
  | FragmentSelf4483["typenameHint"] | FragmentToken4481 | FragmentToken4482;
