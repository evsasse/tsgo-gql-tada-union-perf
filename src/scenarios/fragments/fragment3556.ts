import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3554 } from "./fragment3554";
import type { FragmentToken3555 } from "./fragment3555";

export const FRAGMENT_3556 = gql(`
  fragment Fragment3556 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult3556 = ResultOf<typeof FRAGMENT_3556>;
type FragmentSelf3556 = NonNullable<FragmentResult3556>;

export type FragmentToken3556 =
  | FragmentSelf3556["__typename"]
  | FragmentSelf3556["typenameHint"] | FragmentToken3554 | FragmentToken3555;
