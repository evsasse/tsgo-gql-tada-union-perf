import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken101 } from "./fragment101";
import type { FragmentToken102 } from "./fragment102";

export const FRAGMENT_103 = gql(`
  fragment Fragment103 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult103 = ResultOf<typeof FRAGMENT_103>;
type FragmentSelf103 = NonNullable<FragmentResult103>;

export type FragmentToken103 =
  | FragmentSelf103["__typename"]
  | FragmentSelf103["typenameHint"] | FragmentToken101 | FragmentToken102;
