import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4447 } from "./fragment4447";
import type { FragmentToken4448 } from "./fragment4448";

export const FRAGMENT_4449 = gql(`
  fragment Fragment4449 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult4449 = ResultOf<typeof FRAGMENT_4449>;
type FragmentSelf4449 = NonNullable<FragmentResult4449>;

export type FragmentToken4449 =
  | FragmentSelf4449["__typename"]
  | FragmentSelf4449["typenameHint"] | FragmentToken4447 | FragmentToken4448;
