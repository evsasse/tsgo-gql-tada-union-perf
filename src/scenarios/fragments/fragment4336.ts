import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4334 } from "./fragment4334";
import type { FragmentToken4335 } from "./fragment4335";

export const FRAGMENT_4336 = gql(`
  fragment Fragment4336 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult4336 = ResultOf<typeof FRAGMENT_4336>;
type FragmentSelf4336 = NonNullable<FragmentResult4336>;

export type FragmentToken4336 =
  | FragmentSelf4336["__typename"]
  | FragmentSelf4336["typenameHint"] | FragmentToken4334 | FragmentToken4335;
