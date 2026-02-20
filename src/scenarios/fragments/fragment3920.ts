import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3918 } from "./fragment3918";
import type { FragmentToken3919 } from "./fragment3919";

export const FRAGMENT_3920 = gql(`
  fragment Fragment3920 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult3920 = ResultOf<typeof FRAGMENT_3920>;
type FragmentSelf3920 = NonNullable<FragmentResult3920>;

export type FragmentToken3920 =
  | FragmentSelf3920["__typename"]
  | FragmentSelf3920["typenameHint"] | FragmentToken3918 | FragmentToken3919;
