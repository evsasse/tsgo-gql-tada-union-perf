import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3880 } from "./fragment3880";
import type { FragmentToken3881 } from "./fragment3881";

export const FRAGMENT_3882 = gql(`
  fragment Fragment3882 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult3882 = ResultOf<typeof FRAGMENT_3882>;
type FragmentSelf3882 = NonNullable<FragmentResult3882>;

export type FragmentToken3882 =
  | FragmentSelf3882["__typename"]
  | FragmentSelf3882["typenameHint"] | FragmentToken3880 | FragmentToken3881;
