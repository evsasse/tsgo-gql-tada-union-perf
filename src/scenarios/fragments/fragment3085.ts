import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3083 } from "./fragment3083";
import type { FragmentToken3084 } from "./fragment3084";

export const FRAGMENT_3085 = gql(`
  fragment Fragment3085 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult3085 = ResultOf<typeof FRAGMENT_3085>;
type FragmentSelf3085 = NonNullable<FragmentResult3085>;

export type FragmentToken3085 =
  | FragmentSelf3085["__typename"]
  | FragmentSelf3085["typenameHint"] | FragmentToken3083 | FragmentToken3084;
