import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4134 } from "./fragment4134";
import type { FragmentToken4135 } from "./fragment4135";

export const FRAGMENT_4136 = gql(`
  fragment Fragment4136 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult4136 = ResultOf<typeof FRAGMENT_4136>;
type FragmentSelf4136 = NonNullable<FragmentResult4136>;

export type FragmentToken4136 =
  | FragmentSelf4136["__typename"]
  | FragmentSelf4136["typenameHint"] | FragmentToken4134 | FragmentToken4135;
