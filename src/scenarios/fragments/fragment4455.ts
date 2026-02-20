import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4453 } from "./fragment4453";
import type { FragmentToken4454 } from "./fragment4454";

export const FRAGMENT_4455 = gql(`
  fragment Fragment4455 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult4455 = ResultOf<typeof FRAGMENT_4455>;
type FragmentSelf4455 = NonNullable<FragmentResult4455>;

export type FragmentToken4455 =
  | FragmentSelf4455["__typename"]
  | FragmentSelf4455["typenameHint"] | FragmentToken4453 | FragmentToken4454;
