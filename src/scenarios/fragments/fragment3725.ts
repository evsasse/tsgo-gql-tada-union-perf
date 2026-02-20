import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3723 } from "./fragment3723";
import type { FragmentToken3724 } from "./fragment3724";

export const FRAGMENT_3725 = gql(`
  fragment Fragment3725 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult3725 = ResultOf<typeof FRAGMENT_3725>;
type FragmentSelf3725 = NonNullable<FragmentResult3725>;

export type FragmentToken3725 =
  | FragmentSelf3725["__typename"]
  | FragmentSelf3725["typenameHint"] | FragmentToken3723 | FragmentToken3724;
