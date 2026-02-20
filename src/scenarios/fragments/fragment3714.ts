import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3712 } from "./fragment3712";
import type { FragmentToken3713 } from "./fragment3713";

export const FRAGMENT_3714 = gql(`
  fragment Fragment3714 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult3714 = ResultOf<typeof FRAGMENT_3714>;
type FragmentSelf3714 = NonNullable<FragmentResult3714>;

export type FragmentToken3714 =
  | FragmentSelf3714["__typename"]
  | FragmentSelf3714["typenameHint"] | FragmentToken3712 | FragmentToken3713;
