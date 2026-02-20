import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3268 } from "./fragment3268";
import type { FragmentToken3269 } from "./fragment3269";

export const FRAGMENT_3270 = gql(`
  fragment Fragment3270 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult3270 = ResultOf<typeof FRAGMENT_3270>;
type FragmentSelf3270 = NonNullable<FragmentResult3270>;

export type FragmentToken3270 =
  | FragmentSelf3270["__typename"]
  | FragmentSelf3270["typenameHint"] | FragmentToken3268 | FragmentToken3269;
