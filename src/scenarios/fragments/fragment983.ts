import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken981 } from "./fragment981";
import type { FragmentToken982 } from "./fragment982";

export const FRAGMENT_983 = gql(`
  fragment Fragment983 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult983 = ResultOf<typeof FRAGMENT_983>;
type FragmentSelf983 = NonNullable<FragmentResult983>;

export type FragmentToken983 =
  | FragmentSelf983["__typename"]
  | FragmentSelf983["typenameHint"] | FragmentToken981 | FragmentToken982;
