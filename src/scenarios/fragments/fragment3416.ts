import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3414 } from "./fragment3414";
import type { FragmentToken3415 } from "./fragment3415";

export const FRAGMENT_3416 = gql(`
  fragment Fragment3416 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult3416 = ResultOf<typeof FRAGMENT_3416>;
type FragmentSelf3416 = NonNullable<FragmentResult3416>;

export type FragmentToken3416 =
  | FragmentSelf3416["__typename"]
  | FragmentSelf3416["typenameHint"] | FragmentToken3414 | FragmentToken3415;
