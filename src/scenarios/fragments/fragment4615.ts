import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4613 } from "./fragment4613";
import type { FragmentToken4614 } from "./fragment4614";

export const FRAGMENT_4615 = gql(`
  fragment Fragment4615 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult4615 = ResultOf<typeof FRAGMENT_4615>;
type FragmentSelf4615 = NonNullable<FragmentResult4615>;

export type FragmentToken4615 =
  | FragmentSelf4615["__typename"]
  | FragmentSelf4615["typenameHint"] | FragmentToken4613 | FragmentToken4614;
