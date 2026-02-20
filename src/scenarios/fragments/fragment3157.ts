import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3155 } from "./fragment3155";
import type { FragmentToken3156 } from "./fragment3156";

export const FRAGMENT_3157 = gql(`
  fragment Fragment3157 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult3157 = ResultOf<typeof FRAGMENT_3157>;
type FragmentSelf3157 = NonNullable<FragmentResult3157>;

export type FragmentToken3157 =
  | FragmentSelf3157["__typename"]
  | FragmentSelf3157["typenameHint"] | FragmentToken3155 | FragmentToken3156;
