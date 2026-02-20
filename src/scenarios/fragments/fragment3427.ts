import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3425 } from "./fragment3425";
import type { FragmentToken3426 } from "./fragment3426";

export const FRAGMENT_3427 = gql(`
  fragment Fragment3427 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult3427 = ResultOf<typeof FRAGMENT_3427>;
type FragmentSelf3427 = NonNullable<FragmentResult3427>;

export type FragmentToken3427 =
  | FragmentSelf3427["__typename"]
  | FragmentSelf3427["typenameHint"] | FragmentToken3425 | FragmentToken3426;
