import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2086 } from "./fragment2086";
import type { FragmentToken2087 } from "./fragment2087";

export const FRAGMENT_2088 = gql(`
  fragment Fragment2088 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult2088 = ResultOf<typeof FRAGMENT_2088>;
type FragmentSelf2088 = NonNullable<FragmentResult2088>;

export type FragmentToken2088 =
  | FragmentSelf2088["__typename"]
  | FragmentSelf2088["typenameHint"] | FragmentToken2086 | FragmentToken2087;
