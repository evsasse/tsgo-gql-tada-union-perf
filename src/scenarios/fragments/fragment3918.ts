import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3916 } from "./fragment3916";
import type { FragmentToken3917 } from "./fragment3917";

export const FRAGMENT_3918 = gql(`
  fragment Fragment3918 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult3918 = ResultOf<typeof FRAGMENT_3918>;
type FragmentSelf3918 = NonNullable<FragmentResult3918>;

export type FragmentToken3918 =
  | FragmentSelf3918["__typename"]
  | FragmentSelf3918["typenameHint"] | FragmentToken3916 | FragmentToken3917;
